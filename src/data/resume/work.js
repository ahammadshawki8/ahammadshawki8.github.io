/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'SrotDev',
    position: 'Founder and Developer',
    url: 'https://github.com/SrotDev',
    startDate: '2025-05-01',
    highlights: [
      'Founded SrotDev as a flat engineering collective, so that work the team builds together is published under one name instead of scattered across individual accounts.',
      'Ship production web and mobile applications across React, Next.js, Django, FastAPI, Flutter and PostgreSQL.',
      'Designed and built Srabon, an inclusive gamified science learning platform for secondary schoolers with multilingual and accessibility support.',
      'Architected CareForAll as seven independently deployable Django services behind an API gateway, with its own Prometheus and Grafana observability stack.',
      'Built Emotuna, a privacy-first agent that trains a per-user Direct Preference Optimization model to draft replies in that person\'s own texting style.',
      'Built Shomonnoy, a scheduling platform that lets city authorities resolve conflicting road works before the street is cut.',
      'Represent the team in international hackathons, most recently as Team Srot at the LofiStack Hackathon 2026.',
    ],
  },
  {
    name: 'NDITC',
    position: 'President of Web and App Development',
    url: 'https://nditc.net/',
    startDate: '2022-03-01',
    endDate: '2024-06-01',
    highlights: [
      'Led a web and app development team of 30 members.',
      'Designed and developed the rebuilt version of the official NDITC website.',
      'Designed the user interface and user experience of the NDITC native mobile application.',
      'Organised workshops, seminars and national events including FTMPC, INIT, PixelCon and Thynk.',
      'Negotiated with more than 100 companies and raised over 1,000,000 BDT in sponsorship for INIT, the club\'s annual national event.',
      'Started internal products including Evya, an image recognition service, Code Compass, a monthly newsletter, and HashTech, a weekly technology briefing.',
      'Ran the club\'s email marketing campaigns.',
      'Taught web development fundamentals directly to more than 500 students as a workshop instructor.',
    ],
  },
  {
    name: 'The AS8 Organization',
    position: 'Founder and Team Lead',
    url: 'http://the-as8-organization.github.io/',
    startDate: '2021-02-01',
    endDate: '2022-05-01',
    highlights: [
      'Founded the organisation and ran its day to day operations.',
      'Recruited core team members, community representatives, mentors and instructors.',
      'Reached more than 20,000 learners, directly and indirectly, through free programmes.',
      'Built static sites and dynamic web applications from scratch, and designed their interfaces.',
      'Produced technical articles, online courses and video tutorials.',
      'Ran guidance programmes for early-career programmers including PyCamp, CodeInception and CodeShorts.',
      'Collaborated with Codecademy, Hack Club, DeepLearning.AI, Bash Woman Community, Learn With Sumit and Vision Green Organization.',
      'Designed ProgramNexus, a course sharing platform, and a directory linking the technology clubs of Bangladesh.',
    ],
  },
  {
    name: 'Bangladesh Youth Environmental Initiative',
    position: 'Information Technology Intern',
    url: 'https://www.byei.org/',
    startDate: '2021-07-01',
    endDate: '2021-12-01',
    highlights: [
      'Reviewed and reported on the design of the organisation\'s website.',
      'Wrote a research document on key environmental dates to anchor future campaigns.',
      'Improved the search engine optimisation of the official website.',
    ],
  },
  {
    name: 'Vision Green Organization',
    position: 'Technology Officer',
    url: 'https://visiongreen.org/',
    startDate: '2021-01-01',
    endDate: '2021-06-01',
    highlights: [
      'Supported the organisation with technical research, analysis and implementation.',
      'Developed environment-focused web applications and reviewed their interfaces.',
      'Published Talpata, an environmental magazine.',
      'Brought in collaboration offers from several established climate organisations.',
    ],
  },
  {
    name: 'freeCodeCamp',
    position: 'Contributing Writer',
    url: 'https://freecodecamp.org',
    startDate: '2021-01-01',
    endDate: '2021-04-01',
    highlights: [
      'Wrote technical articles for freeCodeCamp News on web design principles and developer communities.',
      'Promoted freeCodeCamp initiatives in Bangladesh and recruited local developers to contribute.',
    ],
  },
  {
    name: 'Hack Club',
    position: 'Leader, Asia-Pacific Region',
    url: 'https://hackclub.com/',
    startDate: '2021-12-01',
    endDate: '2022-03-01',
    highlights: [
      'Founded the first Hack Club in Dhaka, Bangladesh.',
      'Led a team of more than 40 club members.',
      'Ran events and sessions jointly with Hack Clubs in other countries.',
    ],
  },
  {
    name: 'Codecademy',
    position: 'Chapter Leader',
    url: 'https://www.codecademy.com/',
    startDate: '2021-12-01',
    endDate: '2022-03-01',
    highlights: [
      'Founded a Codecademy Chapter in Dhaka, Bangladesh.',
      'Ran events and sessions jointly with Chapters in other countries.',
    ],
  },
  {
    name: 'Bondhon',
    position: 'Technology Advisor',
    url: 'https://www.facebook.com/Bondhon.Charity',
    startDate: '2021-04-01',
    endDate: '2021-06-01',
    highlights: [
      'Rebuilt the organisation\'s official website.',
      'Produced research reports to guide its development.',
      'Grew its reach on LinkedIn and opened new outreach opportunities.',
    ],
  },
];

export default work;
