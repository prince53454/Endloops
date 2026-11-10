import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { MAIN_NAV, FOOTER_SOLUTIONS, FOOTER_TOOLS } from '../../data/navigation';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Logo & Short Company Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm pt-2">
              Endloops automates repetitive financial work so accountants, auditors, finance teams, and property-management companies can focus on judgement, exceptions, and clients.
            </p>
            <div className="pt-2 text-xs text-slate-400 leading-normal">
              <span className="font-medium text-slate-300">Origin:</span> Created from the technology
              department of Alkazim, an accounting and audit firm based in Dubai.
            </div>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-[#006C4A]" aria-hidden="true" />
              <span>Software prepares the work. Professionals decide.</span>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standalone Tools Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Standalone Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_TOOLS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links, Contact & LinkedIn */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {MAIN_NAV.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="text-slate-300 font-medium">Dubai, United Arab Emirates</p>
              <p>
                <Link to="/contact" className="hover:text-white underline">
                  contact@endloops.com
                </Link>
              </p>
              {/* Optional LinkedIn Placeholder */}
              <div className="pt-1">
                <a
                  href="https://linkedin.com/company/endloops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
                  <span>LinkedIn (Placeholder)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Endloops. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Software prepares the work. Professionals decide.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
