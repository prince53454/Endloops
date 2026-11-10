import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { MAIN_NAV } from "../../data/navigation";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `sticky top-0 z-50 transition-all duration-200 border-b ${scrolled ? "bg-white/95 backdrop-blur-md border-[#E2E8F0] shadow-[0_1px_4px_rgba(11,19,43,0.03)]" : "bg-white/90 backdrop-blur-sm border-transparent"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 sm:h-18 gap-8", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B] rounded",
              "aria-label": "Endloops Home",
              children: /* @__PURE__ */ jsx(Logo, { size: "md" })
            }
          ),
          /* @__PURE__ */ jsx(
            "nav",
            {
              className: "hidden md:flex items-center gap-7 text-sm font-medium",
              "aria-label": "Main Navigation",
              children: MAIN_NAV.map((link) => {
                const isActive = location.pathname === link.path;
                return /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: link.path,
                    className: `transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B] rounded ${isActive ? "text-[#0B132B] font-semibold" : "text-slate-600 hover:text-[#0B132B]"}`,
                    children: [
                      link.label,
                      isActive && /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          layoutId: "navActiveIndicator",
                          className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#006C4A]",
                          transition: { type: "spring", bounce: 0.2, duration: 0.35 },
                          "aria-hidden": "true"
                        }
                      )
                    ]
                  },
                  link.path
                );
              })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-3 shrink-0", children: /* @__PURE__ */ jsx(
            Button,
            {
              to: "/contact",
              variant: "primary",
              size: "sm",
              icon: /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" }),
              children: "Request a demo"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex md:hidden items-center", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "p-2 text-slate-700 hover:text-[#0B132B] hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B132B]",
              "aria-expanded": mobileMenuOpen,
              "aria-label": mobileMenuOpen ? "Close navigation menu" : "Open navigation menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2, ease: "easeInOut" },
            className: "md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-6 shadow-lg overflow-hidden",
            children: [
              /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-1.5 py-2", "aria-label": "Mobile Navigation", children: MAIN_NAV.map((link) => {
                const isActive = location.pathname === link.path;
                return /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: link.path,
                    className: `px-3 py-2 text-base font-medium rounded transition-colors ${isActive ? "bg-slate-100 text-[#0B132B] font-semibold" : "text-slate-700 hover:bg-slate-50 hover:text-[#0B132B]"}`,
                    children: link.label
                  },
                  link.path
                );
              }) }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5", children: /* @__PURE__ */ jsx(
                Button,
                {
                  to: "/contact",
                  variant: "primary",
                  size: "md",
                  className: "w-full justify-center",
                  children: "Request a demo"
                }
              ) })
            ]
          }
        ) })
      ]
    }
  );
};
export {
  Navbar
};
