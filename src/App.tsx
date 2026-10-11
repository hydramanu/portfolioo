import React, { useState } from 'react';
import { OverviewView, TabId } from './components/OverviewView';
import { ProjectsView } from './components/ProjectsView';
import { DsaSkillsView } from './components/DsaSkillsView';
import { ExperienceContactView } from './components/ExperienceContactView';
import { CertificateModal, ResumeModal } from './components/Modals';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<'scaler-python' | 'ibm-python' | null>(null);
  const [profilePopoverOpen, setProfilePopoverOpen] = useState(false);

  const handleNavigate = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: TabId; label: string }[] = [
    { id: 'overview', label: '01. Overview' },
    { id: 'projects', label: '02. Projects' },
    { id: 'dsa-and-skills', label: '03. DSA & Skills' },
    { id: 'experience-and-contact', label: '04. Experience & Contact' },
  ];

  return (
    <div className="bg-[#10131a] font-sans text-[#e1e2ec] antialiased selection:bg-[#06b6d4] selection:text-[#00424f] min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#10131a]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)] border-b border-[#32353d]/50">
        <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavigate('overview')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-sm font-bold border border-[#32353d]">
                MKR
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[#e1e2ec] tracking-wider uppercase font-semibold">
                  Manoj Kumar Reddy
                </span>
                <span className="font-mono text-[10px] text-[#bcc9cd] uppercase">
                  CS &amp; Web3 // 2027
                </span>
              </div>
            </button>
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded bg-[#191b23] border border-[#32353d]/60">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="font-mono text-[10px] text-[#4edea3] tracking-widest uppercase">
                TARGET: SDE / ₹12 LPA | OPEN FOR ROLES
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#0b0e15] rounded border border-[#32353d]/60">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 font-mono text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#06b6d4] text-[#00424f] font-semibold rounded'
                      : 'text-[#bcc9cd] hover:text-[#e1e2ec] hover:bg-[#1d1f27] rounded'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0 relative">
            <div className="hidden sm:flex items-center gap-2">
              <a
                className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#272a32] font-mono text-xs transition-colors border border-[#32353d]/40"
                href="https://github.com/manojkumarreddy"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#272a32] font-mono text-xs transition-colors border border-[#32353d]/40"
                href="https://linkedin.com/in/manoj-kumar-reddy"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <button
              onClick={() => handleNavigate('experience-and-contact')}
              className="hidden md:inline-flex items-center justify-center px-3 py-1.5 rounded bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-mono text-xs transition-colors cursor-pointer border border-[#32353d]"
            >
              Contact Me
            </button>
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={() => setProfilePopoverOpen((prev) => !prev)}
              title="Inspect Candidate Quick Bio"
              className="w-8 h-8 rounded-full bg-[#4cd7f6] flex items-center justify-center overflow-hidden border border-[#4cd7f6] cursor-pointer text-[#003640]"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {profilePopoverOpen && (
              <div className="absolute right-0 top-12 w-72 bg-[#191b23] border border-[#4cd7f6]/40 rounded-xl shadow-2xl p-4 flex flex-col gap-3 z-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#272a32] border border-[#4cd7f6] flex items-center justify-center text-[#4cd7f6] font-mono font-bold">
                    MKR
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-[#e1e2ec] font-bold">Manoj Kumar Reddy</span>
                    <span className="font-mono text-[10px] text-[#4cd7f6]">B.Tech CSE (Blockchain)</span>
                    <span className="font-mono text-[10px] text-[#4edea3]">Class of 2027</span>
                  </div>
                </div>
                <div className="text-xs text-[#bcc9cd] border-t border-[#32353d] pt-2">
                  Available for SDE Intern &amp; Full-Time 2027 Graduation Roles.
                </div>
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      setProfilePopoverOpen(false);
                      setResumeOpen(true);
                    }}
                    className="flex-1 py-1.5 px-2.5 rounded bg-[#06b6d4] text-[#00424f] font-mono text-xs font-semibold cursor-pointer"
                  >
                    View Resume
                  </button>
                  <button
                    onClick={() => setProfilePopoverOpen(false)}
                    className="py-1.5 px-2.5 rounded bg-[#272a32] text-[#bcc9cd] font-mono text-xs cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile / Tablet Nav */}
        <div className="flex lg:hidden items-center justify-between gap-1 px-4 py-2 bg-[#0b0e15] border-t border-[#32353d]/40 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-1.5 font-mono text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#06b6d4] text-[#00424f] font-semibold rounded'
                    : 'text-[#bcc9cd] hover:text-[#e1e2ec] rounded'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Main View */}
      <main className="w-full pt-28 lg:pt-16 bg-[#10131a] min-h-[calc(100vh-160px)] flex-1">
        {activeTab === 'overview' && (
          <OverviewView onNavigate={handleNavigate} onOpenResume={() => setResumeOpen(true)} />
        )}
        {activeTab === 'projects' && <ProjectsView onNavigate={handleNavigate} />}
        {activeTab === 'dsa-and-skills' && (
          <DsaSkillsView
            onNavigate={handleNavigate}
            onOpenCertificate={(certId) => setActiveCertificate(certId)}
          />
        )}
        {activeTab === 'experience-and-contact' && (
          <ExperienceContactView
            onOpenResume={() => setResumeOpen(true)}
            onOpenCertificate={(certId) => setActiveCertificate(certId)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#0b0e15] py-8 shadow-[0_-1px_8px_rgba(0,0,0,0.3)] border-t border-[#32353d]/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
            <span className="font-mono text-xs text-[#bcc9cd]">
              MKR_CORE_V2.7 // MANOJ KUMAR REDDY
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <button
              onClick={() => handleNavigate('overview')}
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
            >
              Telemetry Home
            </button>
            <button
              onClick={() => handleNavigate('projects')}
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
            >
              Build Log
            </button>
            <button
              onClick={() => handleNavigate('dsa-and-skills')}
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
            >
              System Metrics
            </button>
            <button
              onClick={() => handleNavigate('experience-and-contact')}
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#e1e2ec] transition-colors cursor-pointer"
            >
              Terminal Ping
            </button>
          </div>
          <div className="font-mono text-[10px] text-[#869397] uppercase tracking-wider">
            © 2025 MKR // ALL PROTOCOLS VERIFIED
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CertificateModal certId={activeCertificate} onClose={() => setActiveCertificate(null)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
