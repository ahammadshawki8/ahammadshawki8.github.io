/**
 * Turns resume/content.js plus a role profile into a print-ready HTML document.
 *
 * Scoring is deterministic. A profile says which tags matter; every item is
 * ranked by tag overlap, sections are ordered by their best item, and the
 * caller trims from the bottom until the document fits one page. Judgement
 * about what a job actually wants happens when the profile is written, not
 * here.
 *
 * The document itself follows the conventions applicant tracking systems parse
 * reliably: one column, no tables or text boxes for layout, no images, nothing
 * in the page margins, standard headings, ligatures off.
 */

const content = require('./content');

// Keep in step with scripts/build-resume.js.
const PAGE = {
  marginTopIn: 0.44,
  marginSideIn: 0.68,
};

const esc = (s) => String(s);

/** Tag overlap, with pins and drops taking precedence over the arithmetic. */
const score = (item, profile) => {
  const { id } = item;
  if (id && (profile.drop || []).includes(id)) return -Infinity;
  if (id && (profile.pin || []).includes(id)) return Infinity;

  const tags = item.tags || [];
  const up = profile.emphasis || [];
  const down = profile.deprioritise || [];
  let n = 0;
  tags.forEach((t) => {
    if (up.includes(t)) n += 2;
    if (down.includes(t)) n -= 3;
  });
  return n;
};

/** Stable sort by score, descending. Ties keep their authored order. */
const rank = (items, profile) => items
  .map((item, i) => ({ item, i, s: score(item, profile) }))
  .filter((x) => x.s !== -Infinity)
  .sort((a, b) => (b.s - a.s) || (a.i - b.i))
  .map((x) => x.item);

const renderEntry = (e, profile) => {
  const bullets = rank(e.bullets || [], profile);
  return `    <div class="entry">
      <div class="row">
        <span class="left">${esc(e.title || `${e.role}, ${e.org}`)}</span>
        <span class="right">${esc(e.stack || e.when)}</span>
      </div>
${bullets.length ? `      <ul>
${bullets.map((b) => `        <li>${esc(b.text)}</li>`).join('\n')}
      </ul>
` : ''}    </div>`;
};

const renderSection = (heading, entries, profile, cls = '') => {
  if (!entries.length) return '';
  const attr = cls ? ` class="${cls}"` : '';
  return `  <section${attr}>
    <h2>${esc(heading)}</h2>

${entries.map((e) => renderEntry(e, profile)).join('\n\n')}
  </section>`;
};

const renderEducation = (profile, courseLimit) => {
  const ed = content.education;
  const courses = rank(ed.coursework, profile).slice(0, courseLimit).map((c) => c.name);
  return `  <section>
    <h2>Education</h2>
    <div class="entry">
      <div class="row">
        <span class="left">${esc(ed.school)}</span>
        <span class="right">${esc(ed.when)}</span>
      </div>
      <div class="row sub">
        <span class="left">${esc(ed.degree)}</span>
        <span class="right">${esc(ed.where)}</span>
      </div>
${courses.length ? `      <p class="meta">Coursework: ${courses.join(', ')}.</p>\n` : ''}    </div>
  </section>`;
};

const renderAwards = (profile, limit) => {
  const items = rank(content.awards, profile).slice(0, limit);
  if (!items.length) return '';
  return `  <section class="awards">
    <h2>Awards</h2>
    <p class="award-line">${items.map((a) => a.text).join(' ')}</p>
  </section>`;
};

const renderSkills = (profile) => {
  const cats = content.skills
    .map((c) => ({ ...c, items: rank(c.items, profile) }))
    .filter((c) => c.items.length);
  if (!cats.length) return '';
  return `  <section class="skills">
    <h2>Technical Skills</h2>
${cats.map((c) => `    <p><span class="cat">${esc(c.category)}:</span> ${c.items.map((i) => i.name).join(', ')}</p>`).join('\n')}
  </section>`;
};

