'use client';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  imageUrl?: string;
  isExternal?: boolean;
}

export function ProjectCard({ title, description, link, tags = [], imageUrl, isExternal = true }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={link} 
      target={isExternal ? "_blank" : undefined} 
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out border border-border hover:border-primary outline-dashed outline-[0.2em] outline-transparent hover:outline-muted">
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            />
          </div>
        )}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{title}</h3>
            {isExternal && (
              <ArrowTopRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:animate-nudge-top-right transition-colors" />
            )}
          </div>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}