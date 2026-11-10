import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  RotateCcw,
  Send,
  Building2,
  Mail,
  MapPin
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { FormField } from "../components/ui/FormField";
import { RevealSection } from "../components/ui/RevealSection";
const Contact = () => {
  const [searchParams] = useSearchParams();
  const requestedTool = searchParams.get("tool");
  const requestedInterest = searchParams.get("interest");
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    areaOfInterest: requestedInterest === "budget-review" ? "Budget review" : requestedInterest === "escrow-audit" ? "Escrow audit" : requestedInterest === "financial-audit" ? "Financial audit" : requestedInterest === "interim-audit" ? "Interim audit" : requestedInterest === "property-budget-prep" ? "Property-management budgeting" : requestedTool === "po-extraction" ? "Purchase-order extraction" : requestedTool === "vouching-automation" ? "Vouching automation" : requestedTool === "expense-working" ? "Expense working automation" : requestedTool === "financial-report-review" ? "Financial report review" : requestedTool === "tender-verification" ? "Tender verification" : requestedTool === "reconciliation-engine" ? "Reconciliation" : "End-to-end solutions",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [emailNotification, setEmailNotification] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const interestOptions = [
    "End-to-end solutions",
    "Standalone tools",
    "Budget review",
    "Escrow audit",
    "Financial audit",
    "Interim audit",
    "Property-management budgeting",
    "Purchase-order extraction",
    "Vouching automation",
    "Expense working automation",
    "Financial report review",
    "Tender verification",
    "Reconciliation",
    "Other"
  ];
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Please provide your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid work email address.";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company or firm name.";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Please specify your role or job title.";
    }
    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = "Please select your area of interest.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not submit your request. Please try again.");
      setEmailNotification(result.emailNotification);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We could not submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setEmailNotification(null);
    setSubmitError("");
    setFormData({
      fullName: "",
      workEmail: "",
      company: "",
      role: "",
      areaOfInterest: "End-to-end solutions",
      message: ""
    });
    setErrors({});
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs text-slate-700 shadow-xs mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#006C4A]", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#006C4A]", children: "Direct Contact" }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "|" }),
            /* @__PURE__ */ jsx("span", { children: "Dubai, United Arab Emirates" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight", children: "Talk to us" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal", children: "Tell us about the workflow you want to automate. We\u2019ll show you how Endloops could help." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx(Card, { className: "border-slate-300 p-6 sm:p-10 shadow-sm bg-white overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: isSubmitted && submittedData ? (
        /* Exact User-Specified Confirmation State */
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
            transition: { duration: 0.3 },
            className: "space-y-6 text-center py-6",
            role: "alert",
            "aria-live": "polite",
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { type: "spring", bounce: 0.3, delay: 0.1 },
                  className: "w-14 h-14 bg-emerald-100 text-[#006C4A] rounded-full flex items-center justify-center mx-auto",
                  children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-8 h-8" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-bold text-[#0B132B]", children: "Request received. We\u2019ll be in touch." }),
                /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-slate-600 max-w-md mx-auto", children: [
                  "Thank you for reaching out. We have logged your request for ",
                  /* @__PURE__ */ jsx("strong", { children: submittedData.areaOfInterest }),
                  " and will follow up with ",
                  /* @__PURE__ */ jsx("strong", { children: submittedData.workEmail }),
                  " shortly."
                ] }),
                emailNotification !== "sent" && /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-md p-3", children: emailNotification === "failed" ? "Your request is saved, but our email notification could not be delivered. Please contact contact@endloops.com if your inquiry is urgent." : "Your request is saved. Email notifications are not configured yet, so please contact contact@endloops.com if your inquiry is urgent." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-lg p-5 text-left text-xs space-y-2 max-w-md mx-auto", children: [
                /* @__PURE__ */ jsx("p", { className: "font-mono uppercase text-slate-400 font-semibold text-[11px] pb-1 border-b", children: "Summary:" }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500", children: "Name:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-slate-800", children: submittedData.fullName })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500", children: "Company:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-slate-800", children: submittedData.company })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500", children: "Role:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-slate-800", children: submittedData.role })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500", children: "Area of interest:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-[#006C4A]", children: submittedData.areaOfInterest })
                ] }),
                submittedData.message && /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500 block mb-1", children: "Message:" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-slate-700 italic", children: [
                    '"',
                    submittedData.message,
                    '"'
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-center gap-3", children: [
                /* @__PURE__ */ jsx(Button, { onClick: handleReset, variant: "secondary", size: "md", icon: /* @__PURE__ */ jsx(RotateCcw, { className: "w-3.5 h-3.5" }), children: "Submit another inquiry" }),
                /* @__PURE__ */ jsx(Button, { to: "/solutions", variant: "primary", size: "md", children: "Explore solutions" })
              ] })
            ]
          },
          "success"
        )
      ) : (
        /* Active Form */
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.2 },
            onSubmit: handleSubmit,
            noValidate: true,
            className: "space-y-5",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-display font-bold text-[#0B132B]", children: "Request a demo" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-500 mt-1", children: "Share your workflow requirements. We\u2019ll show you how Endloops could help." })
              ] }),
              submitError && /* @__PURE__ */ jsx("p", { className: "text-sm text-rose-800 bg-rose-50 border border-rose-200 rounded-md p-3", role: "alert", children: submitError }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    id: "fullName",
                    label: "Full name",
                    required: true,
                    error: errors.fullName,
                    children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "fullName",
                        type: "text",
                        required: true,
                        value: formData.fullName,
                        onChange: (e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: void 0 });
                        },
                        placeholder: "Full name",
                        "aria-invalid": !!errors.fullName,
                        "aria-describedby": errors.fullName ? "fullName-error" : void 0,
                        className: `w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${errors.fullName ? "border-rose-300 ring-rose-200" : "border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10"}`
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    id: "workEmail",
                    label: "Work email",
                    required: true,
                    error: errors.workEmail,
                    children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "workEmail",
                        type: "email",
                        required: true,
                        value: formData.workEmail,
                        onChange: (e) => {
                          setFormData({ ...formData, workEmail: e.target.value });
                          if (errors.workEmail) setErrors({ ...errors, workEmail: void 0 });
                        },
                        placeholder: "name@company.com",
                        "aria-invalid": !!errors.workEmail,
                        "aria-describedby": errors.workEmail ? "workEmail-error" : void 0,
                        className: `w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${errors.workEmail ? "border-rose-300 ring-rose-200" : "border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10"}`
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    id: "company",
                    label: "Company",
                    required: true,
                    error: errors.company,
                    children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "company",
                        type: "text",
                        required: true,
                        value: formData.company,
                        onChange: (e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: void 0 });
                        },
                        placeholder: "Company or firm",
                        "aria-invalid": !!errors.company,
                        "aria-describedby": errors.company ? "company-error" : void 0,
                        className: `w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${errors.company ? "border-rose-300 ring-rose-200" : "border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10"}`
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormField,
                  {
                    id: "role",
                    label: "Role",
                    required: true,
                    error: errors.role,
                    children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "role",
                        type: "text",
                        required: true,
                        value: formData.role,
                        onChange: (e) => {
                          setFormData({ ...formData, role: e.target.value });
                          if (errors.role) setErrors({ ...errors, role: void 0 });
                        },
                        placeholder: "e.g. Accountant, Auditor, Finance Director",
                        "aria-invalid": !!errors.role,
                        "aria-describedby": errors.role ? "role-error" : void 0,
                        className: `w-full px-3.5 py-2 text-sm bg-white border rounded focus:outline-none focus:ring-2 ${errors.role ? "border-rose-300 ring-rose-200" : "border-slate-300 focus:border-[#0B132B] focus:ring-[#0B132B]/10"}`
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  id: "areaOfInterest",
                  label: "Area of interest",
                  required: true,
                  error: errors.areaOfInterest,
                  children: /* @__PURE__ */ jsx(
                    "select",
                    {
                      id: "areaOfInterest",
                      value: formData.areaOfInterest,
                      onChange: (e) => setFormData({ ...formData, areaOfInterest: e.target.value }),
                      className: "w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0B132B] focus:ring-2 focus:ring-[#0B132B]/10 cursor-pointer",
                      children: interestOptions.map((opt) => /* @__PURE__ */ jsx("option", { value: opt, children: opt }, opt))
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                FormField,
                {
                  id: "message",
                  label: "Message",
                  hint: "Optional",
                  children: /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "message",
                      rows: 4,
                      value: formData.message,
                      onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                      placeholder: "Tell us about the workflow you want to automate...",
                      className: "w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0B132B] focus:ring-2 focus:ring-[#0B132B]/10 resize-none"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
                Button,
                {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  disabled: isSubmitting,
                  className: "w-full justify-center",
                  icon: isSubmitting ? void 0 : /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                  children: isSubmitting ? "Submitting request..." : "Request a demo"
                }
              ) })
            ]
          },
          "form"
        )
      ) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg border border-[#E2E8F0] bg-white shadow-xs space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0B132B]", children: "Prefer to explore first?" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed", children: "See our solutions and tools to understand where Endloops could fit." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-col sm:flex-row items-center gap-3", children: [
            /* @__PURE__ */ jsx(Button, { to: "/solutions", variant: "secondary", size: "md", className: "w-full sm:w-auto", children: "Explore solutions" }),
            /* @__PURE__ */ jsx(Button, { to: "/tools", variant: "secondary", size: "md", className: "w-full sm:w-auto", children: "Explore tools" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 space-y-3 text-xs text-slate-700", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-slate-900 text-sm flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4 text-[#006C4A]" }),
            "Endloops Technologies"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: "Created from the technology department of Alkazim, Dubai, UAE." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-slate-200/80 space-y-2 text-slate-600", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-slate-400" }),
              /* @__PURE__ */ jsx("span", { children: "Dubai, United Arab Emirates" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-3.5 h-3.5 text-slate-400" }),
              /* @__PURE__ */ jsx("span", { children: "Inquiries: contact@endloops.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-emerald-50/60 rounded-md border border-emerald-100 text-xs text-emerald-950", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold mb-1", children: "Our Commitment:" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "\u201CSoftware prepares the work. Professionals decide.\u201D We respect your time and only discuss operational realities tailored to your firm." })
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  Contact
};
