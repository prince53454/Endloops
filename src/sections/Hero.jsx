import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { WorkflowDemo } from "../components/ui/WorkflowDemo";
const HeroScene = lazy(() => import("../components/ui/HeroScene").then((module) => ({ default: module.HeroScene })));
const Hero = () => {
  const introRef = useRef(null);
  const [showHeroScene, setShowHeroScene] = useState(false);
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        gsap.fromTo("[data-hero-reveal]", { autoAlpha: 0, y: 16 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility"
        });
        gsap.fromTo("[data-preview-reveal]", { autoAlpha: 0, y: 12 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility"
        });
      }, introRef);
      return () => context.revert();
    });
    return () => media.revert();
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px) and (prefers-reduced-motion: no-preference)");
    const updateSceneVisibility = () => setShowHeroScene(media.matches);
    updateSceneVisibility();
    media.addEventListener("change", updateSceneVisibility);
    return () => media.removeEventListener("change", updateSceneVisibility);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.025] pointer-events-none",
        style: {
          backgroundImage: `radial-gradient(#0B132B 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref: introRef, className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", {
        className: "max-w-3xl mx-auto text-center mb-10 sm:mb-14",
        children: [
        /* @__PURE__ */ jsxs("div", { "data-hero-reveal": true, className: "inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs text-slate-700 shadow-xs mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#006C4A]", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { children: "Created within Alkazim \xB7 Dubai, UAE" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "|" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-500", children: "Automation for Financial Professionals" })
        ] }),
        /* @__PURE__ */ jsx("h1", { "data-hero-reveal": true, className: "text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0B132B] tracking-tight leading-[1.12] text-balance", children: "Financial automation that keeps professionals in control." }),
        /* @__PURE__ */ jsx("p", { "data-hero-reveal": true, className: "mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed text-pretty max-w-2xl mx-auto font-normal", children: "Endloops automates the repetitive work behind audits, budgets, reconciliations, and financial reviews\u2014so accountants, auditors, and finance teams can focus on judgement, exceptions, and clients." }),
        /* @__PURE__ */ jsxs("div", { "data-hero-reveal": true, className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              to: "/contact",
              variant: "primary",
              size: "lg",
              icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }),
              className: "w-full sm:w-auto",
              children: "Request a demo"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              to: "/solutions",
              variant: "secondary",
              size: "lg",
              className: "w-full sm:w-auto",
              children: "Explore solutions"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { "data-hero-reveal": true, className: "mt-3 text-xs text-slate-500 font-medium", children: "Software prepares the work. Professionals decide." })
      ] }),
      /* @__PURE__ */ jsxs("div", {
        "data-preview-reveal": true,
        className: "mt-8 relative",
        children: [
        showHeroScene && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx("div", { className: "absolute -top-28 right-2 hidden h-28 w-28 xl:block pointer-events-none", "aria-hidden": "true", children: /* @__PURE__ */ jsx(HeroScene, {}) }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-wider text-slate-600 font-semibold", children: "Interactive Operational Preview \xB7 From Documents to Decisions" }) }),
        /* @__PURE__ */ jsx(WorkflowDemo, {})
      ] })
    ] })
  ] });
};
export {
  Hero
};
