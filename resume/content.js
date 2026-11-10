/**
 * Every piece of resume content, as data.
 *
 * `tags` are the scoring surface: a role profile lists the tags it cares
 * about, and the renderer orders and trims by how well each item matches.
 * Keep the vocabulary small and reuse existing tags rather than inventing
 * near-synonyms, or scoring stops meaning anything.
 *
 * Vocabulary in use:
 *   ai llm agents mcp ml nlp speech vision evaluation research
 *   backend api microservices database infra cloud aws gcp devops observability
 *   frontend react mobile ui design
 *   python typescript javascript java cpp
 *   leadership teaching community writing
 *   fintech healthcare security accessibility civic
 */

const header = {
  name: 'Ahammad Shawki',
  location: 'Dhaka, Bangladesh',
  email: 'ahammadshawki8@gmail.com',
  site: 'ahammadshawki8.github.io',
  github: 'github.com/ahammadshawki8',
  linkedin: 'linkedin.com/in/ahammadshawki8',
};

const education = {
  school: 'Bangladesh University of Engineering and Technology (BUET)',
  degree: 'BSc in Computer Science and Engineering',
  when: 'Expected 2028',
  where: 'Dhaka, Bangladesh',
  // Rendered in this order; the fitter trims from the end when space is short.
  coursework: [
    { name: 'Data Structures and Algorithms', tags: ['cpp', 'research'] },
    { name: 'Object Oriented Programming', tags: ['java'] },
    { name: 'Database', tags: ['database', 'backend'] },
    { name: 'Digital Logic Design', tags: ['cpp'] },
    { name: 'Computer Architecture', tags: ['cpp'] },
    { name: 'Theory of Computation', tags: ['research'] },
    { name: 'Software Engineering', tags: ['backend'] },
    { name: 'Linear Algebra', tags: ['ml', 'research'] },
    { name: 'Probability and Statistics', tags: ['ml', 'research'] },
    { name: 'Advanced Calculus', tags: ['ml', 'research'] },
    { name: 'Discrete Mathematics', tags: ['research'] },
    { name: 'Signals and Linear Systems', tags: ['speech', 'ml'] },
  ],
};

const experience = [
  {
    id: 'nditc',
    role: 'President of Web and App Development',
    org: 'NDITC',
    when: 'Mar 2022 to Jun 2024',
    tags: ['leadership', 'teaching', 'community', 'frontend'],
    bullets: [
      {
        tags: ['leadership', 'frontend', 'mobile', 'ui'],
        text: 'Led a 30-person engineering team; delivered the rebuilt official website and the '
          + 'UI/UX for the club mobile app.',
      },
      {
        tags: ['leadership', 'community', 'teaching'],
        text: 'Raised over 1,000,000 BDT across 100+ sponsor negotiations, and taught web '
          + 'development to more than 500 students.',
      },
    ],
  },
  {
    id: 'as8',
    role: 'Founder and Team Lead',
    org: 'The AS8 Organization',
    when: 'Feb 2021 to May 2022',
    tags: ['leadership', 'community', 'teaching', 'writing'],
    bullets: [
      {
        tags: ['community', 'teaching', 'writing'],
        text: 'Built a developer community reaching 20,000+ learners; partnered with Codecademy, '
          + 'Hack Club and DeepLearning.AI, and wrote for freeCodeCamp News.',
      },
    ],
  },
];

