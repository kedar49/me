import { baseUrl } from '@/app/sitemap';

import MiscMdx from './misc.mdx';

export const metadata = {
  title: 'misc.',
  description: 'random stuff i find interesting',
  alternates: {
    canonical: `${baseUrl}/misc`,
  },
  openGraph: {
    title: 'misc.',
    siteName: 'Kedar Sathe',
    description: 'random stuff i find interesting',
    type: 'article',
    url: `${baseUrl}/misc`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('misc.')}&subtitle=${encodeURIComponent('random stuff i find interesting')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'misc.',
    description: 'random stuff i find interesting',
    creator: '@wtfkedar',
    images: [
      `${baseUrl}/og?title=${encodeURIComponent('misc.')}&subtitle=${encodeURIComponent('random stuff i find interesting')}`,
    ],
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-2 tracking-tighter">{metadata.title}</h1>
      <p className="text-muted-foreground mb-8">{metadata.description}</p>
      <article className="prose">
        <MiscMdx />
      </article>
    </section>
  );
}
