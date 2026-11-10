import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  Send,
  Building2,
  Mail,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FormField } from '../components/ui/FormField';
import { RevealSection } from '../components/ui/RevealSection';

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  role: string;
  areaOfInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  company?: string;
  role?: string;
  areaOfInterest?: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedTool = searchParams.get('tool');
  const requestedInterest = searchParams.get('interest');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    company: '',
    role: '',
    areaOfInterest: requestedInterest === 'budget-review' 
      ? 'Budget review'
      : requestedInterest === 'escrow-audit'
      ? 'Escrow audit'
      : requestedInterest === 'financial-audit'
      ? 'Financial audit'
      : requestedInterest === 'interim-audit'
      ? 'Interim audit'
      : requestedInterest === 'property-budget-prep'
      ? 'Property-management budgeting'
      : requestedTool === 'po-extraction'
      ? 'Purchase-order extraction'
      : requestedTool === 'vouching-automation'
      ? 'Vouching automation'
      : requestedTool === 'expense-working'
      ? 'Expense working automation'
      : requestedTool === 'financial-report-review'
      ? 'Financial report review'
      : requestedTool === 'tender-verification'
      ? 'Tender verification'
      : requestedTool === 'reconciliation-engine'
      ? 'Reconciliation'
      : 'End-to-end solutions',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const interestOptions = [
    'End-to-end solutions',
    'Standalone tools',
    'Budget review',
    'Escrow audit',
    'Financial audit',
    'Interim audit',
    'Property-management budgeting',
    'Purchase-order extraction',
    'Vouching automation',
    'Expense working automation',
    'Financial report review',
    'Tender verification',
    'Reconciliation',
    'Other'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company or firm name.';
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Please specify your role or job title.';
    }

    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = 'Please select your area of interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      workEmail: '',
      company: '',
      role: '',
      areaOfInterest: 'End-to-end solutions',
      message: ''
    });
    setErrors({});
  };

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
              <span className="font-semibold text-[#006C4A]">Direct Contact</span>
              <span className="text-slate-300">|</span>
              <span>Dubai, United Arab Emirates</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Talk to us
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tell us about the workflow you want to automate. We’ll show you how Endloops could help.
            </p>
          </motion.div>
        </div>
      </RevealSection>

      {/* 2. FORM & REASSURANCE SPLIT */}
      <RevealSection className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <Card className="border-slate-300 p-6 sm:p-10 shadow-sm bg-white overflow-hidden">
                <AnimatePresence mode="wait">
                  {isSubmitted && submittedData ? (
                    /* Exact User-Specified Confirmation State */
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 text-center py-6"
                      role="alert"
                      aria-live="polite"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.3, delay: 0.1 }}
                        className="w-14 h-14 bg-emerald-100 text-[#006C4A] rounded-full flex items-center justify-center mx-auto"
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </motion.div>

                      <div>
                        <h2 className="text-2xl font-display font-bold text-[#0B132B]">
                          Request received. We’ll be in touch.
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                          Thank you for reaching out. We have logged your request for <strong>{submittedData.areaOfInterest}</strong> and will follow up with <strong>{submittedData.workEmail}</strong> shortly.
                        </p>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-left text-xs space-y-2 max-w-md mx-auto">
                        <p className="font-mono uppercase text-slate-400 font-semibold text-[11px] pb-1 border-b">
                          Summary:
                        </p>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Name:</span>
                          <span className="font-medium text-slate-800">{submittedData.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Company:</span>
                          <span className="font-medium text-slate-800">{submittedData.company}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Role:</span>
                          <span className="font-medium text-slate-800">{submittedData.role}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Area of interest:</span>
                          <span className="font-medium text-[#006C4A]">{submittedData.areaOfInterest}</span>
                        </div>
                        {submittedData.message && (
                          <div className="pt-2 border-t">
                            <span className="text-slate-500 block mb-1">Message:</span>
                            <span className="text-slate-700 italic">"{submittedData.message}"</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button onClick={handleReset} variant="secondary" size="md" icon={<RotateCcw className="w-3.5 h-3.5" />}>
                          Submit another inquiry
                        </Button>
                        <Button to="/solutions" variant="primary" size="md">
                          Explore solutions
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    /* Active Form */
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit} 
                      noValidate 
                      className="space-y-5"
                    >
                      <div>
                        <h2 className="text-xl sm:text-2xl font-display font-bold text-[#0B132B]">
                          Request a demo
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Share your workflow requirements. We’ll show you how Endloops could help.
                        </p>
                      </div>

                      {/* Full Name & Work Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          id="fullName"
                          label="Full name"
                          required
                          error={errors.fullName}
                        >
                          <input
                            id="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => {
                              setFormData({ ...formData, fullName: e.target.value });
                              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                            }}
                            placeholder="Full name"
                            aria-invalid={!!errors.fullName}
                            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                            className={`w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${
                              errors.fullName
                                ? 'border-rose-300 ring-rose-200'
                                : 'border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10'
                            }`}
                          />
                        </FormField>

                        <FormField
                          id="workEmail"
                          label="Work email"
                          required
                          error={errors.workEmail}
                        >
                          <input
                            id="workEmail"
                            type="email"
                            required
                            value={formData.workEmail}
                            onChange={(e) => {
                              setFormData({ ...formData, workEmail: e.target.value });
                              if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                            }}
                            placeholder="name@company.com"
                            aria-invalid={!!errors.workEmail}
                            aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
                            className={`w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${
                              errors.workEmail
                                ? 'border-rose-300 ring-rose-200'
                                : 'border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10'
                            }`}
                          />
                        </FormField>
                      </div>

                      {/* Company & Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          id="company"
                          label="Company"
                          required
                          error={errors.company}
                        >
                          <input
                            id="company"
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => {
                              setFormData({ ...formData, company: e.target.value });
                              if (errors.company) setErrors({ ...errors, company: undefined });
                            }}
                            placeholder="Company or firm"
                            aria-invalid={!!errors.company}
                            aria-describedby={errors.company ? 'company-error' : undefined}
                            className={`w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${
                              errors.company
                                ? 'border-rose-300 ring-rose-200'
                                : 'border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10'
                            }`}
                          />
                        </FormField>

                        <FormField
                          id="role"
                          label="Role"
                          required
                          error={errors.role}
                        >
                          <input
                            id="role"
                            type="text"
                            required
                            value={formData.role}
                            onChange={(e) => {
                              setFormData({ ...formData, role: e.target.value });
                              if (errors.role) setErrors({ ...errors, role: undefined });
                            }}
                            placeholder="e.g. Accountant, Auditor, Finance Director"
                            aria-invalid={!!errors.role}
                            aria-describedby={errors.role ? 'role-error' : undefined}
                            className={`w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${
                              errors.role
                                ? 'border-rose-300 ring-rose-200'
                                : 'border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10'
                            }`}
                          />
                        </FormField>
                      </div>

                      {/* Area of interest */}
                      <FormField
                        id="areaOfInterest"
                        label="Area of interest"
                        required
                        error={errors.areaOfInterest}
                      >
                        <select
                          id="areaOfInterest"
                          value={formData.areaOfInterest}
                          onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                          className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0B132B] focus:ring-2 focus:ring-[#0B132B]/10 cursor-pointer"
                        >
                          {interestOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      {/* Message */}
                      <FormField
                        id="message"
                        label="Message"
                        hint="Optional"
                      >
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about the workflow you want to automate..."
                          className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0B132B] focus:ring-2 focus:ring-[#0B132B]/10 resize-none"
                        />
                      </FormField>

                      {/* Submit */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full justify-center"
                          icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                        >
                          {isSubmitting ? 'Submitting request...' : 'Request a demo'}
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </Card>
            </div>

            {/* Right Column: Secondary Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* "Prefer to explore first?" card */}
              <div className="p-6 rounded-lg border border-[#E2E8F0] bg-white shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-[#0B132B]">
                  Prefer to explore first?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  See our solutions and tools to understand where Endloops could fit.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <Button to="/solutions" variant="secondary" size="md" className="w-full sm:w-auto">
                    Explore solutions
                  </Button>
                  <Button to="/tools" variant="secondary" size="md" className="w-full sm:w-auto">
                    Explore tools
                  </Button>
                </div>
              </div>

              {/* Office & Direct Info */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 space-y-3 text-xs text-slate-700">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#006C4A]" />
                  Endloops Technologies
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Created from the technology department of Alkazim, Dubai, UAE.
                </p>
                <div className="pt-2 border-t border-slate-200/80 space-y-2 text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Inquiries: contact@endloops.com</span>
                  </div>
                </div>
              </div>

              {/* Core Philosophy Reassurance */}
              <div className="p-4 bg-emerald-50/60 rounded-md border border-emerald-100 text-xs text-emerald-950">
                <p className="font-semibold mb-1">Our Commitment:</p>
                <p className="text-slate-700">
                  “Software prepares the work. Professionals decide.” We respect your time and only discuss operational realities tailored to your firm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};
