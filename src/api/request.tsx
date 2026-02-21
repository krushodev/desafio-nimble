import axios from 'axios';
import { createApiError } from '@/api/utils';

export async function request<T>(promise: Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await promise;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        const isTimeout = error.code === 'ECONNABORTED';
        throw createApiError(isTimeout ? 'Request timed out' : 'Network error — check your connection');
      }

      const status = error.response.status;
      const body = error.response.data as { message?: string } | undefined;
      const message = body?.message ?? error.message;

      throw createApiError(message, status);
    }

    throw createApiError('An unexpected error occurred');
  }
}
