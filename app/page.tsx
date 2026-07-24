import Link from 'next/link';
import { sampleSites } from '@/lib/sample-sites';

const links = [
  {
    label: 'Email',
    href: 'mailto:juliuscyvin@gmail.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jcyvin'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/julius-lim-3b019a254/'
  }
];

const featuredNotes = [
  'BS Computer Science Graduate',
  'Full-Stack Developer',
  'AI & Automation Enthusiast'
];


export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero">
        <div className="eyebrow">Julius Cyvin C. Lim</div>

        <h1>
          Julius Cyvin C. Lim
        </h1>
        <h3>
          - Software Developer, Automation Enthusiast, and AI Explorer
        </h3>

        <p className="hero-copy">
          I'm a Computer Science graduate passionate about software development,
          automation, and artificial intelligence. I enjoy creating practical
          solutions that improve workflows, solve real-world problems, and deliver
          meaningful user experiences.
        </p>

        <div className="hero-actions">
          <Link className="primary-action" href="#projects">
            View Projects
          </Link>

          <Link className="secondary-action" href="#contact">
            Contact Me
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
          { value: '5+', label: 'Projects Built' },
          { value: '3', label: 'IT Certifications' },
          { value: 'AI', label: 'Focused Development' }
        ].map((item) => (
          <div key={item.label} className="stat-card">
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section id="projects" className="section-block">
        <div className="section-heading">
          <div className="eyebrow">Featured Projects</div>

          <h2>
            A collection of applications, systems, and experiments I've built.
          </h2>
        </div>

        <div className="sample-grid">
          {sampleSites.map((site) => (
            <Link
              key={site.slug}
              className="sample-card"
              href={`/samples/${site.slug}`}
            >
              <div className="sample-topline">
                <span>{site.accent}</span>
                <span>View Project</span>
              </div>

              <h3>{site.name}</h3>
              <p>{site.description}</p>

              <div className="sample-footer">
                <span>{site.hero}</span>
                <span>Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block split-grid">
        <div className="info-panel">
          <div className="eyebrow">About Me</div>

          <h2>
            Developer focused on building useful software and continuous learning.
          </h2>

          <p>
            My experience includes web development, databases, REST APIs,
            automation workflows, and AI-powered applications. My most notable
            project is ThesisFlow, a research management system featuring
            intelligent adviser recommendations using NLP and machine learning
            techniques. I enjoy learning new technologies and turning ideas into
            working products.
          </p>
        </div>

        <div id="contact" className="contact-panel">
          <div className="eyebrow">Connect</div>

          <h2>Let's build something together.</h2>

          <div className="link-list">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
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