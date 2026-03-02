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
    goal: 'Build smooth three-ball consistency and clean transitions between patterns.',
    cadence: '20 minutes, 5 days per week for 6 weeks.',
    milestones: ['100 uninterrupted catches', 'Controlled pattern resets', 'Basic reverse cascade'],
    currentFocus: 'Consistency under fatigue and timing discipline.',
    media: 'Video log placeholder'
  },
  {
    title: 'Balloon Artistry Sprint',
    goal: 'Develop repeatable foundational designs that can be delivered quickly and reliably.',
    cadence: '30 minutes, 4 days per week for 8 weeks.',
    milestones: ['Core shape library', 'Timing under 3 minutes per model', 'Mini showcase set'],
    currentFocus: 'Improving hand speed while preserving form quality.',
    media: 'Image gallery placeholder'
  },
  {
    title: 'Piano Sprint',
    goal: 'Rebuild left/right hand independence and improve dynamic control in simple pieces.',
    cadence: '25 minutes daily with one weekly review session.',
    milestones: ['Scales in two keys', 'One complete piece from memory', 'Recorded practice checkpoint'],
    currentFocus: 'Tempo stability with a metronome and deliberate phrasing.',
    media: 'Audio recording placeholder'
  }
];
