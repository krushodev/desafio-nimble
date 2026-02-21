import { useState, useEffect } from 'react';
import { useDisclosure } from '@heroui/react';
import { Header } from './components/Header';
import { JobList } from './components/JobList';
import { ApplyModal } from './components/ApplyModal';
import { CandidateProfile } from './components/CandidateProfile';
import { useTheme } from './hooks/useTheme';
import { useCandidateStore } from './store/candidateStore';
import type { Job } from './types';

type View = 'jobs' | 'profile';

export const CANDIDATE_EMAIL = 'ignakruchowski@gmail.com';

function App() {
  const { theme, toggle } = useTheme();
  const { state: candidateState, fetch: fetchCandidate } = useCandidateStore();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const { isOpen: isApplyOpen, onOpen: onApplyOpen, onClose: onApplyClose } = useDisclosure();
  const [view, setView] = useState<View>('jobs');

  useEffect(() => {
    fetchCandidate(CANDIDATE_EMAIL);
  }, [fetchCandidate]);

  const candidate = candidateState.status === 'success' ? candidateState.data : undefined;

  return (
    <div className="min-h-screen bg-[#f8f6fc] dark:bg-[#1a0a2e] transition-colors">
      <Header theme={theme} onToggleTheme={toggle} candidate={candidate} onViewProfile={() => setView(v => (v === 'profile' ? 'jobs' : 'profile'))} />

      {view === 'jobs' && (
        <main className="max-w-4xl mx-auto px-6 py-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Open positions</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-white/50">Find your next opportunity and apply in seconds.</p>
          </div>
          <JobList
            onApply={job => {
              setSelectedJob(job);
              onApplyOpen();
            }}
          />
        </main>
      )}

      {view === 'profile' && candidate && <CandidateProfile candidate={candidate} onBack={() => setView('jobs')} />}

      {candidate && <ApplyModal isOpen={isApplyOpen} job={selectedJob} candidate={candidate} onClose={onApplyClose} />}
    </div>
  );
}

export default App;
