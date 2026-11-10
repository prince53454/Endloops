import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  ArrowRight,
  AlertCircle,
  UserCheck,
  CheckCircle2
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { RevealSection } from "../components/ui/RevealSection";
import { SOLUTIONS } from "../data/solutions";
const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState("budget-review");
  const active = SOLUTIONS.find((s) => s.id === selectedSolution) || SOLUTIONS[0];
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
            /* @__PURE__ */ jsx(Layers, { className: "w-3.5 h-3.5 text-[#006C4A]" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#006C4A]", children: "Product Category 01" }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "|" }),
            /* @__PURE__ */ jsx("span", { children: "End-to-End Solutions" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight", children: "End-to-end solutions for complete financial workflows" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base sm:text-lg text-slate-600 leading-relaxed", children: "Endloops builds software that supports an entire process or financial service from start to finish\u2014preparing the work for professional review and decision-making." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-12 bg-white border-b border-[#E2E8F0]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-display font-bold text-[#0B132B]", children: "The Endloops Workflow Shift" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 mt-1", children: "Manual process \u2192 Endloops-prepared work \u2192 Professional review and sign-off" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 relative", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4 },
            className: "p-6 rounded-lg border border-slate-200 bg-slate-50/70",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-bold text-slate-500 uppercase", children: "Stage 01" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-mono", children: "Manual process" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-800 mb-2", children: "Manual Process" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed", children: "Repetitive data extraction, manual checking across spreadsheets, and tedious document cross-referencing that delays strategic analysis." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1, duration: 0.4 },
            className: "p-6 rounded-lg border border-[#006C4A]/30 bg-emerald-50/40 relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-bold text-[#006C4A] uppercase", children: "Stage 02" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-[#006C4A] bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded font-mono font-medium", children: "Endloops-prepared work" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-[#0B132B] mb-2", children: "Endloops-Prepared Work" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-700 leading-relaxed", children: "Software automatically reads documents, matches records, checks against rules, flags exceptions, and compiles audit-ready working papers." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2, duration: 0.4 },
            className: "p-6 rounded-lg border border-[#0B132B]/30 bg-white shadow-xs",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs font-mono font-bold text-[#0B132B] uppercase", children: "Stage 03" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-[#0B132B] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded font-mono font-semibold", children: "Professional review & sign-off" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-[#0B132B] mb-2", children: "Professional Review & Sign-Off" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-700 leading-relaxed", children: "Qualified professionals inspect exceptions, evaluate findings, apply accounting judgement, and certify the final sign-off." })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 sm:py-20 bg-[#F8FAFC]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          kicker: "Solutions Suite",
          title: "Complete software for five critical financial services.",
          description: "Explore what Endloops automates and what the professional reviews for each workflow.",
          align: "center"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-2 mb-10", children: SOLUTIONS.map((s) => {
        const isSelected = selectedSolution === s.id;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setSelectedSolution(s.id),
            className: `relative px-4 py-2 text-xs sm:text-sm font-medium rounded transition-all cursor-pointer whitespace-nowrap z-10 ${isSelected ? "text-white font-semibold" : "bg-white border border-[#E2E8F0] text-slate-600 hover:text-[#0B132B] hover:bg-slate-50"}`,
            children: [
              isSelected && /* @__PURE__ */ jsx(
                motion.span,
                {
                  layoutId: "activeSolutionTab",
                  className: "absolute inset-0 bg-[#0B132B] rounded shadow-xs -z-10",
                  transition: { type: "spring", bounce: 0.15, duration: 0.35 }
                }
              ),
              /* @__PURE__ */ jsx("span", { children: s.title })
            ]
          },
          s.id
        );
      }) }),
      /* @__PURE__ */ jsx(Card, { className: "border-slate-300 p-6 sm:p-10 mb-16 shadow-md bg-white overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          transition: { duration: 0.22 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-display font-bold text-[#0B132B]", children: active.title }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm font-mono text-slate-500 mt-1", children: [
                  "Category: ",
                  active.category
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  to: `/contact?interest=${active.id}`,
                  variant: "primary",
                  size: "md",
                  icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }),
                  children: "Request a demo"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-xs font-mono uppercase tracking-wider text-rose-700 font-bold mb-2 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-rose-600" }),
                    "Problem"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-slate-700 leading-relaxed bg-rose-50/40 p-4 rounded-md border border-rose-100", children: active.problem })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-xs font-mono uppercase tracking-wider text-[#006C4A] font-bold mb-3 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#006C4A]" }),
                    "What Endloops automates"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: active.automates.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-slate-700", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-5 h-5 rounded-full bg-emerald-100 text-[#006C4A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5", children: "\u2713" }),
                    /* @__PURE__ */ jsx("span", { children: item })
                  ] }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-xs font-mono uppercase tracking-wider text-[#0B132B] font-bold mb-3 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-[#0B132B]" }),
                    "Professional's role"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "p-4 bg-slate-50 rounded-md border border-slate-200 text-sm text-slate-700", children: active.professionalReviews[0] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xs font-mono uppercase tracking-wider text-[#006C4A] font-bold mb-1.5", children: "Outcome" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-800 font-medium leading-relaxed", children: active.outcome })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    to: `/contact?interest=${active.id}`,
                    variant: "secondary",
                    size: "sm",
                    className: "w-full justify-center",
                    children: [
                      "Request a demo for ",
                      active.title
                    ]
                  }
                ) })
              ] })
            ] })
          ]
        },
        active.id
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-[#0B132B] mb-6", children: "All 5 End-to-End Solutions" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: SOLUTIONS.map((s, idx) => /* @__PURE__ */ jsxs(Card, { id: s.id, className: "p-6 bg-white flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono uppercase text-slate-500 font-semibold", children: [
              "0",
              idx + 1,
              " \xB7 ",
              s.category
            ] }),
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-[#0B132B] mt-1.5 mb-2", children: s.title }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mb-4 leading-relaxed", children: [
              /* @__PURE__ */ jsx("strong", { children: "Problem:" }),
              " ",
              s.problem
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-3 space-y-1.5 text-xs text-slate-700 mb-4", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#006C4A]", children: "What Endloops automates:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: s.automates.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#006C4A] font-bold", children: "\u203A" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: item })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-2.5 rounded border border-slate-100 text-xs text-slate-700 mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#0B132B]", children: "Outcome:" }),
              " ",
              s.outcome
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-slate-100 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setSelectedSolution(s.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                },
                className: "text-xs font-medium text-[#006C4A] hover:underline",
                children: "View full details \u2192"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: `/contact?interest=${s.id}`,
                className: "text-xs font-semibold text-[#0B132B] hover:text-[#006C4A]",
                children: "Request a demo"
              }
            )
          ] })
        ] }, s.id)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 bg-[#0B132B] text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-display font-bold mb-4", children: "See how Endloops end-to-end solutions support your practice" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8", children: "Schedule a demonstration to see how Endloops prepares the work for your professional review and decision-making." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Button, { to: "/contact", variant: "positive", size: "lg", icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }), children: "Request a demo" }),
        /* @__PURE__ */ jsx(Button, { to: "/tools", variant: "outline-light", size: "lg", children: "Explore standalone tools" })
      ] })
    ] }) })
  ] });
};
export {
  Solutions
};
