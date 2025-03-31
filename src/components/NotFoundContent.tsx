'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function NotFoundContent() {
  return (
    <section className="flex flex-col items-start gap-4 animate-fade-in">
      <h1 className="mb-2 text-3xl font-semibold tracking-tighter">404 - Page Not Found</h1>
      <p className="mb-4 text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Button asChild variant="outline" className="group transition-colors hover:text-primary hover:border-primary">
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </Button>
      </div>
      
      <div className="mt-8 border-t border-border pt-6 w-full">
        <h2 className="text-lg font-medium mb-3">You might be looking for:</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/projects" className="text-primary hover:underline">Projects</Link>
            <span className="text-muted-foreground ml-2">- View my portfolio of work</span>
          </li>
          <li>
            <Link href="/blog" className="text-primary hover:underline">Blog</Link>
            <span className="text-muted-foreground ml-2">- Read my latest articles</span>
          </li>
          <li>
            <Link href="/ai-log" className="text-primary hover:underline">AI Log</Link>
            <span className="text-muted-foreground ml-2">- Explore my AI research</span>
          </li>
        </ul>
      </div>
    </section>
  );
}