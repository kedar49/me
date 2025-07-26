import Link from 'next/link';

import { getBlogPosts } from '@/app/blog/utils';
import { baseUrl } from '@/app/sitemap';

export const metadata = {
  title: 'blog',
  description: 'read my thoughts on tech, life, and everything in between',
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: 'blog',
    siteName: 'Kedar Sathe',
    description: 'read my thoughts on tech, life, and everything in between',
    type: 'article',
    url: `${baseUrl}/blog`,
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('blog')}&subtitle=${encodeURIComponent('read my thoughts on tech, life, and everything in between')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'blog',
    description: 'read my thoughts on tech, life, and everything in between',
    creator: '@wtfkedar',
    images: [
      `${baseUrl}/og?title=${encodeURIComponent('blog')}&subtitle=${encodeURIComponent('read my thoughts on tech, life, and everything in between')}`,
    ],
  },
};

async function BlogPosts() {
  const allBlogs = await getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map(post => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{post.metadata.title}</p>
              <p className="h-6 text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                {new Date(post.metadata.publishedAt).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-2 tracking-tighter">{metadata.title}</h1>
      <p className="text-muted-foreground mb-8">{metadata.description}</p>
      <BlogPosts />
    </section>
  );
}
