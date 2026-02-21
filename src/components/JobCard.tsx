import { RiArrowRightLine, RiBriefcaseLine } from 'react-icons/ri';
import type { Job } from '@/types';

interface JobCardProps {
  job: Job;
  onApply: (job: Job) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <div className="group flex items-center justify-between gap-4 px-5 py-4 border border-[#e8e0f0] dark:border-[#3d1f6b] rounded-lg bg-white dark:bg-[#231040] hover:border-[#6331a2]/40 dark:hover:border-[#6331a2] transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-[#6331a2]/10 dark:bg-[#6331a2]/30 text-[#6331a2] dark:text-white">
          <RiBriefcaseLine size={16} />
        </span>
        <span className="text-sm font-medium text-gray-900 dark:text-white truncate">{job.title}</span>
      </div>
      <button onClick={() => onApply(job)} className="btn-purple shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md transition-colors">
        Apply
        <RiArrowRightLine size={13} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};
