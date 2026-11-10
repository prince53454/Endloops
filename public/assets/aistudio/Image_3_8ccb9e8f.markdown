---
name: Architectural Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76767e'
  outline-variant: '#c6c6ce'
  surface-tint: '#565d79'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131a33'
  on-primary-container: '#7b83a0'
  inverse-primary: '#bec5e5'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f0069'
  on-tertiary-container: '#7671ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#bec5e5'
  on-primary-fixed: '#131a33'
  on-primary-fixed-variant: '#3e4660'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c0ff'
  on-tertiary-fixed: '#0f0069'
  on-tertiary-fixed-variant: '#3323cc'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: 3.5rem
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  numeric-data:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an architectural, mathematically grounded environment tailored for high-stakes financial operations and automated infrastructure. The interface evokes unyielding reliability, computational clarity, and audit-grade discipline. Designed for finance executives, operations controllers, and quantitative systems engineers, it strips away visual ornamentation to favor clear spatial geometry, razor-thin data divisions, and crisp contrast.

The aesthetic philosophy draws on contemporary architectural minimalism combined with high-density editorial structures:
- **Structural Legibility:** Space is partitioned using structural gridlines, systematic padding intervals, and tabular alignment.
- **Controlled Velocity:** High-saturation accents (emerald, teal, indigo) exist purely as programmatic indicators, status verifiers, and definitive calls-to-action against crisp, layered neutral surfaces.
- **Absolute Confidence:** Typography prioritizes proportional balance, monospace and tabular numbers for financial reporting, and distinct optical hierarchy to reduce cognitive fatigue during multi-step ledger processing.

## Colors

The palette is engineered to present high-contrast legibility across data-dense canvases while conveying institutional authority.

### Surface Tiers & Canvases
- **Base Canvas (`#FFFFFF`):** The primary canvas for actionable workflows, document inspectors, and isolated cards.
- **Sub-Canvas Ground (`#F8FAFC`):** The foundational viewport canvas providing quiet separation behind floating structural modules.
- **Muted Container (`#F1F5F9`):** Reserved for table headers, embedded audit controls, input background wells, and non-selected data states.
- **Structural Dividing Line (`#E2E8F0`):** Precise 1px hairline boundary applied universally to contain panels, cells, and metadata ribbons.

### Typographic & Ink Tones
- **Primary Ink (`#0B132B`):** Deep authoritative dark navy applied to primary headlines, monetary figures, and active labels.
- **Secondary Ink (`#1C2541`):** Subdued corporate navy for subheadings, active navigation markers, and secondary table columns.
- **Muted Slates (`#475569` to `#94A3B8`):** Utility hierarchy for micro-labels, unselected states, and metric subtitles.

### Semantic & Accents
- **System Anchor / Success (`#059669` / `#10B981`):** Represents operational health, completed automated reconciliations, and positive deltas.
- **Operational Flow / Teal (`#0D9488`):** Serves as secondary visual telemetry for ongoing workflows, dynamic pipelines, and active state transitions.
- **Intelligence / Compute Accent (`#4F46E5` / `#6366F1`):** Applied selectively to indicate automated rules, generative actions, API executions, and integrated service hooks.

## Typography

The type system blends the geometric authority of **Plus Jakarta Sans** for navigational and display-level structures with the hyper-functional utilitarianism of **Inter** for data layers and interface execution.

### Application Rules
- **Tabular Numerics (`tnum`, `lnum`):** All ledger entries, currency metrics, timestamp logs, and audit counts must strictly apply tabular lining figures (`font-variant-numeric: tabular-nums lining-nums`) to guarantee strict vertical column alignment across rows.
- **Scale Hierarchy:** Headlines rely on tight letter spacing (`-0.025em` down to `-0.01em`) to maintain optical density at scale, preventing whitespace fragmentation in large screen layouts.
- **Labels & System Badges:** All `label-sm` elements utilize uppercase styling with explicit letter tracking (`0.04em`) when designating system status, currency codes (e.g., `USD`, `EUR`), or pipeline execution stages.

## Layout & Spacing

The layout is built upon an architectural 8px grid module, prioritizing structural alignment, predictable density, and spatial equilibrium.

### Grid Engine
- **Desktop (1280px+):** Fluid 12-column layout flanked by dynamic margin boundaries (`margin`: `2rem`), bound within a maximum content container of 1600px. Column gutters lock at `gutter`: `1.5rem`.
- **Tablet (768px - 1279px):** Fluid 8-column layout with `gutter`: `1.25rem` and `margin`: `1.5rem`. Complex balance sheets shift from side-by-side comparison panes to stacked inspector views.
- **Mobile (< 768px):** Single-column stack with `margin-mobile`: `1rem` and `gutter-mobile`: `1rem`. Data grids degrade into progressive disclosure cards with pinned summary strips.

### Spatial Spacing Logic
- `space-xs` (4px) & `space-sm` (8px): Enforces relationship proximity between field labels, monetary prefixes, status indicators, and paired icons.
- `space-md` (16px): Standard internal padding for list items, input heights, table cells, and button interiors.
- `space-lg` (24px): Boundary spacing separating internal functional modules within a card or data segment.
- `space-xl` (40px): Sectional rhythm defining macro page partitions and dashboard tier transitions.

