#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Renders the default resume to public/Ahammad_Shawki_Resume.pdf, the copy the
 * site links from.
 *
 * Content lives in resume/content.js, layout in resume/render.js, and the
 * one-page fitter in scripts/lib/pdf.js. To produce a copy aimed at a specific
 * job, use `npm run tailor` instead.
 *
 * Usage: npm run build:resume
 */

const fs = require('fs');
const path = require('path');

const { buildPdf } = require('./lib/pdf');

const PROFILE = path.join(__dirname, '..', 'resume', 'profiles', 'default.json');
const OUT = path.join(__dirname, '..', 'public', 'Ahammad_Shawki_Resume.pdf');

const main = async () => {
  const profile = JSON.parse(fs.readFileSync(PROFILE, 'utf8'));
  const res = await buildPdf({ profile, out: OUT });

  console.log(`Wrote ${path.relative(process.cwd(), OUT)}`);
  console.log(`  ${(res.bytes / 1024).toFixed(1)} kB, ${res.pages} page, `
    + `${res.contentIn.toFixed(2)}in of content, budget ${res.index}`);
};

main().catch((err) => {
  console.error(`Failed: ${err.message}`);
  process.exit(1);
});
