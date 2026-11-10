import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  UserCheck, 
  SlidersHorizontal,
  Table as TableIcon
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealSection } from '../components/ui/RevealSection';
import { TOOLS, StandaloneTool } from '../data/tools';

export const Tools: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialToolId = searchParams.get('tool');

  const [selectedCategory, setSelectedCategory] = useState<string>('All tools');
  const [selectedToolId, setSelectedToolId] = useState<string>(initialToolId || 'po-extraction');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  const categories = [
    'All tools',
    'Document processing',
    'Review and assurance',
    'Reconciliation',
    'Property and procurement'
  ];

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      if (selectedCategory === 'All tools') return true;
      return tool.category === selectedCategory;
    });
  }, [selectedCategory]);

  const activeTool = TOOLS.find((t) => t.id === selectedToolId) || TOOLS[0];

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
              <Cpu className="w-3.5 h-3.5 text-[#0D9488]" />
              <span className="font-semibold text-[#0D9488]">Product Category 02</span>
              <span className="text-slate-300">|</span>
              <span>Standalone Tools</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Focused tools for specific financial workflows
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Endloops’ standalone tools solve individual needs and can be used independently, while fitting into broader financial workflows.
            </p>
          </motion.div>
        </div>
      </RevealSection>

      {/* 2. FILTER CONTROLS & CATALOGUE HEADER */}
      <section className="py-8 bg-white border-b border-[#E2E8F0] sticky top-16 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap cursor-pointer z-10 ${
                      isSelected ? 'text-white font-semibold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-[#0B132B] rounded shadow-xs -z-10"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      />
                    )}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 border border-slate-200 p-0.5 rounded bg-white shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-[#0B132B] text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                aria-label="Cards view"
                title="Cards View"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'matrix' ? 'bg-[#0B132B] text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                aria-label="Comparison table view"
                title="Comparison Table"
              >
                <TableIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CATALOGUE CONTENT */}
      <RevealSection className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'cards' ? (
            <div>
              {/* Active Focused Tool Detail Pane */}
              <Card className="border-slate-300 p-6 sm:p-8 mb-12 shadow-sm bg-white overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTool.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200">
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-2xl font-display font-bold text-[#0B132B]">
                            {activeTool.name}
                          </h2>
                          <Badge variant={activeTool.status === 'In use' ? 'in-use' : 'expanding'}>
                            {activeTool.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                          <strong>Purpose:</strong> {activeTool.purpose}
                        </p>
                      </div>

                      <Button
                        to={`/contact?tool=${activeTool.id}`}
                        variant="primary"
                        size="sm"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Talk to us about your workflow
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                      {/* Problem */}
                      <div className="space-y-2">
                        <p className="text-xs font-mono uppercase text-slate-500 font-semibold">
                          Problem:
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200/70">
                          {activeTool.problem}
                        </p>
                      </div>

                      {/* Inputs */}
                      <div className="space-y-2">
                        <p className="text-xs font-mono uppercase text-slate-500 font-semibold">
                          Inputs:
                        </p>
                        <ul className="space-y-1.5">
                          {activeTool.inputs.map((inp, idx) => (
                            <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                              <span className="text-[#0D9488] font-bold">›</span>
                              <span>{inp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Automated Output */}
                      <div className="space-y-2">
                        <p className="text-xs font-mono uppercase text-[#006C4A] font-semibold">
                          Automated output:
                        </p>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {activeTool.automatedOutput[0]}
                        </p>
                      </div>

                      {/* Professional's Role */}
                      <div className="space-y-2 bg-emerald-50/40 p-4 rounded-md border border-emerald-100">
                        <p className="text-xs font-mono uppercase text-[#0B132B] font-semibold flex items-center gap-1">
                          <UserCheck className="w-3.5 h-3.5 text-[#006C4A]" />
                          Professional’s role:
                        </p>
                        <p className="text-xs text-slate-800 leading-relaxed font-medium">
                          {activeTool.professionalReviews[0]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Card>

              {/* Grid of All Six Standalone Tools */}
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredTools.map((tool) => (
                    <motion.div
                      layout
                      key={tool.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      whileHover={{ y: -3 }}
                    >
                      <Card
                        hoverable
                        onClick={() => {
                          setSelectedToolId(tool.id);
                          window.scrollTo({ top: 380, behavior: 'smooth' });
                        }}
                        className={`cursor-pointer transition-all h-full flex flex-col justify-between ${
                          selectedToolId === tool.id
                            ? 'border-[#0D9488] ring-1 ring-[#0D9488] shadow-sm'
                            : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">
                              {tool.category}
                            </span>
                            <Badge variant={tool.status === 'In use' ? 'in-use' : 'expanding'}>
                              {tool.status}
                            </Badge>
                          </div>

                          <h3 className="text-lg font-bold text-[#0B132B] mb-2">{tool.name}</h3>
                          <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            <strong>Purpose:</strong> {tool.purpose}
                          </p>

                          <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
                            <div>
                              <span className="font-mono text-slate-500 text-[11px]">Inputs:</span>
                              <p className="text-slate-700 truncate mt-0.5">{tool.inputs.join(', ')}</p>
                            </div>
                            <div>
                              <span className="font-mono text-[#006C4A] text-[11px]">Automated output:</span>
                              <p className="text-slate-700 truncate mt-0.5">{tool.automatedOutput[0]}</p>
                            </div>
                            <div>
                              <span className="font-mono text-[#0B132B] text-[11px]">Professional's role:</span>
                              <p className="text-slate-700 truncate mt-0.5">{tool.professionalReviews[0]}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-[#0D9488] font-semibold flex items-center gap-1">
                            Inspect details →
                          </span>
                          <span className="text-slate-500 font-medium">
                            Select to view
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          ) : (
            /* Exact User-Specified Comparison Table */
            <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B132B]">
                    Standalone Tools Comparison Table
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Compare purpose, inputs, outputs, and professional review responsibilities across all six standalone tools.
                  </p>
                </div>
                <Badge variant="system">6 Standalone Tools</Badge>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-100/75 border-b border-[#E2E8F0] text-slate-700 font-mono text-[11px] uppercase">
                      <th className="py-3.5 px-4 font-semibold">Tool</th>
                      <th className="py-3.5 px-4 font-semibold">Purpose</th>
                      <th className="py-3.5 px-4 font-semibold">Input</th>
                      <th className="py-3.5 px-4 font-semibold">Automated output</th>
                      <th className="py-3.5 px-4 font-semibold">Professional’s role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {TOOLS.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-[#0B132B] whitespace-nowrap">
                          {t.name}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed">
                          {t.tablePurpose}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed">
                          {t.tableInput}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 font-medium max-w-xs leading-relaxed">
                          {t.tableOutput}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed">
                          {t.tableRole}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </RevealSection>

      {/* 4. CALL TO ACTION */}
      <RevealSection className="py-16 bg-[#0B132B] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
            Talk to us about your workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
            Tell us about the repetitive task you want to solve. We’ll demonstrate how Endloops standalone tools fit into your workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/contact?type=talk"
              variant="positive"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to us about your workflow
            </Button>
            <Button to="/solutions" variant="outline-light" size="lg">
              Explore solutions
            </Button>
          </div>
        </motion.div>
      </RevealSection>
    </div>
  );
};
