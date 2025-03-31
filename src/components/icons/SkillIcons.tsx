'use client';

// This file contains SVG icons for the skills section
// Using SVG icons instead of emoji for better visual consistency and scalability

export const SkillIcons = {
  // Frontend Development Icons
  JavaScript: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" />
      <path d="M8 17v-5" />
      <path d="M8 17c0 1 .5 2 2 2s2-1 2-2v-5" />
      <path d="M14 12v5" />
      <path d="M18 12h-4" />
    </svg>
  ),
  React: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 6a9.77 9.77 0 0 1 8.82 5.5A9.77 9.77 0 0 1 12 17a9.77 9.77 0 0 1-8.82-5.5A9.77 9.77 0 0 1 12 6Z" />
    </svg>
  ),
  NextJS: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 12h4l2-8 2 8h4" />
      <path d="M5 20h14" />
      <path d="M13 12l4 8" />
      <path d="M13 12l-4 8" />
    </svg>
  ),
  Redux: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M16.5 8A4.5 4.5 0 0 0 12 3.5" />
      <path d="M3.5 12A4.5 4.5 0 0 0 8 16.5" />
      <path d="M12 20.5A4.5 4.5 0 0 0 16.5 16" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 9v-2" />
      <path d="M12 17v-2" />
      <path d="M9 12H7" />
      <path d="M17 12h-2" />
    </svg>
  ),
  TailwindCSS: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M6 8a6 6 0 0 1 12 0c0 8-12 8-12 0a6 6 0 0 0 12 0c0 8 12 8 12 0a6 6 0 0 0-12 0" />
    </svg>
  ),
  HTML: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="m13 3-2 18" />
      <path d="M9 6h8" />
      <path d="M6 11h12" />
      <path d="M4 16h16" />
    </svg>
  ),

  // Backend Development Icons
  NodeJS: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22v-5" />
      <path d="M9 8V5.2c0-1.7 1.3-3 3-3 1.8 0 3 1.3 3 3V8" />
      <path d="M12 11v4" />
      <rect x="4" y="8" width="16" height="8" rx="1" />
    </svg>
  ),
  Python: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3" />
      <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
      <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
      <path d="M11 6v.01" />
      <path d="M13 18v.01" />
    </svg>
  ),
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  API: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
      <path d="M14 12v.01" />
    </svg>
  ),
  GraphQL: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M6.5 9.5 12 4l5.5 5.5" />
      <path d="M17.5 14.5 12 20l-5.5-5.5" />
      <path d="M20 12H4" />
      <path d="m12 12-4-4" />
      <path d="m12 12 4-4" />
      <path d="m12 12-4 4" />
      <path d="m12 12 4 4" />
    </svg>
  ),
  Java: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M10 2v8a2 2 0 0 0 2 2h8" />
      <path d="M17 17v-5h5" />
      <path d="M10 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </svg>
  ),

  // AI & Machine Learning Icons
  TensorFlow: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2v8" />
      <path d="m4.93 10 6.92 4" />
      <path d="m12.93 18 6.92-4" />
      <path d="M19.07 10 12.15 6" />
      <path d="M4.93 14 12 18" />
      <path d="M22 22H2" />
    </svg>
  ),
  PyTorch: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 11a9 9 0 1 1-9-9" />
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="m17 17 3.35 3.35a2.23 2.23 0 0 1-3.15 3.15L14 20.35" />
    </svg>
  ),
  ScikitLearn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3v12" />
      <path d="m8 9 4 4 4-4" />
      <path d="M8 21h8" />
      <path d="M12 15a5 5 0 0 1 5 5" />
      <path d="M12 15a5 5 0 0 0-5 5" />
    </svg>
  ),
  NLP: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M9 11h.01" />
      <path d="M12 11h.01" />
      <path d="M15 11h.01" />
    </svg>
  ),
  ComputerVision: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  DataAnalysis: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),

  // DevOps & Cloud Icons
  Cloud: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  Git: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M18 9a9 9 0 0 0-9 9" />
    </svg>
  ),
  Docker: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M22 12.5a2.5 2.5 0 0 0-3.9-2.1l-1.1-1.1-1 1.2v-1a2.5 2.5 0 0 0-3.9-2.1L9 4.2 7.9 5.5 5 2.5" />
      <path d="M14.5 11.5 16 10" />
      <path d="M11.5 14.5 10 16" />
      <path d="M8.5 8.5 7 10" />
      <path d="M18.5 18.5 20 17" />
      <path d="M2 22 17 7" />
    </svg>
  ),
  Kubernetes: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  ),
  CICD: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2v20" />
      <path d="M2 5h20" />
      <path d="M2 19h20" />
      <path d="M2 12h10" />
      <path d="M14 12h8" />
    </svg>
  ),
  Linux: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  ),
};