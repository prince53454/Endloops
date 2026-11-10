import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  ArrowRight,
  UserCheck,
  SlidersHorizontal,
  Table as TableIcon
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { RevealSection } from "../components/ui/RevealSection";
import { TOOLS } from "../data/tools";
const Tools = () => {
  const [searchParams] = useSearchParams();
  const initialToolId = searchParams.get("tool");
  const [selectedCategory, setSelectedCategory] = useState("All tools");
  const [selectedToolId, setSelectedToolId] = useState(initialToolId || "po-extraction");
  const [viewMode, setViewMode] = useState("cards");
  useEffect(() => {
    const requestedTool = TOOLS.find((tool) => tool.id === initialToolId);
    setSelectedToolId(requestedTool?.id || "po-extraction");
    setSelectedCategory("All tools");
    setViewMode("cards");
  }, [initialToolId]);
  const categories = [
    "All tools",
    "Document processing",
    "Review and assurance",
    "Reconciliation",
    "Property and procurement"
  ];
  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      if (selectedCategory === "All tools") return true;
      return tool.category === selectedCategory;
    });
  }, [selectedCategory]);
  const activeTool = TOOLS.find((t) => t.id === selectedToolId) || TOOLS[0];
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
            /* @__PURE__ */ jsx(Cpu, { className: "w-3.5 h-3.5 text-[#0D9488]" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#0D9488]", children: "Product Category 02" }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "|" }),
            /* @__PURE__ */ jsx("span", { children: "Standalone Tools" })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-display font-extrabold text-[#0B132B] tracking-tight leading-tight", children: "Focused tools for specific financial workflows" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base sm:text-lg text-slate-600 leading-relaxed", children: "Endloops\u2019 standalone tools solve individual needs and can be used independently, while fitting into broader financial workflows." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-white border-b border-[#E2E8F0] sticky top-16 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none", children: categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setSelectedCategory(cat),
            className: `relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap cursor-pointer z-10 ${isSelected ? "text-white font-semibold" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`,
            children: [
              isSelected && /* @__PURE__ */ jsx(
                motion.span,
                {
                  layoutId: "activeCategoryPill",
                  className: "absolute inset-0 bg-[#0B132B] rounded shadow-xs -z-10",
                  transition: { type: "spring", bounce: 0.15, duration: 0.35 }
                }
              ),
              /* @__PURE__ */ jsx("span", { children: cat })
            ]
          },
          cat
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 border border-slate-200 p-0.5 rounded bg-white shrink-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("cards"),
            className: `p-1.5 rounded transition-colors cursor-pointer ${viewMode === "cards" ? "bg-[#0B132B] text-white" : "text-slate-500 hover:text-slate-900"}`,
            "aria-label": "Cards view",
            title: "Cards View",
            children: /* @__PURE__ */ jsx(SlidersHorizontal, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setViewMode("matrix"),
            className: `p-1.5 rounded transition-colors cursor-pointer ${viewMode === "matrix" ? "bg-[#0B132B] text-white" : "text-slate-500 hover:text-slate-900"}`,
            "aria-label": "Comparison table view",
            title: "Comparison Table",
            children: /* @__PURE__ */ jsx(TableIcon, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-12 sm:py-16 bg-[#F8FAFC]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: viewMode === "cards" ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Card, { className: "border-slate-300 p-6 sm:p-8 mb-12 shadow-sm bg-white overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          transition: { duration: 0.22 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-bold text-[#0B132B]", children: activeTool.name }),
                  /* @__PURE__ */ jsx(Badge, { variant: activeTool.status === "In use" ? "in-use" : "expanding", children: activeTool.status })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-600 mt-1 max-w-2xl", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Purpose:" }),
                  " ",
                  activeTool.purpose
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  to: `/contact?tool=${activeTool.id}`,
                  variant: "primary",
                  size: "sm",
                  icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" }),
                  children: "Talk to us about your workflow"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase text-slate-500 font-semibold", children: "Problem:" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200/70", children: activeTool.problem })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase text-slate-500 font-semibold", children: "Inputs:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1.5", children: activeTool.inputs.map((inp, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-700 flex items-start gap-1.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#0D9488] font-bold", children: "\u203A" }),
                  /* @__PURE__ */ jsx("span", { children: inp })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono uppercase text-[#006C4A] font-semibold", children: "Automated output:" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-700 leading-relaxed", children: activeTool.automatedOutput[0] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 bg-emerald-50/40 p-4 rounded-md border border-emerald-100", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-xs font-mono uppercase text-[#0B132B] font-semibold flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(UserCheck, { className: "w-3.5 h-3.5 text-[#006C4A]" }),
                  "Professional\u2019s role:"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-800 leading-relaxed font-medium", children: activeTool.professionalReviews[0] })
              ] })
            ] })
          ]
        },
        activeTool.id
      ) }) }),
      /* @__PURE__ */ jsx(motion.div, { layout: true, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsx(AnimatePresence, { children: filteredTools.map((tool) => /* @__PURE__ */ jsx(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.96 },
          transition: { duration: 0.25 },
          whileHover: { y: -3 },
          children: /* @__PURE__ */ jsxs(
            Card,
            {
              hoverable: true,
              onClick: () => {
                setSelectedToolId(tool.id);
                window.scrollTo({ top: 380, behavior: "smooth" });
              },
              className: `cursor-pointer transition-all h-full flex flex-col justify-between ${selectedToolId === tool.id ? "border-[#0D9488] ring-1 ring-[#0D9488] shadow-sm" : ""}`,
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono uppercase text-slate-500 font-semibold", children: tool.category }),
                    /* @__PURE__ */ jsx(Badge, { variant: tool.status === "In use" ? "in-use" : "expanding", children: tool.status })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0B132B] mb-2", children: tool.name }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Purpose:" }),
                    " ",
                    tool.purpose
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 border-t border-slate-100 pt-3 text-xs", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-slate-500 text-[11px]", children: "Inputs:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-700 truncate mt-0.5", children: tool.inputs.join(", ") })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[#006C4A] text-[11px]", children: "Automated output:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-700 truncate mt-0.5", children: tool.automatedOutput[0] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[#0B132B] text-[11px]", children: "Professional's role:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-700 truncate mt-0.5", children: tool.professionalReviews[0] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#0D9488] font-semibold flex items-center gap-1", children: "Inspect details \u2192" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-medium", children: "Select to view" })
                ] })
              ]
            }
          )
        },
        tool.id
      )) }) })
    ] }) : (
      /* Exact User-Specified Comparison Table */
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#E2E8F0] rounded-lg shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 bg-slate-50 border-b border-[#E2E8F0] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-[#0B132B]", children: "Standalone Tools Comparison Table" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mt-0.5", children: "Compare purpose, inputs, outputs, and professional review responsibilities across all six standalone tools." })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: "system", children: "6 Standalone Tools" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse text-xs", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100/75 border-b border-[#E2E8F0] text-slate-700 font-mono text-[11px] uppercase", children: [
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-4 font-semibold", children: "Tool" }),
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-4 font-semibold", children: "Purpose" }),
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-4 font-semibold", children: "Input" }),
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-4 font-semibold", children: "Automated output" }),
            /* @__PURE__ */ jsx("th", { className: "py-3.5 px-4 font-semibold", children: "Professional\u2019s role" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-[#E2E8F0]", children: TOOLS.map((t) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/80 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3.5 px-4 font-bold text-[#0B132B] whitespace-nowrap", children: t.name }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed", children: t.tablePurpose }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed", children: t.tableInput }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 px-4 text-slate-800 font-medium max-w-xs leading-relaxed", children: t.tableOutput }),
            /* @__PURE__ */ jsx("td", { className: "py-3.5 px-4 text-slate-700 max-w-xs leading-relaxed", children: t.tableRole })
          ] }, t.id)) })
        ] }) })
      ] })
    ) }) }),
    /* @__PURE__ */ jsx(RevealSection, { className: "py-16 bg-[#0B132B] text-white", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-display font-bold mb-4", children: "Talk to us about your workflow" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8", children: "Tell us about the repetitive task you want to solve. We\u2019ll demonstrate how Endloops standalone tools fit into your workflow." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                to: "/contact?type=talk",
                variant: "positive",
                size: "lg",
                icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }),
                children: "Talk to us about your workflow"
              }
            ),
            /* @__PURE__ */ jsx(Button, { to: "/solutions", variant: "outline-light", size: "lg", children: "Explore solutions" })
          ] })
        ]
      }
    ) })
  ] });
};
export {
  Tools
};
