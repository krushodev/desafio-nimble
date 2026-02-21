import { RiMoonLine, RiSunLine, RiUserLine } from 'react-icons/ri';

import { Logo } from './Logo';

import type { Candidate } from '@/types';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  candidate?: Candidate;
  onViewProfile: () => void;
}

export const Header = ({ theme, onToggleTheme, candidate, onViewProfile }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e8e0f0] dark:border-[#3d1f6b] bg-white/95 dark:bg-[#1a0a2e]/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-[#6331a2] dark:text-white">
          <Logo />
        </div>
        <div className="flex items-center gap-2">
          {candidate && (
            <button
              onClick={onViewProfile}
              aria-label="View profile"
              title={`${candidate.firstName} ${candidate.lastName}`}
              className="flex items-center gap-2 px-3 h-8 rounded-full border border-[#6331a2]/20 dark:border-[#3d1f6b] text-[#6331a2] dark:text-white hover:bg-[#6331a2]/5 dark:hover:bg-white/5 transition-colors"
            >
              <RiUserLine size={14} />
              <span className="text-xs font-medium hidden sm:block">{candidate.firstName}</span>
            </button>
          )}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#6331a2]/20 dark:border-[#3d1f6b] text-[#6331a2] dark:text-white hover:bg-[#6331a2]/5 dark:hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <RiSunLine size={14} /> : <RiMoonLine size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
};
