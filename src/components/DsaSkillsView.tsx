import React, { useState } from 'react';
import { TabId } from './OverviewView';

interface DsaSkillsViewProps {
  onNavigate: (tab: TabId) => void;
  onOpenCertificate: (certId: 'scaler-python' | 'ibm-python') => void;
}

export const DsaSkillsView: React.FC<DsaSkillsViewProps> = ({ onNavigate, onOpenCertificate }) => {
  const [selectedDsaTopic, setSelectedDsaTopic] = useState<string | null>(null);

  const dsaTopics = [
    { name: 'Arrays', symbol: '[ ]', detail: 'Sliding window, prefix sums, Kadane’s algorithm, in-place matrix rotations.' },
    { name: 'Strings', symbol: '99', detail: 'Pattern matching, anagram hashing, palindromic substrings, rolling hash.' },
    { name: 'Linked Lists', symbol: 'link', isIcon: true, detail: 'Floyd’s cycle detection, fast/slow pointers, in-place reversal, merge k-lists.' },
    { name: 'Searching', symbol: 'manage_search', isIcon: true, detail: 'Binary search on monotonic answer spaces, rotated sorted arrays, lower/upper bounds.' },
    { name: 'Sorting', symbol: 'sort', isIcon: true, detail: 'Merge sort, Quickselect partitioning, custom comparator interval merging.' },
    { name: 'Functions', symbol: 'functions', isIcon: true, detail: 'Modular decomposition, pure functional pipelines, higher-order closures.' },
    { name: 'Recursion', symbol: 'cached', isIcon: true, detail: 'Backtracking state trees, pruning branches, memoized state transitions.' },
    { name: 'Two-Pointers', symbol: 'view_column', isIcon: true, detail: 'Opposite-end convergence, Dutch national flag partitioning, 3Sum optimizations.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Header */}
      <section className="w-full bg-[#0b0e15] py-10 px-6 border-b border-[#32353d]/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-xs">
                DIAGNOSTIC_MODULE // 03
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-[#4edea3] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                ALL METRICS DEPLOYMENT READY
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#e1e2ec] tracking-tight">
              Core CS, DSA &amp; Stack Telemetry
            </h1>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Verified competency mapping across foundational computing paradigms, algorithmic intuition, and full-stack
              runtime systems. Calibrated specifically for technical interview screening.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3.5 py-2 rounded-lg bg-[#191b23] border border-[#32353d] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">terminal</span>
              <span className="font-mono text-xs text-[#bcc9cd]">QUERY_ACTIVE:</span>
              <span className="font-mono text-xs text-[#4edea3] font-semibold">VERIFIED_ONLY</span>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('verified-certifications');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-mono text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]">verified</span>
              <span>View Credentials</span>
            </button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
        {/* Row 1: Languages & Full-Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4cd7f6]"></span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">Language Telemetry Grid</h2>
              </div>
              <span className="font-mono text-[10px] text-[#869397] uppercase">
                6 COMPILED / INTERPRETED RUNTIMES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col justify-between gap-4 border border-[#32353d]/40 hover:border-[#4cd7f6]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#4cd7f6] font-bold">Python</span>
                    <span className="px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#4cd7f6] font-mono text-[10px]">
                      ADVANCED
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Algorithmic scripting, data pipelines, automation engines &amp; ML harnesses.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">PRIMARY CORE</span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col justify-between gap-4 border border-[#32353d]/40 hover:border-[#d0bcff]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#e1e2ec] font-bold">Java</span>
                    <span className="px-2 py-0.5 rounded bg-[#571bc1]/40 text-[#d0bcff] font-mono text-[10px]">
                      ENTERPRISE
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Robust OOP architectures, memory awareness, collections framework.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">CORE OOP</span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col justify-between gap-4 border border-[#32353d]/40 hover:border-[#4edea3]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#4edea3] font-bold">SQL</span>
                    <span className="px-2 py-0.5 rounded bg-[#1bbd85]/20 text-[#4edea3] font-mono text-[10px]">
                      RELATIONAL
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Complex joins, aggregation, index query tuning &amp; relational schemas.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">DATA STORE</span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col justify-between gap-4 border border-[#32353d]/40 hover:border-[#4cd7f6]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#4cd7f6] font-bold">JavaScript</span>
                    <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-[10px]">
                      ES6+
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Async event loop, client extensions, reactive state &amp; DOM manipulation.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">UI &amp; EXTENSIONS</span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col justify-between gap-4 border border-[#32353d]/40 hover:border-[#d0bcff]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#d0bcff] font-bold">Solidity</span>
                    <span className="px-2 py-0.5 rounded bg-[#571bc1]/40 text-[#d0bcff] font-mono text-[10px]">
                      EVM
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Immutable contract state, reentrancy guards, gas-optimized storage.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">WEB3 PROTOCOLS</span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col justify-between gap-4 border border-[#32353d]/40 hover:border-[#4edea3]/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-[#4edea3] font-bold">Go (Golang)</span>
                    <span className="px-2 py-0.5 rounded bg-[#1bbd85]/20 text-[#4edea3] font-mono text-[10px]">
                      CONCURRENT
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Goroutines, channels, deterministic system routines &amp; microservices.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">SYSTEMS</span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>
            </div>

            <div className="bg-[#0b0e15] p-3.5 rounded-lg flex items-center gap-3 border border-[#32353d]">
              <span className="font-mono text-xs text-[#4cd7f6]">&gt;_</span>
              <span className="font-mono text-xs text-[#bcc9cd]">
                Runtimes configured with strict linter configs, static analysis hooks, and unit verification specs.
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4edea3]"></span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">Web &amp; Full-Stack</h2>
              </div>
              <span className="font-mono text-[10px] text-[#869397] uppercase block mb-6">
                END-TO-END DATAFLOW
              </span>

              <div className="space-y-4">
                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-3 border border-[#32353d]/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#4cd7f6] uppercase">CLIENT_TIER</span>
                    <span className="font-mono text-[10px] text-[#869397] uppercase">BROWSER RUNTIME</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      React.js
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      HTML5
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      CSS3
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      Tailwind
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Component encapsulation, state synchronization, semantic structural accessibility.
                  </p>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-3 border border-[#32353d]/40">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#4edea3] uppercase">SERVICE_TIER</span>
                    <span className="font-mono text-[10px] text-[#869397] uppercase">REST APIS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      Node.js
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      Express.js (Basic)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-xs">
                      RESTful APIs
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Stateless route orchestration, JSON contract parsing, middleware interceptors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0b0e15] p-3.5 rounded-lg flex items-center justify-between border border-[#32353d]">
              <span className="font-mono text-[10px] text-[#869397] uppercase">PROTOCOL SYNC</span>
              <span className="font-mono text-xs text-[#4edea3]">HTTP / HTTPS / JSON-RPC</span>
            </div>
          </div>
        </div>

        {/* Row 2: AI/ML & Blockchain */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4cd7f6]"></span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">
                  AI/ML &amp; Scientific Tooling
                </h2>
              </div>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase">MATHEMATICAL ENGINE</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#1d1f27] p-3.5 rounded-lg flex flex-col gap-1 border border-[#32353d]/40">
                <span className="font-mono text-base text-[#4cd7f6] font-bold">NumPy</span>
                <span className="text-xs text-[#bcc9cd]">N-D Tensors &amp; Matrices</span>
              </div>
              <div className="bg-[#1d1f27] p-3.5 rounded-lg flex flex-col gap-1 border border-[#32353d]/40">
                <span className="font-mono text-base text-[#4edea3] font-bold">Pandas</span>
                <span className="text-xs text-[#bcc9cd]">DataFrames &amp; Series</span>
              </div>
              <div className="bg-[#1d1f27] p-3.5 rounded-lg flex flex-col gap-1 border border-[#32353d]/40">
                <span className="font-mono text-base text-[#e1e2ec] font-bold">scikit-learn</span>
                <span className="text-xs text-[#bcc9cd]">Model Pipelines</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
                <div className="flex items-center gap-2 text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold">Algorithmic Paradigms</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Supervised &amp; Unsupervised Learning algorithms, Linear/Logistic Regression, Decision Trees,
                  K-Means Clustering.
                </p>
              </div>

              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
                <div className="flex items-center gap-2 text-[#4edea3]">
                  <span className="material-symbols-outlined text-[18px]">equalizer</span>
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                    Pipeline &amp; Evaluation Metrics
                  </span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Feature scaling, missing value imputation, one-hot encoding, Precision/Recall, F1-Score, ROC-AUC
                  curve validation.
                </p>
              </div>
            </div>

            <div className="bg-[#0b0e15] p-4 rounded-lg flex items-center justify-between border border-[#32353d]">
              <div>
                <span className="font-mono text-[10px] text-[#869397] uppercase block">
                  CONFUSION MATRIX RESILIENCE
                </span>
                <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                  Trained on Cross-Validation Folds
                </span>
              </div>
              <svg className="w-24 h-8 text-[#4cd7f6]" fill="none" viewBox="0 0 100 32">
                <path d="M2 28 L22 20 L42 24 L65 10 L98 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#d0bcff]"></span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">
                  Blockchain &amp; Distributed Systems
                </h2>
              </div>
              <span className="font-mono text-xs text-[#d0bcff] uppercase">CONSENSUS PROTOCOLS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-2 border border-[#32353d]/40">
                <span className="font-mono text-xs text-[#e1e2ec] font-semibold">Solidity &amp; EVM</span>
                <p className="text-xs text-[#bcc9cd]">
                  Execution environment mechanics, gas metering, state variables, opcode awareness.
                </p>
              </div>
              <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-2 border border-[#32353d]/40">
                <span className="font-mono text-xs text-[#e1e2ec] font-semibold">Ledger Integrity</span>
                <p className="text-xs text-[#bcc9cd]">
                  Cryptographic hashes (SHA-256 / Keccak), Merkle trees, nonces, immutability proofs.
                </p>
              </div>
            </div>

            <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-2 border border-[#32353d]/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                  Smart Contract Security Hardening
                </span>
                <span className="font-mono text-[10px] text-[#4edea3] uppercase">AUDIT DISCIPLINE</span>
              </div>
              <p className="text-xs text-[#bcc9cd]">
                Mitigating integer overflow/underflow patterns, preventing front-running exploits, implementing
                Checks-Effects-Interactions pattern to disarm reentrancy.
              </p>
            </div>

            <div className="bg-[#0b0e15] p-4 rounded-lg flex items-center justify-between border border-[#32353d]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#d0bcff] text-[22px]">token</span>
                <div>
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block">
                    Web3 Integration Stack
                  </span>
                  <span className="font-mono text-[10px] text-[#869397] uppercase">
                    PROVIDER RPC // WALLET PROVIDERS
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-[#571bc1] text-[#c4abff] font-mono text-xs font-semibold">
                EVM Ready
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: DSA Problem-Solving Track */}
        <div className="bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col gap-6 border border-[#32353d]/50">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-[#e1e2ec]">
                DSA Problem-Solving Track
              </h2>
              <p className="text-xs text-[#bcc9cd]">
                Topic-level algorithmic practice footprint — prioritized by algorithmic fundamentals
              </p>
            </div>
            <div className="bg-[#1d1f27] px-4 py-2.5 rounded-lg flex items-center gap-2.5 max-w-md border border-[#32353d]/40">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0">info</span>
              <span className="font-mono text-xs text-[#bcc9cd]">
                Live LeetCode / Coding Profile sync configurable — metrics reflect practiced topics without fabricated
                question counters.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {dsaTopics.map((topic) => {
              const isSelected = selectedDsaTopic === topic.name;
              return (
                <button
                  key={topic.name}
                  onClick={() => setSelectedDsaTopic(isSelected ? null : topic.name)}
                  className={`p-3.5 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#272a32] border-[#4cd7f6]'
                      : 'bg-[#1d1f27] border-transparent hover:bg-[#272a32]'
                  }`}
                >
                  {topic.isIcon ? (
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">{topic.symbol}</span>
                  ) : (
                    <span className="font-mono text-xs text-[#4cd7f6] font-bold">{topic.symbol}</span>
                  )}
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold">{topic.name}</span>
                  <span className="font-mono text-[10px] text-[#4edea3] uppercase">PRACTICED</span>
                </button>
              );
            })}
          </div>

          {selectedDsaTopic && (
            <div className="p-4 rounded-lg bg-[#0b0e15] border border-[#4cd7f6]/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#4cd7f6] font-semibold">
                  [{selectedDsaTopic.toUpperCase()}_INSPECTOR]:
                </span>
                <span className="text-xs text-[#e1e2ec]">
                  {dsaTopics.find((t) => t.name === selectedDsaTopic)?.detail}
                </span>
              </div>
              <button
                onClick={() => setSelectedDsaTopic(null)}
                className="font-mono text-xs text-[#869397] hover:text-[#e1e2ec] cursor-pointer"
              >
                close [x]
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0b0e15] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
              <span className="font-mono text-xs text-[#4cd7f6] font-semibold">
                01 // Two-Pointer &amp; Windowing
              </span>
              <p className="text-xs text-[#bcc9cd]">
                Optimization of sub-array and palindrome checks from O(N²) quadratic scans to linear O(N) single-pass
                solutions.
              </p>
            </div>
            <div className="bg-[#0b0e15] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
              <span className="font-mono text-xs text-[#4cd7f6] font-semibold">
                02 // Binary Search Boundary
              </span>
              <p className="text-xs text-[#bcc9cd]">
                Logarithmic convergence O(log N) applied across monotonic spaces, rotated arrays, and predicate checks.
              </p>
            </div>
            <div className="bg-[#0b0e15] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
              <span className="font-mono text-xs text-[#d0bcff] font-semibold">
                03 // Recursive Stack Unwinding
              </span>
              <p className="text-xs text-[#bcc9cd]">
                Rigorous base-case containment, auxiliary space overhead tracking, and transition into iterative state
                stacks.
              </p>
            </div>
          </div>
        </div>

        {/* Row 4: Core CS */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4edea3]"></span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">
                  Core Computer Science Fundamentals
                </h2>
              </div>
              <p className="text-xs text-[#bcc9cd]">
                Revision containers with architectural concept deep dives
              </p>
            </div>
            <span className="font-mono text-xs text-[#4edea3] uppercase">
              5 CS CORE NODES // INTERVIEW READY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col justify-between gap-4 border border-[#32353d]/50">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-xs">
                    CS_01 // DSA
                  </span>
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">account_tree</span>
                </div>
                <h3 className="text-base text-[#e1e2ec] font-bold">
                  Data Structures &amp; Algorithms
                </h3>
                <p className="text-xs text-[#bcc9cd]">
                  Rigorous Big-O time and auxiliary space complexity analysis. Deep mechanics of balanced trees, graph
                  traversals, and optimal subproblems.
                </p>
              </div>
              <div className="space-y-2.5 pt-2">
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Complexity &amp; Structures
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    Asymptotic notation, amortized analysis, Heaps, Hash Tables, BSTs.
                  </span>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Graphs &amp; Dynamic Programming
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    BFS/DFS, Dijkstra, Memoization vs Tabulation state transition equations.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col justify-between gap-4 border border-[#32353d]/50">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#d0bcff] font-mono text-xs">
                    CS_02 // OOP
                  </span>
                  <span className="material-symbols-outlined text-[#d0bcff] text-[20px]">category</span>
                </div>
                <h3 className="text-base text-[#e1e2ec] font-bold">
                  Object-Oriented Programming
                </h3>
                <p className="text-xs text-[#bcc9cd]">
                  Systematic encapsulation of domain state and interface-driven architectures supporting maintainability
                  and SOLID principles.
                </p>
              </div>
              <div className="space-y-2.5 pt-2">
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    The 4 Core Pillars
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    Encapsulation, Data Abstraction, Class Inheritance, Dynamic Polymorphism.
                  </span>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Design Patterns
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    Singleton, Factory Method, Observer, Strategy &amp; Dependency Injection patterns.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col justify-between gap-4 border border-[#32353d]/50">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4edea3] font-mono text-xs">
                    CS_03 // DBMS
                  </span>
                  <span className="material-symbols-outlined text-[#4edea3] text-[20px]">database</span>
                </div>
                <h3 className="text-base text-[#e1e2ec] font-bold">
                  Database Management Systems
                </h3>
                <p className="text-xs text-[#bcc9cd]">
                  Engineered storage engines, relational schemas, concurrent isolation, and resilient transactional
                  persistence.
                </p>
              </div>
              <div className="space-y-2.5 pt-2">
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    ACID &amp; Transactions
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    Atomicity, Consistency, Isolation levels (Dirty reads, Phantom reads), Durability.
                  </span>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Schema &amp; Optimization
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    1NF to BCNF Normalization, B-Tree &amp; Hash Indexing, Execution Plan analysis.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col justify-between gap-4 border border-[#32353d]/50">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4cd7f6] font-mono text-xs">
                    CS_04 // OS
                  </span>
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">memory</span>
                </div>
                <h3 className="text-base text-[#e1e2ec] font-bold">Operating Systems</h3>
                <p className="text-xs text-[#bcc9cd]">
                  Hardware abstraction layers, CPU scheduler allocations, virtual memory paging, and atomic lock
                  management.
                </p>
              </div>
              <div className="space-y-2.5 pt-2">
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Concurrency &amp; Deadlocks
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    Threads, Mutex/Semaphores, Race Conditions, Coffman conditions, Banker&apos;s algorithm.
                  </span>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Process &amp; Memory
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    Round-Robin, SJF, Page Replacement (LRU), Thrashing, Kernel vs User space calls.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#191b23] rounded-xl p-6 shadow-md flex flex-col justify-between gap-4 border border-[#32353d]/50">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#4edea3] font-mono text-xs">
                    CS_05 // NETWORKS
                  </span>
                  <span className="material-symbols-outlined text-[#4edea3] text-[20px]">lan</span>
                </div>
                <h3 className="text-base text-[#e1e2ec] font-bold">
                  Computer Networks &amp; Security
                </h3>
                <p className="text-xs text-[#bcc9cd]">
                  Layered communication protocols, transmission control handshakes, domain routing, and transport-level
                  encryption standards.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#1d1f27] p-4 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    OSI &amp; TCP/IP Stack
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    3-Way Handshake, TCP flow/congestion control vs UDP low latency datagrams.
                  </span>
                </div>
                <div className="bg-[#1d1f27] p-4 rounded-lg border border-[#32353d]/40">
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block mb-1">
                    Application Protocols &amp; TLS
                  </span>
                  <span className="text-xs text-[#bcc9cd]">
                    HTTP/1.1 vs HTTP/2, WebSocket duplex pipes, DNS resolution, TLS 1.3 handshake.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Tools & Certs */}
        <div id="verified-certifications" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
            <div>
              <h2 className="text-xl font-bold text-[#e1e2ec] mb-1">
                Developer Tooling &amp; Engineering Disciplines
              </h2>
              <span className="font-mono text-[10px] text-[#869397] uppercase block mb-6">
                ENVIRONMENT // OPERATIONAL AGILITY
              </span>

              <span className="font-mono text-xs text-[#4cd7f6] uppercase block mb-3">
                SYSTEM TOOLING SUITE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-[#1d1f27] p-3.5 rounded-lg flex items-center gap-2.5 border border-[#32353d]/40">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">commit</span>
                  <div>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold block">Git</span>
                    <span className="font-mono text-[10px] text-[#869397]">Branching &amp; CI</span>
                  </div>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg flex items-center gap-2.5 border border-[#32353d]/40">
                  <span className="material-symbols-outlined text-[#e1e2ec] text-[20px]">terminal</span>
                  <div>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold block">GitHub</span>
                    <span className="font-mono text-[10px] text-[#869397]">Actions &amp; PRs</span>
                  </div>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg flex items-center gap-2.5 border border-[#32353d]/40">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">code</span>
                  <div>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold block">VS Code</span>
                    <span className="font-mono text-[10px] text-[#869397]">IDE &amp; Debug</span>
                  </div>
                </div>
                <div className="bg-[#1d1f27] p-3.5 rounded-lg flex items-center gap-2.5 border border-[#32353d]/40">
                  <span className="material-symbols-outlined text-[#d0bcff] text-[20px]">send</span>
                  <div>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold block">Postman</span>
                    <span className="font-mono text-[10px] text-[#869397]">API Testing</span>
                  </div>
                </div>
              </div>

              <span className="font-mono text-xs text-[#4edea3] uppercase block mb-3">
                PROFESSIONAL ATTRIBUTES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
                  <div className="flex items-center gap-2 text-[#4edea3]">
                    <span className="material-symbols-outlined text-[18px]">psychology</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">Analytical Thinking</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Root-cause diagnosis, decomposing multi-tier bugs, systematic complexity trade-offs.
                  </p>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
                  <div className="flex items-center gap-2 text-[#4cd7f6]">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      Technical Documentation
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Specification sheets, README contracts, inline algorithmic invariants, and system flowcharts.
                  </p>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
                  <div className="flex items-center gap-2 text-[#4edea3]">
                    <span className="material-symbols-outlined text-[18px]">groups</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      Cross-Functional Teamwork
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Seamless handoffs between UI layers, backend service contracts, and QA suites.
                  </p>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-1.5 border border-[#32353d]/40">
                  <div className="flex items-center gap-2 text-[#d0bcff]">
                    <span className="material-symbols-outlined text-[18px]">forum</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      Precise Communication
                    </span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Articulate standups, synchronous issue tickets, and constructive code reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#191b23] rounded-xl p-6 lg:p-8 shadow-lg flex flex-col justify-between gap-6 border border-[#32353d]/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#4edea3]"></span>
                <h2 className="text-xl font-bold text-[#e1e2ec]">
                  Verified Certifications
                </h2>
              </div>
              <span className="font-mono text-[10px] text-[#4edea3] uppercase">CREDENTIAL REGISTER</span>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1d1f27] p-5 rounded-lg flex flex-col gap-3 border border-[#32353d]/40">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base text-[#e1e2ec] font-bold">
                    Introduction to Python
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[#1bbd85]/20 text-[#4edea3] font-mono text-[10px]">
                    VERIFIED
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#869397]">ISSUING AUTHORITY:</span>
                  <span className="text-[#e1e2ec] font-semibold">Scaler</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Foundational Python syntax, functional programming, memory models, collection transformations, and
                  standard library tools.
                </p>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397]">DOC_TYPE: PDF // VERIFIED</span>
                  <button
                    onClick={() => onOpenCertificate('scaler-python')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#272a32] hover:bg-[#32353d] text-[#4cd7f6] font-mono text-xs transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">visibility</span>
                    <span>View Certificate PDF</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#1d1f27] p-5 rounded-lg flex flex-col gap-3 border border-[#32353d]/40">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base text-[#e1e2ec] font-bold">
                    Python 101 for Data Science
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#4cd7f6] font-mono text-[10px]">
                    PY0101EN
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#869397]">ISSUING AUTHORITY:</span>
                  <span className="text-[#e1e2ec] font-semibold text-right">
                    IBM Developer Skills Network
                  </span>
                </div>
                <p className="text-xs text-[#bcc9cd]">
                  Data manipulation with Pandas, NumPy vectorization operations, HTTP client requests, and fundamental
                  data science pipelines.
                </p>
                <div className="pt-2 border-t border-[#32353d]/50 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#869397]">DOC_TYPE: PDF // VERIFIED</span>
                  <button
                    onClick={() => onOpenCertificate('ibm-python')}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#272a32] hover:bg-[#32353d] text-[#4cd7f6] font-mono text-xs transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">visibility</span>
                    <span>View Certificate PDF</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#0b0e15] p-5 rounded-lg border border-[#d0bcff]/30 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#d0bcff] text-[22px] mt-0.5">verified_user</span>
                <div>
                  <span className="font-mono text-xs text-[#e1e2ec] font-semibold block">
                    Official Certificate PDF Verification
                  </span>
                  <p className="text-xs text-[#bcc9cd] mt-1">
                    Complete cryptographically traceable PDF transcripts and credential hashes are cataloged and
                    available upon recruiter request.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenCertificate('ibm-python')}
                className="w-full py-2.5 px-4 rounded bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">fact_check</span>
                <span>Request Credential Audit PDF</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#191b23] p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#32353d]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#272a32] flex items-center justify-center text-[#4cd7f6] shrink-0">
              <span className="material-symbols-outlined text-[20px]">code_blocks</span>
            </div>
            <div>
              <h3 className="text-base text-[#e1e2ec] font-bold">
                Candidate Screening Status: <span className="text-[#4cd7f6]">READY FOR CODING INTERVIEWS</span>
              </h3>
              <p className="text-xs text-[#bcc9cd]">
                All listed competencies can be live-coded in technical whiteboard rounds without auxiliary
                documentation.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('experience-and-contact')}
            className="px-5 py-2.5 rounded bg-[#272a32] hover:bg-[#32353d] text-[#4edea3] font-mono text-xs font-semibold flex items-center gap-2 shrink-0 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">event_available</span>
            <span>Schedule Technical Round</span>
          </button>
        </div>
      </div>
    </div>
  );
};
