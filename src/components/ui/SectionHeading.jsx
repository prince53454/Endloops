import { jsx, jsxs } from "react/jsx-runtime";
const SectionHeading = ({
  kicker,
  title,
  description,
  align = "center",
  className = ""
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxs("div", { className: `max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`, children: [
    kicker && /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#006C4A] mb-3", children: kicker }),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0B132B] tracking-tight leading-tight text-balance", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty", children: description })
  ] });
};
export {
  SectionHeading
};
