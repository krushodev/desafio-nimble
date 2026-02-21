import toast from 'react-hot-toast';
import { getErrorMessage } from '@/types';

export const notify = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  loading: (message: string) => toast.loading(message),
  dismiss: (id?: string) => toast.dismiss(id),
  fromError: (error: unknown, fallback = 'Something went wrong') => toast.error(getErrorMessage(error, fallback))
};
