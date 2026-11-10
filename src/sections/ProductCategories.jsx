import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Layers, Cpu } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { RevealSection } from "../components/ui/RevealSection";
const ProductCategories = () => {
  return /* @__PURE__ */ jsx(RevealSection, { className: "py-20 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        kicker: "Product Categories",
        title: "Two ways to work with Endloops",
        description: "Software designed to fit your operational reality\u2014whether you need complete coverage of an entire workflow or focused tools that solve a single bottleneck.",
        align: "center"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.45 },
          whileHover: { y: -3 },
          children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col justify-between border-slate-300 relative overflow-hidden group h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006C4A] to-[#0D9488]" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Layers, { className: "w-5 h-5 text-[#006C4A]" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-[#006C4A] font-bold", children: "Category 01" })
                ] }),
                /* @__PURE__ */ jsx(Badge, { variant: "in-use", children: "5 Solutions" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-[#0B132B] mb-3", children: "End-to-end solutions" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-slate-600 leading-relaxed mb-6", children: "Complete software that runs an entire financial process or service from start to finish." }),
              /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-200 pt-5 space-y-3 mb-6", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase text-slate-500 font-semibold", children: "Solutions include:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm text-slate-700", children: [
                  "Budget review",
                  "Escrow audit",
                  "Financial audit",
                  "Interim audit",
                  "Budget preparation for property-management companies"
                ].map((example, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#006C4A] shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-[#0B132B]", children: example })
                ] }, i)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-100 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 font-medium", children: "Runs entire workflows" }),
              /* @__PURE__ */ jsx(Button, { to: "/solutions", variant: "secondary", size: "sm", icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" }), children: "Explore solutions" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { delay: 0.1, duration: 0.45 },
          whileHover: { y: -3 },
          children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col justify-between border-slate-300 relative overflow-hidden group h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D9488] to-[#4F46E5]" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Cpu, { className: "w-5 h-5 text-[#0D9488]" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-[#0D9488] font-bold", children: "Category 02" })
                ] }),
                /* @__PURE__ */ jsx(Badge, { variant: "system", children: "6 Standalone Tools" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-bold text-[#0B132B] mb-3", children: "Standalone tools" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-slate-600 leading-relaxed mb-6", children: "Focused tools that solve one specific need and can be used independently." }),
              /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-200 pt-5 space-y-3 mb-6", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase text-slate-500 font-semibold", children: "Tools include:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm text-slate-700", children: [
                  "Purchase-order extraction",
                  "Vouching automation",
                  "Expense working automation",
                  "Financial report review",
                  "Tender verification",
                  "Reconciliation"
                ].map((example, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-[#0B132B]", children: example })
                ] }, i)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-100 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 font-medium", children: "Plugs into existing stacks" }),
              /* @__PURE__ */ jsx(Button, { to: "/tools", variant: "secondary", size: "sm", icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" }), children: "Explore tools" })
            ] })
          ] })
        }
      )
    ] })
  ] }) });
};
export {
  ProductCategories
};
