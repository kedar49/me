import { Feed } from 'feed';

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
  const site_url = baseUrl;
  const externalBlogUrl = 'https://neuronreads.vercel.app/';

  const feedOptions = {
    title: escapeXml("Kedar Sathe's Portfolio"),
    description: escapeXml('Machine Learning Engineer and AI specialist from VIT Pune. Blog available at neuronreads.vercel.app'),
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

  // Adding external blog reference to the feed
  feed.addItem({
    title: escapeXml('neuronreads | Kedar Sathe Blog'),
    id: externalBlogUrl,
    link: externalBlogUrl,
    description: escapeXml('Visit my external blog site for latest thoughts on Machine Learning, AI, and technology'),
    content: escapeXml('My blog has moved to neuronreads.vercel.app where I share insights about Machine Learning, AI, and technology.'),
    author: [
      {
        name: 'Kedar Sathe',
        email: 'wtfkedar@gmail.com',
        link: site_url,
      },
    ],
    date: new Date(),
  });

  // Adding portfolio pages to the feed
  const portfolioPages = [
    {
      title: 'Projects',
      path: '/projects',
      description: 'My latest projects and work'
    },
    {
      title: 'Education',
      path: '/edu', 
      description: 'My educational background and achievements'
    },
    {
      title: 'Miscellaneous',
      path: '/misc',
      description: 'Random thoughts and miscellaneous content'
    }
  ];

  portfolioPages.forEach(page => {
    feed.addItem({
      title: escapeXml(`${page.title} | Kedar Sathe`),
      id: `${site_url}${page.path}`,
      link: `${site_url}${page.path}`,
      description: escapeXml(page.description),
      content: escapeXml(page.description),
      author: [
        {
          name: 'Kedar Sathe',
          email: 'wtfkedar@gmail.com',
          link: site_url,
        },
      ],
      date: new Date(),
    });
  });

  return feed;
}
