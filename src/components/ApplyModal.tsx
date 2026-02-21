import { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@heroui/react';
import { RiCheckLine, RiLoader4Line, RiUserLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import { candidateService } from '@/api/services';
import type { Job, Candidate } from '@/types';

interface ApplyModalProps {
  isOpen: boolean;
  job: Job | null;
  candidate: Candidate;
  onClose: () => void;
}

type Step = 'form' | 'success';

export const ApplyModal = ({ isOpen, job, candidate, onClose }: ApplyModalProps) => {
  const [step, setStep] = useState<Step>('form');
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setStep('form');
      setRepoUrl('');
      setError(null);
    }
  }, [isOpen]);

  async function handleApply(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await candidateService.applyToJob({
        uuid: candidate.uuid,
        jobId: job!.id,
        candidateId: candidate.candidateId,
        repoUrl
      });
      setStep('success');
    } catch {
      setError('Error. Something went wrong.');
      toast.error('Error. Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  if (!job) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      hideCloseButton
      classNames={{
        backdrop: 'bg-black/50 backdrop-blur-sm',
        base: 'bg-white dark:bg-[#1a0a2e] border border-[#e8e0f0] dark:border-[#3d1f6b] rounded-xl shadow-2xl m-4',
        header: 'px-6 pt-5 pb-4 border-b border-[#e8e0f0] dark:border-[#3d1f6b] flex items-start justify-between gap-4',
        body: 'px-6 py-5'
      }}
    >
      <ModalContent>
        <ModalHeader>
          <div className="flex items-start justify-between w-full gap-4">
            <div>
              <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-widest mb-0.5">Apply for</p>
              <h2 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">{job.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-7 h-7 flex items-center justify-center rounded-md text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              ✕
            </button>
          </div>
        </ModalHeader>

        <ModalBody>
          {step === 'form' && (
            <form onSubmit={handleApply} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-[#f3eefb] dark:bg-[#6331a2]/20 border border-[#e8e0f0] dark:border-[#3d1f6b]">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#6331a2]/10 dark:bg-white/10 text-[#6331a2] dark:text-white shrink-0">
                  <RiUserLine size={13} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 dark:text-white/40 mb-0">Applying as</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {candidate.firstName} {candidate.lastName}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-500 dark:text-white/60">Repository URL</label>
                <input
                  type="url"
                  required
                  value={repoUrl}
                  onChange={e => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/you/repo"
                  className="w-full px-3 py-2 text-sm rounded-md border border-[#e8e0f0] dark:border-[#3d1f6b] bg-white dark:bg-[#231040] text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-white/30 focus:outline-none focus:border-[#6331a2] dark:focus:border-[#6331a2] transition-colors"
                />
              </div>
              {error && <p className="text-xs text-red-500 dark:text-red-400">{error}</p>}
              <button type="submit" disabled={loading} className="btn-purple flex items-center justify-center gap-2 w-full py-2 text-sm font-semibold rounded-md transition-colors">
                {loading && <RiLoader4Line size={15} className="animate-spin" />}
                {loading ? 'Submitting…' : 'Submit application'}
              </button>
            </form>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <span className="w-10 h-10 flex items-center justify-center rounded-full" style={{ backgroundColor: '#6331a2', color: 'white' }}>
                <RiCheckLine size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Application sent!</p>
                <p className="text-xs text-gray-400 dark:text-white/50 mt-1">We'll be in touch soon.</p>
              </div>
              <button onClick={onClose} className="mt-2 text-xs font-medium underline underline-offset-2 text-gray-400 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors">
                Close
              </button>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
