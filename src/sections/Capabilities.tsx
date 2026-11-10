import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Split, 
  ShieldCheck, 
  FileSpreadsheet, 
  Layers 
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { RevealSection } from '../components/ui/RevealSection';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      icon: FileText,
      title: '1. Read documents',
      copy: 'Extract figures and details from invoices, purchase orders, contracts, and statements.',
      color: 'text-[#006C4A]',
      bg: 'bg-emerald-50 border-emerald-100'
    },
    {
      icon: Split,
      title: '2. Compare and match',
      copy: 'Check documents against ledgers, or compare quotes against each other.',
      color: 'text-[#0D9488]',
      bg: 'bg-teal-50 border-teal-100'
    },
    {
      icon: ShieldCheck,
      title: '3. Check against rules',
      copy: 'Flag missing items, mismatched totals, duplicates, and exceptions outside agreed limits.',
      color: 'text-[#4F46E5]',
      bg: 'bg-indigo-50 border-indigo-100'
    },
    {
      icon: FileSpreadsheet,
      title: '4. Prepare drafts',
      copy: 'Produce schedules, working papers, and reports ready for review.',
      color: 'text-[#0B132B]',
      bg: 'bg-slate-100 border-slate-200'
    },
    {
      icon: Layers,
      title: '5. Handle bulk work',
      copy: 'Process hundreds of documents at once.',
      color: 'text-[#006C4A]',
      bg: 'bg-emerald-50 border-emerald-100'
    }
  ];

  return (
    <RevealSection className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Core Capabilities"
          title="What Endloops can do"
          description="Purpose-built financial processing engines designed to handle document-heavy workflows with audit-grade precision."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.08, duration: 0.38 }}
                whileHover={{ y: -3 }}
                className={i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card className="hoverable h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-md ${cap.bg} border flex items-center justify-center ${cap.color} mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B132B] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cap.copy}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
};
