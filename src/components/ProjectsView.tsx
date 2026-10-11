import React, { useState } from 'react';
import { TabId } from './OverviewView';

interface ProjectsViewProps {
  onNavigate: (tab: TabId) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const [showUndomapSchema, setShowUndomapSchema] = useState(false);
  const [showPremortemFlow, setShowPremortemFlow] = useState(false);
  const [showLedgerFlow, setShowLedgerFlow] = useState(false);

  const [safetyHaltEngaged, setSafetyHaltEngaged] = useState(false);
  const [inspectRecoveryOpen, setInspectRecoveryOpen] = useState(false);
  const [mutationCount, setMutationCount] = useState(1420);
  const [triggerCount, setTriggerCount] = useState(14);

  const handleEngageSafetyHalt = () => {
    setSafetyHaltEngaged(true);
    setTriggerCount((prev) => prev + 1);
    setMutationCount((prev) => prev + 12);
  };

  const handleBypassRule = () => {
    setSafetyHaltEngaged(false);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Command Telemetry Strip */}
      <section className="w-full bg-[#0b0e15] py-8 px-6 border-b border-[#32353d]/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase">
                MODULE: SEC_02 // SYSTEM BUILDS &amp; ARCHITECTURE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#e1e2ec] tracking-tight">Technical Deep Dives</h1>
            <p className="text-sm text-[#bcc9cd] max-w-2xl">
              Production-grade system implementations spanning client-side DOM parsing engines, adversarial ML stress
              testing harnesses, and immutable state verification protocols.
            </p>
          </div>
          {/* Diagnostic Node */}
          <div className="flex items-center gap-4 bg-[#191b23] p-3 rounded-xl shadow-md border border-[#32353d]">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#869397] uppercase">VERIFIABLE BUILDS</span>
              <span className="font-mono text-sm text-[#4cd7f6] font-bold">03 ARCHITECTURES</span>
            </div>
            <div className="w-px h-8 bg-[#32353d]"></div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#869397] uppercase">EXECUTION MODE</span>
              <span className="font-mono text-sm text-[#4edea3] font-bold">ZERO-LEAK PRIVACY</span>
            </div>
            <div className="w-px h-8 bg-[#32353d]"></div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#869397] uppercase">DEPLOY TARGET</span>
              <span className="font-mono text-sm text-[#d0bcff] font-bold">2027 SWE / SDE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Matrix */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-20">
        {/* PROJECT 01: UNDOMAP */}
        <article className="w-full bg-[#191b23] rounded-xl shadow-xl overflow-hidden border border-[#32353d]/60">
          <div className="bg-[#272a32] px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#32353d]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                <span className="w-3 h-3 rounded-full bg-[#1bbd85]"></span>
                <span className="w-3 h-3 rounded-full bg-[#06b6d4]"></span>
              </div>
              <span className="font-mono text-xs text-[#e1e2ec] font-semibold tracking-wide">
                pkg/extension/undomap-core
              </span>
              <span className="px-2 py-0.5 rounded bg-[#06b6d4]/20 text-[#4cd7f6] font-mono text-[10px] uppercase">
                FLAGSHIP RELEASE
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#869397]">branch: git/main-local-first</span>
              <span className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#4edea3] font-mono text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span> ACTIVE SCANNER
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-xs text-[#4cd7f6] tracking-widest uppercase">
                  BROWSER EXTENSION &amp; WEB SAFETY
                </div>
                <h2 className="text-2xl font-bold text-[#e1e2ec]">
                  UndoMap — Browser Extension for Safer Online Actions
                </h2>
                <p className="text-base text-[#bcc9cd]">
                  Engineered a zero-network client-side rule evaluation engine that catches high-risk friction points
                  like recurring billing traps, unverified auto-debit triggers, and destructive account removals before
                  execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0b0e15] p-5 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center gap-2 text-[#ffb4ab]">
                    <span className="material-symbols-outlined text-[20px]">warning</span>
                    <span className="font-mono text-xs uppercase">Vulnerability / Friction</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Users commit to catastrophic recurring charges or accidental data purges via manipulative dark
                    patterns, without timely review of obscured terms.
                  </p>
                </div>
                <div className="bg-[#0b0e15] p-5 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center gap-2 text-[#4edea3]">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    <span className="font-mono text-xs uppercase">System Solution</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Synthesized a lightweight MutationObserver scanner running directly in the browser sandboxed
                    context. Zero cloud roundtrips ensure complete credential confidentiality.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-[#869397] uppercase tracking-wider">
                  VERIFIABLE PRODUCTION HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      DOM Mutation Observer with sub-8ms parse footprint
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Risky Click Guard &amp; destructive action confirmation prompt
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      IndexedDB &amp; Local Storage recovery log with JSON export
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Strict CSP conformance without remote model leakage
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#4cd7f6] font-mono text-xs">
                  JavaScript (ES2022)
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Chrome Extensions Manifest V3
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  IndexedDB Engine
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  DOM Trees &amp; XPath
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#4edea3] font-mono text-xs">
                  Zero-Cloud Storage
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#06b6d4] text-[#00424f] font-mono text-xs font-semibold shadow-md hover:bg-[#4cd7f6] transition-all"
                  href="https://github.com/manojkumarreddy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  View Source Code [GitHub]
                </a>
                <button
                  onClick={() => setShowUndomapSchema((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#272a32] text-[#4cd7f6] hover:bg-[#32353d] font-mono text-xs transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  Inspect Extension Schema
                </button>
              </div>
            </div>

            {/* Right Column: HUD */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#0b0e15] p-6 rounded-xl shadow-lg flex flex-col gap-5 border border-[#32353d] relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 bg-[#191b23] -mx-6 -mt-6 px-6 pt-4 border-b border-[#32353d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">shield_lock</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      UndoMap // Inspector Active
                    </span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                      safetyHaltEngaged ? 'bg-[#1bbd85]/20 text-[#4edea3]' : 'bg-[#ffb4ab]/20 text-[#ffb4ab]'
                    }`}
                  >
                    {safetyHaltEngaged ? 'HALT ENGAGED' : 'RISK LEVEL: ELEVATED'}
                  </span>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-3 border border-[#32353d]/50">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#bcc9cd] uppercase">
                      INTERCEPTED TARGET
                    </span>
                    <span className="font-mono text-xs text-[#4cd7f6]">button#checkout-autobill</span>
                  </div>
                  <div
                    className={`p-3 bg-[#32353d] rounded flex items-start gap-3 ${
                      safetyHaltEngaged ? 'text-[#4edea3]' : 'text-[#ffb4ab]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">
                      {safetyHaltEngaged ? 'verified_user' : 'gpp_maybe'}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-semibold">
                        {safetyHaltEngaged
                          ? 'Auto-Renew Trap Neutralized'
                          : 'Pre-Checked Annual Auto-Renew'}
                      </span>
                      <span className="text-xs text-[#bcc9cd]">
                        {safetyHaltEngaged
                          ? 'DOM click listener detached & snapshot logged to IndexedDB.'
                          : "Clause hidden behind collapsed 'Billing Terms' dropdown. Next bill: $240/yr."}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={handleEngageSafetyHalt}
                      className="flex-1 py-1.5 px-3 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-semibold hover:opacity-90 cursor-pointer"
                    >
                      {safetyHaltEngaged ? 'Safety Halt Active' : 'Engage Safety Halt'}
                    </button>
                    <button
                      onClick={handleBypassRule}
                      className="py-1.5 px-3 rounded bg-[#272a32] text-[#bcc9cd] hover:text-[#e1e2ec] font-mono text-xs cursor-pointer"
                    >
                      Bypass Rule
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#191b23] p-2.5 rounded border border-[#32353d]/40">
                    <span className="font-mono text-[10px] text-[#869397] block">MUTATIONS</span>
                    <span className="font-mono text-sm text-[#e1e2ec] font-bold">
                      {mutationCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-[#191b23] p-2.5 rounded border border-[#32353d]/40">
                    <span className="font-mono text-[10px] text-[#869397] block">TRIGGERS</span>
                    <span className="font-mono text-sm text-[#4edea3] font-bold">{triggerCount}</span>
                  </div>
                  <div className="bg-[#191b23] p-2.5 rounded border border-[#32353d]/40">
                    <span className="font-mono text-[10px] text-[#869397] block">LATENCY</span>
                    <span className="font-mono text-sm text-[#4cd7f6] font-bold">3.2ms</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#869397] uppercase">
                      RECENT LOCAL RECOVERY CARD
                    </span>
                    <span className="font-mono text-xs text-[#4edea3] font-semibold">REVERSIBLE</span>
                  </div>
                  <div className="p-3 bg-[#1d1f27] rounded flex items-center justify-between gap-3 border border-[#32353d]/40">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#272a32] flex items-center justify-center text-[#4cd7f6]">
                        <span className="material-symbols-outlined text-[18px]">restore</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-xs text-[#e1e2ec] font-medium truncate max-w-[160px]">
                          cloud-account-purge
                        </span>
                        <span className="font-mono text-[10px] text-[#869397]">
                          Stored in Local IndexedDB
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setInspectRecoveryOpen((prev) => !prev)}
                      className="px-2 py-1 bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] rounded font-mono text-xs cursor-pointer"
                    >
                      {inspectRecoveryOpen ? 'Hide' : 'Inspect'}
                    </button>
                  </div>
                  {inspectRecoveryOpen && (
                    <div className="p-3 rounded bg-[#272a32] font-mono text-xs text-[#bcc9cd] space-y-1">
                      <div>tx_id: &quot;idx_99482a&quot;</div>
                      <div>captured_state: &quot;form#delete-workspace&quot;</div>
                      <div className="text-[#4edea3]">status: &quot;RESTORE_READY (0ms cloud leak)&quot;</div>
                    </div>
                  )}
                </div>
              </div>

              {showUndomapSchema && (
                <div className="bg-[#0b0e15] p-5 rounded-xl shadow-md border border-[#32353d] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#4cd7f6]">manifest.json &amp; Rule Structure</span>
                    <button
                      className="text-[#869397] hover:text-[#e1e2ec] font-mono text-xs cursor-pointer"
                      onClick={() => setShowUndomapSchema(false)}
                    >
                      close [x]
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-[#bcc9cd] bg-[#1d1f27] p-3 rounded overflow-x-auto leading-relaxed">
                    <code>{`{
  "rule_id": "RULE_SEC_RECURRING_09",
  "match_selector": "input[type='checkbox'][name*='renew']",
  "trigger_condition": {
    "computed_opacity": "> 0.5",
    "hidden_parent": false,
    "intercept_event": "click"
  },
  "storage_adapter": "indexedDB://undo_events_v1",
  "network_dispatch": false
}`}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* PROJECT 02: PREMORTEMML */}
        <article className="w-full bg-[#191b23] rounded-xl shadow-xl overflow-hidden border border-[#32353d]/60">
          <div className="bg-[#272a32] px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#32353d]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                <span className="w-3 h-3 rounded-full bg-[#1bbd85]"></span>
                <span className="w-3 h-3 rounded-full bg-[#06b6d4]"></span>
              </div>
              <span className="font-mono text-xs text-[#e1e2ec] font-semibold tracking-wide">
                pkg/eval/premortem-ml-engine
              </span>
              <span className="px-2 py-0.5 rounded bg-[#571bc1] text-[#c4abff] font-mono text-[10px] uppercase">
                FLAGSHIP BENCHMARK
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#869397]">env: python-3.11/adversarial</span>
              <span className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#4cd7f6] font-mono text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]"></span> SUITE READY
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-xs text-[#d0bcff] tracking-widest uppercase">
                  AI/ML RELIABILITY &amp; STRESS TESTING
                </div>
                <h2 className="text-2xl font-bold text-[#e1e2ec]">
                  PreMortemML — Pre-Deployment ML Failure Simulator
                </h2>
                <p className="text-base text-[#bcc9cd]">
                  Comprehensive stress-testing framework that algorithmically subjects pre-release machine learning
                  models to distribution drift, synthetic data corruption, and adversarial boundary shifts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0b0e15] p-5 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center gap-2 text-[#ffb4ab]">
                    <span className="material-symbols-outlined text-[20px]">model_training</span>
                    <span className="font-mono text-xs uppercase">The Risk Vector</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Standard validation datasets reward overfitting. Real-world distribution shifts, missing features,
                    and edge outliers lead to sudden production silent-failures.
                  </p>
                </div>
                <div className="bg-[#0b0e15] p-5 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center gap-2 text-[#d0bcff]">
                    <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                    <span className="font-mono text-xs uppercase">The Simulation Engine</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Simulates multi-axis degradation pipelines: covariate drift, targeted token perturbations, and label
                    ambiguity before deployment greenlight.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-mono text-xs text-[#869397] uppercase tracking-wider">
                    VERIFIABLE PRODUCTION HIGHLIGHTS
                  </span>
                  <span className="font-mono text-[10px] text-[#bcc9cd] italic">
                    Note: Illustrative UI benchmark representing simulation framework
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#d0bcff] text-[18px] shrink-0 mt-0.5">
                      query_stats
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Synthetic stress testing across 6 discrete error modalities
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#d0bcff] text-[18px] shrink-0 mt-0.5">
                      query_stats
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Automated vulnerability profiling with confidence drop curves
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#d0bcff] text-[18px] shrink-0 mt-0.5">
                      query_stats
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Out-of-distribution (OOD) distance metric calculation
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#d0bcff] text-[18px] shrink-0 mt-0.5">
                      query_stats
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Threshold break alerting with regression gate pass/fail signals
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#d0bcff] font-mono text-xs">
                  Python 3.11
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  NumPy / SciPy
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Model Evaluation Pipelines
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Adversarial Stress Harness
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#4cd7f6] font-mono text-xs">
                  Risk Radar Metrics
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#571bc1] text-[#c4abff] font-mono text-xs font-semibold shadow-md hover:opacity-90 transition-all"
                  href="https://github.com/manojkumarreddy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  View GitHub Repository [Placeholder]
                </a>
                <button
                  onClick={() => setShowPremortemFlow((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#272a32] text-[#d0bcff] hover:bg-[#32353d] font-mono text-xs transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">account_tree</span>
                  View Failure Simulator Flow
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#0b0e15] p-6 rounded-xl shadow-lg flex flex-col gap-5 border border-[#32353d]">
                <div className="flex items-center justify-between pb-3 bg-[#191b23] -mx-6 -mt-6 px-6 pt-4 border-b border-[#32353d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#d0bcff] text-[20px]">analytics</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      Stress Diagnostics // RUN #0884
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#1bbd85]/20 text-[#4edea3] font-mono text-[10px]">
                    TOLERANCE: 88.4%
                  </span>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#bcc9cd]">
                      MODEL ACCURACY UNDER ADVERSARIAL STRESS
                    </span>
                    <span className="font-mono text-xs text-[#ffb4ab]">-14.2% DEGRADATION</span>
                  </div>
                  <div className="w-full h-24 flex items-center justify-center">
                    <svg
                      className="w-full h-full overflow-visible text-[#d0bcff]"
                      fill="none"
                      viewBox="0 0 320 80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line stroke="currentColor" strokeDasharray="3 3" strokeOpacity="0.1" x1="0" x2="320" y1="20" y2="20"></line>
                      <line stroke="currentColor" strokeDasharray="3 3" strokeOpacity="0.1" x1="0" x2="320" y1="50" y2="50"></line>
                      <line stroke="currentColor" strokeDasharray="4 2" strokeOpacity="0.25" strokeWidth="1.5" x1="0" x2="320" y1="24" y2="24"></line>
                      <path d="M0 24 C50 25, 90 28, 140 40 C190 52, 230 68, 280 72 L320 74" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                      <path d="M0 24 C50 25, 90 28, 140 40 C190 52, 230 68, 280 72 L320 74 L320 80 L0 80 Z" fill="currentColor" fillOpacity="0.08"></path>
                      <circle cx="140" cy="40" fill="#ffb4ab" r="4"></circle>
                      <text fill="#ffb4ab" fontSize="9" x="145" y="38" className="font-mono">
                        DRIFT ONSET
                      </text>
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">
                    SIMULATED VULNERABILITY MATRIX
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#e1e2ec]">Covariate Data Drift</span>
                      <span className="font-mono text-xs text-[#4cd7f6]">High Resilience (94%)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#1d1f27] overflow-hidden">
                      <div className="h-full bg-[#4cd7f6] rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#e1e2ec]">Edge Feature Corruption</span>
                      <span className="font-mono text-xs text-[#d0bcff]">Moderate Risk (71%)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#1d1f27] overflow-hidden">
                      <div className="h-full bg-[#d0bcff] rounded-full" style={{ width: '71%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#e1e2ec]">Adversarial Boundary Perturbation</span>
                      <span className="font-mono text-xs text-[#ffb4ab]">Vulnerable (48%)</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#1d1f27] overflow-hidden">
                      <div className="h-full bg-[#ffb4ab] rounded-full" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {showPremortemFlow && (
                <div className="bg-[#0b0e15] p-5 rounded-xl shadow-md border border-[#32353d] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#d0bcff]">
                      Pipeline: failure_simulation_flow.py
                    </span>
                    <button
                      className="text-[#869397] hover:text-[#e1e2ec] font-mono text-xs cursor-pointer"
                      onClick={() => setShowPremortemFlow(false)}
                    >
                      close [x]
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-[#bcc9cd] bg-[#1d1f27] p-3 rounded overflow-x-auto leading-relaxed">
                    <code>{`# PreMortem Stress Harness Execution
def execute_pipeline(model, validation_tensor):
    noise_injector = GaussianDriftPerturber(sigma=0.35)
    stress_batches = noise_injector.synthesize(validation_tensor)
    
    delta_confidence = model.evaluate(stress_batches)
    assert delta_confidence.p95_drop < 0.15, "CIRCUIT_BREAKER_TRIGGERED"
    return ReliabilityReport(status="PASS_WITH_WARNINGS")`}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* PROJECT 03: BLOCKCHAIN VEHICLE PLATFORM */}
        <article className="w-full bg-[#191b23] rounded-xl shadow-xl overflow-hidden border border-[#32353d]/60">
          <div className="bg-[#272a32] px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#32353d]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                <span className="w-3 h-3 rounded-full bg-[#1bbd85]"></span>
                <span className="w-3 h-3 rounded-full bg-[#06b6d4]"></span>
              </div>
              <span className="font-mono text-xs text-[#e1e2ec] font-semibold tracking-wide">
                pkg/ledger/vehicle-state-node
              </span>
              <span className="px-2 py-0.5 rounded bg-[#32353d] text-[#e1e2ec] font-mono text-[10px] uppercase">
                DECENTRALIZED PROTOCOL
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#869397]">consensus: immutable-audit</span>
              <span className="px-2.5 py-1 rounded bg-[#1d1f27] text-[#4edea3] font-mono text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span> SYNCED
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-xs text-[#4edea3] tracking-widest uppercase">
                  DISTRIBUTED LEDGER &amp; STATE VERIFICATION
                </div>
                <h2 className="text-2xl font-bold text-[#e1e2ec]">
                  Blockchain-Based Vehicle Identity &amp; History Platform
                </h2>
                <p className="text-base text-[#bcc9cd]">
                  An immutable cryptographic provenance ledger mapping physical automotive lifecycle milestones—title
                  transfers, periodic inspections, and service logs—to verified on-chain state representations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0b0e15] p-5 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center gap-2 text-[#ffb4ab]">
                    <span className="material-symbols-outlined text-[20px]">car_crash</span>
                    <span className="font-mono text-xs uppercase">Industry Fraud</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Second-hand automotive markets lose billions to odometer rollback frauds, unrecorded salvage titles,
                    and fabricated maintenance paper trails.
                  </p>
                </div>
                <div className="bg-[#0b0e15] p-5 rounded-lg flex flex-col gap-2 border border-[#32353d]/50">
                  <div className="flex items-center gap-2 text-[#4edea3]">
                    <span className="material-symbols-outlined text-[20px]">token</span>
                    <span className="font-mono text-xs uppercase">On-Chain Attestation</span>
                  </div>
                  <p className="text-xs text-[#bcc9cd]">
                    Digitized vehicle lifecycle events into append-only cryptographic block records signed by authorized
                    mechanics, DMVs, and verifiable owners.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-[#869397] uppercase tracking-wider">
                  VERIFIABLE PRODUCTION HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Cryptographic Vehicle Passport ID with hash checksums
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Chronological ownership handoff state transitions
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Append-only odometer &amp; maintenance telemetry blocks
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
                      verified
                    </span>
                    <span className="text-xs text-[#e1e2ec]">
                      Frictionless UX layer abstracting gas/wallets for end buyers
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#4edea3] font-mono text-xs">
                  Smart Contract Logic
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Distributed State
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Cryptographic Hashes
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#bcc9cd] font-mono text-xs">
                  Non-Custodial UX
                </span>
                <span className="px-2.5 py-1 rounded bg-[#32353d] text-[#4cd7f6] font-mono text-xs">
                  Solidity / Web3
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#1bbd85] text-[#00452e] font-mono text-xs font-semibold shadow-md hover:bg-[#4edea3] transition-all"
                  href="https://github.com/manojkumarreddy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  View GitHub [Placeholder]
                </a>
                <button
                  onClick={() => setShowLedgerFlow((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#272a32] text-[#4edea3] hover:bg-[#32353d] font-mono text-xs transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">data_object</span>
                  Explore Ledger Architecture
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#0b0e15] p-6 rounded-xl shadow-lg flex flex-col gap-5 border border-[#32353d]">
                <div className="flex items-center justify-between pb-3 bg-[#191b23] -mx-6 -mt-6 px-6 pt-4 border-b border-[#32353d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[20px]">badge</span>
                    <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                      Ledger Node // ON-CHAIN PASSPORT
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#1bbd85]/20 text-[#4edea3] font-mono text-[10px] font-bold">
                    STATE: VERIFIED
                  </span>
                </div>

                <div className="bg-[#1d1f27] p-4 rounded-lg flex flex-col gap-3 border border-[#32353d]/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-sm text-[#e1e2ec] font-bold">2022 TESLA MODEL 3 LR</span>
                      <div className="font-mono text-xs text-[#869397]">VIN: 5YJ3E1EB8NF192834</div>
                    </div>
                    <div className="w-8 h-8 rounded bg-[#32353d] flex items-center justify-center text-[#4edea3]">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2 bg-[#272a32] rounded flex flex-col">
                      <span className="font-mono text-[10px] text-[#869397]">HASH POINTER</span>
                      <span className="font-mono text-xs text-[#4cd7f6] truncate">0x7f9a...3b21</span>
                    </div>
                    <div className="p-2 bg-[#272a32] rounded flex flex-col">
                      <span className="font-mono text-[10px] text-[#869397]">VERIFIED ODOMETER</span>
                      <span className="font-mono text-xs text-[#4edea3] font-bold">28,450 KM</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[10px] text-[#869397] uppercase">
                    CHRONOLOGICAL LEDGER AUDIT
                  </span>
                  <div className="flex flex-col gap-3 pl-2 border-l-2 border-[#272a32]">
                    <div className="flex items-start gap-3 relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] -ml-[19px] mt-1"></span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                            Scheduled Brake &amp; Sensor Service
                          </span>
                          <span className="font-mono text-[10px] text-[#869397]">OCT 2024</span>
                        </div>
                        <span className="text-xs text-[#bcc9cd]">
                          Authorized Service Center #984 • Signed Block #149,021
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] -ml-[19px] mt-1"></span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                            Title Transfer // Hand-off
                          </span>
                          <span className="font-mono text-[10px] text-[#869397]">JAN 2023</span>
                        </div>
                        <span className="text-xs text-[#bcc9cd]">
                          Owner 0x8a...2e -&gt; Owner 0x4f...9c • Zero Lien Detected
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#869397] -ml-[19px] mt-1"></span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#e1e2ec] font-semibold">
                            Genesis Mint // Production Release
                          </span>
                          <span className="font-mono text-[10px] text-[#869397]">MAY 2022</span>
                        </div>
                        <span className="text-xs text-[#bcc9cd]">
                          Factory QA Genesis Hash • Block #1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {showLedgerFlow && (
                <div className="bg-[#0b0e15] p-5 rounded-xl shadow-md border border-[#32353d] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#4edea3]">VehicleStateRegistry.sol</span>
                    <button
                      className="text-[#869397] hover:text-[#e1e2ec] font-mono text-xs cursor-pointer"
                      onClick={() => setShowLedgerFlow(false)}
                    >
                      close [x]
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-[#bcc9cd] bg-[#1d1f27] p-3 rounded overflow-x-auto leading-relaxed">
                    <code>{`struct VehicleRecord {
    bytes32 vinHash;
    address currentOwner;
    uint32 verifiedOdometer;
    uint256 lastUpdatedBlock;
    bool isSalvageTitle;
}

function appendServiceLog(bytes32 _vin, uint32 _newOdo, bytes memory _sig) external {
    require(_newOdo > records[_vin].verifiedOdometer, "TAMPER_DETECTED");
    // verification and state update logic
}`}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>

      {/* Synthesis Callout */}
      <section className="w-full bg-[#0b0e15] py-10 px-6 border-t border-[#32353d]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-[#191b23] p-8 rounded-xl shadow-lg border border-[#32353d]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">bolt</span>
              <span className="font-mono text-xs text-[#4cd7f6] uppercase">
                EVALUATE CANDIDATE CODING RIGOR
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#e1e2ec]">
              Ready to examine source implementations or live prototypes?
            </h3>
            <p className="text-sm text-[#bcc9cd] max-w-xl">
              Complete test suites, Docker orchestration manifests, and architectural system diagrams are accessible for
              hiring teams and engineering leads.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              className="px-5 py-3 rounded bg-[#06b6d4] hover:bg-[#4cd7f6] text-[#00424f] font-mono text-xs font-semibold transition-all"
              href="https://github.com/manojkumarreddy"
              rel="noreferrer"
              target="_blank"
            >
              Explore Manoj&apos;s GitHub
            </a>
            <button
              onClick={() => onNavigate('experience-and-contact')}
              className="px-5 py-3 rounded bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-mono text-xs transition-all cursor-pointer"
            >
              Schedule Technical Screen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
