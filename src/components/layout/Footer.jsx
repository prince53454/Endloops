import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Logo } from "../ui/Logo";
import { MAIN_NAV, FOOTER_SOLUTIONS, FOOTER_TOOLS } from "../../data/navigation";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#0B132B] text-slate-300 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsx(Logo, { variant: "light", size: "lg" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed max-w-sm pt-2", children: "Endloops automates repetitive financial work so accountants, auditors, finance teams, and property-management companies can focus on judgement, exceptions, and clients." }),
        /* @__PURE__ */ jsxs("div", { className: "pt-2 text-xs text-slate-400 leading-normal", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-slate-300", children: "Origin:" }),
          " Created from the technology department of Alkazim, an accounting and audit firm based in Dubai."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-2 flex items-center gap-3 text-xs text-slate-400", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-[#006C4A]", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { children: "Software prepares the work. Professionals decide." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4", children: "Solutions" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm", children: FOOTER_SOLUTIONS.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.path, className: "hover:text-white transition-colors", children: item.label }) }, item.path)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4", children: "Standalone Tools" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm", children: FOOTER_TOOLS.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.path, className: "hover:text-white transition-colors", children: item.label }) }, item.path)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4", children: "Navigation" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 text-sm", children: MAIN_NAV.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.path, className: "hover:text-white transition-colors", children: item.label }) }, item.path)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-300 font-medium", children: "Dubai, United Arab Emirates" }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "mailto:contact@endloops.com", className: "hover:text-white underline", children: "contact@endloops.com" }) }),
          /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-xs",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#0D9488]" }),
                /* @__PURE__ */ jsx("span", { children: "LinkedIn profile coming soon" })
              ]
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Endloops. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("span", { children: "Software prepares the work. Professionals decide." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: scrollToTop,
            className: "inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded cursor-pointer",
            "aria-label": "Back to top",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Back to top" }),
              /* @__PURE__ */ jsx(ArrowUp, { className: "w-3.5 h-3.5" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
};
export {
  Footer
};
