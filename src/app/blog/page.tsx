'use client';

import { useEffect } from 'react';

export default function BlogRedirect() {
  useEffect(() => {
    // Redirect to external blog site
    window.location.replace('https://neuronreads.vercel.app/');
  }, []);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">Redirecting to my blog...</h1>
        <p className="text-muted-foreground">
          You&apos;re being redirected to{' '}
          <a 
            href="https://neuronreads.vercel.app/" 
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            neuronreads.vercel.app
          </a>
        </p>
        <div className="mt-6">
          <a 
            href="https://neuronreads.vercel.app/"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Blog
          </a>
        </div>
      </div>
    </div>
  );
}