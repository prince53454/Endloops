import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { MAIN_NAV } from '../../data/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-[#E2E8F0] shadow-[0_1px_4px_rgba(11,19,43,0.03)]'
          : 'bg-white/90 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B] rounded"
            aria-label="Endloops Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links (Home, Solutions, Tools, How It Works, About, Contact) */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {MAIN_NAV.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B] rounded ${
                    isActive
                      ? 'text-[#0B132B] font-semibold'
                      : 'text-slate-600 hover:text-[#0B132B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#006C4A]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Zone: Request a demo button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Request a demo
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B132B] hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-6 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col space-y-1.5 py-2" aria-label="Mobile Navigation">
              {MAIN_NAV.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-base font-medium rounded transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-[#0B132B] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B132B]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Request a demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
