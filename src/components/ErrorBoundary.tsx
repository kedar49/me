'use client';

import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { logError } from '@/lib/errorHandling';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Add global error handler
    const errorHandler = (event: ErrorEvent) => {
      setHasError(true);
      logError(event.error);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <Button
          onClick={() => {
            setHasError(false);
            window.location.reload();
          }}
        >
          Try again
        </Button>
      </div>
    );
  }

  return children;
}