import React from 'react';

interface CertificateModalProps {
  certId: 'scaler-python' | 'ibm-python' | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certId, onClose }) => {
  if (!certId) return null;

  const isIBM = certId === 'ibm-python';

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b0e15]/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#191b23] border border-[#4cd7f6]/40 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#272a32] px-6 py-4 flex items-center justify-between border-b border-[#32353d]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#4edea3] text-[20px]">verified</span>
            <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
              {isIBM
                ? 'IBM PY0101EN Certificate // Cognitive Class'
                : 'Scaler Certificate // Introduction to Python'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#bcc9cd] hover:text-[#e1e2ec] font-mono text-xs cursor-pointer"
          >
            ESC / Close [✕]
          </button>
        </div>

        <div className="p-6 lg:p-8 bg-[#10131a] flex flex-col gap-6">
          <div className="bg-white text-slate-900 rounded-lg p-8 shadow-inner border-4 border-slate-300 flex flex-col items-center text-center gap-4 relative">
            <div className="w-full flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center">
                  {isIBM ? 'C' : 'S'}
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-800">
                  {isIBM ? 'CognitiveClass.ai' : 'Scaler Academy'}
                </span>
              </div>
              <span className="font-mono text-xs text-slate-500">
                {isIBM ? 'VERIFIED ID: 3c7aeb0f60dd459bbbe8669c281b67c6' : 'VERIFIED CREDENTIAL // SCALER-PY'}
              </span>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest pt-2">This is to certify that</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-900">MANOJ KUMAR REDDY</h2>
            <p className="text-xs text-slate-600">successfully completed and received a passing grade in</p>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-800">
              {isIBM ? 'Python 101 for Data Science' : 'Introduction to Python Programming'}
            </h3>
            <p className="text-xs text-slate-500">
              {isIBM
                ? '(PY0101EN, provided by IBM Developer Skills Network)'
                : '(Core Python Syntax, Data Structures & Functional Modules)'}
            </p>

            <div className="w-full pt-6 mt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <span>Issued by {isIBM ? 'Cognitive Class / IBM' : 'Scaler'}</span>
              <span>Date: September 8, 2026</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-xs text-[#bcc9cd]">
              Authenticity URL:{' '}
              {isIBM ? (
                <a
                  href="https://courses.cognitiveclass.ai/certificates/3c7aeb0f60dd459bbbe8669c281b67c6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4cd7f6] hover:underline"
                >
                  courses.cognitiveclass.ai/certificates/3c7aeb0f60dd459bbbe8669c281b67c6
                </a>
              ) : (
                <span className="text-[#4edea3]">Verified via Scaler Transcript Registry</span>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-[#06b6d4] text-[#00424f] font-mono text-xs font-semibold cursor-pointer"
            >
              Done Inspecting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b0e15]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#191b23] border border-[#4cd7f6]/40 rounded-xl shadow-2xl overflow-hidden flex flex-col my-8 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#272a32] px-6 py-4 flex items-center justify-between shrink-0 border-b border-[#32353d]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">description</span>
            <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
              Manoj_Kumar_Reddy_Resume.pdf // TELEMETRY_TRANSCRIPT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#06b6d4] text-[#00424f] font-mono text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-2.5 py-1.5 rounded bg-[#1d1f27] text-[#bcc9cd] hover:text-[#e1e2ec] font-mono text-xs cursor-pointer"
            >
              Close [✕]
            </button>
          </div>
        </div>

        <div className="p-6 lg:p-8 overflow-y-auto space-y-6 bg-[#10131a] text-[#e1e2ec]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#32353d]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#272a32] flex items-center justify-center text-[#4cd7f6] border-2 border-[#4cd7f6] text-xl font-bold font-mono">
                MKR
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#e1e2ec]">Manoj Kumar Reddy</h2>
                <p className="font-mono text-xs text-[#4cd7f6]">
                  B.Tech CSE (Blockchain) // Presidency University (Class of 2027)
                </p>
                <p className="font-mono text-xs text-[#bcc9cd]">
                  manojreddyoff@gmail.com • +91 7989247233 • Bengaluru / Hyderabad
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-[#1bbd85]/20 text-[#4edea3] font-mono text-xs font-semibold">
              TARGET: SDE / ₹12 LPA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-[#4cd7f6] uppercase">EDUCATION &amp; BENCHMARKS</h3>
              <div className="bg-[#191b23] p-4 rounded-lg space-y-2 border border-[#32353d]">
                <div className="font-mono text-xs font-semibold text-[#e1e2ec]">Presidency University — B.Tech CSE</div>
                <div className="text-xs text-[#bcc9cd]">
                  Specialization in Blockchain • CGPA: 6.95 / 10 (2023 – 2027)
                </div>
                <div className="font-mono text-xs font-semibold text-[#e1e2ec] pt-2">Satyam PU College</div>
                <div className="text-xs text-[#bcc9cd]">Pre-University Score: 88.0%</div>
              </div>

              <h3 className="font-mono text-xs text-[#d0bcff] uppercase">INTERNSHIP EXPERIENCE</h3>
              <div className="bg-[#191b23] p-4 rounded-lg space-y-3 border border-[#32353d]">
                <div>
                  <div className="font-mono text-xs font-semibold text-[#e1e2ec]">
                    Mobile App Development Intern — Pinnacle Labs
                  </div>
                  <div className="font-mono text-[10px] text-[#4edea3]">Jun 2025 – Jul 2025 (Remote)</div>
                  <p className="text-xs text-[#bcc9cd] mt-1">
                    Built mobile workflows, systematic debugging, and UI/UX usability improvements.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]">
                  <div className="font-mono text-xs font-semibold text-[#e1e2ec]">
                    Web Development Intern — Apex Planet
                  </div>
                  <div className="font-mono text-[10px] text-[#4edea3]">Jul 2025 – Aug 2025 (Remote)</div>
                  <p className="text-xs text-[#bcc9cd] mt-1">
                    Engineered responsive HTML5, CSS3, and modern ES6+ JavaScript interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs text-[#4edea3] uppercase">FLAGSHIP SYSTEMS</h3>
              <div className="bg-[#191b23] p-4 rounded-lg space-y-3 border border-[#32353d]">
                <div>
                  <div className="font-mono text-xs font-semibold text-[#4cd7f6]">
                    1. UndoMap — Browser Extension for Safer Online Actions
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Zero-network Manifest V3 DOM MutationObserver scanner preventing dark-pattern billing traps.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-[#d0bcff]">
                    2. PreMortemML — Pre-Deployment ML Failure Simulator
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Adversarial stress testing harness evaluating covariate drift and boundary perturbations in Python.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-[#4edea3]">
                    3. Blockchain-Based Vehicle Identity &amp; History Platform
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Immutable cryptographic provenance ledger for vehicle odometer and title handoffs.
                  </p>
                </div>
              </div>

              <h3 className="font-mono text-xs text-[#4cd7f6] uppercase">HONORS &amp; CERTIFICATIONS</h3>
              <div className="bg-[#191b23] p-4 rounded-lg space-y-1.5 text-xs text-[#bcc9cd] border border-[#32353d]">
                <div>• <strong className="text-[#e1e2ec]">2nd Prize</strong> — FusionX Hackathon 2026</div>
                <div>• <strong className="text-[#e1e2ec]">Qualifier</strong> — Smart India Hackathon (SIH)</div>
                <div>• <strong className="text-[#e1e2ec]">Top 1.4%</strong> — AlgoUniversity Accelerator (40,000+ pool)</div>
                <div>• <strong className="text-[#e1e2ec]">IBM PY0101EN</strong> — Python 101 for Data Science</div>
                <div>• <strong className="text-[#e1e2ec]">Scaler</strong> — Introduction to Python Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
