export type ProgrammeOptionName =
  | '3-Day Motivational Crash Course'
  | '3-Month Personality Development Course';

export interface ProgrammeCurriculumMonth {
  month: string;
  title: string;
  description: string;
}

export interface ProgrammeData {
  id: '3-day-crash-course' | '3-month-personality-course';
  code: string;
  title: ProgrammeOptionName;
  subtitle: string;
  duration: string;
  structure: string;
  totalCommitment: string;
  batchSize: string;
  price: string;
  focus: string;
  specialFeature?: string;
  includes: string;
  highlights: string[];
  monthlyProgression?: ProgrammeCurriculumMonth[];
}

export interface FounderData {
  id: 'raghuvir-ojha' | 'mousumi-ojha';
  initials: string;
  name: string;
  headline: string;
  facts: string[];
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  linkedInUrl?: string;
  linkedInLabel?: string;
  expectedPhotoPath: string;
}

export const BRAND_INFO = {
  name: 'DUO',
  tagline: 'Unlock Your Strength · Achieve Your Ultimate.',
  location: 'Bengaluru, Karnataka, India',
  description:
    'A personality development, soft-skills training, motivational coaching, and personal development initiative dedicated to helping students, graduates, job seekers, and professionals communicate with clarity and carry themselves with confidence.',
  offlinePaymentNotice:
    'Programme registration on this website does not require an online payment. All fee payments are handled offline directly with the DUO team through our phone or WhatsApp contact process.',
  officialWhatsAppConfirmed: Boolean(
    import.meta.env.VITE_OFFICIAL_WHATSAPP_NUMBER &&
      String(import.meta.env.VITE_OFFICIAL_WHATSAPP_NUMBER).trim() !== ''
  ),
  officialWhatsAppNumber: String(import.meta.env.VITE_OFFICIAL_WHATSAPP_NUMBER || '').trim(),
};

export const FOCUS_AREAS = [
  {
    number: '01',
    title: 'Motivational Training',
    description:
      'Structured sessions focused on self-belief, clarity of purpose, and constructive mindset development.',
  },
  {
    number: '02',
    title: 'Soft Skills Training',
    description:
      'Practical interpersonal and workplace communication skills for academic, interview, and professional environments.',
  },
  {
    number: '03',
    title: 'Attitude & Behavioural Coaching',
    description:
      'Guided reflection and behavioural refinement to support composure, adaptability, and positive engagement.',
  },
  {
    number: '04',
    title: 'Life Coaching',
    description:
      'Personalised perspective and structured direction for navigating personal and career transitions.',
  },
  {
    number: '05',
    title: 'Personality Development',
    description:
      'Holistic development of spoken expression, self-awareness, body language, and personal presence.',
  },
  {
    number: '06',
    title: 'Grooming',
    description:
      'Attention to attire, professional etiquette, decorum, and mannerisms suited for formal and everyday contexts.',
  },
] as const;

export const TRAINING_OBJECTIVES = [
  {
    code: 'OBJ — 01',
    title: 'Expert Mentorship',
    description:
      'Learn directly from experienced practitioners in training, design, and soft-skills development through personal guidance.',
  },
  {
    code: 'OBJ — 02',
    title: 'Build Confidence',
    description:
      'Develop greater ease when speaking in groups, addressing interviews, and expressing viewpoints clearly.',
  },
  {
    code: 'OBJ — 03',
    title: 'Enhance Communication',
    description:
      'Assess current speaking habits and practise structured, articulate verbal and non-verbal expression.',
  },
  {
    code: 'OBJ — 04',
    title: 'Improve Presentability',
    description:
      'Refine attire, choice of words, decorum, and mannerisms to project a composed professional image.',
  },
  {
    code: 'OBJ — 05',
    title: 'Achieve Your Goals',
    description:
      'Work systematically toward personal growth and interview readiness through focused assessment and practice.',
  },
] as const;

