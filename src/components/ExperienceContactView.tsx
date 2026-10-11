import React, { useState } from 'react';

interface ExperienceContactViewProps {
  onOpenResume: () => void;
  onOpenCertificate: (certId: 'scaler-python' | 'ibm-python') => void;
}

export const ExperienceContactView: React.FC<ExperienceContactViewProps> = ({
  onOpenResume,
  onOpenCertificate,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [quickTerminalOpen, setQuickTerminalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [dispatched, setDispatched] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('manojreddyoff@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;
    setDispatched(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 300);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Status Strip */}
      <div className="w-full bg-[#0b0e15] border-b border-[#32353d]/40 py-3.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6]"></span>
            <span className="font-mono text-xs text-[#4cd7f6]">
              MODULE // 04_DISPATCH_CONSOLE
            </span>
            <span className="font-mono text-xs text-[#869397]">::</span>
            <span className="font-mono text-xs text-[#bcc9cd]">
              SDE_READINESS_METRICS // 2025-2027
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#191b23] font-mono text-xs text-[#4edea3]">
              LATENCY: <span className="text-[#e1e2ec]">18ms</span>
            </span>
            <span className="px-2.5 py-1 rounded bg-[#191b23] font-mono text-xs text-[#4cd7f6]">
              ENCRYPT: <span className="text-[#e1e2ec]">TLS_1.3_SHA256</span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12">
        {/* Core Directive Quote Card */}
        <div className="bg-[#191b23] rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-[#32353d]/50">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-xs">
                ENGINEERING_PHILOSOPHY.LOG
              </span>
              <span className="font-mono text-xs text-[#869397]">// CORE_DIRECTIVE</span>
            </div>
            <blockquote className="text-xl sm:text-2xl font-bold text-[#e1e2ec] leading-snug">
              &ldquo;I&apos;m interested in building reliable software, solving meaningful engineering problems, and
              contributing to teams that value learning, ownership, and execution.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-1">
              <span className="flex items-center gap-1.5 font-mono text-xs text-[#4edea3] uppercase">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                VERIFIED SDE CANDIDATE
              </span>
              <span className="text-[#869397]">•</span>
              <span className="font-mono text-xs text-[#bcc9cd] uppercase">
                BATCH 2027 // CSE &amp; DISTRIBUTED SYSTEMS
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-lg bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Resume (Manoj_Kumar_Reddy.pdf)</span>
            </button>
            <button
              onClick={() => setQuickTerminalOpen((prev) => !prev)}
              className="px-5 py-3 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-mono text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>{quickTerminalOpen ? 'Close Quick Terminal' : 'Open Quick Terminal'}</span>
            </button>
          </div>
        </div>

        {quickTerminalOpen && (
          <div className="bg-[#0b0e15] p-6 rounded-xl border border-[#4cd7f6]/40 shadow-lg font-mono text-xs flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 border-b border-[#32353d]">
              <span className="text-[#4cd7f6]">mkr@orbital-node:~/telemetry$ ./status_check.sh</span>
              <button
                onClick={() => setQuickTerminalOpen(false)}
                className="text-[#869397] hover:text-[#e1e2ec] cursor-pointer"
              >
                close [x]
              </button>
            </div>
            <div className="text-[#bcc9cd] space-y-1 pt-1">
              <div>&gt; CANDIDATE: Manoj Kumar Reddy (B.Tech CSE Blockchain &apos;27)</div>
              <div>&gt; INTERNSHIPS: Pinnacle Labs (Mobile App Dev), Apex Planet (Web Dev)</div>
              <div>&gt; HONORS: FusionX Hackathon 2nd Prize | Smart India Hackathon Qualifier | AlgoUniversity Top 1.4%</div>
              <div className="text-[#4edea3]">&gt; STATUS: READY FOR TECHNICAL INTERVIEWS (SDE / ₹12 LPA TARGET)</div>
            </div>
          </div>
        )}

        {/* 2-Col Experience & Honors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[22px]">work_history</span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">Experience Telemetry</h2>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#191b23] font-mono text-[10px] text-[#869397] uppercase">
                2 NODES ACTIVE
              </span>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-lg flex flex-col gap-4 border border-[#32353d]/40">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base text-[#e1e2ec] font-bold">
                      Mobile App Development Intern
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#4cd7f6] font-mono text-[10px]">
                      REMOTE
                    </span>
                  </div>
                  <div className="font-mono text-xs mt-1">
                    <span className="text-[#4cd7f6] font-semibold">Pinnacle Labs</span>{' '}
                    <span className="text-[#869397]">// SYS_ID: PIN-2025</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#4edea3] font-mono text-xs flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  Jun 2025 – Jul 2025
                </span>
              </div>

              <p className="text-xs text-[#bcc9cd] leading-relaxed">
                Developed mobile application interfaces and implemented features for functional workflows. Performed
                application testing, systematic debugging, and UI/UX optimization to improve overall usability.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Mobile Architecture
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  System Debugging
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  UI/UX Usability
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Workflow Engine
                </span>
              </div>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-lg flex flex-col gap-4 border border-[#32353d]/40">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base text-[#e1e2ec] font-bold">
                      Web Development Intern
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#4cd7f6] font-mono text-[10px]">
                      REMOTE
                    </span>
                  </div>
                  <div className="font-mono text-xs mt-1">
                    <span className="text-[#4cd7f6] font-semibold">Apex Planet</span>{' '}
                    <span className="text-[#869397]">// SYS_ID: APX-2025</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#4edea3] font-mono text-xs flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                  Jul 2025 – Aug 2025
                </span>
              </div>

              <p className="text-xs text-[#bcc9cd] leading-relaxed">
                Developed responsive web pages using modern HTML, CSS, and JavaScript. Debugged web applications and
                improved interface functionality across viewports.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Modern JavaScript
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Responsive Layouts
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Viewport Tuning
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  DOM Performance
                </span>
              </div>
            </div>

            <div className="bg-[#191b23] rounded-xl p-5 shadow-md flex flex-col sm:flex-row items-center gap-5 border border-[#32353d]/40">
              <div className="w-full sm:w-32 h-24 rounded-lg overflow-hidden bg-[#272a32] flex items-center justify-center text-[#4cd7f6] shrink-0 border border-[#32353d]">
                <span className="material-symbols-outlined text-[40px]">terminal</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[#4edea3]">
                  <span className="material-symbols-outlined text-[16px]">memory</span>
                  <span className="font-mono text-xs text-[#e1e2ec] uppercase">
                    EXECUTION ENVIRONMENT
                  </span>
                </div>
                <p className="text-xs text-[#bcc9cd] leading-relaxed">
                  Every production release is engineered for rigorous latency guarantees, clean code modularity, and
                  rapid automated verification pipelines.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#d0bcff] text-[22px]">military_tech</span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">Honors &amp; Badges</h2>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#191b23] font-mono text-[10px] text-[#869397] uppercase">
                VERIFIED
              </span>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-lg flex flex-col gap-3 border border-[#32353d]/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#571bc1]/30 flex items-center justify-center text-[#d0bcff] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                  </div>
                  <div>
                    <h3 className="text-base text-[#e1e2ec] font-bold">
                      FusionX Hackathon 2026
                    </h3>
                    <span className="font-mono text-xs text-[#d0bcff]">
                      Cyber Security &amp; Blockchain Track
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#571bc1] text-[#c4abff] font-mono text-[10px] uppercase shrink-0">
                  2ND PRIZE
                </span>
              </div>
              <p className="text-xs text-[#bcc9cd] leading-relaxed">
                Awarded Runner-Up recognition for building tamper-resistant telemetry pipelines and multi-signature
                verification protocols under stringent time constraints.
              </p>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-lg flex flex-col gap-3 border border-[#32353d]/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/20 flex items-center justify-center text-[#4cd7f6] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                  </div>
                  <div>
                    <h3 className="text-base text-[#e1e2ec] font-bold">
                      Smart India Hackathon (SIH)
                    </h3>
                    <span className="font-mono text-xs text-[#4cd7f6]">National Innovation Initiative</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#06b6d4]/20 text-[#4cd7f6] font-mono text-[10px] uppercase shrink-0">
                  QUALIFIER
                </span>
              </div>
              <p className="text-xs text-[#bcc9cd] leading-relaxed">
                Selected as College Qualifier team lead for designing distributed smart civic data architecture tackling
                systemic real-world public infrastructure logs.
              </p>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-lg flex flex-col gap-3 border border-[#32353d]/40">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1bbd85]/20 flex items-center justify-center text-[#4edea3] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">speed</span>
                  </div>
                  <div>
                    <h3 className="text-base text-[#e1e2ec] font-bold">
                      AlgoUniversity Accelerator
                    </h3>
                    <span className="font-mono text-xs text-[#4edea3]">
                      Programming &amp; DSA Intensive Camp
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#1bbd85] text-[#00452e] font-mono text-[10px] uppercase shrink-0">
                  TOP 1.4%
                </span>
              </div>
              <p className="text-xs text-[#bcc9cd] leading-relaxed">
                Selected among top 1.4% of 40,000+ national applicants based on timed computational tests, algorithmic
                rigor, and mathematical problem solving.
              </p>
            </div>

            <div className="bg-[#191b23] rounded-xl p-5 shadow-md flex flex-col gap-2 border border-[#32353d]/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-[18px]">folder_special</span>
                  <span className="font-mono text-xs uppercase">VERIFIED CREDENTIALS &amp; PDFS</span>
                </div>
                <button
                  onClick={() => onOpenCertificate('ibm-python')}
                  className="font-mono text-xs text-[#4cd7f6] hover:underline cursor-pointer"
                >
                  Inspect PDF [→]
                </button>
              </div>
              <p className="text-xs text-[#bcc9cd]">
                Need certificate PDFs? Feel free to reach out via email or click above to inspect verified copies of
                Scaler and IBM certifications.
              </p>
            </div>
          </div>
        </div>

        {/* Target SDE Banner */}
        <div className="bg-[#191b23] rounded-2xl p-8 lg:p-12 text-center flex flex-col items-center gap-4 shadow-xl border border-[#32353d]/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#272a32] text-[#4cd7f6] font-mono text-xs uppercase">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
            RECRUITER RADAR ACTIVE // ₹12 LPA ENTRY TARGET
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e1e2ec] max-w-2xl">
            Let&apos;s Build Something Useful — Target SDE / ₹12 LPA Entry Roles
          </h2>
          <p className="text-base text-[#bcc9cd] max-w-2xl">
            Currently interviewing for upcoming Software Development Engineer roles with high ownership teams across
            Web3, Backend Systems, and Distributed Cloud Computing.
          </p>
        </div>

        {/* Direct Contact Console */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase block mb-1">
                // COMMS_DISPATCHER
              </span>
              <h2 className="text-2xl font-bold text-[#e1e2ec]">Direct Contact Console</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="font-mono text-xs text-[#bcc9cd] uppercase">
                SMTP GATEWAY ONLINE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col gap-4 border border-[#32353d]/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">
                    PRIMARY CHANNEL // P1
                  </span>
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">mail</span>
                </div>
                <div>
                  <span className="text-xs text-[#bcc9cd] block">Electronic Mail</span>
                  <span className="font-mono text-sm text-[#e1e2ec] font-semibold">
                    manojreddyoff@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded bg-[#272a32] hover:bg-[#32353d] text-[#4cd7f6] font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">content_copy</span>
                    <span>{copiedEmail ? 'Copied!' : 'Copy Address'}</span>
                  </button>
                  <a
                    href="mailto:manojreddyoff@gmail.com"
                    className="px-3.5 py-2 rounded bg-[#1d1f27] hover:bg-[#272a32] text-[#e1e2ec] font-mono text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">send</span>
                    <span>Direct Mailto</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col gap-4 border border-[#32353d]/40">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">VOICE / SECURE CELL</span>
                  <span className="material-symbols-outlined text-[#4edea3] text-[18px]">smartphone</span>
                </div>
                <div>
                  <span className="text-xs text-[#bcc9cd] block">Direct Line (IN)</span>
                  <span className="font-mono text-sm text-[#e1e2ec] font-semibold">+91 7989247233</span>
                </div>
                <div>
                  <a
                    href="tel:+917989247233"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#272a32] hover:bg-[#32353d] text-[#4edea3] font-mono text-xs transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">call</span>
                    <span>Dial Direct</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col gap-3 border border-[#32353d]/40">
                <span className="font-mono text-[10px] text-[#869397] uppercase">SYNCHRONIZED HUBS</span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com/in/manoj-kumar-reddy"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-[#1d1f27] hover:bg-[#272a32] transition-colors"
                  >
                    <span className="font-mono text-xs text-[#d0bcff] font-semibold block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs text-[#bcc9cd]">manoj-kumar-reddy</span>
                  </a>
                  <a
                    href="https://github.com/manojkumarreddy"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-[#1d1f27] hover:bg-[#272a32] transition-colors"
                  >
                    <span className="font-mono text-xs text-[#4cd7f6] font-semibold block">GitHub Commits</span>
                    <span className="text-xs text-[#bcc9cd]">@manojkumarreddy</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#191b23] rounded-xl p-5 shadow-md flex flex-col gap-2 border border-[#32353d]/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[#4cd7f6]">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span className="font-mono text-xs text-[#e1e2ec] uppercase">
                      OPERATIONAL BASE: HYDERABAD / BENGALURU, INDIA
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4edea3]">UTC+05:30</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Open to relocation across PAN-India tier-1 tech clusters or high-bandwidth global remote environments.
                </p>
              </div>
            </div>

            {/* Right Terminal Form */}
            <div className="lg:col-span-7 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#32353d]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#1bbd85]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#06b6d4]"></span>
                    <span className="font-mono text-xs text-[#bcc9cd] ml-2">
                      terminal_session // new_message.sh
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#4cd7f6]">&gt;_READY</span>
                </div>

                <form onSubmit={handleDispatch} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-[#bcc9cd] uppercase">
                        01. NAME / IDENTITY
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Chen"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="px-4 py-3 rounded-lg bg-[#0b0e15] border border-[#32353d] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4cd7f6]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-[#bcc9cd] uppercase">
                        02. EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="px-4 py-3 rounded-lg bg-[#0b0e15] border border-[#32353d] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4cd7f6]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#bcc9cd] uppercase">
                      03. SUBJECT / ROLE INQUIRY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SDE Role Invitation / Project Collaboration"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-[#0b0e15] border border-[#32353d] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-[#bcc9cd] uppercase">
                      04. PAYLOAD / MESSAGE CONTENT
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write details about the role, tech stack requirements, or collaboration scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-[#0b0e15] border border-[#32353d] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4cd7f6] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold flex items-center gap-2 shadow-md transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Dispatch Message Payload</span>
                    </button>
                    {dispatched && (
                      <span className="font-mono text-xs text-[#4edea3] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Payload dispatched to manojreddyoff@gmail.com
                      </span>
                    )}
                  </div>
                </form>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex items-center gap-3 border border-[#32353d]/40">
                <span className="material-symbols-outlined text-[#869397] text-[18px]">info</span>
                <span className="text-xs text-[#bcc9cd]">
                  Form configured for direct SMTP / Webhook integration. Direct reach out via{' '}
                  <a href="mailto:manojreddyoff@gmail.com" className="text-[#4cd7f6] hover:underline">
                    manojreddyoff@gmail.com
                  </a>{' '}
                  is prioritized.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#191b23] p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#32353d]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#4cd7f6] shrink-0">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </div>
            <div>
              <h3 className="text-base text-[#e1e2ec] font-bold">
                Ready for Rigorous Technical Interviews
              </h3>
              <p className="text-xs text-[#bcc9cd]">
                DSA, System Design Foundations, OOP, and Modern Web/Mobile Pipelines.
              </p>
            </div>
          </div>
          <a
            href="mailto:manojreddyoff@gmail.com?subject=Technical%20Screen%20Invitation%20-%20Manoj%20Kumar%20Reddy"
            className="px-5 py-2.5 rounded bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold shrink-0 transition-colors"
          >
            Schedule Tech Screen
          </a>
        </div>
      </div>
    </div>
  );
};
