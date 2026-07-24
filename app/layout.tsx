import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display'
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Julius Cyvin Lim | Portfolio',
  description:
    'Computer Science graduate specializing in web development, databases, IT support, and AI-powered applications. Explore my projects, skills, and experience.',
  metadataBase: new URL('https://your-portfolio-domain.vercel.app'),
  keywords: [
    'Julius Cyvin Lim',
    'Portfolio',
    'Computer Science',
    'Software Developer',
    'Web Developer',
    'IT Support',
    'AI Developer',
    'React',
    'Next.js',
    'Flask',
    'PostgreSQL'
  ],
  authors: [{ name: 'Julius Cyvin Lim' }],
  creator: 'Julius Cyvin Lim',
  openGraph: {
    title: 'Julius Cyvin Lim | Portfolio',
    description:
      'Computer Science graduate specializing in web development, databases, IT support, and AI-powered applications.',
    url: 'https://your-portfolio-domain.vercel.app',
    siteName: 'Julius Cyvin Lim Portfolio',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}