/* eslint-disable no-console */

/**
 * Renders a resume profile to a one-page PDF.
 *
 * The fitter is the point of this file. It walks progressively smaller content
 * budgets and stops at the first that genuinely renders on one page, measured
 * under print media rather than guessed. A tailored resume therefore cannot
 * quietly become two pages, which is the failure mode that matters when the
 * document is generated per application rather than read before sending.
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const { render, BUDGETS, PAGE } = require('../../resume/render');

const DPI = 96;
const PAGE_W_IN = 8.5;
const PAGE_H_IN = 11;
const USABLE_H_IN = PAGE_H_IN - PAGE.marginTopIn * 2;
const PRINT_WIDTH_PX = Math.round((PAGE_W_IN - PAGE.marginSideIn * 2) * DPI);

const REQUIRED = ['ahammad shawki', 'education', 'experience'];

/** Largest /Count in the trailer, falling back to counting page objects. */
const pageCount = (buf) => {
  const text = buf.toString('latin1');
  const counts = text.match(/\/Count\s+(\d+)/g);
  if (counts && counts.length) {
    return Math.max(...counts.map((c) => parseInt(c.replace(/\D/g, ''), 10)));
  }
  return (text.match(/\/Type\s*\/Page[^s]/g) || []).length;
};

/**
 * @param {Object}   opts.profile  role profile
 * @param {string}   opts.out      destination .pdf path
 * @param {boolean}  opts.quiet
 * @returns {Promise<{budget: Object, pages: number, bytes: number, contentIn: number}>}
 */
const buildPdf = async ({ profile = {}, out, quiet = false }) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const log = (...a) => { if (!quiet) console.log(...a); };

  try {
    const page = await browser.newPage();
    await page.emulateMedia('print');
    await page.setViewport({ width: PRINT_WIDTH_PX, height: 1056 });

    let chosen = null;

    // Sequential by design: each budget is only attempted because the previous
    // one measured too tall, so these cannot run in parallel.
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < BUDGETS.length; i += 1) {
      const budget = BUDGETS[i];
      const html = render(profile, budget);

      // setContent avoids writing a temp file, and keeps this safe on paths
      // containing '#' or spaces.
      await page.setContent(html, { waitUntil: 'load' });

      const contentIn = await page.evaluate((dpi) => document.body.scrollHeight / dpi, DPI);

      if (contentIn <= USABLE_H_IN) {
        const text = (await page.evaluate(() => document.body.innerText)).toLowerCase();
        const missing = REQUIRED.filter((s) => !text.includes(s));
        if (missing.length) {
          throw new Error(`Rendered document is missing: ${missing.join(', ')}`);
        }

        fs.mkdirSync(path.dirname(out), { recursive: true });
        await page.pdf({
          path: out,
          format: 'Letter',
          printBackground: true,
          preferCSSPageSize: true,
          displayHeaderFooter: false,
        });

        const buf = fs.readFileSync(out);
        const pages = pageCount(buf);
        if (pages > 1) {
          // Height said it fitted but pagination disagreed; keep shrinking.
          log(`  budget ${i}: measured ${contentIn.toFixed(2)}in but paginated to ${pages}, continuing`);
          continue; // eslint-disable-line no-continue
        }

        chosen = {
          budget, pages, bytes: buf.length, contentIn, index: i,
        };
        break;
      }

      log(`  budget ${i}: ${contentIn.toFixed(2)}in of ${USABLE_H_IN.toFixed(2)}in, trimming`);
    }
    /* eslint-enable no-await-in-loop */

    if (!chosen) {
      throw new Error(
        'Could not fit one page even at the smallest budget. '
        + 'Shorten a bullet in resume/content.js or add a tighter budget in resume/render.js.',
      );
    }

    return chosen;
  } finally {
    await browser.close();
  }
};

module.exports = { buildPdf, USABLE_H_IN };
