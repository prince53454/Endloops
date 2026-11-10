import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  FileSpreadsheet,
  RotateCcw,
  UserCheck
} from "lucide-react";
import { Badge } from "./Badge";
const SAMPLES = [
  {
    id: "inv-8492",
    name: "Tax Invoice #INV-8492",
    type: "Supplier Invoice",
    amount: "AED 48,250.00",
    vendor: "Al-Bayan Facilities Management LLC",
    extractedFields: [
      { label: "Invoice No.", value: "INV-8492", confidence: "99.8%" },
      { label: "TRN / VAT ID", value: "100294820100003", confidence: "100%" },
      { label: "Subtotal", value: "AED 45,952.38", confidence: "99.4%" },
      { label: "VAT (5%)", value: "AED 2,297.62", confidence: "99.9%" },
      { label: "Matched PO Ref", value: "PO-2024-0891", confidence: "98.5%" }
    ],
    matchStatus: "exception",
    matchDetails: "PO #0891 ceiling was AED 45,000.00 (+VAT). Invoice subtotal exceeds approved PO by AED 952.38.",
    ruleCheck: "Rule #R-104: Discretionary variance limit is \xB11.0% (max AED 450.00). Variance is +2.11%.",
    exceptionNotice: "Variance exceeds auto-clearance threshold. Requires controller approval.",
    preparedSchedule: "Monthly Prepayments & Maintenance Working Schedule (Col D, Row 42)",
    reviewRequired: true,
    recommendedAction: "Verify supplementary work order #SWO-12 with facilities manager before approving payment."
  },
  {
    id: "po-4109",
    name: "Purchase Order #PO-4109",
    type: "Procurement Order",
    amount: "AED 126,400.00",
    vendor: "Emirates Telecom Infrastructure",
    extractedFields: [
      { label: "Order No.", value: "PO-4109", confidence: "100%" },
      { label: "Cost Center", value: "CC-401 (IT Capex)", confidence: "99.2%" },
      { label: "Payment Terms", value: "Net 30 from GRN", confidence: "98.9%" },
      { label: "Line Items", value: "4 Server Blades + Rack Mounts", confidence: "99.7%" },
      { label: "Tax Status", value: "Standard Rated (5%)", confidence: "100%" }
    ],
    matchStatus: "matched",
    matchDetails: "3-Way Match Verified: Quotation #QT-991, PO #PO-4109, and Delivery Note #DN-7714 line items identical.",
    ruleCheck: "Rule #R-012: Authorization limits verified against Board Delegated Authority matrix.",
    preparedSchedule: "Fixed Asset Register Additions Schedule (Depreciation: 3-Year Straight Line)",
    reviewRequired: false,
    recommendedAction: "Ready for batch posting to ERP Fixed Asset sub-ledger."
  },
  {
    id: "escrow-dep",
    name: "Escrow Deposit #ESC-301",
    type: "Bank Clearing Advice",
    amount: "AED 350,000.00",
    vendor: "Trust Account / Tower B Unit 1402",
    extractedFields: [
      { label: "Escrow Trust A/C", value: "0092-841920-001", confidence: "100%" },
      { label: "Unit Reference", value: "TW-B-1402", confidence: "99.5%" },
      { label: "Buyer Name", value: "Tariq Mansoor Al-Nuaimi", confidence: "99.1%" },
      { label: "Milestone Stage", value: "40% Structural Completion", confidence: "98.8%" },
      { label: "Retention Hold", value: "5% Statutory Reserve", confidence: "100%" }
    ],
    matchStatus: "matched",
    matchDetails: "Verified against Land Department Escrow Registry and Sales & Purchase Agreement #SPA-4491.",
    ruleCheck: "Statutory Rule #ST-22: Deposit matches scheduled milestone installment per RERA register.",
    preparedSchedule: "Escrow Audit Working Paper Schedule 4A (Unit Deposit Ledger)",
    reviewRequired: false,
    recommendedAction: "Ready for inclusion in quarterly Escrow Compliance Certificate."
  }
];
const WorkflowDemo = () => {
  const [activeSampleId, setActiveSampleId] = useState("inv-8492");
  const [decisions, setDecisions] = useState({
    "inv-8492": "pending",
    "po-4109": "approved",
    "escrow-dep": "approved"
  });
  const [annotatedNotes, setAnnotatedNotes] = useState({
    "inv-8492": ""
  });
  const sample = SAMPLES.find((s) => s.id === activeSampleId) || SAMPLES[0];
  const currentDecision = decisions[sample.id] || "pending";
  const handleDecision = (decision) => {
    setDecisions((prev) => ({ ...prev, [sample.id]: decision }));
  };
  const handleReset = () => {
    setDecisions({
      "inv-8492": "pending",
      "po-4109": "approved",
      "escrow-dep": "approved"
    });
    setAnnotatedNotes({ "inv-8492": "" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-white border border-[#E2E8F0] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0B132B] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-slate-600" }),
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-slate-600" }),
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-slate-600" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-slate-300 font-medium tracking-wide", children: "ENDLOOPS WORKFLOW ENGINE · INTERACTIVE SAMPLE PREVIEW" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 bg-slate-900/90 p-1 rounded border border-slate-800 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono text-slate-400 px-2 uppercase", children: "Select Document:" }),
        SAMPLES.map((s) => {
          const isSelected = activeSampleId === s.id;
          return /* @__PURE__ */ jsxs(
            motion.button,
            {
              type: "button",
              onClick: () => setActiveSampleId(s.id),
              "aria-pressed": isSelected,
              whileHover: { y: -1 },
              whileTap: { scale: 0.98 },
              transition: { type: "spring", stiffness: 500, damping: 30 },
              className: `relative px-2.5 py-1 rounded-[3px] font-medium transition-colors text-xs whitespace-nowrap cursor-pointer z-10 ${isSelected ? "text-white" : "text-slate-300 hover:text-white hover:bg-slate-800"}`,
              children: [
                isSelected && /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    layoutId: "activeDocHighlight",
                    className: "absolute inset-0 bg-[#006C4A] rounded-[3px] -z-10 shadow-xs",
                    transition: { type: "spring", bounce: 0.15, duration: 0.35 }
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: s.name.split("#")[1] || s.name })
              ]
            },
            s.id
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.22, ease: "easeOut" },
        className: "grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0] bg-[#F8FAFC]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 p-4 sm:p-5 flex flex-col justify-between bg-white relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { top: "-10%", opacity: 0.8 },
                animate: { top: "110%", opacity: 0 },
                transition: { duration: 0.8, ease: "easeInOut" },
                className: "absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#006C4A]/40 to-transparent pointer-events-none z-20"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono uppercase text-[#006C4A] font-semibold tracking-wider", children: "01 \xB7 Intake & Extract" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-[3px]", children: sample.type })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.98 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.2 },
                  className: "bg-[#F8FAFC] border border-[#E2E8F0] rounded-md p-3 mb-4",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-slate-500 shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-[#0B132B] truncate", children: sample.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-600 truncate", children: sample.vendor }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-[#0B132B] font-mono mt-1 tnum", children: sample.amount })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-mono uppercase text-slate-500 font-semibold mb-2", children: "Extracted Key Fields" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: sample.extractedFields.map((field, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -6 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.04, duration: 0.2 },
                  className: "flex items-center justify-between text-xs py-1 px-2 rounded bg-slate-50 border border-slate-100",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-600 truncate max-w-[110px]", children: field.label }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[#0B132B] font-medium tnum truncate max-w-[110px]", children: field.value }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-[#006C4A] tnum bg-emerald-50 px-1 rounded", children: field.confidence })
                    ] })
                  ]
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "OCR & Parser Status" }),
              /* @__PURE__ */ jsxs("span", { className: "text-[#006C4A] font-medium flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }),
                " 100% Parsed"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 p-4 sm:p-5 flex flex-col justify-between bg-white", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono uppercase text-[#0D9488] font-semibold tracking-wider", children: "02 \xB7 Match & Rules" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono text-slate-500", children: "Sub-Ledger Check" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 4 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.08, duration: 0.2 },
                    className: "p-3 rounded-md border border-[#E2E8F0] bg-[#F8FAFC]",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-mono font-medium text-slate-700 uppercase mb-1", children: "Matching Logic" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-700 leading-relaxed", children: sample.matchDetails })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 4 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.12, duration: 0.2 },
                    className: "p-3 rounded-md border border-[#E2E8F0] bg-[#F8FAFC]",
                    children: [
                      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-mono font-medium text-slate-700 uppercase mb-1", children: "Policy / Regulatory Check" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-700 leading-relaxed", children: sample.ruleCheck })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-100", children: sample.matchStatus === "exception" ? /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0.98 },
                animate: { scale: 1 },
                className: "flex items-center gap-2 text-xs text-[#991B1B] font-medium bg-[#FEF2F2] border border-[#FECACA] p-2 rounded",
                children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 shrink-0 text-[#BA1A1A]" }),
                  /* @__PURE__ */ jsx("span", { children: "Exception Flagged: Tolerance Exceeded" })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0.98 },
                animate: { scale: 1 },
                className: "flex items-center gap-2 text-xs text-[#065F46] font-medium bg-[#ECFDF5] border border-[#A7F3D0] p-2 rounded",
                children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 shrink-0 text-[#006C4A]" }),
                  /* @__PURE__ */ jsx("span", { children: "Rule Verified: Auto-matched to sub-ledger" })
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 p-4 sm:p-5 flex flex-col justify-between bg-[#F8FAFC]", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono uppercase text-[#4F46E5] font-semibold tracking-wider", children: "03 \xB7 Prepared Output" }),
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono text-slate-500", children: "Audit-Ready" })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.15, duration: 0.22 },
                  className: "bg-white border border-[#E2E8F0] rounded-md p-3 mb-3 shadow-xs",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(FileSpreadsheet, { className: "w-4 h-4 text-[#4F46E5]" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-[#0B132B]", children: "Synthesized Working Schedule" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-2", children: sample.preparedSchedule }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-2 rounded text-[11px] font-mono text-slate-700 border border-slate-200/60 space-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { children: "Audit Trail Ref:" }),
                        /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                          "EL-TX-",
                          sample.id.toUpperCase()
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { children: "Cross-Reference:" }),
                        /* @__PURE__ */ jsx("span", { children: "Ledger Code 5120.04" })
                      ] })
                    ] })
                  ]
                }
              ),
              sample.exceptionNotice && /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.2 },
                  className: "bg-amber-50 border border-amber-200 rounded p-2.5 text-xs text-amber-900 leading-relaxed",
                  children: [
                    /* @__PURE__ */ jsxs("p", { className: "font-semibold flex items-center gap-1.5 text-amber-950 mb-0.5", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3.5 h-3.5 text-amber-700" }),
                      " Review Queue Tag"
                    ] }),
                    sample.exceptionNotice
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Automated Preparation:" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-800", children: "Complete" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 p-4 sm:p-5 flex flex-col justify-between bg-white border-l border-emerald-100", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono uppercase text-[#0B132B] font-bold tracking-wider", children: "04 \xB7 Human Sign-Off" }),
                /* @__PURE__ */ jsx(Badge, { variant: currentDecision === "approved" ? "healthy" : currentDecision === "rejected" ? "exception" : "syncing", children: currentDecision === "approved" ? "Signed Off" : currentDecision === "rejected" ? "Rejected" : "Action Required" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-md p-3 mb-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1.5 text-xs font-semibold text-[#0B132B]", children: [
                  /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-[#006C4A]" }),
                  /* @__PURE__ */ jsx("span", { children: "Professional Reviewer Console" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-600 leading-normal mb-2", children: sample.recommendedAction }),
                sample.id === "inv-8492" && /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "auditor-note", className: "block text-[10px] uppercase font-mono text-slate-500 mb-1", children: "Auditor / Controller Workpaper Note:" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "auditor-note",
                      type: "text",
                      value: annotatedNotes[sample.id] || "",
                      onChange: (e) => setAnnotatedNotes({ ...annotatedNotes, [sample.id]: e.target.value }),
                      placeholder: "e.g. Approved per SWO-12 signed by GM",
                      className: "w-full text-xs px-2.5 py-1.5 bg-white border border-slate-200 rounded focus:border-[#0B132B] focus:ring-1 focus:ring-[#0B132B] outline-none"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      whileTap: { scale: 0.97 },
                      type: "button",
                      onClick: () => handleDecision("approved"),
                      className: `px-3 py-2 text-xs font-semibold rounded-[4px] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${currentDecision === "approved" ? "bg-[#006C4A] text-white shadow-xs" : "bg-white border border-slate-300 text-slate-700 hover:bg-emerald-50 hover:border-[#006C4A]"}`,
                      children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Approve & Sign" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      whileTap: { scale: 0.97 },
                      type: "button",
                      onClick: () => handleDecision("rejected"),
                      className: `px-3 py-2 text-xs font-semibold rounded-[4px] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${currentDecision === "rejected" ? "bg-[#991B1B] text-white shadow-xs" : "bg-white border border-slate-300 text-slate-700 hover:bg-red-50 hover:border-red-400"}`,
                      children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3.5 h-3.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Flag Exception" })
                      ]
                    }
                  )
                ] }),
                currentDecision !== "pending" && /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    type: "button",
                    onClick: handleReset,
                    className: "w-full py-1 text-[11px] text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1 cursor-pointer",
                    children: [
                      /* @__PURE__ */ jsx(RotateCcw, { className: "w-3 h-3" }),
                      " Reset sample state"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-[#0B132B]", children: "Human Authority:" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#006C4A] font-semibold", children: "100% In Control" })
            ] })
          ] })
        ]
      },
      activeSampleId
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-100/80 px-4 sm:px-6 py-2.5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-[#006C4A]" }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Deterministic Audit Principle:" }),
          " Endloops prepares all extraction, comparison, and schedule calculations. The final sign-off is certified by your professional."
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-mono text-[11px]", children: "Sample 1 of 3 \xB7 Click document tabs above to test" })
    ] })
  ] });
};
export {
  WorkflowDemo
};
