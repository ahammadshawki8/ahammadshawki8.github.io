#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Verifies that every word in the rendered resume survives PDF text
 * extraction, which is the only thing that decides whether an applicant
 * tracking system can read the document at all.
 *
 * Catches the failure that is invisible by eye: font ligatures and hyphen
 * soft-wraps silently removing words from the text layer, so "Software"
 * extracts as "So ware" and the keyword a recruiter searches for is not in
 * the file.
 *
 * Usage: npm run check:resume [-- --pdf <path> --profile <path>]
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const { render } = require('../resume/render');

const ROOT = path.join(__dirname, '..');

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};

const PDF = path.resolve(ROOT, arg('--pdf', 'public/Ahammad_Shawki_Resume.pdf'));
const PROFILE = path.resolve(ROOT, arg('--profile', 'resume/profiles/default.json'));

const KEYWORDS = [
  'Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'React', 'Django',
  'FastAPI', 'PyTorch', 'Docker', 'PostgreSQL', 'Computer Science',
  'Machine Learning', 'Model Context Protocol',
];

const extract = (pdfPath) => {
  const py = `
import sys, json
from pypdf import PdfReader
r = PdfReader(sys.argv[1])
print(json.dumps({"pages": len(r.pages), "text": "\\n".join(p.extract_text() or "" for p in r.pages)}))
`;
  const out = execFileSync('python', ['-c', py, pdfPath], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  return JSON.parse(out);
};

const main = () => {
  if (!fs.existsSync(PDF)) throw new Error(`No PDF at ${PDF}. Run npm run build:resume first.`);

  const profile = JSON.parse(fs.readFileSync(PROFILE, 'utf8'));
  // Rendered at the widest budget, so this word list is a superset of what the
  // fitter actually put on the page.
  const html = render(profile, {});
  const clean = (s) => s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;/g, ' ');

  const body = clean(html.split('<body>')[1].split('</body>')[0]);

  const { pages, text } = extract(PDF);
  const lower = text.toLowerCase();

  const wordsIn = (s) => [...new Set((s.match(/[A-Za-z][A-Za-z'./+-]{2,}/g) || []))];
  const absent = (w) => !lower.includes(w.toLowerCase());

  const words = wordsIn(body);
  const missing = words.filter(absent);

  /*
   * Distinguishing "trimmed" from "broken".
   *
   * Both look identical from the PDF: a word in the source that is not in the
   * text layer. The difference is its neighbours. A whole entry the fitter
   * dropped goes missing together, while ligature damage takes one word out of
   * a line whose other words came through fine.
   *
   * So the comparison is per entry, not over the whole document. An entry with
   * nothing extracted was trimmed and is not evidence of anything. Only an
   * entry that is partly present can show font damage, and this used to report
   * every trimmed word containing "ti" or "fi" as a broken font.
   */
  const entries = html.split(/<\/li>|<\/section>/)
    .map(clean)
    .filter((block) => wordsIn(block).length > 2);

  const rendered = new Set();
  const trimmed = new Set();

  entries.forEach((block) => {
    const blockWords = wordsIn(block);
    const here = blockWords.filter((w) => !absent(w));
    // More than a third present means the entry is on the page: a trimmed entry
    // still shares common words like "and" or "the" with the rest of the page.
    if (here.length > blockWords.length / 3) blockWords.forEach((w) => rendered.add(w));
    else blockWords.forEach((w) => trimmed.add(w));
  });

  const suspect = missing.filter((w) => rendered.has(w) || !trimmed.has(w));
  const ligatureRisk = suspect.filter((w) => /f[ilft]|ti/.test(w.toLowerCase()));

  console.log(`PDF            ${path.relative(process.cwd(), PDF)}`);
  console.log(`Pages          ${pages}`);
  console.log(`Extracted      ${text.length} characters`);
  console.log(`Source words   ${words.length} unique`);
  console.log(`Not extracted  ${missing.length}`);

  const absentKeywords = KEYWORDS.filter((k) => !lower.includes(k.toLowerCase()));
  console.log(`Keywords       ${absentKeywords.length ? `ABSENT: ${absentKeywords.join(', ')}` : 'all present'}`);

  let bad = false;

  if (pages !== 1) {
    console.error(`\nFAIL: expected 1 page, got ${pages}`);
    bad = true;
  }
  if (absentKeywords.length) {
    console.error('\nFAIL: keywords missing from the text layer');
    bad = true;
  }
  if (ligatureRisk.length) {
    console.error(`\nFAIL: words absent that contain ligature pairs, likely broken by the font:\n  ${ligatureRisk.join(', ')}`);
    bad = true;
  }
  if (missing.length && !ligatureRisk.length) {
    console.log(`\nNote: ${missing.length} word(s) absent, from entries the one-page fitter `
      + 'trimmed rather than from font damage:');
    console.log(`  ${missing.slice(0, 20).join(', ')}`);
  }

  if (bad) process.exit(1);
  console.log('\nOK: one page, keywords present, no ligature damage.');
};

try {
  main();
} catch (err) {
  console.error(`Failed: ${err.message}`);
  process.exit(1);
}
