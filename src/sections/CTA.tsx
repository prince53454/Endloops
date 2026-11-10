import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { RevealSection } from '../components/ui/RevealSection';

export const CTA: React.FC = () => {
  return (
    <RevealSection className="py-20 sm:py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Subtle geometric dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#10B981] font-semibold mb-3">
          Automation Designed for Precision
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-balance">
          See how Endloops could fit your workflow
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Tell us about the process you want to automate. We’ll show you how Endloops could help.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to="/contact"
            variant="positive"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Request a demo
          </Button>
          <Button
            to="/contact?type=talk"
            variant="outline-light"
            size="lg"
            className="w-full sm:w-auto"
          >
            Talk to us
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> End-to-end solutions & standalone tools
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Built from financial experience in Dubai
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Full professional sign-off authority
          </span>
        </div>
      </motion.div>
    </RevealSection>
  );
};
