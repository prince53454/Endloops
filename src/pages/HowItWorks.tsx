import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UploadCloud, 
  FileSearch, 
  GitCompare, 
  AlertTriangle, 
  UserCheck, 
  ChevronDown, 
  ArrowRight,
  FileCheck2,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealSection } from '../components/ui/RevealSection';
import { FAQS } from '../data/faqs';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const steps = [
    {
      step: 'Step 1',
      title: 'Upload or connect documents',
      copy: 'Start with the documents and data involved in the workflow—such as invoices, purchase orders, contracts, statements, or supporting records.',
      action: 'Software Ingestion',
      icon: UploadCloud
    },
    {
      step: 'Step 2',
      title: 'Extract and structure information',
      copy: 'Endloops reads the documents and extracts relevant figures and details into a structured format.',
      action: 'Automated Extraction',
      icon: FileSearch
    },
    {
      step: 'Step 3',
      title: 'Compare, match, and apply rules',
      copy: 'The software compares records, matches documents, and applies agreed rules to identify inconsistencies.',
      action: 'Deterministic Matching',
      icon: GitCompare
    },
    {
      step: 'Step 4',
      title: 'Flag exceptions and prepare outputs',
      copy: 'Endloops flags missing items, mismatches, duplicates, and exceptions outside agreed limits. It prepares schedules, working papers, and reports for review.',
      action: 'Output Preparation',
      icon: AlertTriangle
    },
    {
      step: 'Step 5',
      title: 'Professional review and sign-off',
      copy: 'The professional reviews the prepared work, investigates exceptions, makes decisions, and provides final sign-off.',
      action: 'Human Review & Sign-Off',
      icon: UserCheck
    }
  ];

  const exampleSteps = [
    { num: '1', label: 'Purchase order received' },
    { num: '2', label: 'Key details extracted' },
    { num: '3', label: 'Data structured' },
    { num: '4', label: 'Rules applied' },
    { num: '5', label: 'Exceptions flagged' },
    { num: '6', label: 'Review-ready output prepared' },
    { num: '7', label: 'Professional reviews and approves' }
  ];

  const activeStep = steps[activeStepIndex];

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
              <span className="w-2 h-2 rounded-full bg-[#006C4A]" aria-hidden="true" />
              <span className="font-semibold text-[#006C4A]">Operating Model</span>
              <span className="text-slate-300">|</span>
              <span>5-Step Workflow</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight">
              How Endloops works
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Endloops prepares the work. Professionals review, decide, and sign off.
            </p>
          </motion.div>
        </div>
      </RevealSection>

      {/* 2. INTERACTIVE FIVE-STEP WORKFLOW STEPPER */}
      <RevealSection className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Execution Flow"
            title="The five-step operating workflow"
            description="Select each step below to inspect how Endloops executes preparation and preserves professional authority."
            align="center"
          />

          {/* Stepper Tabs: Desktop Horizontal, Mobile scroll */}
          <div className="hidden lg:grid grid-cols-5 gap-3 mb-10" role="tablist">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStepIndex === idx;
              const isHuman = idx === 4;

              return (
                <button
                  key={st.step}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 rounded-lg border transition-all cursor-pointer relative z-10 ${
                    isActive
                      ? isHuman
                        ? 'bg-emerald-50/70 border-[#006C4A] shadow-xs'
                        : 'bg-white border-[#0B132B] shadow-xs'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeStepperBorder"
                      className={`absolute inset-0 rounded-lg pointer-events-none border-2 ${
                        isHuman ? 'border-[#006C4A]' : 'border-[#0B132B]'
                      }`}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      {st.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? (isHuman ? 'text-[#006C4A]' : 'text-[#0B132B]') : 'text-slate-400'}`} />
                  </div>
                  <h3 className={`text-sm font-bold line-clamp-1 ${isActive ? 'text-[#0B132B]' : 'text-slate-700'}`}>
                    {st.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {st.action}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Mobile Stepper Buttons */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist">
            {steps.map((st, idx) => (
              <button
                key={st.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded whitespace-nowrap cursor-pointer ${
                  activeStepIndex === idx
                    ? 'bg-[#0B132B] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {st.step}: {st.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active Step Display Card */}
          <Card className="border-slate-300 p-6 sm:p-10 shadow-sm bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-[#006C4A]">
                      {activeStep.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0B132B] mt-1">
                      {activeStep.title}
                    </h3>
                  </div>
                  <Badge variant={activeStepIndex === 4 ? 'healthy' : 'system'}>
                    {activeStep.action}
                  </Badge>
                </div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {activeStep.copy}
                    </p>
                    <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs text-slate-600 space-y-1.5">
                      <p>
                        <strong className="text-[#0B132B]">Operational Focus:</strong> {activeStep.title}
                      </p>
                      <p>
                        <strong className="text-[#006C4A]">Governance:</strong> {activeStepIndex === 4 ? 'Qualified professional exercises judgement, investigates exceptions, and certifies sign-off.' : 'Software automatically handles high-volume extraction, matching, and calculations.'}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono text-slate-500">
                      <span>{activeStep.step} Status</span>
                      <span className="text-[#006C4A] font-semibold">Active Pipeline</span>
                    </div>
                    <div className="mt-4 p-4 bg-white border border-slate-200 rounded text-xs space-y-2">
                      <div className="font-bold text-[#0B132B]">{activeStep.title}</div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">{activeStep.copy}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stepper Progress Controls */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="text-xs font-medium text-slate-600 hover:text-[#0B132B] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                ← Previous step
              </button>

              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStepIndex === i ? 'bg-[#006C4A] w-6' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="text-xs font-medium text-[#006C4A] hover:underline disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                Next step →
              </button>
            </div>
          </Card>
        </div>
      </RevealSection>

      {/* 3. EXAMPLE WORKFLOW: PURCHASE-ORDER EXTRACTION */}
      <RevealSection className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Concrete Example"
            title="Example: Purchase-order extraction"
            description="A step-by-step trace showing how a single purchase order moves through Endloops from intake to professional review."
            align="center"
          />

          <div className="mt-12 bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3 relative">
              {exampleSteps.map((s, idx) => (
                <div
                  key={s.num}
                  className={`p-4 rounded-lg border text-center flex flex-col justify-between ${
                    idx === 6
                      ? 'bg-emerald-50/70 border-[#006C4A] ring-1 ring-[#006C4A]'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center text-xs font-mono font-bold mx-auto mb-2">
                    {s.num}
                  </div>
                  <p className="text-xs font-semibold text-[#0B132B] leading-tight">
                    {s.label}
                  </p>
                  <span className="text-[10px] font-mono text-slate-500 mt-2 block">
                    {idx === 6 ? 'Human' : 'System'}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <span>
                <strong>Outcome:</strong> Ingested, structured, and checked against master prices in seconds. The reviewer confirms the output with a single sign-off.
              </span>
              <Button to="/tools?tool=po-extraction" variant="secondary" size="sm">
                View purchase-order tool
              </Button>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 4. EXACT FAQ SECTION (ACCORDION) */}
      <RevealSection className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Questions & Answers"
            title="Frequently asked questions"
            description="Clear answers about document types, volume capabilities, and the role of human review."
            align="center"
          />

          <div className="mt-8 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0B132B]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#006C4A]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* 5. CALL TO ACTION */}
      <RevealSection className="py-16 bg-[#0B132B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
            See how Endloops works on your financial documents
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Schedule a walkthrough with our team to run a sample of your invoices, purchase orders, or ledgers through the workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/contact" variant="positive" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Request a demo
            </Button>
            <Button to="/contact?type=talk" variant="outline-light" size="lg">
              Talk to us
            </Button>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};
