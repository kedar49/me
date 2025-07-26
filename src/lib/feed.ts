import { Feed } from 'feed';

import { getBlogPosts } from '@/app/blog/utils';

import { baseUrl } from '../app/sitemap';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function generateRSSFeed() {
  const allPosts = await getBlogPosts();
  const site_url = baseUrl;

  const feedOptions = {
    title: escapeXml("Kedar Sathe's blog"),
    description: escapeXml('Machine Learning Engineer and AI specialist from VIT Pune'),
    id: site_url,
    link: site_url,
    image: `${baseUrl}/og?title=${encodeURIComponent('Kedar Sathe')}`,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Kedar Sathe`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
    author: {
      name: 'Kedar Sathe',
      email: 'wtfkedar@gmail.com',
      link: site_url,
    },
  };

  const feed = new Feed(feedOptions);

  // Adding the blog posts to the rss feed
  allPosts.map(post => {
    const url = `${site_url}/blog/${post.slug}`;
    feed.addItem({
      title: escapeXml(post.metadata.title),
      id: url,
      link: url,
      description: escapeXml(post.metadata.subtitle),
      content: escapeXml(post.content || ''),
      author: [
        {
          name: 'Kedar Sathe',
          email: 'wtfkedar@gmail.com',
          link: site_url,
        },
      ],
      date: new Date(post.metadata.publishedAt),
    });
  });

  // Adding blog page to the feed
  feed.addItem({
    title: escapeXml('blog | Kedar Sathe'),
    id: `${site_url}/blog`,
    link: `${site_url}/blog`,
    description: escapeXml('Machine Learning Engineer and AI specialist blog'),
    content: escapeXml('Blog posts about Machine Learning, AI, and technology'),
    author: [
      {
        name: 'Kedar Sathe',
        email: 'wtfkedar@gmail.com',
        link: site_url,
      },
    ],
    date: new Date(),
  });

  return feed;
}
