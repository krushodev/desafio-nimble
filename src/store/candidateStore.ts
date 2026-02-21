import { create } from 'zustand';
import { candidateService } from '@/api/services';
import type { Candidate } from '@/types';
import type { AsyncState } from '@/types';

interface CandidateStore {
  state: AsyncState<Candidate>;
  fetch: (candidateEmail: string) => Promise<void>;
}

export const useCandidateStore = create<CandidateStore>((set, get) => ({
  state: { status: 'idle' },
  fetch: async candidateEmail => {
    if (get().state.status !== 'idle') return;
    set({ state: { status: 'loading' } });
    try {
      const data = await candidateService.getByEmail(candidateEmail);
      set({ state: { status: 'success', data } });
    } catch {
      set({ state: { status: 'error', error: 'Could not load candidate profile.' } });
    }
  }
}));
