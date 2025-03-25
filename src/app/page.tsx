import IndexMdx from '@/app/index.mdx';
import { baseUrl } from '@/app/sitemap';
import { TimeDisplay } from '@/components/TimeDisplay';

export const metadata = {
  title: 'kedar sathe',
  description: "kedar's site",
  alternates: {
    canonical: `${baseUrl}`,
  },
  openGraph: {
    title: 'kedar sathe',
    siteName: 'kedar sathe',
    description: "kedar's site",
    type: 'article',
    url: `${baseUrl}`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('kedar sathe')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kedar sathe',
    description: "kedar's site",
    creator: '@wtfkedar',
    images: [`${baseUrl}/og?title=${encodeURIComponent('kedar sathe')}`],
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col text-left">
      <h1 className="mb-8 font-semibold tracking-tighter">kedar sathe</h1>
      <TimeDisplay />
      <div className="flex flex-row">
        <section>
          <article className="prose">
            <IndexMdx />
          </article>
        </section>
      </div>
    </main>
  );
}
