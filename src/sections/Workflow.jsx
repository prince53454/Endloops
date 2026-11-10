import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { RevealSection } from "../components/ui/RevealSection";
const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "Upload or connect documents",
      description: "Start with the documents and data involved in the workflow\u2014such as invoices, purchase orders, contracts, statements, or supporting records.",
      tag: "Intake"
    },
    {
      number: "02",
      title: "Extract and structure information",
      description: "Endloops reads the documents and extracts relevant figures and details into a structured format.",
      tag: "OCR & Parsing"
    },
    {
      number: "03",
      title: "Compare, match, and apply rules",
      description: "The software compares records, matches documents, and applies agreed rules to identify inconsistencies.",
      tag: "Rules & Matching"
    },
    {
      number: "04",
      title: "Flag exceptions and prepare outputs",
      description: "Endloops flags missing items, mismatches, duplicates, and exceptions outside agreed limits. It prepares schedules, working papers, and reports for review.",
      tag: "Schedules"
    },
    {
      number: "05",
      title: "Professional review and sign-off",
      description: "The professional reviews the prepared work, investigates exceptions, makes decisions, and provides final sign-off.",
      tag: "Human Sign-Off"
    }
  ];
  return /* @__PURE__ */ jsx(RevealSection, { className: "py-20 sm:py-24 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        kicker: "How It Works",
        title: "From documents to decisions",
        description: "A structured five-step progression where software prepares the work and the professional retains full review and sign-off authority.",
        align: "center"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 relative", children: steps.map((step, idx) => {
      const isHumanStep = idx === 4;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-30px" },
          transition: { delay: idx * 0.08, duration: 0.4 },
          whileHover: { y: -2 },
          className: `p-5 rounded-lg border flex flex-col justify-between transition-all ${isHumanStep ? "bg-emerald-50/50 border-emerald-200 shadow-xs ring-1 ring-emerald-300" : "bg-[#F8FAFC] border-[#E2E8F0]"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl font-mono font-bold text-[#0B132B]", children: step.number }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-[10px] font-mono uppercase px-1.5 py-0.5 rounded font-semibold ${isHumanStep ? "bg-[#006C4A] text-white" : "bg-slate-200 text-slate-700"}`,
                    children: step.tag
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "text-base font-bold text-[#0B132B] mb-2", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed", children: step.description })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-3 mt-4 border-t border-slate-200/80 text-[11px] text-slate-500 font-mono", children: isHumanStep ? "Human Authority" : "Automated Task" })
          ]
        },
        step.number
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsx(Button, { to: "/how-it-works", variant: "secondary", size: "md", icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }), children: "Explore the full operating model" }) })
  ] }) });
};
export {
  Workflow
};
