import { jsx, jsxs } from "react/jsx-runtime";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const Solutions = lazy(() => import("./pages/Solutions").then((module) => ({ default: module.Solutions })));
const Tools = lazy(() => import("./pages/Tools").then((module) => ({ default: module.Tools })));
const HowItWorks = lazy(() => import("./pages/HowItWorks").then((module) => ({ default: module.HowItWorks })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
function SmoothScrolling() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, lerp: 0.12, smoothWheel: true, anchors: true });
    return () => lenis.destroy();
  }, []);
  return null;
}
function App() {
  return /* @__PURE__ */ jsxs(Router, { children: [
    /* @__PURE__ */ jsx(SmoothScrolling, {}),
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-[#F8FAFC] text-[#0B132B]", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "min-h-[40vh] flex items-center justify-center text-sm text-slate-500", role: "status", children: "Loading page..." }), children: /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/solutions", element: /* @__PURE__ */ jsx(Solutions, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/tools", element: /* @__PURE__ */ jsx(Tools, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/how-it-works", element: /* @__PURE__ */ jsx(HowItWorks, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(About, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Home, {}) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  App as default
};