## Elevation & Depth

Visual hierarchy does not rely on heavy, diffused shadows. Depth is established via architectural surface tiering, hairline border articulation, and minimal, structural ambient occlusions.

### Depth Hierarchy
1. **Level 0 (Flat / Canvas):** Neutral canvas ground (`#F8FAFC`) with no elevation, acting as the structural baseline.
2. **Level 1 (Card / Grid Module):** Pure white (`#FFFFFF`) surface framed by a 1px solid `#E2E8F0` hairline border. Supported by a calibrated low-intensity shadow: `0 1px 3px rgba(11, 19, 43, 0.04), 0 1px 2px rgba(11, 19, 43, 0.02)`.
3. **Level 2 (Interactive Flyouts & Hover States):** Lifted panels, active row hovering, or active pipeline steps use an elevated shadow: `0 4px 6px -1px rgba(11, 19, 43, 0.06), 0 2px 4px -2px rgba(11, 19, 43, 0.04)`, retaining the 1px `#E2E8F0` border.
4. **Level 3 (Overlays, Modals, & Command Palettes):** High-priority operational modals suspended above the UI use a backdrop veil (`rgba(11, 19, 43, 0.4)` with 4px backdrop blur) paired with an elevation shadow: `0 20px 25px -5px rgba(11, 19, 43, 0.08), 0 8px 10px -6px rgba(11, 19, 43, 0.04)`.

## Shapes

The design uses a restrained, architectural corner geometry (Level 1: Soft). This approach reinforces structural reliability and aligns with precise financial tabular data.

### Corner Radii Guidelines
- **Core Elements (`0.25rem` / 4px):** Form fields, standard primary/secondary buttons, checkboxes, table cell active indicators, and operational chips.
- **Card Containers (`0.5rem` / 8px):** Structural cards, modal frames, dropdown panels, and data table envelopes.
- **Section Enclosures (`0.75rem` / 12px):** Hero canvas overlays and master application viewports.
- **Strict Exceptions:** Circular components are strictly limited to user identity avatars and circular system status pings. Buttons, pills, and inputs must maintain crisp rectangular contours with standard 4px corners.

## Components

### Buttons
- **Primary Action:** Solid `#0B132B` background with `#FFFFFF` text. Hover transitions to `#1C2541`. Active state: subtle scale down (0.99) with 4px radius and strict 16px horizontal internal padding.
- **Positive / Execution Action:** Solid `#059669` background with `#FFFFFF` text. Used exclusively for reconciliation confirmations, rule triggering, and balance approvals. Hover: `#047857`.
- **Secondary:** Surface `#FFFFFF` with a 1px `#E2E8F0` hairline border and `#0B132B` text. Hover introduces `#F8FAFC` background and a `#CBD5E1` border tint.
- **Tertiary / Utility:** Transparent background, `#1C2541` text, applying `#F1F5F9` background on hover.

### Inputs & Form Fields
- Height: Standardized 40px base height.
- Surface: Crisp `#FFFFFF` background with 1px `#E2E8F0` border.
- Focus State: Replaces default browser outlines with a crisp 1px `#0B132B` or `#4F46E5` border accompanied by an ambient `0 0 0 3px rgba(79, 70, 229, 0.12)` halo ring.
- Numeric / Financial Inputs: Right-aligned numeric inputs with permanent tabular digit styling and absolute-positioned currency prefixes (e.g., `USD $`).

### Chips & Status Badges
- Structural styling: Height of 22px, 4px border-radius, `label-sm` typography (uppercase, bold tracking).
- Reconciled / Healthy: Background `#ECFDF5`, text `#065F46`, border 1px solid `#A7F3D0`.
- In-Pipeline / Syncing: Background `#F0FDFA`, text `#115E59`, border 1px solid `#99F6E4`.
- Automated / System: Background `#EEF2FF`, text `#3730A3`, border 1px solid `#C7D2FE`.
- Exception / Action Required: Background `#FEF2F2`, text `#991B1B`, border 1px solid `#FECACA`.

### Data Tables & Ledger Lists
- Container: Fully framed by 1px `#E2E8F0` perimeter border with an 8px radius.
- Header Row: `#F8FAFC` background, height 36px, `label-sm` uppercase text in `#475569`, border-bottom 1px `#E2E8F0`.
- Data Rows: Height 48px, pure white `#FFFFFF` surface, dividing 1px border `#F1F5F9`. Hover row background updates smoothly to `#F8FAFC`.
- Numeric Cells: Strict right-alignment with tabular lining figures.

### Checkboxes & Radio Controls
- Checkbox: 16px square with 3px border-radius. Inactive border: 1.5px solid `#CBD5E1`. Checked state: solid `#0B132B` background with a crisp white check vector.
- Focus: Subtle focus ring matching the primary form input system.

### Cards & Structural Data Panels
- Background: `#FFFFFF` framed in 1px `#E2E8F0`. Internal padding follows the `space-lg` (24px) token.
- Headers: Bordered separation beneath panel titles using a 1px `#F1F5F9` line, decoupling module actions and summary titles from content rows.