/**
 * Competency is a 1 to 5 scale.
 * 5: I reach for this without thinking and have shipped a lot with it.
 * 4: Comfortable in production, including the parts that are not in the tutorial.
 * 3: Have built real things with it and know where the edges are.
 * 2: Working knowledge, would need the documentation open.
 * 1: Have used it enough to know what it is for.
 */
const skills = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'AI & Machine Learning'],
  },
  {
    title: 'C / C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'SQL, PostgreSQL',
    competency: 4,
    category: ['Languages', 'Backend & Data'],
  },
  {
    title: 'HTML, CSS, SASS',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Dart',
    competency: 3,
    category: ['Languages'],
  },

  // Web development
  {
    title: 'React',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Django, Django REST Framework',
    competency: 5,
    category: ['Web Development', 'Backend & Data'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Backend & Data'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Backend & Data'],
  },
  {
    title: 'Node.js, Express',
    competency: 3,
    category: ['Web Development', 'Backend & Data'],
  },
  {
    title: 'Tailwind CSS, Bootstrap',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Flutter',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'JavaFX',
    competency: 4,
    category: ['Web Development'],
  },

  // AI and machine learning
  {
    title: 'PyTorch',
    competency: 4,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'scikit-learn',
    competency: 4,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'LLM Application Engineering',
    competency: 5,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'Agentic Systems, Tool Use',
    competency: 5,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'Model Context Protocol (MCP)',
    competency: 5,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'Retrieval Augmented Generation',
    competency: 4,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'Model Evaluation & Grounding',
    competency: 4,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'NumPy, Pandas, Matplotlib',
    competency: 5,
    category: ['AI & Machine Learning', 'Backend & Data'],
  },
  {
    title: 'Speech Recognition, Whisper',
    competency: 3,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'Bengali NLP',
    competency: 4,
    category: ['AI & Machine Learning'],
  },
  {
    title: 'OpenCV, Signal Processing',
    competency: 3,
    category: ['AI & Machine Learning'],
  },

  // Backend, data and infrastructure
  {
    title: 'REST API Design',
    competency: 5,
    category: ['Backend & Data'],
  },
  {
    title: 'Database Design & Modelling',
    competency: 4,
    category: ['Backend & Data'],
  },
  {
    title: 'MongoDB, Redis',
    competency: 3,
    category: ['Backend & Data'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Google Cloud (Run, Pub/Sub, Firestore, Vertex AI)',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'AWS (Bedrock, ECS Fargate, Lambda)',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'CI/CD, GitHub Actions',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Prometheus, Grafana, Observability',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'Microservice Architecture',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Git, Linux, Shell',
    competency: 4,
    category: ['Infrastructure'],
  },

  // Engineering practice
  {
    title: 'Data Structures & Algorithms',
    competency: 4,
    category: ['Practice'],
  },
  {
    title: 'Object Oriented Design',
    competency: 5,
    category: ['Practice'],
  },
  {
    title: 'Automated Testing',
    competency: 4,
    category: ['Practice'],
  },
  {
    title: 'Technical Writing & Documentation',
    competency: 5,
    category: ['Practice'],
  },
  {
    title: 'UI/UX Design, Figma',
    competency: 4,
    category: ['Practice', 'Web Development'],
  },
  {
    title: 'Technical Leadership & Mentoring',
    competency: 4,
    category: ['Practice'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// A list of colours I like. The length should match the number of categories.
// Re-arrange until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
