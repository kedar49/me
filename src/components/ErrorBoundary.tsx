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
      // Prevent the default browser error overlay
      event.preventDefault();
    };

    // Add unhandled rejection handler
    const rejectionHandler = (event: PromiseRejectionEvent) => {
      setHasError(true);
      setError(new Error(`Unhandled Promise Rejection: ${event.reason}`));
      // Log the error using our error handling utility
      logError(new Error(`Unhandled Promise Rejection: ${event.reason}`));
      // Prevent the default browser error overlay
      event.preventDefault();
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', rejectionHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    };
  }, []);

  if (hasError && error) {
    return (
      <div className="p-4 border border-red-300 rounded-md bg-red-50 dark:bg-red-900/20 dark:border-red-800 my-4">
        <h2 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">Something went wrong</h2>
        <p className="text-sm text-red-700 dark:text-red-300 mb-4">
          {error.message || 'An unexpected error occurred'}
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => {
            setHasError(false);
            setError(null);
            window.location.reload();
          }}
          className="text-xs border-red-300 text-red-700 hover:bg-red-100 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
        >
          Reload Page
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}