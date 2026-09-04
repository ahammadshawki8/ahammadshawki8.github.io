#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Builds a resume aimed at one job, plus a cover-letter brief.
 *
 *   npm run tailor -- --profile resume/profiles/anthropic-swe.json
 *   npm run tailor -- --profile <file> --out applications/anthropic
 *
 * The profile is the judgement: which tags this role cares about, what to pin,
 * what to drop. Writing it is a reading task, so a Claude session does it with
 * the `tailor-resume` skill and saves the JSON here. Everything after that is
 * deterministic: rank by tag overlap, render, shrink until it fits one page.
 *
 * The cover brief is deliberately not a finished letter. It lists which of your
 * work actually matched the role and what the hooks are, so the letter gets
 * written from real overlap rather than invented enthusiasm. Run the
 * `human-voice` skill over it to finish.
 */

const fs = require('fs');
const path = require('path');

const { buildPdf } = require('./lib/pdf');
const { rank, content } = require('../resume/render');

const ROOT = path.join(__dirname, '..');

const arg = (flag, fallback = null) => {
  const i = process.argv.indexOf(flag);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
};

const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const coverBrief = (profile, picked) => {
  const who = [profile.company, profile.role].filter(Boolean).join(', ') || profile.slug;
  const lines = [];

  lines.push(`# Cover brief: ${who}`);
  lines.push('');
  lines.push('Not a letter. The raw material for one, so it gets written from actual overlap.');
  lines.push('Run the `human-voice` skill over this to produce the final text.');
  lines.push('');

  if (profile.why) {
    lines.push('## Why this role');
    lines.push('');
    lines.push(profile.why);
    lines.push('');
  }

  lines.push('## What the role asks for');
  lines.push('');
  lines.push(`Emphasis tags: ${(profile.emphasis || []).join(', ') || 'none set'}`);
  if ((profile.deprioritise || []).length) {
    lines.push(`Deprioritised: ${profile.deprioritise.join(', ')}`);
  }
  lines.push('');

  lines.push('## What matched, strongest first');
  lines.push('');
  ['projects', 'competitions'].forEach((key) => {
    if (!picked[key].length) return;
    lines.push(`**${key === 'projects' ? 'Projects' : 'Competitions'}**`);
    lines.push('');
    picked[key].forEach((item) => {
      const hits = (item.tags || []).filter((t) => (profile.emphasis || []).includes(t));
      lines.push(`- **${item.title.split(',')[0]}** ${hits.length ? `(${hits.join(', ')})` : ''}`);
      (item.bullets || []).forEach((b) => lines.push(`  - ${b.text}`));
    });
    lines.push('');
  });

  lines.push('## Openers worth considering');
  lines.push('');
  lines.push('Pick one. Do not use more than one.');
  lines.push('');
  const top = picked.projects[0] || picked.competitions[0];
  if (top) {
    lines.push(`- Lead with ${top.title.split(',')[0]}, and the specific number in it.`);
  }
  lines.push('- Lead with something concrete you know about their product or research,');
  lines.push('  not with how excited you are. Fill this in yourself; it cannot be generated.');
  lines.push('');

  lines.push('## Checks before sending');
  lines.push('');
  lines.push('- [ ] Names a real detail about them that is not on their homepage');
  lines.push('- [ ] Every claim appears in the attached resume');
  lines.push('- [ ] Under 200 words');
  lines.push('- [ ] No long dashes, no "I am excited to", no "passionate"');
  lines.push('');

  return lines.join('\n');
};

const main = async () => {
  const profilePath = arg('--profile');
  if (!profilePath) {
    console.error('Usage: npm run tailor -- --profile resume/profiles/<role>.json [--out <dir>]');
    process.exit(2);
  }

  const abs = path.isAbsolute(profilePath) ? profilePath : path.join(ROOT, profilePath);
  if (!fs.existsSync(abs)) throw new Error(`No such profile: ${profilePath}`);

  const profile = JSON.parse(fs.readFileSync(abs, 'utf8'));
  const slug = profile.slug || slugify(`${profile.company || ''} ${profile.role || ''}`) || 'role';
  const outDir = arg('--out', path.join(ROOT, 'applications', slug));
  fs.mkdirSync(outDir, { recursive: true });

  const name = content.header.name.replace(/\s+/g, '_');
  const pdfPath = path.join(outDir, `${name}_${slug}.pdf`);

  const res = await buildPdf({ profile, out: pdfPath });

  // Re-derive what the fitter kept, for the brief and the console summary.
  const picked = {
    projects: rank(content.projects, profile).slice(0, res.budget.projects ?? 99),
    competitions: rank(content.competitions, profile).slice(0, res.budget.competitions ?? 99),
  };

  const briefPath = path.join(outDir, `cover-brief-${slug}.md`);
  fs.writeFileSync(briefPath, coverBrief(profile, picked), 'utf8');

  const rel = (p) => path.relative(process.cwd(), p);
  console.log('');
  console.log(`  Role       ${[profile.company, profile.role].filter(Boolean).join(', ') || slug}`);
  console.log(`  Emphasis   ${(profile.emphasis || []).join(', ') || 'none'}`);
  console.log(`  Kept       ${picked.projects.map((p) => p.id).join(', ')}`);
  console.log(`             ${picked.competitions.map((p) => p.id).join(', ')}`);
  if ((profile.drop || []).length) console.log(`  Dropped    ${profile.drop.join(', ')}`);
  console.log(`  Fitted     1 page, ${res.contentIn.toFixed(2)}in, budget ${res.index}`);
  console.log('');
  console.log(`  Resume     ${rel(pdfPath)}`);
  console.log(`  Brief      ${rel(briefPath)}`);
  console.log('');
};

main().catch((err) => {
  console.error(`Failed: ${err.message}`);
  process.exit(1);
});