const styles = (fontPt, lineHeight) => `  @page {
    size: Letter;
    margin: ${PAGE.marginTopIn}in ${PAGE.marginSideIn}in;
  }

  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }

  body {
    font-family: Calibri, Carlito, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: ${fontPt}pt;
    line-height: ${lineHeight};
    color: #000;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    /* Calibri ligates fi/fl/ft, and extraction then reads "Software" as
       "So ware", so the exact keyword a screen searches for is missing from
       the document. Turn ligatures off everywhere. */
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0, "clig" 0, "dlig" 0, "hlig" 0;
  }

  a { color: #000; text-decoration: none; }

  h1 {
    font-size: 19pt; font-weight: 700; letter-spacing: 0.055em;
    text-align: center; margin: 0 0 2pt 0; text-transform: uppercase;
  }

  .contact { text-align: center; font-size: 9pt; margin: 0 0 6pt 0; }
  .contact .sep { padding: 0 4pt; color: #555; }

  h2 {
    font-size: 9.9pt; font-weight: 700; letter-spacing: 0.09em;
    text-transform: uppercase; margin: 5.4pt 0 0 0;
    padding-bottom: 1.2pt; border-bottom: 0.9pt solid #000;
  }

  section { margin: 0; }
  .entry { margin-top: 2.9pt; }

  /* Title left, dates right. Flexbox keeps DOM order intact, so extraction
     reads "role, organisation, dates" in the order a parser expects. */
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
  .row .left { font-weight: 700; }
  .row .right { white-space: nowrap; font-size: 9.5pt; }
  .row.sub .left { font-weight: 400; font-style: italic; }
  .row.sub .right { font-style: italic; }

  ul { margin: 1pt 0 0 0; padding-left: 12.5pt; }
  li { margin: 0 0 0.4pt 0; }

  .meta { font-size: 9.1pt; margin: 1pt 0 0 0; }
  .skills p { margin: 2pt 0 0 0; }
  .skills .cat { font-weight: 700; }
  .award-line { margin: 2pt 0 0 0; }`;

/**
 * @param {Object} profile   role profile (emphasis, deprioritise, pin, drop)
 * @param {Object} budget    how much content to include, set by the fitter
 */
const render = (profile = {}, budget = {}) => {
  const {
    projects: nProjects = 99,
    competitions: nComps = 99,
    experience: nExp = 99,
    bulletsPerJob = 99,
    awards: nAwards = 99,
    coursework: nCourses = 5,
    fontPt = 9.5,
    lineHeight = 1.22,
  } = budget;

  const h = content.header;

  const exp = rank(content.experience, profile)
    .slice(0, nExp)
    .map((e) => ({ ...e, bullets: rank(e.bullets, profile).slice(0, bulletsPerJob) }));

  const projects = rank(content.projects, profile).slice(0, nProjects);
  const comps = rank(content.competitions, profile).slice(0, nComps);

  const sections = [
    renderEducation(profile, nCourses),
    renderSection('Experience', exp, profile),
    renderSection('Projects', projects, profile),
    renderSection('Machine Learning Competitions', comps, profile),
    renderAwards(profile, nAwards),
    renderSkills(profile),
  ].filter(Boolean);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(h.name)}, Resume${profile.role ? `, ${esc(profile.role)}` : ''}</title>
<style>
${styles(fontPt, lineHeight)}
</style>
</head>
<body>

  <h1>${esc(h.name)}</h1>
  <p class="contact">
    ${esc(h.location)}<span class="sep">|</span>
    <a href="mailto:${esc(h.email)}">${esc(h.email)}</a><span class="sep">|</span>
    <a href="https://${esc(h.site)}/">${esc(h.site)}</a><span class="sep">|</span>
    <a href="https://${esc(h.github)}">${esc(h.github)}</a><span class="sep">|</span>
    <a href="https://www.${esc(h.linkedin)}/">${esc(h.linkedin)}</a>
  </p>

${sections.join('\n\n')}

</body>
</html>
`;
};

/**
 * Progressively smaller content budgets. The fitter walks this list and takes
 * the first that renders on one page, so a tailored resume can never silently
 * become two pages.
 */
const BUDGETS = [
  {},
  { coursework: 5, awards: 5 },
  { projects: 4, competitions: 3 },
  { projects: 3, competitions: 3 },
  { projects: 3, competitions: 3, coursework: 4 },
  { projects: 3, competitions: 2, coursework: 4 },
  {
    projects: 3, competitions: 2, coursework: 4, awards: 4,
  },
  {
    projects: 2, competitions: 2, coursework: 4, awards: 4,
  },
  {
    projects: 2, competitions: 2, coursework: 3, awards: 3, bulletsPerJob: 2,
  },
  {
    projects: 2, competitions: 2, coursework: 3, awards: 3, bulletsPerJob: 2, lineHeight: 1.18,
  },
  {
    projects: 2,
    competitions: 1,
    coursework: 3,
    awards: 3,
    bulletsPerJob: 2,
    experience: 2,
    lineHeight: 1.18,
  },
];

module.exports = {
  render, rank, score, BUDGETS, PAGE, content,
};
