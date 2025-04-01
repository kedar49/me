'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { logError } from '@/lib/errorHandling';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Add global error handler
    const errorHandler = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error);
      // Log the error using our error handling utility
      logError(event.error);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-muted-foreground">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="transition-colors hover:text-primary hover:border-primary"
        >
          Refresh page
        </Button>
      </div>
    );
  }

  return children;
}