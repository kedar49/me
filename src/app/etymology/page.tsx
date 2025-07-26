import { baseUrl } from '@/app/sitemap';

import EtymologyMdx from './etymology.mdx';

export const metadata = {
  title: 'etymology',
  description: 'interesting word origins',
  alternates: {
    canonical: `${baseUrl}/etymology`,
  },
  openGraph: {
    title: 'etymology',
    siteName: 'Kedar Sathe',
    description: 'interesting word origins',
    type: 'article',
    url: `${baseUrl}/etymology`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('etymology')}&subtitle=${encodeURIComponent('interesting word origins')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'etymology',
    description: 'interesting word origins',
    creator: '@wtfkedar',
    images: [
      `${baseUrl}/og?title=${encodeURIComponent('etymology')}&subtitle=${encodeURIComponent('interesting word origins')}`,
    ],
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-2 tracking-tighter">{metadata.title}</h1>
      <p className="text-muted-foreground mb-8">{metadata.description}</p>
      <article className="prose">
        <EtymologyMdx />
      </article>
    </section>
  );
}
