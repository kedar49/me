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
      <div className="relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-card hover:bg-card/80 border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-md">
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden bg-muted/10">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3 group">
            <h3 className="font-semibold text-xl tracking-tight group-hover:text-primary transition-colors">{title}</h3>
            {isExternal && (
              <ArrowTopRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            )}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground/90 transition-colors hover:bg-secondary hover:text-secondary-foreground"
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