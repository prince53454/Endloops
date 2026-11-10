import { jsx } from "react/jsx-runtime";
const Badge = ({
  children,
  variant = "neutral",
  size = "sm",
  className = ""
}) => {
  const baseStyles = "inline-flex items-center font-mono font-medium tracking-wide uppercase transition-colors whitespace-nowrap rounded-[4px]";
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 leading-tight",
    md: "text-xs px-2.5 py-1 leading-normal"
  };
  const variantStyles = {
    // Reconciled / Healthy
    healthy: "bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]",
    // In-Pipeline / Syncing
    syncing: "bg-[#F0FDFA] text-[#115E59] border border-[#99F6E4]",
    // Automated / System
    system: "bg-[#EEF2FF] text-[#3730A3] border border-[#C7D2FE]",
    // Exception / Action Required
    exception: "bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]",
    // Neutral
    neutral: "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]",
    // Product status mapping
    "in-use": "bg-[#ECFDF5] text-[#006C4A] border border-[#85F8C4]/60 font-semibold",
    "in-development": "bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A] font-semibold",
    "expanding": "bg-[#F5F3FF] text-[#5B21B6] border border-[#DDD6FE] font-semibold"
  };
  return /* @__PURE__ */ jsx("span", { className: `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`, children });
};
export {
  Badge
};
