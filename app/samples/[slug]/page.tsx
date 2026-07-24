import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSampleSite, sampleSites } from '@/lib/sample-sites';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sampleSites.map((site) => ({ slug: site.slug }));
}

export default async function SampleSitePage({ params }: PageProps) {
  const { slug } = await params;
  const site = getSampleSite(slug);

  if (!site) {
    notFound();
  }

  return (
    <main className="sample-page">
      <div className="sample-page-inner">
        <Link className="back-link" href="/">
          Back to main hub
        </Link>

        <div className="sample-hero">
          <div className="eyebrow">Sample site</div>
          <h1>{site.name}</h1>
          <p>{site.hero}</p>
        </div>

        <section className="sample-detail-card">
          <div className="eyebrow">Preview</div>
          <p>Image path: {site.image}</p>
          <img
            src={site.image}
            alt={site.name}
            style={{ width: '100%', height: 'auto' }}
          />
        </section>

        <section className="sample-detail-grid">
          <article className="sample-detail-card sample-highlight">
            <div className="eyebrow">Overview</div>
            <h2>{site.highlight}</h2>
            <p>{site.description}</p>
          </article>

          <article className="sample-detail-card">
            <div className="eyebrow">Metrics</div>
            <div className="metric-list">
              {site.metrics.map((metric) => (
                <div key={metric.label}>
                  <span>{metric.value}</span>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="sample-detail-card">
          <div className="eyebrow">Features</div>
          <ul className="feature-list">
            {site.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
