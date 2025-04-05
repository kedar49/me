import { baseUrl } from './sitemap';

export default function SchemaMarkup() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kedar Sathe',
    url: baseUrl,
    jobTitle: 'Machine Learning Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Vishwakarma Institute of Technology (VIT), Pune',
      sameAs: 'https://www.vit.edu/',
    },
    knowsAbout: [
      'Machine Learning',
      'Artificial Intelligence',
      'Deep Learning',
      'TensorFlow',
      'PyTorch',
      'Natural Language Processing',
      'Computer Vision',
      'DevOps',
      'Full Stack Development'
    ],
    sameAs: [
      'https://twitter.com/wtfkedar',
      baseUrl
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}