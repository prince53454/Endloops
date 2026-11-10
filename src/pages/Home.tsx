import React from 'react';
import { ShieldCheck, FileCheck2, UserCheck } from 'lucide-react';
import { Hero } from '../sections/Hero';
import { ProductCategories } from '../sections/ProductCategories';
import { Workflow } from '../sections/Workflow';
import { Capabilities } from '../sections/Capabilities';
import { Audience } from '../sections/Audience';
import { CTA } from '../sections/CTA';
import { RevealSection } from '../components/ui/RevealSection';
import { Reveal } from '../components/ui/Reveal';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Core principle */}
      <RevealSection className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#006C4A] font-semibold">
              Core Principle
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#0B132B] mt-2 mb-4 text-balance">
              Software prepares the work. Professionals decide.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
              Endloops takes on the repetitive work behind financial processes—extracting information, matching records, applying checks, and preparing outputs for review. The final judgement and sign-off remain with the professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Supporting Point 1 */}
            <Reveal delay={0} className="space-y-2 md:pr-6">
              <div className="w-10 h-10 rounded-md bg-emerald-50 text-[#006C4A] flex items-center justify-center mb-3">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">
                Reduce repetitive work
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automate mechanical data capture, spreadsheet cross-referencing, and repetitive voucher comparisons, returning time to advisory and analysis.
              </p>
            </Reveal>

            {/* Supporting Point 2 */}
            <Reveal delay={100} className="space-y-2 pt-6 md:pt-0 md:px-6">
              <div className="w-10 h-10 rounded-md bg-teal-50 text-[#0D9488] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">
                Surface exceptions and mismatches
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instantly isolate discrepancies, unapproved price variances, missing attachments, and broken note references into clear review queues.
              </p>
            </Reveal>

            {/* Supporting Point 3 */}
            <Reveal delay={200} className="space-y-2 pt-6 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-md bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0B132B]">
                Keep professionals in control
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automation prepares the draft schedules; qualified accountants, auditors, and controllers retain complete authority over every sign-off.
              </p>
            </Reveal>
          </div>
        </div>
      </RevealSection>

      {/* Section 3: Product categories */}
      <ProductCategories />

      {/* Section 4: How it works */}
      <Workflow />

      {/* Section 5: Capabilities */}
      <Capabilities />

      {/* Section 6: Who it is for */}
      <Audience />

      {/* Section 7: Final CTA */}
      <CTA />
    </div>
  );
};
