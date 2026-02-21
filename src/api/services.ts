import { get, post } from './methods';
import type { CandidateDTO, JobDTO, ApplyToJobPayload } from '@/api/types';

export const candidateService = {
  getByEmail: (email: string) => get<CandidateDTO>('/api/candidate/get-by-email', { params: { email } }),

  applyToJob: (payload: ApplyToJobPayload) => post<{ ok: boolean }>('/api/candidate/apply-to-job', payload)
};

export const jobsService = {
  getList: () => get<JobDTO[]>('/api/jobs/get-list')
};
