'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { logError } from '@/lib/errorHandling';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    logError(error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
        <div className="max-w-md w-full space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">Something went wrong!</h1>
          <p className="text-muted-foreground">
            We&apos;ve encountered an unexpected error. Please try again later.
          </p>
          <div className="pt-4">
            <Button
              onClick={() => reset()}
              variant="outline"
              className="transition-colors hover:text-primary hover:border-primary"
            >
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}