import { baseUrl } from '@/app/sitemap';

import AiLogMdx from './ai-log.mdx';

export const metadata = {
  title: 'ai-log',
  description: 'learnings and experiments with ai',
  alternates: {
    canonical: `${baseUrl}/ai-log`,
  },
  openGraph: {
    title: 'ai-log',
    siteName: 'Kedar Sathe',
    description: 'learnings and experiments with ai',
    type: 'article',
    url: `${baseUrl}/ai-log`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('ai-log')}&subtitle=${encodeURIComponent('learnings and experiments with ai')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ai-log',
    description: 'learnings and experiments with ai',
    creator: '@wtfkedar',
    images: [
      `${baseUrl}/og?title=${encodeURIComponent('ai-log')}&subtitle=${encodeURIComponent('learnings and experiments with ai')}`,
    ],
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-2 tracking-tighter">{metadata.title}</h1>
      <p className="text-muted-foreground mb-8">{metadata.description}</p>
      <article className="prose">
        <AiLogMdx />
      </article>
    </section>
  );
}