const projects = [
  {
    id: 'deepsift',
    title: 'DeepSIFT',
    link: 'https://github.com/ahammadshawki8/DeepSIFT',
    stack: 'MCP, Python, Volatility 3',
    tags: ['mcp', 'agents', 'ai', 'llm', 'security', 'python', 'evaluation'],
    bullets: [
      {
        tags: ['mcp', 'security', 'evaluation', 'llm'],
        text: '148 forensic MCP tools parse binaries to typed JSON first. 4/4 on published ground '
          + 'truth, zero hallucinations.',
      },
    ],
  },
  {
    id: 'cadence',
    title: 'CADENCE',
    link: 'https://devpost.com/software/cadence-y6i1cs',
    stack: 'Python, PyTorch, speech',
    tags: ['ml', 'speech', 'healthcare', 'evaluation', 'python', 'research'],
    bullets: [
      {
        tags: ['ml', 'speech', 'evaluation', 'research'],
        text: 'Won best overall. Parkinson\'s from 30 seconds of voice, validated across three '
          + 'language corpora, not one split.',
      },
    ],
  },
  {
    id: 'momentalk',
    title: 'Momentalk',
    link: 'https://momentalk.onrender.com',
    stack: 'SAM 3.1, Llama, TypeScript',
    tags: ['ai', 'llm', 'vision', 'accessibility', 'healthcare', 'typescript'],
    bullets: [
      {
        tags: ['vision', 'accessibility', 'llm'],
        text: 'Photos become speech for people who cannot rely on it. SAM 3.1 outlines every object; '
          + 'tapping one speaks.',
      },
    ],
  },
  {
    id: 'shoulder',
    title: 'Shoulder',
    link: 'https://devpost.com/software/shoulder',
    stack: 'Strands Agents, A2A, Python',
    tags: ['agents', 'ai', 'llm', 'security', 'accessibility', 'python', 'evaluation'],
    bullets: [
      {
        tags: ['security', 'agents', 'evaluation'],
        text: 'Private per-sibling agents negotiate a care rota. A reason has no field to travel in. '
          + 'Fair division is code.',
      },
    ],
  },
  {
    id: 'cascade',
    title: 'Cascade',
    link: 'https://github.com/ahammadshawki8/Cascade',
    stack: 'Python, AWS, vector search',
    tags: ['agents', 'ai', 'llm', 'aws', 'cloud', 'infra', 'database', 'evaluation', 'python'],
    bullets: [
      {
        tags: ['agents', 'infra', 'evaluation', 'llm'],
        text: 'Agent memory that expires. Runbooks are pinned to policy versions; one edit '
          + 'invalidates them all in four writes.',
      },
    ],
  },
  {
    id: 'trace',
    title: 'TRACE',
    link: 'https://github.com/ahammadshawki8/TRACE-rPPG',
    stack: 'Python, signal processing',
    tags: ['ml', 'vision', 'healthcare', 'evaluation', 'research', 'python'],
    bullets: [
      {
        tags: ['vision', 'evaluation', 'research', 'ml'],
        text: 'Heart rate from webcam colour with no trained model. 4.62 BPM error against 5.63 for '
          + 'the best published method.',
      },
    ],
  },
  {
    id: 'someone',
    title: 'Someone',
    link: 'https://github.com/ahammadshawki8/Someone',
    stack: 'Snap SPECS, Lens Studio, CLAD',
    tags: ['ai', 'vision', 'healthcare', 'accessibility', 'design'],
    bullets: [
      {
        tags: ['vision', 'healthcare', 'design'],
        text: 'Hands-free CPR on AR glasses: a sternum target at real size and a ring pulsing at 110 '
          + 'a minute.',
      },
    ],
  },
  {
    id: 'locus',
    title: 'Locus',
    link: 'https://github.com/ahammadshawki8/locus',
    stack: 'GitLab Duo agents, Cloud Run',
    tags: ['agents', 'ai', 'accessibility', 'devops', 'cloud', 'javascript'],
    bullets: [
      {
        tags: ['agents', 'accessibility', 'devops'],
        text: 'Agents turn an emailed function into a raised-line braille graph, check it, ship it '
          + 'and order the print.',
      },
    ],
  },
  {
    id: 'dejabug',
    title: 'DejaBug',
    link: 'https://ahammadshawki8.github.io/DejaBug/',
    stack: 'IBM Bob, TypeScript, Go',
    tags: ['agents', 'llm', 'evaluation', 'devops', 'typescript', 'python'],
    bullets: [
      {
        tags: ['evaluation', 'llm', 'devops'],
        text: 'Real bug fixes become onboarding cases, each certified by a test that fails 3 of 3 '
          + 'then passes. 56 cases.',
      },
    ],
  },
  {
    id: 'halfspread',
    title: 'HALFSPREAD',
    link: 'https://github.com/ahammadshawki8/halfspread',
    stack: 'Python, Alpaca, GitHub Actions',
    tags: ['agents', 'ai', 'python', 'fintech', 'evaluation', 'devops'],
    bullets: [
      {
        tags: ['fintech', 'evaluation', 'agents'],
        text: 'An options agent that prices its exit before it enters: crossing costs 0.52% on '
          + 'NVDA and 33% near expiry. Every figure is rebuilt from an append-only journal or the build fails.',
      },
    ],
  },
  {
    id: 'rifq',
    title: 'RIFQ',
    link: 'https://ahammadshawki8.github.io/RIFQ/',
    stack: 'ElevenLabs, JavaScript',
    tags: ['ai', 'llm', 'speech', 'fintech', 'accessibility', 'javascript', 'evaluation'],
    bullets: [
      {
        tags: ['speech', 'fintech', 'llm'],
        text: 'A collections voice agent that stops asking for money the moment hardship is '
          + 'stated, suppresses contact and opens a case with a named owner. 68 checks, 3 languages.',
      },
    ],
  },
  {
    id: 'cassandra',
    title: 'Cassandra',
    link: 'https://github.com/ahammadshawki8/Cassandra',
    stack: 'Google ADK, Gemini, Cloud Run',
    tags: ['agents', 'ai', 'llm', 'gcp', 'cloud', 'python', 'evaluation'],
    bullets: [
      {
        tags: ['agents', 'llm', 'evaluation'],
        text: 'Continuous integration for spreadsheets: an agent fleet repairs defects and proves '
          + 'each fix by recalculating the workbook. Five defects in 114 seconds, unattended.',
      },
    ],
  },
  {
    id: 'zero',
    title: 'Zero',
    link: 'https://github.com/ahammadshawki8/Zero',
    stack: 'React, TypeScript, Flask',
    tags: ['frontend', 'react', 'typescript', 'backend', 'database', 'civic', 'ai'],
    bullets: [
      {
        tags: ['frontend', 'backend', 'civic'],
        text: 'Waste reporting where payment releases only after a before-and-after image check '
          + 'and a citizen review.',
      },
    ],
  },
  {
    id: 'doclyst',
    title: 'Doclyst',
    link: 'https://devpost.com/software/doclyst',
    stack: 'ERNIE, PaddleOCR, Flask',
    tags: ['ai', 'llm', 'nlp', 'healthcare', 'frontend', 'python'],
    bullets: [
      {
        tags: ['llm', 'healthcare', 'nlp'],
        text: 'Reads a lab report and returns a plain-language explanation with safety alerts in '
          + 'under 30 seconds. Won Best ERNIE Multimodal Application at Baidu.',
      },
    ],
  },
];

