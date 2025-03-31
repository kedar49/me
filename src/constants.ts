export const MIN_SCROLLABLE_HEIGHT = 300;
export const MILLISECONDS_IN_MINUTE = 60000;

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Define skill categories for the Skills section
export const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'bg-blue-500',
    skills: [
      { name: 'JavaScript/TypeScript', level: 95, iconComponent: 'JavaScript' },
      { name: 'React.js', level: 90, iconComponent: 'React' },
      { name: 'Next.js', level: 85, iconComponent: 'NextJS' },
      { name: 'Redux', level: 80, iconComponent: 'Redux' },
      { name: 'TailwindCSS', level: 90, iconComponent: 'TailwindCSS' },
      { name: 'HTML/CSS', level: 95, iconComponent: 'HTML' }
    ],
  },
  {
    title: 'Backend Development',
    color: 'bg-green-500',
    skills: [
      { name: 'Node.js', level: 85, iconComponent: 'NodeJS' },
      { name: 'Python', level: 90, iconComponent: 'Python' },
      { name: 'SQL/NoSQL', level: 85, iconComponent: 'Database' },
      { name: 'REST APIs', level: 90, iconComponent: 'API' },
      { name: 'GraphQL', level: 80, iconComponent: 'GraphQL' },
      { name: 'Java', level: 75, iconComponent: 'Java' }
    ],
  },
  {
    title: 'AI & Machine Learning',
    color: 'bg-purple-500',
    skills: [
      { name: 'TensorFlow', level: 85, iconComponent: 'TensorFlow' },
      { name: 'PyTorch', level: 80, iconComponent: 'PyTorch' },
      { name: 'Scikit-Learn', level: 90, iconComponent: 'ScikitLearn' },
      { name: 'NLP', level: 75, iconComponent: 'NLP' },
      { name: 'Computer Vision', level: 70, iconComponent: 'ComputerVision' },
      { name: 'Data Analysis', level: 85, iconComponent: 'DataAnalysis' }
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'bg-orange-500',
    skills: [
      { name: 'Azure/AWS', level: 80, iconComponent: 'Cloud' },
      { name: 'Git/GitHub', level: 95, iconComponent: 'Git' },
      { name: 'Docker', level: 85, iconComponent: 'Docker' },
      { name: 'Kubernetes', level: 75, iconComponent: 'Kubernetes' },
      { name: 'CI/CD', level: 80, iconComponent: 'CICD' },
      { name: 'Linux', level: 85, iconComponent: 'Linux' }
    ],
  },
];
