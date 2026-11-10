import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { RevealSection } from "../components/ui/RevealSection";
const CTA = () => {
  return /* @__PURE__ */ jsxs(RevealSection, { className: "py-20 sm:py-24 bg-[#0B132B] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.04] pointer-events-none",
        style: {
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-mono uppercase tracking-wider text-[#10B981] font-semibold mb-3", children: "Automation Designed for Precision" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-balance", children: "See how Endloops could fit your workflow" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto", children: "Tell us about the process you want to automate. We\u2019ll show you how Endloops could help." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                to: "/contact",
                variant: "positive",
                size: "lg",
                icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }),
                className: "w-full sm:w-auto",
                children: "Request a demo"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                to: "/contact?type=talk",
                variant: "outline-light",
                size: "lg",
                className: "w-full sm:w-auto",
                children: "Talk to us"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#10B981]" }),
              " End-to-end solutions & standalone tools"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#10B981]" }),
              " Built from financial experience in Dubai"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 text-[#10B981]" }),
              " Full professional sign-off authority"
            ] })
          ] })
        ]
      }
    )
  ] });
};
export {
  CTA
};
