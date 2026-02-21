import { useEffect, useState } from 'react';
import { JobCard } from './JobCard';
import { jobsService } from '@/api/services';
import type { Job } from '@/types';
import type { AsyncState } from '@/types';

interface JobListProps {
  onApply: (job: Job) => void;
}

export const JobList = ({ onApply }: JobListProps) => {
  const [state, setState] = useState<AsyncState<Job[]>>({ status: 'loading' });

  useEffect(() => {
    jobsService
      .getList()
      .then(data => setState({ status: 'success', data }))
      .catch(() => setState({ status: 'error', error: 'Failed to load jobs.' }));
  }, []);

  if (state.status === 'loading' || state.status === 'idle') {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[58px] rounded-lg border border-[#e8e0f0] dark:border-[#3d1f6b] bg-[#f3eefb] dark:bg-[#231040] animate-pulse" />
        ))}
      </div>
    );
  }

  if (state.status === 'error') {
    return <p className="text-sm text-center text-gray-400 dark:text-white/50 py-8">{state.error}</p>;
  }

  if (state.data.length === 0) {
    return <p className="text-sm text-center text-gray-400 dark:text-white/50 py-8">No open positions at the moment.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {state.data.map(job => (
        <JobCard key={job.id} job={job} onApply={onApply} />
      ))}
    </div>
  );
};
