#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Renders resume/resume.html to public/Ahammad_Shawki_Resume.pdf.
 *
 * Uses the puppeteer that already ships with react-snap, so this adds no new
 * dependency. Text stays selectable, which is what lets an applicant tracking
 * system read the document at all.
 *
 * Fails if the result runs past one page, because a two-page PDF here is
 * always an accident rather than a decision.
 *
 * Usage: npm run build:resume
 */

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer');

const SRC = path.join(__dirname, '..', 'resume', 'resume.html');
const OUT = path.join(__dirname, '..', 'public', 'Ahammad_Shawki_Resume.pdf');
const MAX_PAGES = 1;

// Keep in step with the @page rule in resume.html.
const MARGIN_TOP_IN = 0.44;
const MARGIN_SIDE_IN = 0.68;
const PAGE_W_IN = 8.5;
const PAGE_H_IN = 11;
const DPI = 96;

const USABLE_H_IN = PAGE_H_IN - MARGIN_TOP_IN * 2;
const PRINT_WIDTH_PX = Math.round((PAGE_W_IN - MARGIN_SIDE_IN * 2) * DPI);

/** Count top-level page objects in the generated PDF. */
const pageCount = (buf) => {
  const text = buf.toString('latin1');
  const counts = text.match(/\/Count\s+(\d+)/g);
  if (counts && counts.length) {
    return Math.max(...counts.map((c) => parseInt(c.replace(/\D/g, ''), 10)));
  }
  return (text.match(/\/Type\s*\/Page[^s]/g) || []).length;
};

const main = async () => {
  if (!fs.existsSync(SRC)) throw new Error(`Missing source: ${SRC}`);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    // pathToFileURL escapes the characters a hand-built file:// URL gets wrong,
    // including '#' and spaces, which this repository's path happens to contain.
    await page.goto(pathToFileURL(SRC).href, { waitUntil: 'networkidle0' });

    // Measure under print media at the printable width, otherwise the height
    // reported is for the screen layout and does not predict pagination.
    await page.emulateMedia('print');
    await page.setViewport({ width: PRINT_WIDTH_PX, height: 1056 });

    await page.pdf({
      path: OUT,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      // Nothing in the margins: parsers routinely drop header and footer text.
      displayHeaderFooter: false,
    });

    const buf = fs.readFileSync(OUT);
    const pages = pageCount(buf);
    const kb = (buf.length / 1024).toFixed(1);

    // Confirm the text layer actually extracts, rather than trusting that it did.
    // innerText reflects CSS text-transform, so compare case-insensitively.
    const text = (await page.evaluate(() => document.body.innerText)).toLowerCase();
    const required = ['ahammad shawki', 'education', 'experience', 'projects', 'technical skills'];
    const missing = required.filter((s) => !text.includes(s));

    // How much content there is against how much one page holds, so an
    // overflow reports by how far rather than just that it happened.
    const contentIn = await page.evaluate((dpi) => document.body.scrollHeight / dpi, DPI);
    const fit = { contentIn, pageIn: USABLE_H_IN };

    console.log(`Wrote ${path.relative(process.cwd(), OUT)}  ${kb} kB, ${pages} page(s)`);
    console.log(`Content ${fit.contentIn.toFixed(2)}in of ${fit.pageIn.toFixed(2)}in usable`);
    if (missing.length) throw new Error(`Missing expected sections: ${missing.join(', ')}`);
    if (pages > MAX_PAGES) {
      const over = fit.contentIn - fit.pageIn;
      throw new Error(
        `Resume is ${pages} pages, roughly ${over.toFixed(2)}in over. `
        + `Trim resume/resume.html back to ${MAX_PAGES}.`,
      );
    }
    console.log('One page, all sections present, text layer intact.');
  } finally {
    await browser.close();
  }
};

main().catch((err) => {
  console.error(`Failed: ${err.message}`);
  process.exit(1);
});
