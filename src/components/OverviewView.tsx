import React from 'react';

export type TabId = 'overview' | 'projects' | 'dsa-and-skills' | 'experience-and-contact';

interface OverviewViewProps {
  onNavigate: (tab: TabId) => void;
  onOpenResume: () => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden bg-[#0b0e15]">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#4cd7f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#4cd7f6]/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#571bc1]/20 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-16">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 bg-[#191b23]/60 rounded-xl p-4 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4edea3]"></span>
              </span>
              <span className="font-mono text-xs text-[#4edea3] tracking-widest uppercase">
                NODE ACTIVE: MKR_ORBITAL_STATION
              </span>
              <span className="font-mono text-xs text-[#3d494c]">|</span>
              <span className="font-mono text-xs text-[#bcc9cd]">SYS_CLK: 2025.Q2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#4cd7f6] font-mono text-xs">
                B.TECH CSE (BLOCKCHAIN)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#571bc1]/30 text-[#d0bcff] font-mono text-xs">
                CLASS OF 2027
              </span>
              <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-[#1bbd85]/30 text-[#4edea3] font-mono text-xs">
                ROLE_SEARCH: READY
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#4cd7f6] tracking-widest uppercase">
                    ID // OPERATIONAL_PROFILE
                  </span>
                  <span className="h-px w-12 bg-[#4cd7f6]/40"></span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#e1e2ec] tracking-tight">
                  Manoj Kumar <span className="text-[#4cd7f6]">Reddy</span>
                </h1>
                <p className="text-lg font-semibold text-[#bcc9cd]">
                  Software Engineer <span className="text-[#4cd7f6] font-mono">::</span> AI/ML Reliability{' '}
                  <span className="text-[#d0bcff] font-mono">::</span> Blockchain{' '}
                  <span className="text-[#4edea3] font-mono">::</span> Web Systems
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1d1f27]/70 shadow-md border border-[#32353d]/50">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] mt-0.5">terminal</span>
                  <p className="text-sm text-[#e1e2ec] leading-relaxed">
                    Computer Science Engineering student specializing in Blockchain, with internship experience in web
                    and mobile development and project experience in AI/ML reliability, browser extensions, and
                    blockchain applications. Skilled in Python, Java, SQL, and JavaScript, with a foundation in Data
                    Structures, Object-Oriented Programming, and database systems. Interested in building reliable
                    software and evaluating potential machine-learning failure modes before deployment.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>EXPLORE PROJECTS [↓]</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </button>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-mono text-xs transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#d0bcff] text-[16px]">download</span>
                  <span>DOWNLOAD RESUME (PDF)</span>
                </button>
                <button
                  onClick={() => onNavigate('experience-and-contact')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#1d1f27] hover:bg-[#272a32] text-[#4cd7f6] font-mono text-xs transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">sensors</span>
                  <span>INITIALIZE CONTACT</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <a
                  className="p-3 rounded-lg bg-[#191b23] hover:bg-[#1d1f27] transition-colors flex items-center gap-2 group border border-[#32353d]/40"
                  href="https://github.com/manojkumarreddy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[#bcc9cd] group-hover:text-[#4cd7f6] text-[18px]">
                    code
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#869397] uppercase">Repository</span>
                    <span className="font-mono text-xs text-[#e1e2ec] truncate">GitHub/mkr</span>
                  </div>
                </a>
                <a
                  className="p-3 rounded-lg bg-[#191b23] hover:bg-[#1d1f27] transition-colors flex items-center gap-2 group border border-[#32353d]/40"
                  href="https://linkedin.com/in/manoj-kumar-reddy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[#bcc9cd] group-hover:text-[#4cd7f6] text-[18px]">
                    account_box
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#869397] uppercase">Network</span>
                    <span className="font-mono text-xs text-[#e1e2ec] truncate">LinkedIn</span>
                  </div>
                </a>
                <a
                  className="p-3 rounded-lg bg-[#191b23] hover:bg-[#1d1f27] transition-colors flex items-center gap-2 group border border-[#32353d]/40"
                  href="mailto:manojreddyoff@gmail.com"
                >
                  <span className="material-symbols-outlined text-[#bcc9cd] group-hover:text-[#4edea3] text-[18px]">
                    mail
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#869397] uppercase">Comms</span>
                    <span className="font-mono text-xs text-[#e1e2ec] truncate">manojreddyoff</span>
                  </div>
                </a>
                <a
                  className="p-3 rounded-lg bg-[#191b23] hover:bg-[#1d1f27] transition-colors flex items-center gap-2 group border border-[#32353d]/40"
                  href="tel:+917989247233"
                >
                  <span className="material-symbols-outlined text-[#bcc9cd] group-hover:text-[#4cd7f6] text-[18px]">
                    call
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#869397] uppercase">Signal</span>
                    <span className="font-mono text-xs text-[#e1e2ec] truncate">+91 7989247233</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-5 rounded-xl bg-[#272a32]/70 shadow-lg backdrop-blur-md border border-[#32353d]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#32353d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">developer_board</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold uppercase">
                      Hardware/Runtime Telemetry
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#4edea3]">SYNCD</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs text-[#bcc9cd]">
                        Academic Velocity (B.Tech)
                      </span>
                      <span className="font-mono text-xs text-[#4cd7f6]">69.5% [6.95 CGPA]</span>
                    </div>
                    <div className="w-full bg-[#0b0e15] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#4cd7f6] h-full rounded-full" style={{ width: '69.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs text-[#bcc9cd]">
                        Core Foundation (Satyam PU)
                      </span>
                      <span className="font-mono text-xs text-[#d0bcff]">88.0%</span>
                    </div>
                    <div className="w-full bg-[#0b0e15] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#d0bcff] h-full rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-xs text-[#bcc9cd]">
                        AlgoUniversity Global Rank
                      </span>
                      <span className="font-mono text-xs text-[#4edea3]">TOP 1.4% (40K+)</span>
                    </div>
                    <div className="w-full bg-[#0b0e15] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#4edea3] h-full rounded-full" style={{ width: '98.6%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#32353d]">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">Stack Deployment Target</span>
                  <span className="font-mono text-xs text-[#4edea3] bg-[#1bbd85]/20 px-2 py-0.5 rounded">
                    SDE I // INTERN
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#191b23] shadow-sm border border-[#32353d]">
                <span className="font-mono text-[10px] text-[#869397] uppercase block mb-2">
                  TELEMETRY_FEEDBACK
                </span>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#d0bcff] text-[24px]">verified</span>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      FusionX 2026 // 2nd Prize
                    </span>
                    <span className="text-xs text-[#bcc9cd]">
                      Smart India Hackathon College Qualifier
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">dataset</span>
            <h2 className="text-xl font-bold text-[#e1e2ec] tracking-tight">
              System Metrics // Quick Facts
            </h2>
            <div className="h-px flex-1 bg-[#32353d]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div className="p-4 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] transition-colors shadow-sm flex flex-col justify-between border border-[#32353d]/60">
              <div className="flex items-center justify-between text-[#869397]">
                <span className="font-mono text-[10px] uppercase">SPEC</span>
                <span className="material-symbols-outlined text-[16px]">school</span>
              </div>
              <div className="my-2">
                <span className="text-lg text-[#4cd7f6] font-bold">B.Tech</span>
                <p className="font-mono text-xs text-[#bcc9cd]">CSE Blockchain</p>
              </div>
              <span className="font-mono text-[10px] text-[#869397]">Presidency &apos;27</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] transition-colors shadow-sm flex flex-col justify-between border border-[#32353d]/60">
              <div className="flex items-center justify-between text-[#869397]">
                <span className="font-mono text-[10px] uppercase">GPA SCORE</span>
                <span className="material-symbols-outlined text-[16px]">grade</span>
              </div>
              <div className="my-2">
                <span className="text-lg text-[#e1e2ec] font-bold">
                  6.95 <span className="text-xs text-[#869397]">/ 10</span>
                </span>
                <p className="font-mono text-xs text-[#bcc9cd]">PU CGPA: 88%</p>
              </div>
              <span className="font-mono text-[10px] text-[#869397]">Satyam PU Col.</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] transition-colors shadow-sm flex flex-col justify-between border border-[#32353d]/60">
              <div className="flex items-center justify-between text-[#869397]">
                <span className="font-mono text-[10px] uppercase">ENGAGEMENTS</span>
                <span className="material-symbols-outlined text-[16px]">work_history</span>
              </div>
              <div className="my-2">
                <span className="text-lg text-[#4edea3] font-bold">02 Roles</span>
                <p className="font-mono text-xs text-[#bcc9cd]">Mobile &amp; Web Dev</p>
              </div>
              <span className="font-mono text-[10px] text-[#869397]">Verified Internships</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] transition-colors shadow-sm flex flex-col justify-between border border-[#32353d]/60">
              <div className="flex items-center justify-between text-[#869397]">
                <span className="font-mono text-[10px] uppercase">ARCHITECTURES</span>
                <span className="material-symbols-outlined text-[16px]">hub</span>
              </div>
              <div className="my-2">
                <span className="text-lg text-[#4cd7f6] font-bold">03 Nodes</span>
                <p className="font-mono text-xs text-[#bcc9cd]">Flagship Systems</p>
              </div>
              <span className="font-mono text-[10px] text-[#869397]">Production Grade</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] transition-colors shadow-sm flex flex-col justify-between border border-[#32353d]/60">
              <div className="flex items-center justify-between text-[#869397]">
                <span className="font-mono text-[10px] uppercase">DSA BENCHMARK</span>
                <span className="material-symbols-outlined text-[16px]">speed</span>
              </div>
              <div className="my-2">
                <span className="text-lg text-[#d0bcff] font-bold">TOP 1.4%</span>
                <p className="font-mono text-xs text-[#bcc9cd]">40,000+ Coders</p>
              </div>
              <span className="font-mono text-[10px] text-[#869397]">AlgoUniversity</span>
            </div>

            <div className="p-4 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] transition-colors shadow-sm flex flex-col justify-between border border-[#32353d]/60">
              <div className="flex items-center justify-between text-[#869397]">
                <span className="font-mono text-[10px] uppercase">DISTINCTIONS</span>
                <span className="material-symbols-outlined text-[16px]">military_tech</span>
              </div>
              <div className="my-2">
                <span className="text-lg text-[#4edea3] font-bold">2nd Prize</span>
                <p className="font-mono text-xs text-[#bcc9cd]">FusionX 2026</p>
              </div>
              <span className="font-mono text-[10px] text-[#869397]">SIH Qualifier</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#d0bcff] text-[20px]">architecture</span>
              <h2 className="text-xl font-bold text-[#e1e2ec] tracking-tight">
                Core Engineering Pillars
              </h2>
            </div>
            <span className="font-mono text-xs text-[#869397] uppercase hidden sm:inline-block">
              ARCH_VECT_2025
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-6 rounded-2xl bg-[#191b23] hover:bg-[#1d1f27] transition-all shadow-md flex flex-col justify-between overflow-hidden border border-[#32353d]/50">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#4cd7f6]/40 group-hover:bg-[#4cd7f6] transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#272a32] flex items-center justify-center text-[#4cd7f6] mb-4 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">shield</span>
                </div>
                <span className="font-mono text-xs text-[#4cd7f6] tracking-widest block mb-1">
                  PILLAR // 01
                </span>
                <h3 className="text-lg text-[#e1e2ec] font-semibold mb-2">
                  Browser Extensions &amp; User Protection
                </h3>
                <p className="text-sm text-[#bcc9cd] leading-relaxed mb-4">
                  Designing local-first defensive tooling that analyzes DOM heuristics and mutation events in real time.
                  Building client-side rule engines to neutralize deceptive patterns without remote latency.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  DOM Heuristics
                </span>
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Manifest V3
                </span>
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Rule Engines
                </span>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-[#191b23] hover:bg-[#1d1f27] transition-all shadow-md flex flex-col justify-between overflow-hidden border border-[#32353d]/50">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#d0bcff]/40 group-hover:bg-[#d0bcff] transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#272a32] flex items-center justify-center text-[#d0bcff] mb-4 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">smart_toy</span>
                </div>
                <span className="font-mono text-xs text-[#d0bcff] tracking-widest block mb-1">
                  PILLAR // 02
                </span>
                <h3 className="text-lg text-[#e1e2ec] font-semibold mb-2">
                  ML Pre-Deployment Failure Analysis
                </h3>
                <p className="text-sm text-[#bcc9cd] leading-relaxed mb-4">
                  Constructing stress-test harnesses and adversarial simulators to expose machine learning
                  vulnerabilities, distribution shift, and confidence edge cases before production release.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Failure Sim
                </span>
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Edge Cases
                </span>
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Python / PyTorch
                </span>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl bg-[#191b23] hover:bg-[#1d1f27] transition-all shadow-md flex flex-col justify-between overflow-hidden border border-[#32353d]/50">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#4edea3]/40 group-hover:bg-[#4edea3] transition-colors"></div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#272a32] flex items-center justify-center text-[#4edea3] mb-4 shadow-inner">
                  <span className="material-symbols-outlined text-[24px]">token</span>
                </div>
                <span className="font-mono text-xs text-[#4edea3] tracking-widest block mb-1">
                  PILLAR // 03
                </span>
                <h3 className="text-lg text-[#e1e2ec] font-semibold mb-2">
                  Blockchain &amp; Decentralized Workflows
                </h3>
                <p className="text-sm text-[#bcc9cd] leading-relaxed mb-4">
                  Deploying immutable state ledgers, auditable vehicular identity tokens, and trust-minimized business
                  protocols using EVM smart contracts and cryptographically verifiable ledgers.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Smart Contracts
                </span>
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Solidity
                </span>
                <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Auditability
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">terminal</span>
              <h2 className="text-xl font-bold text-[#e1e2ec] tracking-tight">
                System Navigation Matrix
              </h2>
            </div>
            <span className="font-mono text-xs text-[#869397]">DIRECT ACCESS DOCK</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="group p-5 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] shadow-md transition-all flex flex-col justify-between text-left cursor-pointer border border-[#32353d]/50"
            >
              <div>
                <div className="flex items-center justify-between text-[#869397] mb-3">
                  <span className="font-mono text-xs group-hover:text-[#4cd7f6] transition-colors">
                    MODULE_02 // BUILDS
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                    arrow_forward
                  </span>
                </div>
                <h4 className="text-lg text-[#e1e2ec] font-bold mb-1">Flagship Projects</h4>
                <p className="text-xs text-[#bcc9cd]">
                  UndoMap browser shield, PreMortemML reliability analyzer, and decentralized vehicle identity ledger.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#32353d]">
                <span className="font-mono text-xs text-[#4cd7f6]">3 DEPLOYMENTS</span>
                <span className="font-mono text-xs text-[#bcc9cd]">EXPLORE [→]</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('dsa-and-skills')}
              className="group p-5 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] shadow-md transition-all flex flex-col justify-between text-left cursor-pointer border border-[#32353d]/50"
            >
              <div>
                <div className="flex items-center justify-between text-[#869397] mb-3">
                  <span className="font-mono text-xs group-hover:text-[#d0bcff] transition-colors">
                    MODULE_03 // METRICS
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                    arrow_forward
                  </span>
                </div>
                <h4 className="text-lg text-[#e1e2ec] font-bold mb-1">
                  DSA &amp; Technical Skills
                </h4>
                <p className="text-xs text-[#bcc9cd]">
                  Data Structures, AlgoUniversity 1.4% percentile, Python, Java, SQL, Solidity &amp; full stack
                  architecture.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#32353d]">
                <span className="font-mono text-xs text-[#d0bcff]">CORE FOUNDATIONS</span>
                <span className="font-mono text-xs text-[#bcc9cd]">INSPECT [→]</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('experience-and-contact')}
              className="group p-5 rounded-xl bg-[#1d1f27] hover:bg-[#272a32] shadow-md transition-all flex flex-col justify-between text-left cursor-pointer border border-[#32353d]/50"
            >
              <div>
                <div className="flex items-center justify-between text-[#869397] mb-3">
                  <span className="font-mono text-xs group-hover:text-[#4edea3] transition-colors">
                    MODULE_04 // TIMELINE
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                    arrow_forward
                  </span>
                </div>
                <h4 className="text-lg text-[#e1e2ec] font-bold mb-1">
                  Experience &amp; Contact
                </h4>
                <p className="text-xs text-[#bcc9cd]">
                  2 internship logs (Mobile &amp; Web development), hackathon podium badges, and direct messaging
                  channel.
                </p>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#32353d]">
                <span className="font-mono text-xs text-[#4edea3]">OPEN FOR OFFERS</span>
                <span className="font-mono text-xs text-[#bcc9cd]">CONNECT [→]</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
