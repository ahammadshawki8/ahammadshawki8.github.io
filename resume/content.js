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
    { name: 'Data Structures and Algorithms I and II', tags: ['cpp', 'research'] },
    { name: 'Database', tags: ['database', 'backend'] },
    { name: 'Software Engineering', tags: ['backend'] },
    { name: 'Computer Architecture', tags: ['cpp'] },
    { name: 'Theory of Computation', tags: ['research'] },
    { name: 'Object Oriented Programming', tags: ['java'] },
    { name: 'Discrete Mathematics', tags: ['research'] },
    { name: 'Signals and Linear Systems', tags: ['speech', 'ml'] },
  ],
};

const experience = [
  {
    id: 'srotdev',
    role: 'Founder and Developer',
    org: 'SrotDev',
    link: 'https://github.com/SrotDev',
    when: 'May 2025 to Present',
    tags: ['leadership', 'backend', 'frontend', 'react', 'python', 'microservices'],
    bullets: [
      {
        tags: ['frontend', 'backend', 'react', 'python', 'database'],
        text: 'Lead an engineering collective shipping production web and mobile apps in React, '
          + 'Next.js, Django, FastAPI and PostgreSQL.',
      },
      {
        tags: ['microservices', 'backend', 'infra', 'observability', 'devops'],
        text: 'Architected CareForAll as seven deployable Django services behind an API gateway, '
          + 'with its own Prometheus and Grafana stack.',
      },
    ],
  },
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
        text: '148 forensic MCP tools that parse binaries to typed JSON before the model reads '
          + 'them. 4/4 against published ground truth, zero hallucinations, 100% claim grounding.',
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
        text: 'Everyday photos become speech for people who cannot rely on it. SAM 3.1 outlines '
          + 'every person and object; tapping one speaks. Built for the Meta Global AI Hackathon.',
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
        text: 'Private per-sibling agents negotiate a family care rota. A position may leave an '
          + 'agent; the reason behind it has no field to travel in. Fair division is deterministic.',
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
        text: 'Agent memory that expires. Runbooks are pinned to the policy versions they came '
          + 'from, so one edit invalidates every dependent procedure in four writes.',
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
        text: 'Heart rate from webcam colour with no trained model, convolution and Fourier only. '
          + '4.62 BPM error over 20 volunteers against 5.63 for the best published method.',
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
        text: 'Hands-free CPR on AR glasses: a sternum target at real size and a ring pulsing at '
          + '110 a minute. 37% of trained bystanders who did not help said they panicked.',
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
        text: 'Agents turn a teacher emailed function into a raised-line braille graph, check it '
          + 'as a fingertip would, ship it and order the print. By hand that is two hours in CAD.',
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
        text: 'Turns a repository history into onboarding cases, each certified by requiring its '
          + 'own test to fail three times out of three and then pass. 56 cases, three repos.',
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
    id: 'cadence',
    title: 'CADENCE, Parkinson\'s from voice',
    link: 'https://devpost.com/software/cadence-y6i1cs',
    stack: 'ML Empowerment Challenge',
    tags: ['ml', 'speech', 'healthcare', 'evaluation', 'python', 'research'],
    bullets: [
      {
        tags: ['ml', 'speech', 'evaluation', 'research'],
        text: 'Won best overall project. 30 seconds of voice, validated across three language '
          + 'corpora with cross-database testing and domain-adversarial training.',
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
        text: 'Third on the leaderboard at 0.922 F1. A decision ladder resolves most rows against '
          + 'source corpora and a bank of 89,000 questions; only the residual reaches a judge.',
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
        text: 'Tenth on the private leaderboard, 0.2760 log loss and 0.9551 AUROC. Striatum found '
          + 'without an atlas, then binding ratios stacked with 2D and slice-sequence nets.',
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
        text: 'Highways double-counted across tract boundaries are 72% of the mean road coverage '
          + 'gap, and they bend the equity scorecard built to reveal inequity.',
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
        text: 'Hours-long audio with overlapping speakers, background music and long silences, '
          + 'scored on word error rate weighted by sentence length.',
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
      { name: 'Dart', tags: ['mobile'] },
      { name: 'HTML/CSS', tags: ['frontend'] },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', tags: ['react', 'frontend'] },
      { name: 'Next.js', tags: ['react', 'frontend'] },
      { name: 'Django', tags: ['backend', 'python'] },
      { name: 'Django REST Framework', tags: ['backend', 'api', 'python'] },
      { name: 'FastAPI', tags: ['backend', 'api', 'python'] },
      { name: 'Flask', tags: ['backend', 'python'] },
      { name: 'Node.js', tags: ['backend', 'javascript'] },
      { name: 'Flutter', tags: ['mobile'] },
      { name: 'JavaFX', tags: ['java'] },
    ],
  },
  {
    category: 'AI and Machine Learning',
    items: [
      { name: 'PyTorch', tags: ['ml', 'research'] },
      { name: 'scikit-learn', tags: ['ml'] },
      { name: 'Model Context Protocol', tags: ['mcp', 'agents', 'llm'] },
      { name: 'Google ADK', tags: ['agents', 'llm', 'gcp'] },
      { name: 'Retrieval Augmented Generation', tags: ['llm', 'nlp'] },
      { name: 'Whisper', tags: ['speech', 'ml'] },
      { name: 'Gemini', tags: ['llm', 'ai'] },
      { name: 'Claude', tags: ['llm', 'ai'] },
      { name: 'Pandas', tags: ['ml', 'python'] },
      { name: 'NumPy', tags: ['ml', 'python'] },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'Docker', tags: ['infra', 'devops'] },
      { name: 'Google Cloud (Cloud Run, Pub/Sub, Firestore, Vertex AI)', tags: ['gcp', 'cloud'] },
      { name: 'AWS (Bedrock, ECS, Lambda)', tags: ['aws', 'cloud'] },
      { name: 'PostgreSQL', tags: ['database'] },
      { name: 'MongoDB', tags: ['database'] },
      { name: 'Redis', tags: ['database'] },
      { name: 'GitHub Actions', tags: ['devops', 'infra'] },
      { name: 'Grafana', tags: ['observability', 'devops'] },
    ],
  },
];

module.exports = {
  header, education, experience, projects, competitions, awards, skills,
};