export const PROGRAMMES: ProgrammeData[] = [
  {
    id: '3-day-crash-course',
    code: 'PROGRAMME A',
    title: '3-Day Motivational Crash Course',
    subtitle: 'Focused short-format programme for developing the inner self and speaking skills.',
    duration: '3 days',
    structure: '2 hours per day',
    totalCommitment: '6 hours across 3 days',
    batchSize: 'Not specified',
    price: '₹6,000',
    focus: 'Developing the inner self and speaking skills.',
    specialFeature: 'Day 3 includes a personal interaction at the DUO office or another selected place.',
    includes: 'Memento and certificate',
    highlights: [
      'Duration: 3 days (2 hours per day; 6 hours total across 3 days)',
      'Core focus on developing the inner self and speaking skills',
      'Day 3 dedicated to personal interaction at the DUO office or another selected place',
      'Includes a memento and certificate upon completion',
    ],
  },
  {
    id: '3-month-personality-course',
    code: 'PROGRAMME B',
    title: '3-Month Personality Development Course',
    subtitle:
      'Comprehensive 30-class curriculum covering personality development, interview preparation, and speaking skills improvement.',
    duration: '3 months',
    structure: '30 classes total',
    totalCommitment: '30 classes across 3 months',
    batchSize: 'Minimum 5, maximum 10 participants',
    price: '₹30,000',
    focus: 'Personality development, interview preparation, and speaking skills improvement.',
    includes: 'Memento and completion certificate',
    highlights: [
      'Duration: 3 months comprising 30 total classes',
      'Small batch format: minimum 5, maximum 10 participants per batch',
      'Focus on personality development, interview preparation, and speaking skills improvement',
      'Structured 3-month progression from communication assessment to decorum and mannerisms',
      'Includes a memento and completion certificate',
    ],
    monthlyProgression: [
      {
        month: 'Month 1',
        title: 'Assessment & Foundation',
        description:
          'Introduction, communication assessment, and identification of areas to improve.',
      },
      {
        month: 'Month 2',
        title: 'Skill Redefinition & Presentability',
        description:
          'Targeted improvement, redefining skills, and presentability.',
      },
      {
        month: 'Month 3',
        title: 'Refinement & Professional Decorum',
        description:
          'Attire, choice of words, decorum, and mannerisms.',
      },
    ],
  },
];

export const FOUNDERS: FounderData[] = [
  {
    id: 'raghuvir-ojha',
    initials: 'RO',
    name: 'Raghuvir Ojha',
    headline: 'Automotive Training & Launch Specialist',
    facts: [
      'Automotive training and launch specialist.',
      'More than 30 years of experience.',
    ],
    phoneDisplay: '+91 70199 59487',
    phoneHref: 'tel:+917019959487',
    email: 'raghuvir.ojha@gmail.com',
    emailHref: 'mailto:raghuvir.ojha@gmail.com',
    expectedPhotoPath: '/images/founders/raghuvir-ojha.jpg',
  },
  {
    id: 'mousumi-ojha',
    initials: 'MO',
    name: 'Mousumi Ojha',
    headline: 'Designer & Soft-Skills Trainer',
    facts: [
      'Designer and trainer.',
      'Experience in design, historic conservation, and soft-skills training.',
      'Founded Vaastu Interiors in 2008.',
    ],
    phoneDisplay: '+91 93530 43549',
    phoneHref: 'tel:+919353043549',
    email: 'ojhamousumi@gmail.com',
    emailHref: 'mailto:ojhamousumi@gmail.com',
    linkedInUrl: 'https://linkedin.com/in/mousumi-ojha',
    linkedInLabel: 'linkedin.com/in/mousumi-ojha',
    expectedPhotoPath: '/images/founders/mousumi-ojha.jpg',
  },
];

export const SHEET_COLUMNS = [
  { index: 1, name: 'Registration ID', example: 'DUO-20261025-4821', note: 'Auto-generated by Apps Script' },
  { index: 2, name: 'Submitted At', example: '2026-10-25 14:30:12 IST', note: 'Auto-generated timestamp' },
  { index: 3, name: 'Full Name', example: 'Aarav Sharma', note: 'Required applicant field' },
  { index: 4, name: 'Mobile Number', example: '+91 98765 43210', note: 'Required with country code' },
  { index: 5, name: 'Email Address', example: 'aarav@example.com', note: 'Optional applicant field' },
  { index: 6, name: 'Selected Programme', example: '3-Month Personality Development Course', note: 'Required programme choice' },
  { index: 7, name: 'Preferred Contact Method', example: 'WhatsApp', note: 'WhatsApp or Phone' },
  { index: 8, name: 'Additional Information', example: 'Enquiring about upcoming batch.', note: 'Optional message' },
  { index: 9, name: 'Privacy Consent', example: 'Yes (Consented)', note: 'Required checkbox verification' },
  { index: 10, name: 'Registration Status', example: 'New', note: 'Default status set to "New"' },
] as const;
