/**
 * Every piece of resume content, as data.
 *
 * `tags` are the scoring surface: a role profile lists the tags it cares
 * about, and the renderer orders and trims by how well each item matches.
 * Keep the vocabulary small and reuse existing tags rather than inventing
 * near-synonyms, or scoring stops meaning anything.
 *
 * Vocabulary in use:
 *   ai llm agents mcp ml nlp speech evaluation research
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
    when: 'May 2025 to Present',
    tags: ['leadership', 'backend', 'frontend', 'react', 'python', 'microservices'],
    bullets: [
      {
        tags: ['frontend', 'backend', 'react', 'python', 'database'],
        text: 'Lead an engineering collective shipping production web and mobile applications '
          + 'across React, Next.js, Django, FastAPI and PostgreSQL.',
      },
      {
        tags: ['microservices', 'backend', 'infra', 'observability', 'devops'],
        text: 'Architected CareForAll as seven independently deployable Django services behind an '
          + 'API gateway, with its own Prometheus and Grafana observability stack.',
      },
      {
        tags: ['frontend', 'accessibility', 'teaching'],
        text: 'Built Srabon, a gamified science learning platform with multilingual and '
          + 'accessibility support, as the team\'s flagship product.',
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
          + 'UI/UX for the club\'s native mobile application.',
      },
      {
        tags: ['leadership', 'community'],
        text: 'Raised over 1,000,000 BDT in sponsorship across 100+ company negotiations for INIT, '
          + 'the club\'s national annual event.',
      },
      {
        tags: ['teaching', 'community'],
        text: 'Taught web development fundamentals directly to more than 500 students as a '
          + 'workshop instructor.',
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
        tags: ['community', 'teaching'],
        text: 'Built a developer community that reached more than 20,000 learners through free '
          + 'programmes, courses and technical content.',
      },
      {
        tags: ['community', 'writing'],
        text: 'Partnered with Codecademy, Hack Club and DeepLearning.AI; wrote articles published '
          + 'on freeCodeCamp News.',
      },
    ],
  },
];

const projects = [
  {
    id: 'halfspread',
    title: 'HALFSPREAD, autonomous options trading agent',
    stack: 'Python, Alpaca, GitHub Actions',
    tags: ['agents', 'ai', 'python', 'fintech', 'evaluation', 'devops'],
    bullets: [
      {
        tags: ['fintech', 'evaluation', 'agents'],
        text: 'Prices execution cost before every order, having measured bid-ask cost from 0.52% '
          + 'to 33% of contract value depending on time to expiry. Every published figure '
          + 're-derives from an append-only journal with no API key and no network, and the build '
          + 'fails if one stops reproducing.',
      },
    ],
  },
  {
    id: 'cassandra',
    title: 'Cassandra, autonomous spreadsheet repair',
    stack: 'Google ADK, Gemini, Cloud Run, Firestore',
    tags: ['agents', 'ai', 'llm', 'gcp', 'cloud', 'python', 'evaluation'],
    bullets: [
      {
        tags: ['agents', 'llm', 'evaluation'],
        text: 'Agent fleet that repairs spreadsheet defects and proves each fix by recalculating '
          + 'the workbook, rejecting any correction that moves the wrong cell. Repaired five '
          + 'defects in 114 seconds unattended on a model reporting $6.2M in income for a company '
          + 'that had lost $1.7M.',
      },
    ],
  },
  {
    id: 'deepsift',
    title: 'DeepSIFT, auditable digital forensics',
    stack: 'MCP, Python, Volatility 3, MITRE ATT&amp;CK',
    tags: ['mcp', 'agents', 'ai', 'llm', 'security', 'python', 'evaluation'],
    bullets: [
      {
        tags: ['mcp', 'security', 'evaluation', 'llm'],
        text: '148-tool Model Context Protocol layer that parses forensic binaries into structured '
          + 'JSON before the model reads them, with a signable chain of custody. Scored 4/4 '
          + 'against published ground truth on two cases, zero hallucinations, 100% claim '
          + 'grounding.',
      },
    ],
  },
  {
    id: 'zero',
    title: 'Zero, gamified waste management platform',
    stack: 'React, TypeScript, Leaflet, Flask, PostgreSQL',
    tags: ['frontend', 'react', 'typescript', 'backend', 'database', 'civic', 'ai'],
    bullets: [
      {
        tags: ['frontend', 'backend', 'civic'],
        text: 'Connects citizens, cleaners and administrators around one verified workflow: a '
          + 'photo report is classified and mapped by point-in-polygon check, and payment '
          + 'releases only after before-and-after image comparison and a citizen review.',
      },
    ],
  },
  {
    id: 'doclyst',
    title: 'Doclyst, medical report interpreter',
    stack: 'ERNIE, PaddleOCR, Flask, React',
    tags: ['ai', 'llm', 'nlp', 'healthcare', 'frontend', 'python'],
    bullets: [
      {
        tags: ['llm', 'healthcare', 'nlp'],
        text: 'Reads a lab report, extracts values with OCR, and returns a plain-language '
          + 'explanation with safety alerts in under 30 seconds. Won Best ERNIE Multimodal '
          + 'Application at Baidu\'s developer challenge.',
      },
    ],
  },
];

const competitions = [
  {
    id: 'cadence',
    title: 'CADENCE, voice-based Parkinson\'s screening',
    stack: 'ML Empowerment Build Challenge, 2026',
    tags: ['ml', 'speech', 'healthcare', 'evaluation', 'python', 'research'],
    bullets: [
      {
        tags: ['ml', 'speech', 'evaluation', 'research'],
        text: 'Won best overall project. Screens from a 30-second voice sample and explains every '
          + 'score, validated across three independent language corpora using cross-database '
          + 'testing and domain-adversarial training to avoid microphone bias.',
      },
    ],
  },
  {
    id: 'olikobochon',
    title: 'Olikobochon, Bengali LLM hallucination detection',
    stack: 'IUTCS Datathon 2.0, 2026',
    tags: ['ml', 'nlp', 'llm', 'evaluation', 'research', 'python', 'ai'],
    bullets: [
      {
        tags: ['nlp', 'llm', 'evaluation', 'research'],
        text: 'Third on the public leaderboard at 0.922 F1 on the hallucinated class. A decision '
          + 'ladder resolves most rows deterministically against source corpora and an '
          + '89k-question bank, sending only the residual to an open-weight judge with Wikipedia '
          + 'retrieval.',
      },
    ],
  },
  {
    id: 'dlsprint',
    title: 'DL Sprint 4.0, Bangla long-form speech recognition',
    stack: 'BUET CSE Fest, 2026',
    tags: ['ml', 'speech', 'nlp', 'research', 'python'],
    bullets: [
      {
        tags: ['ml', 'speech', 'nlp'],
        text: 'Transcription of hours-long Bangla audio with overlapping speakers, background '
          + 'music and long silences, scored on word error rate weighted by sentence length.',
      },
    ],
  },
];

// Rendered as one paragraph. The fitter drops from the end.
const awards = [
  {
    tags: ['mobile', 'ml'],
    text: '<strong>Grand Prize Winner</strong>, FLIR App Challenge 2025 to 2026, for SolarSnap.',
  },
  {
    tags: ['ml', 'speech', 'healthcare'],
    text: '<strong>Best Overall Project</strong>, ML Empowerment Build Challenge 2.0, 2026, for '
      + 'CADENCE.',
  },
  {
    tags: ['llm', 'ai', 'healthcare'],
    text: '<strong>Best ERNIE Multimodal Application</strong>, ERNIE AI Developer Challenge by '
      + 'Baidu, 2026, for Doclyst.',
  },
  {
    tags: ['fintech', 'llm'],
    text: '<strong>Honourable Mention</strong>, LMA EDGE Hackathon, 2026, presented at the London '
      + 'finale, for Coven.',
  },
  { tags: [], text: 'Four wins across 32 hackathons entered.' },
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
