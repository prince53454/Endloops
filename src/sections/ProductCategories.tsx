import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealSection } from '../components/ui/RevealSection';

export const ProductCategories: React.FC = () => {
  return (
    <RevealSection className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Product Categories"
          title="Two ways to work with Endloops"
          description="Software designed to fit your operational reality—whether you need complete coverage of an entire workflow or focused tools that solve a single bottleneck."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Card 1: End-to-end solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -3 }}
          >
            <Card className="flex flex-col justify-between border-slate-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006C4A] to-[#0D9488]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#006C4A]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#006C4A] font-bold">
                      Category 01
                    </span>
                  </div>
                  <Badge variant="in-use">5 Solutions</Badge>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#0B132B] mb-3">
                  End-to-end solutions
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Complete software that runs an entire financial process or service from start to finish.
                </p>

                <div className="border-t border-slate-200 pt-5 space-y-3 mb-6">
                  <p className="text-xs font-mono uppercase text-slate-500 font-semibold">
                    Solutions include:
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {[
                      'Budget review',
                      'Escrow audit',
                      'Financial audit',
                      'Interim audit',
                      'Budget preparation for property-management companies'
                    ].map((example, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#006C4A] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#0B132B]">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Runs entire workflows</span>
                <Button to="/solutions" variant="secondary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore solutions
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Standalone tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.1, duration: 0.45 }}
            whileHover={{ y: -3 }}
          >
            <Card className="flex flex-col justify-between border-slate-300 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D9488] to-[#4F46E5]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#0D9488]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0D9488] font-bold">
                      Category 02
                    </span>
                  </div>
                  <Badge variant="system">6 Standalone Tools</Badge>
                </div>

                <h3 className="text-2xl font-display font-bold text-[#0B132B] mb-3">
                  Standalone tools
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Focused tools that solve one specific need and can be used independently.
                </p>

                <div className="border-t border-slate-200 pt-5 space-y-3 mb-6">
                  <p className="text-xs font-mono uppercase text-slate-500 font-semibold">
                    Tools include:
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {[
                      'Purchase-order extraction',
                      'Vouching automation',
                      'Expense working automation',
                      'Financial report review',
                      'Tender verification',
                      'Reconciliation'
                    ].map((example, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#0B132B]">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Plugs into existing stacks</span>
                <Button to="/tools" variant="secondary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore tools
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </RevealSection>
  );
};
