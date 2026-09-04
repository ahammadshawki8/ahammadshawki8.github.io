# ahammadshawki8.github.io

My personal site, live at **[ahammadshawki8.github.io](https://ahammadshawki8.github.io/)**.

A statically generated React application, prerendered with
[react-snap](https://github.com/stereobooster/react-snap) and deployed to GitHub Pages.
Built on [mldangelo/personal-site](https://github.com/mldangelo/personal-site), MIT licensed.

## Pages

| Route | What is on it |
| --- | --- |
| `/` | Introduction, awards and honours, recommendations |
| `/about` | Long-form background, rendered from `src/data/about.md` |
| `/resume` | Summary, experience, awards, skills, education, coursework, and the PDF download |
| `/projects` | Selected projects as a two-column grid |
| `/publications` | Technical articles, linking out to the full posts |
| `/contact` | Services offered, and a composer that opens a pre-filled email |

## Editing content

Almost everything lives in `src/data`, so a content change rarely needs a component change.

| File | Drives |
| --- | --- |
| `data/projects.js` | The projects grid |
| `data/publications.js` | The publications grid |
| `data/services.js` | The services grid on the contact page |
| `data/testimonials.js` | Recommendation quotes on the homepage |
| `data/about.md` | The about page |
| `data/routes.js` | Navigation |
| `data/contact.js` | Social links |
| `data/resume/*.js` | Summary, education, experience, awards, skills, courses |

### The PDF resume

`resume/resume.html` is the source for `public/Ahammad_Shawki_Resume.pdf`. Edit the HTML, then:

```bash
npm run build:resume
```

The build fails if the result runs past one page, if a section heading goes missing, or if the
text layer does not extract, so a broken resume cannot ship quietly.

It is written to the conventions applicant tracking systems parse reliably: one column, no
tables or text boxes for layout, no images, nothing in the page margins, standard section
headings, and ligatures disabled. That last one matters more than it sounds. Calibri ligates
`fi`, `fl` and `ft`, and without `font-variant-ligatures: none` a parser reads "Software" as
"So ware", so the keyword a recruiter searches for is simply not in the document.

### Publications

Hashnode moved its public GraphQL API behind a paid plan in May 2026, and the blog's RSS
feed sits behind a bot check, so the post list cannot be fetched from the browser at
runtime. `src/data/publications.js` is a build-time snapshot instead. After publishing a
new post, run:

```bash
npm run fetch:publications
```

That reads the public Hashnode profile page, refreshes titles, dates, covers and read
times, and adds any new posts. Hand-written `brief` and `publisher` values are preserved,
so edit them freely. Review the diff before committing.

## Requirements

Node >= 16. Use [nvm](https://github.com/nvm-sh/nvm) and `nvm install` to match `.nvmrc`.

## Running locally

```bash
npm install
npm start          # http://localhost:3000
```

## Checks

```bash
npm run lint       # eslint, airbnb config, CRLF line endings enforced
npm test           # jest, routing smoke tests
npm run build      # production build into ./build
```

## Deploying

```bash
npm run deploy
```

`predeploy` builds and prerenders each route, then `gh-pages` publishes `build/` to the
`gh-pages` branch. Keep `main` in sync: the source and the deployed build should not drift
apart again.

## Licence

[MIT](./LICENSE).
