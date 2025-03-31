/**
 * Error handling utilities for consistent error management across the application
 */

/**
 * Custom error class for application-specific errors
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(message: string, statusCode = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * Log an error with consistent formatting
 * @param error The error to log
 * @param context Additional context information
 */
export function logError(error: Error, context?: Record<string, unknown>): void {
  const errorInfo = {
    message: error.message,
    name: error.name,
    stack: error.stack,
    ...(error instanceof AppError && {
      statusCode: error.statusCode,
      code: error.code,
    }),
    ...(context && { context }),
  };

  // In production, you might want to send this to a logging service
  console.error('Application error:', errorInfo);
}

/**
 * Format an error for client-side display
 * @param error The error to format
 */
export function formatErrorForClient(error: unknown): {
  message: string;
  code: string;
  statusCode: number;
} {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR',
      statusCode: 500,
    };
  }

  return {
    message: 'An unknown error occurred',
    code: 'UNKNOWN_ERROR',
    statusCode: 500,
  };
}

/**
 * Create a safe async function that catches errors
 * @param fn The async function to wrap
 * @returns A function that won't throw but returns an error object instead
 */
export function createSafeAsyncFunction<T, Args extends any[]>(
  fn: (...args: Args) => Promise<T>
): (...args: Args) => Promise<{ data: T | null; error: Error | null }> {
  return async (...args: Args) => {
    try {
      const result = await fn(...args);
      return { data: result, error: null };
    } catch (error) {
      logError(error instanceof Error ? error : new Error(String(error)));
      return { data: null, error: error instanceof Error ? error : new Error(String(error)) };
    }
  };
}