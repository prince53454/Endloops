import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  ArrowRight, 
  AlertCircle, 
  UserCheck, 
  CheckCircle2, 
  ChevronRight,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealSection } from '../components/ui/RevealSection';
import { SOLUTIONS, SolutionItem } from '../data/solutions';

export const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string>('budget-review');

  const active = SOLUTIONS.find((s) => s.id === selectedSolution) || SOLUTIONS[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <RevealSection className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs text-slate-700 shadow-xs mb-4">
              <Layers className="w-3.5 h-3.5 text-[#006C4A]" />
              <span className="font-semibold text-[#006C4A]">Product Category 01</span>
              <span className="text-slate-300">|</span>
              <span>End-to-End Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight">
              End-to-end solutions for complete financial workflows
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Endloops builds software that supports an entire process or financial service from start to finish—preparing the work for professional review and decision-making.
            </p>
          </motion.div>
        </div>
      </RevealSection>

      {/* 2. THE THREE-STAGE COMPARISON VISUAL */}
      <RevealSection className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#0B132B]">
              The Endloops Workflow Shift
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Manual process → Endloops-prepared work → Professional review and sign-off
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Stage 1: Manual */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-lg border border-slate-200 bg-slate-50/70"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Stage 01
                </span>
                <span className="text-xs text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-mono">
                  Manual process
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">
                Manual Process
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Repetitive data extraction, manual checking across spreadsheets, and tedious document cross-referencing that delays strategic analysis.
              </p>
            </motion.div>

            {/* Stage 2: Endloops Prepares */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="p-6 rounded-lg border border-[#006C4A]/30 bg-emerald-50/40 relative"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#006C4A] uppercase">
                  Stage 02
                </span>
                <span className="text-xs text-[#006C4A] bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded font-mono font-medium">
                  Endloops-prepared work
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0B132B] mb-2">
                Endloops-Prepared Work
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Software automatically reads documents, matches records, checks against rules, flags exceptions, and compiles audit-ready working papers.
              </p>
            </motion.div>

            {/* Stage 3: Professional Decides */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="p-6 rounded-lg border border-[#0B132B]/30 bg-white shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#0B132B] uppercase">
                  Stage 03
                </span>
                <span className="text-xs text-[#0B132B] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded font-mono font-semibold">
                  Professional review & sign-off
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0B132B] mb-2">
                Professional Review & Sign-Off
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Qualified professionals inspect exceptions, evaluate findings, apply accounting judgement, and certify the final sign-off.
              </p>
            </motion.div>
          </div>
        </div>
      </RevealSection>

      {/* 3. FIVE DETAILED SOLUTION SECTIONS */}
      <RevealSection className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Solutions Suite"
            title="Complete software for five critical financial services."
            description="Explore what Endloops automates and what the professional reviews for each workflow."
            align="center"
          />

          {/* Interactive Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {SOLUTIONS.map((s) => {
              const isSelected = selectedSolution === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSolution(s.id)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded transition-all cursor-pointer whitespace-nowrap z-10 ${
                    isSelected
                      ? 'text-white font-semibold'
                      : 'bg-white border border-[#E2E8F0] text-slate-600 hover:text-[#0B132B] hover:bg-slate-50'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeSolutionTab"
                      className="absolute inset-0 bg-[#0B132B] rounded shadow-xs -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Solution Focus Showcase */}
          <Card className="border-slate-300 p-6 sm:p-10 mb-16 shadow-md bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0B132B]">
                      {active.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1">
                      Category: {active.category}
                    </p>
                  </div>

                  <Button
                    to={`/contact?interest=${active.id}`}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request a demo
                  </Button>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Problem & Automated Tasks */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                        Problem
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-rose-50/40 p-4 rounded-md border border-rose-100">
                        {active.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#006C4A] font-bold mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#006C4A]" />
                        What Endloops automates
                      </h4>
                      <ul className="space-y-2.5">
                        {active.automates.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#006C4A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Professional's Role & Outcome */}
                  <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B132B] font-bold mb-3 flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-[#0B132B]" />
                        Professional's role
                      </h4>
                      <div className="p-4 bg-slate-50 rounded-md border border-slate-200 text-sm text-slate-700">
                        {active.professionalReviews[0]}
                      </div>
                    </div>

                    <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#006C4A] font-bold mb-1.5">
                        Outcome
                      </h4>
                      <p className="text-sm text-slate-800 font-medium leading-relaxed">
                        {active.outcome}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button
                        to={`/contact?interest=${active.id}`}
                        variant="secondary"
                        size="sm"
                        className="w-full justify-center"
                      >
                        Request a demo for {active.title}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Card>

          {/* Cards for all 5 Solutions */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-bold text-[#0B132B] mb-6">
              All 5 End-to-End Solutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS.map((s, idx) => (
                <Card key={s.id} id={s.id} className="p-6 bg-white flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-500 font-semibold">
                      0{idx + 1} · {s.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#0B132B] mt-1.5 mb-2">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      <strong>Problem:</strong> {s.problem}
                    </p>
                    
                    <div className="border-t border-slate-100 pt-3 space-y-1.5 text-xs text-slate-700 mb-4">
                      <p className="font-semibold text-[#006C4A]">What Endloops automates:</p>
                      <ul className="space-y-1">
                        {s.automates.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#006C4A] font-bold">›</span>
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded border border-slate-100 text-xs text-slate-700 mb-4">
                      <span className="font-semibold text-[#0B132B]">Outcome:</span> {s.outcome}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSolution(s.id);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      className="text-xs font-medium text-[#006C4A] hover:underline"
                    >
                      View full details →
                    </button>
                    <Link
                      to={`/contact?interest=${s.id}`}
                      className="text-xs font-semibold text-[#0B132B] hover:text-[#006C4A]"
                    >
                      Request a demo
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 4. FINAL CTA */}
      <RevealSection className="py-16 bg-[#0B132B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
            See how Endloops end-to-end solutions support your practice
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Schedule a demonstration to see how Endloops prepares the work for your professional review and decision-making.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/contact" variant="positive" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Request a demo
            </Button>
            <Button to="/tools" variant="outline-light" size="lg">
              Explore standalone tools
            </Button>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};
