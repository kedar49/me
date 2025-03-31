'use client';

import { useState } from 'react';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export function EducationCard({ institution, degree, period, details }: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`p-4 border border-muted rounded-lg transition-all duration-300 hover:border-primary ${isExpanded ? 'shadow-md' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="text-xl font-semibold">{institution}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-muted-foreground mt-1">{degree}</p>
      <div className={`mt-3 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 md:max-h-96'}`}>
        <ul className="list-disc list-inside mt-2 space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2 text-sm text-primary md:hidden">
        {isExpanded ? 'Click to collapse' : 'Click to expand'}
      </div>
    </div>
  );
}