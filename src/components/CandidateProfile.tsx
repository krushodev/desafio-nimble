import { RiArrowLeftLine, RiUserLine, RiMailLine, RiBriefcaseLine } from 'react-icons/ri';
import type { Candidate } from '@/types';

interface CandidateProfileProps {
  candidate: Candidate;
  onBack: () => void;
}

export const CandidateProfile = ({ candidate, onBack }: CandidateProfileProps) => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-[#6331a2]/60 dark:text-white/50 hover:text-[#6331a2] dark:hover:text-white transition-colors mb-8">
        <RiArrowLeftLine size={15} />
        Back to jobs
      </button>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-[#6331a2]/10 dark:bg-white/10 flex items-center justify-center text-[#6331a2] dark:text-white">
          <RiUserLine size={26} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            {candidate.firstName} {candidate.lastName}
          </h1>
          <p className="text-sm text-gray-400 dark:text-white/50 mt-0.5">Candidate profile</p>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="flex items-center gap-3 px-5 py-4 rounded-lg border border-[#e8e0f0] dark:border-[#3d1f6b] bg-white dark:bg-[#231040]">
          <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#6331a2]/10 dark:bg-white/10 text-[#6331a2] dark:text-white shrink-0">
            <RiMailLine size={15} />
          </span>
          <div>
            <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-widest mb-0.5">Email</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{candidate.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-5 py-4 rounded-lg border border-[#e8e0f0] dark:border-[#3d1f6b] bg-white dark:bg-[#231040]">
          <span className="w-8 h-8 flex items-center justify-center rounded-md bg-[#6331a2]/10 dark:bg-white/10 text-[#6331a2] dark:text-white shrink-0">
            <RiBriefcaseLine size={15} />
          </span>
          <div>
            <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-widest mb-0.5">Candidate ID</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white font-mono">{candidate.candidateId}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
