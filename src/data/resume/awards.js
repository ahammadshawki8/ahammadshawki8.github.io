/**
 * @typedef {Object} Award
 * @property {string} title - The prize itself
 * @property {string} org - Who awarded it
 * @property {string} date - YYYY-MM-DD, used for ordering
 * @property {string|undefined} project - The work it was awarded for
 * @property {string|undefined} link - Announcement or submission page
 * @property {string} summary - One or two sentences of context
 */
const awards = [
  {
    title: 'Grand Prize Winner',
    org: 'FLIR App Challenge 2025 to 2026',
    date: '2026-06-01',
    project: 'SolarSnap',
    link: 'https://www.flir.com/developer/blog/2025-app-challenge-winners/',
    summary:
      'First place in Teledyne FLIR\'s annual global developer challenge for SolarSnap, an '
      + 'asset-linked thermal panel mapper that ties every reading from a FLIR ACE camera to a '
      + 'specific solar panel.',
  },
  {
    title: 'Winner, Best Overall Project',
    org: 'ML Empowerment Build Challenge 2.0',
    date: '2026-08-04',
    project: 'CADENCE',
    link: 'https://devpost.com/software/cadence-y6i1cs',
    summary:
      'First place overall for a voice-based Parkinson\'s screening tool validated across three '
      + 'independent language corpora with cross-database testing rather than a single-corpus split.',
  },
  {
    title: 'Winner, Best ERNIE Multimodal Application',
    org: 'ERNIE AI Developer Challenge, Baidu AI Studio',
    date: '2026-01-20',
    project: 'Doclyst',
    link: 'https://devpost.com/software/doclyst',
    summary:
      'Awarded by Baidu and its ecosystem partners for Doclyst, a medical safety interpreter built on '
      + 'ERNIE and PaddleOCR that turns a clinical report into a plain-language explanation with safety '
      + 'alerts in under 30 seconds.',
  },
  {
    title: 'Winner, Honourable Mention',
    org: 'LMA EDGE Hackathon, Loan Market Association',
    date: '2026-01-11',
    project: 'Coven',
    link: 'https://devpost.com/software/coven-x0sbof',
    summary:
      'Reached the finals of the Loan Market Association\'s global hackathon on loan origination, '
      + 'documentation and trading, and presented at the LMA EDGE finale event in London.',
  },
  {
    title: 'Honorable Mention Award',
    org: 'Notre Dame College, Dhaka',
    date: '2023-12-01',
    summary:
      'The college\'s most distinguished annual prize, given to students who sustain both academic '
      + 'standing and co-curricular leadership across the same two years.',
  },
  {
    title: 'Winner, Code-A-Byte',
    org: 'Bash Woman Community',
    date: '2021-03-01',
    summary:
      'First competitive programming contest run by the community, hosted on Codeforces.',
  },
  {
    title: 'Arctic Code Vault Contributor',
    org: 'GitHub',
    date: '2020-06-01',
    summary:
      'Recognised among the contributors whose open source code was archived in the GitHub Arctic Code Vault.',
  },
];

export default awards;
