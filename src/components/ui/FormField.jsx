import { jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle } from "lucide-react";
const FormField = ({
  id,
  label,
  error,
  required = false,
  hint,
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `space-y-1.5 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "block text-xs font-semibold text-slate-800", children: [
        label,
        " ",
        required && /* @__PURE__ */ jsx("span", { className: "text-rose-600", children: "*" })
      ] }),
      hint && /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-500 font-mono", children: hint })
    ] }),
    /* @__PURE__ */ jsx("div", { children }),
    error && /* @__PURE__ */ jsxs("p", { id: `${id}-error`, className: "text-xs text-rose-600 flex items-center gap-1 font-medium mt-1", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "w-3.5 h-3.5 shrink-0" }),
      /* @__PURE__ */ jsx("span", { children: error })
    ] })
  ] });
};
export {
  FormField
};
