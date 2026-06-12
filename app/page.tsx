import Link from 'next/link';
import { sampleSites } from '@/lib/sample-sites';

const links = [
  {
    label: 'Email',
    href: 'mailto:hello@oliveportfolio.dev'
  },
  {
    label: 'GitHub',
    href: 'https://github.com'
  },
  {
    label: 'Vercel',
    href: 'https://vercel.com'
  }
];

const featuredNotes = [
  'Dark olive palette with white text and soft cream accents',
  'Built as a portfolio hub for sample websites and projects',
  'Ready for Vercel deployment with a clean Next.js setup'
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <div className="eyebrow">Portfolio hub</div>
        <h1>
          A dark olive portfolio that feels curated, calm, and unmistakably modern.
        </h1>
        <p className="hero-copy">
          This landing page is designed as a home base for sample websites, featured work,
          and quick ways to reach you. It leans into olive tones, white type, and layered
          glass-like surfaces to stay elegant without looking generic.
        </p>

        <div className="hero-actions">
          <Link className="primary-action" href="#samples">
            Explore sample websites
          </Link>
          <Link className="secondary-action" href="#contact">
            View contact links
          </Link>
        </div>

        <ul className="hero-notes">
          {featuredNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <section className="feature-band" aria-label="Portfolio highlights">
        {[
          { value: '03', label: 'Sample sites' },
          { value: '01', label: 'Homepage hub' },
          { value: '100%', label: 'Vercel ready' }
        ].map((item) => (
          <div key={item.label} className="stat-card">
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section id="samples" className="section-block">
        <div className="section-heading">
          <div className="eyebrow">Sample websites</div>
          <h2>Each card links to a distinct sample site with its own feel.</h2>
        </div>

        <div className="sample-grid">
          {sampleSites.map((site) => (
            <Link key={site.slug} className="sample-card" href={`/samples/${site.slug}`}>
              <div className="sample-topline">
                <span>{site.accent}</span>
                <span>Open sample</span>
              </div>
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <div className="sample-footer">
                <span>{site.hero}</span>
                <span>View details</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block split-grid">
        <div className="info-panel">
          <div className="eyebrow">About this build</div>
          <h2>A flexible portfolio shell you can expand with real projects.</h2>
          <p>
            The structure is intentionally simple: a polished homepage, internal sample
            routes, and clean components that can grow into case studies, galleries, or a
            personal brand site without needing a redesign.
          </p>
        </div>

        <div id="contact" className="contact-panel">
          <div className="eyebrow">Links</div>
          <h2>Quick links for contact and publishing.</h2>
          <div className="link-list">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <span>Open</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
