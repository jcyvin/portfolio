export type SampleSite = {
  slug: string;
  name: string;
  description: string;
  accent: string;
  hero: string;
  highlight: string;
  metrics: { label: string; value: string }[];
  features: string[];
};

export const sampleSites: SampleSite[] = [
  {
    slug: 'thesisflow',
    name: 'ThesisFlow',
    description:
      'A web-based research management system designed to streamline thesis submissions, adviser assignments, and academic workflows.',
    accent: 'Blue',
    hero:
      'Simplifying research management through automation and intelligent recommendations.',
    highlight:
      'Features an AI-powered adviser recommendation system using TF-IDF and cosine similarity.',
    metrics: [
      { label: 'Backend', value: 'Flask' },
      { label: 'Database', value: 'PostgreSQL' },
      { label: 'AI', value: 'NLP' }
    ],
    features: [
      'Research submission and document management',
      'Adviser recommendation using machine learning techniques',
      'Role-based access control for students, advisers, and administrators'
    ]
  },
  {
    slug: 'netforce',
    name: 'NetForce ERP',
    description:
      'An enterprise resource planning platform that centralizes business operations into a unified system.',
    accent: 'Emerald',
    hero:
      'Helping organizations manage operations more efficiently through integrated business tools.',
    highlight:
      'Combines inventory, procurement, accounting, and HR functions into a single platform.',
    metrics: [
      { label: 'Frontend', value: 'React' },
      { label: 'Backend', value: 'Flask' },
      { label: 'Modules', value: 'ERP' }
    ],
    features: [
      'Inventory and asset management',
      'Procurement and accounting workflows',
      'HR and employee information management'
    ]
  },
  {
    slug: 'portfolio',
    name: 'Personal Portfolio',
    description:
      'A modern portfolio showcasing my projects, technical skills, certifications, and professional experience.',
    accent: 'Gold',
    hero:
      'Computer Science graduate focused on software development, AI, and IT solutions.',
    highlight:
      'Built with Next.js and designed for performance, accessibility, and responsiveness.',
    metrics: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Performance', value: 'Optimized' },
      { label: 'Design', value: 'Responsive' }
    ],
    features: [
      'Project showcase with detailed case studies',
      'Skills, certifications, and experience sections',
      'Fully responsive design for desktop and mobile'
    ]
  }
];

export function getSampleSite(slug: string) {
  return sampleSites.find((site) => site.slug === slug);
}