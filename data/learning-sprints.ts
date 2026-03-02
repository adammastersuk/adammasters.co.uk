export type LearningSprint = {
  title: string;
  goal: string;
  cadence: string;
  milestones: string[];
  currentFocus: string;
  media: string;
};

export const learningSprints: LearningSprint[] = [
  {
    title: 'Juggling Sprint',
    goal: 'Build smooth three-ball consistency and cleaner transitions between patterns.',
    cadence: '20 minutes, 5 days per week for 6 weeks.',
    milestones: ['100 uninterrupted catches', 'Controlled pattern resets', 'Basic reverse cascade'],
    currentFocus: 'Consistency under fatigue and better timing control.',
    media: 'Video log placeholder'
  },
  {
    title: 'Balloon Artistry Sprint',
    goal: 'Develop reliable foundational designs that I can deliver quickly.',
    cadence: '30 minutes, 4 days per week for 8 weeks.',
    milestones: ['Core shape library', 'Timing under 3 minutes per model', 'Mini showcase set'],
    currentFocus: 'Improving hand speed while keeping form clean.',
    media: 'Image gallery placeholder'
  },
  {
    title: 'Piano Sprint',
    goal: 'Rebuild left and right hand independence with better dynamic control in simple pieces.',
    cadence: '25 minutes daily with one weekly review session.',
    milestones: ['Scales in two keys', 'One complete piece from memory', 'Recorded practice checkpoint'],
    currentFocus: 'Tempo stability with a metronome and deliberate phrasing.',
    media: 'Audio recording placeholder'
  }
];