const competitions = [
  {
    id: 'barbados',
    title: 'Historic handwriting transcription',
    link: 'https://zindi.africa/competitions/road-barbados-historic-handwriting-challenge',
    stack: 'R.O.A.D. Barbados, Zindi',
    tags: ['ml', 'vision', 'nlp', 'research', 'python', 'evaluation'],
    bullets: [
      {
        tags: ['ml', 'vision', 'research'],
        text: '0.92385 against a winning 0.93306, from an MBR vote over 34 fine-tuned readers on free '
          + 'Kaggle hardware.',
      },
    ],
  },
  {
    id: 'olikobochon',
    title: 'Bengali LLM hallucination detection',
    link: 'https://www.kaggle.com/competitions/bengali-hallucination',
    stack: 'IUTCS Datathon 2.0',
    tags: ['ml', 'nlp', 'llm', 'evaluation', 'research', 'python', 'ai'],
    bullets: [
      {
        tags: ['nlp', 'llm', 'evaluation', 'research'],
        text: 'Third at 0.922 F1. A decision ladder resolves most rows deterministically; only the '
          + 'residual reaches a judge.',
      },
    ],
  },
  {
    id: 'datparkinsons',
    title: 'DaT Parkinson\'s Challenge',
    link: 'https://ahammadshawki8.github.io/dat-parkinsons-challenge/',
    stack: 'DrivenData',
    tags: ['ml', 'vision', 'healthcare', 'evaluation', 'research', 'python'],
    bullets: [
      {
        tags: ['ml', 'vision', 'evaluation', 'research'],
        text: 'Tenth on the private leaderboard, 0.2760 log loss and 0.9551 AUROC, from registration '
          + 'plus stacked nets.',
      },
    ],
  },
  {
    id: 'biasbounty',
    title: 'Phantom Road Gaps, Bias Bounty',
    link: 'https://github.com/ahammadshawki8/phantom-road-gaps',
    stack: 'Humane Intelligence and Zindi',
    tags: ['ml', 'research', 'evaluation', 'civic', 'python'],
    bullets: [
      {
        tags: ['research', 'evaluation', 'civic'],
        text: 'Double-counted boundary highways are 72% of the mean road gap, and they bend the '
          + 'equity scorecard.',
      },
    ],
  },
  {
    id: 'dlsprint',
    title: 'Bangla long-form speech recognition',
    link: 'https://www.kaggle.com/competitions/dl-sprint-4-0-bengali-long-form-speech-recognition',
    stack: 'DL Sprint 4.0, BUET CSE Fest',
    tags: ['ml', 'speech', 'nlp', 'research', 'python'],
    bullets: [
      {
        tags: ['ml', 'speech', 'nlp'],
        text: 'Hours-long Bangla audio with overlapping speakers, scored on word error rate weighted '
          + 'by sentence length.',
      },
    ],
  },
];

