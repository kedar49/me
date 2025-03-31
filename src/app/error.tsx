'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <section className="flex flex-col items-start gap-4">
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">500 - Something went wrong</h1>
      <p className="mb-4">An unexpected error occurred. Please try again later.</p>
      <Button
        onClick={() => reset()}
        variant="outline"
        className="transition-colors hover:text-primary hover:border-primary"
      >
        Try again
      </Button>
    </section>
  );
}