/**
 * The block a recruiter reads first: what I do, and the numbers that back it.
 */
const summary = {
  headline: 'Software Engineer, AI Systems and Full-Stack',

  paragraphs: [
    'Computer Science and Engineering undergraduate at BUET. I take products from a problem '
    + 'statement to something deployed, tested and documented: React and Next.js on the front, '
    + 'Django and FastAPI behind them, and PyTorch, MCP and agent tooling where the problem calls '
    + 'for it.',

    'Four competition wins from 32 hackathons, including the Grand Prize at the FLIR App Challenge '
    + 'and first place overall at the ML Empowerment Build Challenge. I founded and lead SrotDev, '
    + 'and previously led a 30-person engineering team as President of Web and App Development at '
    + 'NDITC. Available for internships, contract work and collaboration.',
  ],

  // Kept deliberately short. Each one is checkable.
  highlights: [
    { value: '4', label: 'Hackathon wins', detail: 'from 32 entered, including a Grand Prize' },
    { value: '23', label: 'Projects shipped', detail: 'each one deployed and documented' },
    { value: '20k+', label: 'Learners reached', detail: 'through free community programmes' },
    { value: '30', label: 'Engineers led', detail: 'as President of Web and App Development' },
  ],
};

export default summary;
