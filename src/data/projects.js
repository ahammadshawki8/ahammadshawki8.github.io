/**
 * @typedef {Object} Project
 * @property {string} title - Project name
 * @property {string} date - YYYY-MM-DD, used for sorting and display
 * @property {string} desc - The pitch: what it does, how, and what proves it
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
      'Every options agent knows how to enter a trade. Almost none price what it will cost to get '
      + 'out. HALFSPREAD measures execution cost before every order, ranks structures by what '
      + 'survives it, and settles positions rather than paying the spread twice. That matters more '
      + 'than the signal: crossing costs 0.52% on NVDA and 33% on a QQQ contract with 26 minutes '
      + 'left. Every published figure re-derives from an append-only journal with no key and no '
      + 'network, and the build fails if one stops reproducing.',
  },
  {
    title: 'Cassandra',
    image: '/images/projects/cassandra.jpg',
    link: 'https://github.com/ahammadshawki8/Cassandra',
    date: '2026-09-01',
    event: 'All Things Agentic Hackathon',
    tags: ['Google ADK', 'Gemini', 'Cloud Run', 'Pub/Sub', 'Firestore', 'FastAPI'],
    desc:
      'Spreadsheets are the largest untested codebase on earth, and 94% of them contain an error. '
      + 'Cassandra is continuous integration for them. Drop a workbook in a bucket and an agent '
      + 'fleet wakes from zero, builds a formula dependency graph, writes the fix, and proves it by '
      + 'recalculating the file. Any correction that moves the wrong cell is rejected with its '
      + 'reason. On the demo model it caught a workbook claiming 6.2M in operating income for a '
      + 'company that had lost 1.7M, and repaired five defects in 114 seconds unattended.',
  },
  {
    title: 'Cascade',
    image: '/images/projects/cascade.jpg',
    link: 'https://main.d1fzvx73990zqu.amplifyapp.com',
    date: '2026-08-30',
    event: 'CockroachDB and AWS Hackathon, Build with Agentic Memory',
    tags: ['AWS Bedrock', 'CockroachDB', 'ECS Fargate', 'Next.js', 'FastAPI'],
    desc:
      'The problem with an automated runbook is not finding it, it is knowing whether it is still '
      + 'true. Nothing about a stale procedure looks stale: it matches the incident, executes '
      + 'cleanly, and does the wrong thing with confidence. Cascade pins every learned procedure to '
      + 'the exact version of each policy rule behind it, so changing one rule invalidates all its '
      + 'dependents in four writes, whether that is one procedure or a hundred thousand. Staleness '
      + 'is a join, not a column.',
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
      'An AI that lies on purpose, so students learn to catch it. Every challenge hides exactly one '
      + 'deliberate mistake. You find it, explain why it is wrong, and say what it should have been, '
      + 'and a second model on a different provider marks your reasoning. Separating generation from '
      + 'grading is what makes the score worth anything: the system never marks its own homework. '
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
      'Parkinson\'s screening from a 30 second voice sample, with an explanation attached to every '
      + 'score. Three tasks feed the model: a reading passage, a diadochokinetic rate test, and '
      + 'sustained vowel phonation for jitter, shimmer and harmonics-to-noise ratio. The classifier '
      + 'is validated across three independent language corpora using cross-database testing and '
      + 'domain-adversarial training, which is what separates a real result from the microphone bias '
      + 'that inflates most published voice screening work. Ships as an installable multilingual PWA.',
  },
  {
    title: 'DeepSIFT',
    image: '/images/projects/deepsift.jpg',
    link: 'https://github.com/ahammadshawki8/DeepSIFT',
    date: '2026-06-20',
    event: 'Find Evil, SANS DFIR Challenge',
    tags: ['MCP', 'Python', 'Volatility 3', 'Plaso', 'Hayabusa', 'MITRE ATT&CK'],
    desc:
      'Forensic evidence is worthless if the analyst cannot show where a conclusion came from, which '
      + 'rules out a model that guesses at CLI output. DeepSIFT parses 148 real SIFT tools into '
      + 'structured JSON before the model sees a byte, tags findings against MITRE ATT&CK, scores '
      + 'confidence on four axes, verifies every claim against the evidence that produced it, and '
      + 'writes a signable chain of custody. Scored 4/4 against published ground truth on two cases '
      + 'with zero hallucinations and 100% claim grounding.',
  },
  {
    title: 'Zero',
    image: '/images/projects/zero.jpg',
    link: 'https://zero-670.vercel.app',
    repo: 'https://github.com/ahammadshawki8/Zero',
    date: '2026-04-04',
    tags: ['React', 'TypeScript', 'Vite', 'Leaflet', 'Flask', 'PostgreSQL'],
    desc:
      'Waste gets reported and never collected because nobody is accountable for the gap. Zero '
      + 'closes it with money. A citizen reports with a photo, the model classifies the waste and '
      + 'the location snaps to a mapped zone by point-in-polygon check, a cleaner claims the job from '
      + 'a marketplace, and payment releases only after before-and-after image comparison plus a '
      + 'citizen review. Four roles, zone mapping, green points, leaderboards and withdrawals.',
  },
  {
    title: 'Appoint',
    image: '/images/projects/appoint.jpg',
    link: 'https://github.com/ahammadshawki8/Appoint',
    date: '2026-03-16',
    event: 'Gemini Live Agent Challenge',
    tags: ['Gemini Live API', 'Gemini Vision', 'Django', 'React', 'Cloud Run', 'Firestore'],
    desc:
      'Healthcare portals assume you already know which specialist you need. Appoint does not. '
      + 'Describe a symptom out loud in English or Bangla, or show it a photograph of a rash or an '
      + 'injury, and it asks its own follow-up questions, flags emergencies against an urgency model, '
      + 'reasons from symptoms to the right specialist with an explicit trade-off between distance, '
      + 'rating and facilities, then completes the booking. Built for the people portals leave behind.',
  },
  {
    title: 'SolarSnap',
    image: '/images/projects/solarsnap.jpg',
    link: 'https://www.flir.com/developer/blog/2025-app-challenge-winners/',
    repo: 'https://github.com/ahammadshawki8/SolarSnap',
    date: '2026-03-12',
    award: 'Grand Prize Winner, FLIR App Challenge 2025 to 2026',
    tags: ['Android', 'FLIR SDK', 'Thermal Imaging', 'Flask', 'Computer Vision'],
    desc:
      'A thermal image of a failing solar panel is useless if nobody can say which panel it was. '
      + 'SolarSnap pairs an Android app with a FLIR ACE camera and binds every reading to a specific '
      + 'physical asset, syncing to a Flask backend that turns captures into fault reports and '
      + 'maintenance history. Removing the manual reconciliation step is what makes large-array '
      + 'inspection viable, and it recovers yield without any additional hardware on site.',
  },
  {
    title: 'Resonate',
    image: '/images/projects/resonate.jpg',
    link: 'https://github.com/ahammadshawki8/Resonate',
    date: '2026-01-30',
    event: 'Build your Flutter Butler with Serverpod',
    tags: ['Flutter', 'Dart', 'Serverpod', 'PostgreSQL', 'Redis'],
    desc:
      'Mood trackers ask how you feel. Resonate listens to how you say it, combining acoustic and '
      + 'semantic analysis across English and Bengali so the signal does not depend on self-report. '
      + 'Four privacy levels govern what ever leaves the device, and the tracked signal feeds '
      + 'journaling, meditation and long-run mental health trends rather than a single daily number.',
  },
  {
    title: 'DoNotMiss',
    image: '/images/projects/donotmiss.jpg',
    link: 'https://github.com/ahammadshawki8/DoNotMiss',
    date: '2026-01-20',
    event: 'Codegeist 2025, Atlassian Williams Racing Edition',
    tags: ['Atlassian Forge', 'Rovo', 'Jira', 'Chrome Extension', 'JavaScript'],
    desc:
      'Work gets assigned in passing, in an email or a chat message, and then lives or dies on '
      + 'somebody remembering it. DoNotMiss catches it where it is said and turns it into a Jira '
      + 'issue without leaving the page. Detection is automatic, creation is not: every issue waits '
      + 'for approval and carries its source link and timestamp, so the context survives into the '
      + 'backlog instead of being reconstructed from memory a week later.',
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
      'A patient holding a lab report has every number and no idea which one matters. Doclyst reads '
      + 'the report, extracts the values with OCR, and returns a plain-language explanation with '
      + 'safety alerts in under 30 seconds, so the thing that needs attention is the thing that '
      + 'stands out. Built as a safety interpreter, not a diagnosis tool.',
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
      'Loan covenants are buried in documents nobody rereads until one is breached. Coven turns the '
      + 'documentation into a visual timeline with live covenant status, risk signals and '
      + 'explanations a non-specialist can act on. Built for the Loan Market Association\'s global '
      + 'hackathon on how loans are originated, documented, traded and managed, and presented at the '
      + 'LMA EDGE finale in London.',
  },
  {
    title: 'Chimera Protocol',
    image: '/images/projects/chimera.jpg',
    link: 'https://chimera-six.vercel.app/',
    repo: 'https://github.com/ahammadshawki8/Chimera_Protocol',
    date: '2025-12-15',
    event: 'Kiroween',
    tags: ['Django', 'React', 'PostgreSQL', 'Three.js', 'Multi-LLM'],
    desc:
      'Switch model providers and your context resets, which quietly locks you into whichever one '
      + 'you started with. Chimera Protocol is a shared memory layer that survives the switch: '
      + 'conversations, documents and imported pages are vectorised once and injected into whichever '
      + 'model answers next, across OpenAI, Anthropic, Google and DeepSeek. Team workspaces, and a '
      + 'developer console for inspecting what the router actually did.',
  },
  {
    title: 'GenForge',
    image: '/images/projects/genforge.jpg',
    link: 'https://fibo-3d-2d.vercel.app/',
    repo: 'https://github.com/ahammadshawki8/GenForgeSprite',
    date: '2025-12-14',
    event: 'FIBO Hackathon',
    tags: ['FastAPI', 'FIBO', 'Flask', 'React', 'Three.js'],
    desc:
      'Generated game art usually arrives as a picture, which is not the same as an asset. GenForge '
      + 'turns a text prompt into production-ready content through two engines, one for 2D sprite '
      + 'sheet animations and one for 3D models, both emitting formats that drop straight into Unity '
      + 'or Godot with no manual cleanup in between.',
  },
  {
    title: 'CareForAll',
    image: '/images/projects/careforall.jpg',
    link: 'https://github.com/SrotDev/CareForAll',
    date: '2025-11-21',
    tags: ['Django', 'DRF', 'Next.js', 'Docker', 'Microservices', 'API Gateway'],
    desc:
      'A healthcare and philanthropy platform built as seven services that genuinely deploy on their '
      + 'own: authentication, campaigns, pledges, payments, totals aggregation and chat behind an API '
      + 'gateway, with a Next.js frontend over all of them. Built as a polyrepo with real service '
      + 'boundaries and its own Prometheus and Grafana stack, specifically to learn where that '
      + 'architecture pays for itself and where it does not.',
  },
  {
    title: 'Emotuna',
    image: '/images/projects/emotuna.jpg',
    link: 'https://github.com/SrotDev/Emotuna-Backend',
    date: '2025-09-17',
    tags: ['Python', 'DPO Fine-tuning', 'Transformers', 'Telegram', 'Discord'],
    desc:
      'Autocomplete writes like everyone. Emotuna writes like you. It learns one person\'s slang, '
      + 'tone and emoji habits and drafts replies in that voice across Telegram, Discord, WhatsApp '
      + 'and more. Messages are classified for emotion, sentiment and toxicity, that feedback trains '
      + 'a per-user Direct Preference Optimization model, and each user\'s data stays strictly '
      + 'isolated. Routine replies go out automatically; anything that matters waits for approval.',
  },
  {
    title: 'Shomonnoy',
    image: '/images/projects/shomonnoy.jpg',
    link: 'https://github.com/SrotDev/shomonnoy',
    date: '2025-09-15',
    tags: ['React', 'Vite', 'Node.js', 'Interactive Mapping'],
    desc:
      'The water utility, the gas utility and the roads department cut the same street three times a '
      + 'year because none of them can see the others\' plans. Shomonnoy puts every scheduled work '
      + 'on one shared map and surfaces the clashes while they are still on paper, which is the only '
      + 'point at which fixing them is cheap.',
  },
  {
    title: 'QuranWhispers',
    image: '/images/projects/whisper.jpg',
    link: 'https://github.com/ahammadshawki8/QuranWhispers',
    date: '2025-07-30',
    tags: ['JavaFX', 'Java', 'H2'],
    desc:
      'Keyword search is the wrong tool when you know how you feel but not what you are looking for. '
      + 'QuranWhispers searches verses by emotion and theme instead, plays and requests recitations, '
      + 'generates a daily dua and shareable verse posters, and runs an interactive forum driven by '
      + 'smart commands with a full admin panel behind it. I designed and built the JavaFX frontend '
      + 'from scratch.',
  },
  {
    title: 'Srabon',
    image: '/images/projects/srabon.jpg',
    link: 'https://srotdev.github.io/Srabon/',
    repo: 'https://github.com/SrotDev/Srabon',
    date: '2025-06-16',
    tags: ['React', 'Django', 'PostgreSQL', 'MongoDB'],
    desc:
      'SrotDev\'s first project, and still the one I am fondest of. Srabon builds a personalised '
      + 'science course for a secondary schooler from a short survey, then teaches it through '
      + 'storytelling and quizzes rather than exposition. Multilingual and accessibility support are '
      + 'in the design from the start, so a language barrier or an impairment does not decide who '
      + 'gets to learn.',
  },
  {
    title: 'KugelBlitz: Pace in the Classroom',
    image: '/images/projects/pace.jpg',
    link: 'https://pace-kugelblitz.vercel.app/',
    date: '2024-10-11',
    event: 'NASA Space Apps Challenge 2024',
    tags: ['UI/UX', 'Figma', 'Web'],
    desc:
      'A classroom astronomy resource that pairs a multi-level game with the study material so the '
      + 'exploration and the syllabus reinforce each other instead of competing for attention. I '
      + 'designed the interface during the NASA Space Apps Challenge 2024.',
  },
  {
    title: 'CodeInception',
    image: '/images/projects/codeinception.jpg',
    link: 'https://the-as8-organization.github.io/CodeInception/',
    date: '2021-06-01',
    tags: ['Community', 'Curriculum', 'Web'],
    desc:
      'A customisable bootcamp that more than 50,000 young programmers used as a starting point, run '
      + 'with a team of domain experts who led the sessions. Organising it taught me more about '
      + 'explaining things clearly than any amount of writing code alone ever did.',
  },
  {
    title: 'Hospital Management System',
    image: '/images/projects/hms.jpg',
    link: 'https://github.com/ahammadshawki8/Hospital-Management-System',
    date: '2021-04-01',
    tags: ['Python', 'Kivy', 'PostgreSQL'],
    desc:
      'A cross-platform desktop application covering the administrative, medical and billing '
      + 'workflows of a mid-range hospital, built with Kivy over a PostgreSQL schema. One of the '
      + 'first things I wrote that had to hold real state correctly rather than merely run.',
  },
];

export default data;
