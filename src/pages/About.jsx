import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import {
  Building2,
  Cpu,
  Compass,
  ArrowRight,
  MapPin,
  Scale
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { RevealSection } from "../components/ui/RevealSection";
const About = () => {
  const values = [
    {
      num: "01",
      title: "Financial-domain understanding",
      copy: "We understand the detail, pressure, and judgement involved in financial work.",
      icon: Building2,
      color: "text-[#006C4A]",
      bg: "bg-emerald-50"
    },
    {
      num: "02",
      title: "Practical automation",
      copy: "We focus on automating repetitive work that takes time away from professional judgement.",
      icon: Cpu,
      color: "text-[#0D9488]",
      bg: "bg-teal-50"
    },
    {
      num: "03",
      title: "Professional control",
      copy: "Our software prepares the work; professionals review, decide, and sign off.",
      icon: Scale,
      color: "text-[#4F46E5]",
      bg: "bg-indigo-50"
    },
    {
      num: "04",
      title: "Built to grow",
      copy: "We are expanding our engineering, design, and quality capabilities to support more workflows and teams.",
      icon: Compass,
      color: "text-slate-800",
      bg: "bg-slate-100"
    }
  ];
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
            /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-[#006C4A]" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#006C4A]", children: "Origin & Mission" }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "|" }),
            /* @__PURE__ */ jsx("span", { children: "Dubai, United Arab Emirates" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight", children: "Automation built from financial experience" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal", children: "Endloops was created from the technology department of Alkazim, an accounting and audit firm based in Dubai." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-[#006C4A] font-semibold", children: "Section 1 \xB7 Our origin" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-display font-bold text-[#0B132B]", children: "Rooted in everyday accounting and audit reality" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-slate-700 leading-relaxed", children: "Endloops grew out of the technology department of Alkazim, an accounting and audit firm based in Dubai. That experience shaped our understanding of the detailed, time-sensitive work carried out by financial professionals." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed pt-2", children: "Rather than treating financial work as generic text entry, we build software grounded in actual audit standards, escrow rules, VAT calculations, and the rigorous traceability expected by partners and regulators." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-md bg-emerald-100 text-[#006C4A] flex items-center justify-center", children: /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0B132B]", children: "The Alkazim Heritage" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: "Alkazim\u2019s practice in Dubai gave Endloops firsthand exposure to real vouchers, bilateral agreements, bank clearing registers, and developer escrow audits across the UAE and broader GCC." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-[#006C4A] font-semibold", children: "Section 2 \xB7 Purpose" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-4xl font-display font-bold text-[#0B132B] mt-2 mb-4", children: "Our mission" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium", children: "To become a trusted automation partner for accounting, audit, and property-finance teams in the GCC region and beyond." })
    ] }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          kicker: "Section 3 \xB7 Core Values",
          title: "Why Endloops",
          description: "Four foundational tenets that define every product we engineer.",
          align: "center"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12", children: values.map((val) => {
        const Icon = val.icon;
        return /* @__PURE__ */ jsx(Card, { className: "p-6 bg-[#F8FAFC] flex flex-col justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-md ${val.bg} ${val.color} flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono font-semibold text-slate-400", children: [
            "Value ",
            val.num
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-[#0B132B] mt-1 mb-2", children: val.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: val.copy })
        ] }) }, val.num);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 bg-[#0B132B] text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-4xl font-display font-bold mb-4", children: "Let\u2019s talk about your workflow" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8", children: "Tell us about the process you want to automate. We\u2019ll show you how Endloops could help." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Button, { to: "/contact", variant: "positive", size: "lg", icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }), children: "Request a demo" }),
        /* @__PURE__ */ jsx(Button, { to: "/contact?type=talk", variant: "outline-light", size: "lg", children: "Talk to us" })
      ] })
    ] }) })
  ] });
};
export {
  About
};
