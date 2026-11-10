import { jsx, jsxs } from "react/jsx-runtime";
import { ShieldCheck, FileCheck2, UserCheck } from "lucide-react";
import { Hero } from "../sections/Hero";
import { ProductCategories } from "../sections/ProductCategories";
import { Workflow } from "../sections/Workflow";
import { Capabilities } from "../sections/Capabilities";
import { Audience } from "../sections/Audience";
import { CTA } from "../sections/CTA";
import { RevealSection } from "../components/ui/RevealSection";
import { Reveal } from "../components/ui/Reveal";
const Home = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-12", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-[#006C4A] font-semibold", children: "Core Principle" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-4xl font-display font-bold text-[#0B132B] mt-2 mb-4 text-balance", children: "Software prepares the work. Professionals decide." }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-slate-600 leading-relaxed text-pretty", children: "Endloops takes on the repetitive work behind financial processes\u2014extracting information, matching records, applying checks, and preparing outputs for review. The final judgement and sign-off remain with the professional." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-200", children: [
        /* @__PURE__ */ jsxs(Reveal, { delay: 0, className: "space-y-2 md:pr-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-md bg-emerald-50 text-[#006C4A] flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(FileCheck2, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0B132B]", children: "Reduce repetitive work" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: "Automate mechanical data capture, spreadsheet cross-referencing, and repetitive voucher comparisons, returning time to advisory and analysis." })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { delay: 100, className: "space-y-2 pt-6 md:pt-0 md:px-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-md bg-teal-50 text-[#0D9488] flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0B132B]", children: "Surface exceptions and mismatches" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: "Instantly isolate discrepancies, unapproved price variances, missing attachments, and broken note references into clear review queues." })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { delay: 200, className: "space-y-2 pt-6 md:pt-0 md:pl-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-md bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-3", children: /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0B132B]", children: "Keep professionals in control" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: "Automation prepares the draft schedules; qualified accountants, auditors, and controllers retain complete authority over every sign-off." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(ProductCategories, {}),
    /* @__PURE__ */ jsx(Workflow, {}),
    /* @__PURE__ */ jsx(Capabilities, {}),
    /* @__PURE__ */ jsx(Audience, {}),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
};
export {
  Home
};
