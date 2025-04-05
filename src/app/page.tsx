import IndexMdx from '@/app/index.mdx';
import { baseUrl } from '@/app/sitemap';
import { TimeDisplay } from '@/components/TimeDisplay';

export const metadata = {
  title: 'Kedar Sathe | Machine Learning Engineer | VIT Pune',
  description: "Machine Learning Engineer and AI specialist from VIT Pune with expertise in TensorFlow, PyTorch, and DevOps.",
  alternates: {
    canonical: `${baseUrl}`,
  },
  keywords: ['Machine Learning Engineer', 'VIT Pune', 'Vishwakarma Institute of Technology', 'AI Engineer', 'TensorFlow', 'PyTorch', 'DevOps', 'NLP', 'Computer Vision', 'Data Analysis'],
  openGraph: {
    title: 'Kedar Sathe | Machine Learning Engineer | VIT Pune',
    siteName: 'Kedar Sathe | ML Engineer',
    description: "Machine Learning Engineer and AI specialist from VIT Pune with expertise in TensorFlow, PyTorch, and DevOps.",
    type: 'article',
    url: `${baseUrl}`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Kedar Sathe | ML Engineer')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedar Sathe | Machine Learning Engineer',
    description: "Machine Learning Engineer from VIT Pune specializing in AI and ML technologies.",
    creator: '@wtfkedar',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Kedar Sathe | ML Engineer')}`],
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
