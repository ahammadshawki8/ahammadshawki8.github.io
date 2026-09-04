/**
 * What I take on. Rendered as the "Work with me" grid on the contact page.
 *
 * @typedef {Object} Service
 * @property {string} title
 * @property {string} desc
 * @property {string[]} stack - Representative tools, not an exhaustive list
 */
const services = [
  {
    title: 'Full-Stack Web Applications',
    desc:
      'End to end product work, from schema and API design through to the interface people actually '
      + 'use. I take a problem statement and return something deployed, tested and documented.',
    stack: ['React', 'Next.js', 'Django', 'FastAPI', 'PostgreSQL', 'TypeScript'],
  },
  {
    title: 'AI and Agentic Systems',
    desc:
      'Language model features that hold up outside a demo: tool use, retrieval, Model Context '
      + 'Protocol servers, and the grounding and evaluation work that decides whether the output can '
      + 'be trusted. I keep the deterministic parts deterministic and give the model the smallest job '
      + 'that only it can do.',
    stack: ['MCP', 'Gemini', 'Claude', 'RAG', 'Google ADK', 'Evaluation'],
  },
  {
    title: 'Machine Learning',
    desc:
      'Model development with honest validation. Cross-database testing rather than a convenient '
      + 'split, explainability alongside the prediction, and a written account of what the model does '
      + 'not know.',
    stack: ['PyTorch', 'scikit-learn', 'Pandas', 'SHAP', 'Signal Processing'],
  },
  {
    title: 'Backend and Infrastructure',
    desc:
      'Service architecture, REST API design, containerisation, CI/CD and observability. Comfortable '
      + 'splitting a monolith into services that genuinely deploy independently, and comfortable '
      + 'telling you when that is the wrong idea.',
    stack: ['Docker', 'Google Cloud', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Interface and Experience Design',
    desc:
      'Product design that survives contact with implementation, because I build what I design. '
      + 'Wireframes through to a working design system, with accessibility treated as a requirement '
      + 'rather than a later pass.',
    stack: ['Figma', 'Design Systems', 'Accessibility', 'Prototyping'],
  },
  {
    title: 'Technical Writing',
    desc:
      'Documentation, architecture write-ups and long-form articles. Published on freeCodeCamp News '
      + 'and my own blog, and used as the primary documentation on every project I ship.',
    stack: ['Documentation', 'Architecture Notes', 'Tutorials'],
  },
];

export default services;
