import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Calculator, Search, Building2, Layers } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { RevealSection } from "../components/ui/RevealSection";
const Audience = () => {
  const audiences = [
    {
      icon: Calculator,
      color: "text-[#006C4A]",
      bg: "bg-emerald-100",
      title: "Accountants",
      copy: "Automate repetitive preparation work and focus on review, analysis, and clients."
    },
    {
      icon: Search,
      color: "text-[#0D9488]",
      bg: "bg-teal-100",
      title: "Auditors",
      copy: "Structure evidence, identify exceptions, and prepare review-ready working papers."
    },
    {
      icon: Building2,
      color: "text-[#4F46E5]",
      bg: "bg-indigo-100",
      title: "Finance teams",
      copy: "Bring consistency to reconciliations, reporting, and document-heavy processes."
    },
    {
      icon: Layers,
      color: "text-[#0B132B]",
      bg: "bg-slate-200",
      title: "Property-management companies",
      copy: "Prepare budgets and support financial oversight with structured, reviewable outputs."
    }
  ];
  return /* @__PURE__ */ jsx(RevealSection, { className: "py-20 sm:py-24 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        kicker: "Target Audience",
        title: "Built for financial professionals",
        description: "Designed around the distinct workflows, statutory responsibilities, and high accuracy standards of accounting and finance teams.",
        align: "center"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: audiences.map((aud, i) => {
      const Icon = aud.icon;
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-20px" },
          transition: { delay: i * 0.08, duration: 0.4 },
          whileHover: { y: -3 },
          className: "p-6 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between",
          children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: `w-9 h-9 rounded ${aud.bg} ${aud.color} flex items-center justify-center mb-4`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-[#0B132B] mb-2", children: aud.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: aud.copy })
          ] })
        },
        i
      );
    }) })
  ] }) });
};
export {
  Audience
};
