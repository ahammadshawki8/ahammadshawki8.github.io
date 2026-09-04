/**
 * The block a recruiter reads first: what I do, and the numbers that back it.
 */
const summary = {
  headline: 'Software engineer building AI-native systems',

  paragraphs: [
    'I am a Computer Science and Engineering undergraduate at BUET, and I build systems where '
    + 'a language model has to be right rather than merely fluent. That work spans agentic '
    + 'architectures, applied machine learning, and the full-stack products around them.',

    'The principle I keep arriving at from different directions is this: give the model the '
    + 'smallest job that only it can do, and make everything around it deterministic, measurable '
    + 'and reproducible. It is why my trading agent re-derives every published number from its '
    + 'own journal, and why my forensics layer refuses to assert anything it cannot ground in '
    + 'evidence.',
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
