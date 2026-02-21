import type { ApiError } from './types';

export function createApiError(message: string, statusCode: number | null = null): ApiError {
  return { isApiError: true, message, statusCode };
}

export function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error !== null && (error as ApiError).isApiError === true;
}

export function getErrorMessage(error: unknown, fallback = 'Something went wrong'): string {
  if (isApiError(error)) return error.message;
  if (error instanceof Error) return error.message;
  return fallback;
}