// Rendered as one paragraph. The fitter drops from the end.
const awards = [
  {
    id: 'robi',
    tags: ['security', 'leadership', 'research'],
    text: '<strong>Fifth place, Top 10 finalist</strong>, Data Privacy Avengers 2026, Robi Axiata',
  },
  {
    id: 'goldenagent',
    link: 'https://devpost.com/software/shoulder',
    tags: ['agents', 'llm', 'security'],
    text: '<strong>Winner, Golden Agent</strong>, Agents for Humans Hackathon 2026, for Shoulder',
  },
  {
    id: 'flir',
    link: 'https://www.flir.com/developer/blog/2025-app-challenge-winners/',
    tags: ['mobile', 'ml', 'vision'],
    text: '<strong>Grand Prize Winner</strong>, FLIR App Challenge 2025 to 2026, for SolarSnap',
  },
  {
    id: 'cadenceaward',
    link: 'https://devpost.com/software/cadence-y6i1cs',
    tags: ['ml', 'speech', 'healthcare'],
    text: '<strong>Best Overall Project</strong>, ML Empowerment Build Challenge 2.0, for CADENCE',
  },
  {
    id: 'ernie',
    link: 'https://devpost.com/software/doclyst',
    tags: ['llm', 'ai', 'healthcare'],
    text: '<strong>Best ERNIE Multimodal Application</strong>, Baidu AI Developer Challenge',
  },
  {
    id: 'coven',
    link: 'https://github.com/ahammadshawki8/Coven',
    tags: ['fintech', 'llm'],
    text: '<strong>Honourable Mention</strong>, LMA EDGE Hackathon, London finale, for Coven',
  },
];

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', tags: ['python', 'ml', 'ai'] },
      { name: 'C/C++', tags: ['cpp'] },
      { name: 'TypeScript', tags: ['typescript', 'frontend'] },
      { name: 'JavaScript', tags: ['javascript', 'frontend'] },
      { name: 'Java', tags: ['java'] },
      { name: 'SQL', tags: ['database', 'backend'] },
    ],
  },
  {
    category: 'Machine learning',
    items: [
      { name: 'cross-corpus validation', tags: ['ml', 'evaluation', 'research'] },
      { name: 'domain-adversarial training', tags: ['ml', 'research'] },
      { name: 'ensembling and stacking', tags: ['ml', 'research'] },
      { name: 'probability calibration', tags: ['ml', 'evaluation'] },
      { name: 'image registration', tags: ['vision', 'ml'] },
      { name: 'classical signal processing', tags: ['speech', 'ml', 'vision'] },
      { name: 'speech recognition', tags: ['speech', 'nlp'] },
    ],
  },
  {
    category: 'AI systems',
    items: [
      { name: 'multi-agent orchestration', tags: ['agents', 'llm'] },
      { name: 'tool use and the Model Context Protocol', tags: ['mcp', 'agents', 'llm'] },
      { name: 'retrieval augmented generation', tags: ['llm', 'nlp'] },
      { name: 'per-claim grounding', tags: ['llm', 'evaluation', 'security'] },
      { name: 'hallucination detection', tags: ['llm', 'nlp', 'evaluation'] },
      { name: 'evaluation harness design', tags: ['evaluation', 'research'] },
      { name: 'privacy boundaries enforced in types', tags: ['security', 'agents'] },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'PyTorch', tags: ['ml', 'research'] },
      { name: 'React', tags: ['react', 'frontend'] },
      { name: 'Next.js', tags: ['react', 'frontend'] },
      { name: 'Django', tags: ['backend', 'python'] },
      { name: 'FastAPI', tags: ['backend', 'api', 'python'] },
      { name: 'PostgreSQL', tags: ['database'] },
      { name: 'Docker', tags: ['infra', 'devops'] },
      { name: 'AWS', tags: ['aws', 'cloud'] },
      { name: 'Google Cloud', tags: ['gcp', 'cloud'] },
    ],
  },
  {
    category: 'Systems',
    items: [
      { name: 'microservice architecture', tags: ['microservices', 'backend'] },
      { name: 'API design and gateways', tags: ['api', 'backend'] },
      { name: 'relational and vector data modelling', tags: ['database', 'infra'] },
      { name: 'observability and CI/CD', tags: ['observability', 'devops'] },
      { name: 'cloud deployment on AWS and GCP', tags: ['cloud', 'aws', 'gcp', 'infra'] },
      { name: 'containerisation', tags: ['infra', 'devops'] },
    ],
  },
];

module.exports = {
  header, education, experience, projects, competitions, awards, skills,
};
