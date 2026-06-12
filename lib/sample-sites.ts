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
    slug: 'lumen',
    name: 'Lumen Studio',
    description: 'A luminous editorial homepage with layered cards and cinematic spacing.',
    accent: 'Soft gold',
    hero: 'Editorial clarity for a modern creative studio.',
    highlight: 'Built for storytelling and premium brand presentation.',
    metrics: [
      { label: 'Load feel', value: 'Fast' },
      { label: 'Style', value: 'Editorial' },
      { label: 'Mood', value: 'Warm' }
    ],
    features: [
      'Large hero statement with confident hierarchy',
      'Soft depth, glass borders, and restrained motion',
      'Responsive layout that keeps the page readable on mobile'
    ]
  },
  {
    slug: 'atlas',
    name: 'Atlas Works',
    description: 'A product-led sample site focused on structure, credibility, and sharp transitions.',
    accent: 'Moss green',
    hero: 'Built for product launches and service pages.',
    highlight: 'Balances utility with a bold visual rhythm.',
    metrics: [
      { label: 'Focus', value: 'Conversion' },
      { label: 'Tone', value: 'Direct' },
      { label: 'Layout', value: 'Grid' }
    ],
    features: [
      'Strong card grid for services and case studies',
      'High-contrast text over olive gradients',
      'Clean section flow for quick scanning'
    ]
  },
  {
    slug: 'verdant',
    name: 'Verdant Archive',
    description: 'A calm, museum-like sample page for portfolios, writing, or curated collections.',
    accent: 'Deep olive',
    hero: 'A quieter visual language with a refined finish.',
    highlight: 'Designed for thoughtful content and long-form browsing.',
    metrics: [
      { label: 'Spacing', value: 'Airy' },
      { label: 'Texture', value: 'Rich' },
      { label: 'Readability', value: 'High' }
    ],
    features: [
      'Elegant type pairing with generous line length',
      'Subtle borders and ambient lighting effects',
      'Works as a portfolio sample or inspiration site'
    ]
  }
];

export function getSampleSite(slug: string) {
  return sampleSites.find((site) => site.slug === slug);
}
