export const baseUrl = 'https://wtfkedar.vercel.app';

export default async function sitemap() {
  // Static routes (removed individual blog posts since they're now external)
  const staticRoutes = ['', '/blog', '/projects', '/misc', '/etymology', '/ai-log'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return staticRoutes;
}
