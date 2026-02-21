export type { CandidateDTO, JobDTO, ApplyToJobPayload, ApiError } from '@/api/types';
export { createApiError, isApiError, getErrorMessage } from '@/api/utils';

// --- Entities ---

export interface Candidate {
  uuid: string;
  candidateId: string;
  applicationId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Job {
  id: string;
  title: string;
}

// --- UI / async state ---

export type AsyncState<T> = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string };
