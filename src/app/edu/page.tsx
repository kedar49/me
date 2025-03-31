import { baseUrl } from '@/app/sitemap';

import EduMdx from './edu.mdx';

export const metadata = {
  title: 'education & experience',
  description: 'my academic journey and professional experience',
  alternates: {
    canonical: `${baseUrl}/edu`,
  },
  openGraph: {
    title: 'education & experience',
    siteName: 'kedar sathe',
    description: 'my academic journey and professional experience',
    type: 'article',
    url: `${baseUrl}/edu`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('education & experience')}&subtitle=${encodeURIComponent('my academic journey and professional experience')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'education & experience',
    description: 'my academic journey and professional experience',
    creator: '@wtfkedar',
    images: [
      `${baseUrl}/og?title=${encodeURIComponent('education & experience')}&subtitle=${encodeURIComponent('my academic journey and professional experience')}`,
    ],
  },
};

export default function Page() {
  return (
    <section className="animate-fade-in">
      <h1 className="font-semibold text-3xl mb-2 tracking-tighter">{metadata.title}</h1>
      <p className="text-muted-foreground mb-8">{metadata.description}</p>
      <article className="prose">
        <EduMdx />
      </article>
    </section>
  );
}