/**
 * @typedef {Object} Project
 * @property {string} title - Project name
 * @property {string} date - YYYY-MM-DD, used for sorting and display
 * @property {string} desc - One paragraph on what it is and why it exists
 * @property {string|undefined} image - Path under /images/projects. Omit for a generated tile.
 * @property {string|undefined} link - Live demo, or the repository if there is no demo
 * @property {string|undefined} repo - Source, when `link` already points at a demo
 * @property {string|undefined} award - Prize text. Renders as a highlighted badge.
 * @property {string|undefined} event - Hackathon or programme the work was built for
 * @property {string[]} tags - Notable stack, most significant first
 */
const data = [
  {
    title: 'HALFSPREAD',
    image: '/images/projects/halfspread.jpg',
    link: 'https://ahammadshawki8.github.io/halfspread/',
    repo: 'https://github.com/ahammadshawki8/halfspread',
    date: '2026-09-03',
    event: 'AI Trading Agents Hackathon, lablab.ai and Alpaca',
    tags: ['Python', 'Alpaca', 'Options Pricing', 'Black-Scholes', 'GitHub Actions'],
    desc:
      'An autonomous options agent that measures execution cost before every order. '
      + 'Most agents optimise the entry signal and treat the bid-ask spread as a rounding error. '
      + 'Near expiry it is not a rounding error, it is the whole trade: the same afternoon that costs '
      + '0.52% to cross on NVDA costs 33% on a QQQ contract with 26 minutes left. '
      + 'HALFSPREAD ranks structures by what survives that cost and lets positions settle rather than '
      + 'paying the spread a second time to close. Every published figure re-derives from an '
      + 'append-only journal with no API key and no network, and the build fails if a number stops reproducing.',
  },
  {
    title: 'Cassandra',
    image: '/images/projects/cassandra.jpg',
    link: 'https://github.com/ahammadshawki8/Cassandra',
    date: '2026-09-01',
    event: 'All Things Agentic Hackathon',
    tags: ['Google ADK', 'Gemini', 'Cloud Run', 'Pub/Sub', 'Firestore', 'FastAPI'],
    desc:
      'Continuous integration for the spreadsheets that run a company. Drop a workbook into a '
      + 'Cloud Storage bucket and an agent fleet wakes from zero, parses it into a formula dependency '
      + 'graph, finds the defect, writes the fix, and proves it by recalculating the entire file. '
      + 'A correction that does not move the target cell exactly as predicted, or that disturbs any '
      + 'other cell, is rejected and returned with the reason it failed. On the demo model it found a '
      + 'workbook reporting 6.2M in operating income for a company that had actually lost 1.7M, and '
      + 'repaired five defects in 114 seconds with nobody watching.',
  },
  {
    title: 'Cascade',
    image: '/images/projects/cascade.jpg',
    link: 'https://main.d1fzvx73990zqu.amplifyapp.com',
    date: '2026-08-30',
    event: 'CockroachDB and AWS Hackathon, Build with Agentic Memory',
    tags: ['AWS Bedrock', 'CockroachDB', 'ECS Fargate', 'Next.js', 'FastAPI'],
    desc:
      'Agent memory that knows when it has expired. A runbook is written against the policy of the day '
      + 'it was written, and nothing about a stale procedure looks stale: it still matches the incident, '
      + 'still executes cleanly, and now does the wrong thing quickly and with confidence. Cascade pins '
      + 'every learned procedure to the exact version of every policy rule it was derived from, so moving '
      + 'one rule invalidates all of its dependents in a transaction of four writes, whether one procedure '
      + 'depends on it or a hundred thousand. Staleness is a join, not a column.',
  },
  {
    title: 'DialRoom',
    link: 'https://github.com/ahammadshawki8/dialroom',
    date: '2026-08-22',
    event: 'Google Cloud Agentic Cinema Hackathon, Grafana Labs track',
    tags: ['Google ADK', 'Gemini', 'Grafana MCP', 'Prometheus', 'Loki'],
    desc:
      'A test screening is the most expensive feedback loop in film, and it returns notes like '
      + '"the second act drags" that nobody can point a frame at. DialRoom streams per-second audience '
      + 'physiology into Grafana Cloud as live telemetry while the film plays, and an agent reads it '
      + 'through the official Grafana MCP server the way an SRE reads an incident, then writes trim '
      + 'recommendations onto the edit timeline at the exact second. Detection is deterministic '
      + 'statistics; the language model explains what the detector found and never decides where the problem is.',
  },
  {
    title: 'Gotcha!',
    image: '/images/projects/gotcha.jpg',
    link: 'https://gotcha-puce.vercel.app',
    repo: 'https://github.com/ahammadshawki8/Gotcha',
    date: '2026-08-16',
    event: 'Prometheus July AI Challenge',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Anthropic', 'Groq'],
    desc:
      'An AI that lies on purpose, so students learn to catch it. Every challenge is generated with '
      + 'exactly one deliberate mistake buried in it. You find it, explain why it is wrong, and say what '
      + 'it should have been, and a second model marks your reasoning. Generation and grading run as '
      + 'separate calls against separate providers so the system never marks its own homework. '
      + 'The goal is not to get answers out of a model, it is to stop taking them on trust.',
  },
  {
    title: 'CADENCE',
    image: '/images/projects/cadence.jpg',
    link: 'https://cadence-murex-eight.vercel.app/',
    repo: 'https://github.com/ahammadshawki8/CADENCE',
    date: '2026-08-04',
    award: 'Winner, Best Overall Project, ML Empowerment Build Challenge 2.0',
    tags: ['PyTorch', 'scikit-learn', 'openSMILE', 'SHAP', 'FastAPI', 'PWA'],
    desc:
      'Screens for Parkinson\'s disease from a 30 second voice sample and explains every score it gives. '
      + 'Three tasks feed the model: a reading passage, a diadochokinetic rate test, and sustained vowel '
      + 'phonation for jitter, shimmer and harmonics-to-noise ratio. The classifier is validated across '
      + 'three independent language corpora with cross-database testing and domain-adversarial training, '
      + 'which deliberately avoids the microphone bias that inflates most published voice screening '
      + 'results. Ships as an installable multilingual progressive web app over a REST API.',
  },
  {
    title: 'DeepSIFT',
    image: '/images/projects/deepsift.jpg',
    link: 'https://github.com/ahammadshawki8/DeepSIFT',
    date: '2026-06-20',
    event: 'Find Evil, SANS DFIR Challenge',
    tags: ['MCP', 'Python', 'Volatility 3', 'Plaso', 'Hayabusa', 'MITRE ATT&CK'],
    desc:
      'A Model Context Protocol layer that turns a language model into an auditable digital forensics '
      + 'analyst. 148 forensic tools parse the output of real SIFT binaries into structured JSON before '
      + 'the model sees a single byte, then enrich findings with MITRE ATT&CK tags and threat '
      + 'intelligence, score confidence on four axes, verify every claim against the evidence that '
      + 'produced it, and write a signable chain of custody. Scored 4/4 against published ground truth '
      + 'on two cases with zero hallucinations and 100% claim grounding.',
  },
  {
    title: 'SolarSnap',
    link: 'https://www.flir.com/developer/blog/2025-app-challenge-winners/',
    repo: 'https://github.com/ahammadshawki8/SolarSnap',
    date: '2026-03-12',
    award: 'Grand Prize Winner, FLIR App Challenge 2025 to 2026',
    tags: ['Android', 'FLIR SDK', 'Thermal Imaging', 'Flask', 'Computer Vision'],
    desc:
      'An asset-linked panel mapper for solar farm inspection crews. The Android app pairs with a FLIR '
      + 'ACE thermal camera and ties every thermal reading to a specific physical panel, then syncs to a '
      + 'Flask backend that turns the captures into fault reports and maintenance history. Linking the '
      + 'thermal data to the asset removes the manual reconciliation step that makes large-array '
      + 'inspection slow, which raises recovered yield without any additional hardware.',
  },
  {
    title: 'Zero',
    link: 'https://zero-670.vercel.app',
    repo: 'https://github.com/ahammadshawki8/Zero',
    date: '2026-04-04',
    tags: ['React', 'TypeScript', 'Vite', 'Leaflet', 'Flask', 'PostgreSQL'],
    desc:
      'A gamified waste management platform that connects citizens, cleaners and administrators around '
      + 'one workflow. A citizen reports waste with a photo, the model classifies its composition and '
      + 'the location snaps to a mapped zone by point-in-polygon check, a cleaner claims the task from a '
      + 'marketplace, and payment is released only after before-and-after image comparison and a citizen '
      + 'review. Four roles, zone polygon mapping, green points, leaderboards and withdrawal tracking.',
  },
  {
    title: 'Appoint',
    image: '/images/projects/appoint.jpg',
    link: 'https://github.com/ahammadshawki8/Appoint',
    date: '2026-03-16',
    event: 'Gemini Live Agent Challenge',
    tags: ['Gemini Live API', 'Gemini Vision', 'Django', 'React', 'Cloud Run', 'Firestore'],
    desc:
      'A voice and vision healthcare assistant for the people medical portals leave behind. It takes a '
      + 'spoken symptom description in English or Bangla, asks its own clarifying questions, reads a '
      + 'photograph of a rash or an injury, flags emergencies against an urgency model, reasons from '
      + 'symptoms to the right specialist with an explicit trade-off between distance, rating and '
      + 'facilities, and completes the booking. Written up in detail on my blog.',
  },
  {
    title: 'Doclyst',
    image: '/images/projects/doclyst.jpg',
    link: 'https://doclyst.vercel.app/',
    repo: 'https://github.com/ahammadshawki8/Doclyst-Frontend',
    date: '2026-01-20',
    award: 'Winner, Best ERNIE Multimodal Application, ERNIE AI Developer Challenge by Baidu',
    tags: ['ERNIE', 'PaddleOCR', 'Flask', 'React', 'TypeScript'],
    desc:
      'A purpose-built medical safety interpreter. Doclyst reads a lab report or a discharge summary, '
      + 'extracts the values with OCR, and returns a plain-language explanation with safety alerts in '
      + 'under 30 seconds, so a patient holding a page of reference ranges can tell which number '
      + 'actually needs attention and which one does not.',
  },
  {
    title: 'Coven',
    image: '/images/projects/coven.jpg',
    link: 'https://coven-mu.vercel.app',
    repo: 'https://github.com/ahammadshawki8/Coven',
    date: '2026-01-11',
    award: 'Winner, Honourable Mention, LMA EDGE Hackathon, showcased at the London finale',
    tags: ['Django', 'React', 'TypeScript', 'PostgreSQL', 'Groq', 'Recharts'],
    desc:
      'Turns loan documentation into a visual timeline with live covenant status, risk signals and '
      + 'explanations a non-specialist can follow. Built for the Loan Market Association\'s global '
      + 'hackathon on how loans are originated, documented, traded and managed across Europe, the '
      + 'Middle East and Africa. The project reached the finals and was shown at the LMA EDGE finale event in London.',
  },
  {
    title: 'DoNotMiss',
    image: '/images/projects/donotmiss.jpg',
    link: 'https://github.com/ahammadshawki8/DoNotMiss',
    date: '2026-01-20',
    event: 'Codegeist 2025, Atlassian Williams Racing Edition',
    tags: ['Atlassian Forge', 'Rovo', 'Jira', 'Chrome Extension', 'JavaScript'],
    desc:
      'Captures work where it actually gets mentioned, in email, chat and web pages, and turns it into '
      + 'a Jira issue without leaving the page. Detection is automatic, creation is not: every issue '
      + 'waits for approval and carries its source link and timestamp, so the context that produced the '
      + 'task survives into the backlog instead of being reconstructed from memory a week later.',
  },
  {
    title: 'Resonate',
    image: '/images/projects/resonate.jpg',
    link: 'https://github.com/ahammadshawki8/Resonate',
    date: '2026-01-30',
    event: 'Build your Flutter Butler with Serverpod',
    tags: ['Flutter', 'Dart', 'Serverpod', 'PostgreSQL', 'Redis'],
    desc:
      'An emotional wellness app that reads mood from how you speak as well as from what you say, '
      + 'combining acoustic and semantic analysis across English and Bengali. Four privacy levels '
      + 'govern what ever leaves the device, and the tracked signal feeds journaling, meditation, music '
      + 'therapy and long-run mental health trends rather than a single daily score.',
  },
  {
    title: 'Poro-lytics',
    image: '/images/projects/porolytics.jpg',
    link: 'https://porolytics-l3k3.vercel.app/',
    date: '2025-12-15',
    event: 'Sky\'s the Limit, Cloud9 and JetBrains Hackathon',
    tags: ['Flask', 'React', 'TypeScript', 'PostgreSQL', 'Graph Theory'],
    desc:
      'A scouting engine for professional League of Legends. It mines match data with graph theory and '
      + 'pattern mining to map how an opponent\'s strategy actually hangs together, identifies the '
      + 'lynchpins the whole plan depends on, and simulates the draft and play patterns that break them. '
      + 'Output is written for a coaching staff, not for a dashboard.',
  },
  {
    title: 'CareForAll',
    image: '/images/projects/careforall.jpg',
    link: 'https://github.com/SrotDev/CareForAll',
    date: '2025-11-21',
    tags: ['Django', 'DRF', 'Next.js', 'Docker', 'Microservices', 'API Gateway'],
    desc:
      'A healthcare and philanthropy platform built as seven independently deployable services: '
      + 'authentication, campaigns, pledges, payments, totals aggregation and chat behind an API '
      + 'gateway, with a Next.js frontend consuming all of them. Built deliberately as a polyrepo with '
      + 'real service boundaries and its own observability stack, rather than a modular monolith '
      + 'wearing the label.',
  },
  {
    title: 'Emotuna',
    image: '/images/projects/emotuna.jpg',
    link: 'https://github.com/SrotDev/Emotuna-Backend',
    date: '2025-09-17',
    tags: ['Python', 'DPO Fine-tuning', 'Transformers', 'Telegram', 'Discord'],
    desc:
      'A privacy-first agent that learns one person\'s texting style, the slang, the tone, the emoji '
      + 'habits, and drafts replies in it across Telegram, Discord, WhatsApp and more. Every message is '
      + 'classified for emotion, sentiment and toxicity, that feedback trains a per-user Direct '
      + 'Preference Optimization model, and each user\'s data stays strictly isolated. Routine replies '
      + 'go out automatically; anything that matters still waits for approval.',
  },
  {
    title: 'Shomonnoy',
    image: '/images/projects/shomonnoy.jpg',
    link: 'https://github.com/SrotDev/shomonnoy',
    date: '2025-09-15',
    tags: ['React', 'Vite', 'Node.js', 'Interactive Mapping'],
    desc:
      'A scheduling and coordination platform for city authorities, so that the water utility, the gas '
      + 'utility and the roads department stop cutting the same street three times in a year. '
      + 'Stakeholders register planned works on a shared map and the system surfaces the conflicts '
      + 'while they are still on paper.',
  },
  {
    title: 'QuranWhispers',
    image: '/images/projects/whisper.jpg',
    link: 'https://github.com/ahammadshawki8/QuranWhispers',
    date: '2025-07-30',
    tags: ['JavaFX', 'Java', 'H2'],
    desc:
      'Designed and built the JavaFX frontend from scratch. QuranWhispers searches verses by emotion '
      + 'and theme rather than by keyword, requests and plays recitations, generates a daily dua and '
      + 'shareable verse posters, and runs an interactive forum driven by smart commands with a '
      + 'dedicated admin panel behind it.',
  },
  {
    title: 'Srabon',
    image: '/images/projects/srabon.jpg',
    link: 'https://srotdev.github.io/Srabon/',
    repo: 'https://github.com/SrotDev/Srabon',
    date: '2025-06-16',
    tags: ['React', 'Django', 'PostgreSQL', 'MongoDB'],
    desc:
      'SrotDev\'s first project, and still the one I am fondest of. An inclusive, gamified science '
      + 'learning app for secondary schoolers that builds a personalised course from a short survey, '
      + 'teaches through storytelling and quizzes rather than exposition, and carries multilingual and '
      + 'accessibility support so that a language barrier or an impairment does not decide who gets to learn.',
  },
  {
    title: 'KugelBlitz: Pace in the Classroom',
    image: '/images/projects/pace.jpg',
    link: 'https://pace-kugelblitz.vercel.app/',
    date: '2024-10-11',
    event: 'NASA Space Apps Challenge 2024',
    tags: ['UI/UX', 'Figma', 'Web'],
    desc:
      'Designed the interface for a classroom astronomy resource built during the NASA Space Apps '
      + 'Challenge 2024, pairing a multi-level game with the study material so that the exploration and '
      + 'the syllabus reinforce each other instead of competing for attention.',
  },
  {
    title: 'Hospital Management System',
    image: '/images/projects/hms.jpg',
    link: 'https://github.com/ahammadshawki8/Hospital-Management-System',
    date: '2021-04-01',
    tags: ['Python', 'Kivy', 'PostgreSQL'],
    desc:
      'An early cross-platform desktop application covering the administrative, medical and billing '
      + 'workflows of a mid-range hospital, built with Kivy over a PostgreSQL schema. One of the first '
      + 'things I wrote that had to hold real state correctly rather than merely run.',
  },
  {
    title: 'CodeInception',
    image: '/images/projects/codeinception.jpg',
    link: 'https://the-as8-organization.github.io/CodeInception/',
    date: '2021-06-01',
    tags: ['Community', 'Curriculum', 'Web'],
    desc:
      'A customisable bootcamp that more than 50,000 young programmers used as a starting point, built '
      + 'with a team of domain experts who ran the sessions. Organising it taught me more about '
      + 'explaining things clearly than any amount of writing code on my own ever did.',
  },
];

export default data;
