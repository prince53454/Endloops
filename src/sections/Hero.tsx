import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WorkflowDemo } from '../components/ui/WorkflowDemo';
import { RevealSection } from '../components/ui/RevealSection';

export const Hero: React.FC = () => {
  return (
    <RevealSection className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      {/* Subtle geometric grid background */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B132B 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          {/* Origin Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs text-slate-700 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#006C4A]" aria-hidden="true" />
            <span>Created within Alkazim · Dubai, UAE</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">Automation for Financial Professionals</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0B132B] tracking-tight leading-[1.12] text-balance">
            Financial automation that keeps professionals in control.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed text-pretty max-w-2xl mx-auto font-normal">
            Endloops automates the repetitive work behind audits, budgets, reconciliations, and financial reviews—so accountants, auditors, and finance teams can focus on judgement, exceptions, and clients.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Request a demo
            </Button>
            <Button
              to="/solutions"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore solutions
            </Button>
          </div>

          <p className="mt-3 text-xs text-slate-500 font-medium">
            Software prepares the work. Professionals decide.
          </p>
        </div>

        {/* Hero Visual: "From documents to decisions" */}
        <div className="mt-8">
          <div className="text-center mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold">
              Interactive Operational Preview · From Documents to Decisions
            </span>
          </div>
          <WorkflowDemo />
        </div>
      </div>
    </RevealSection>
  );
};
