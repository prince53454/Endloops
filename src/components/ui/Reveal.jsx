import { jsx } from "react/jsx-runtime";
import { useScrollReveal } from "../../hooks/useScrollReveal";
const delayClasses = {
  0: "",
  75: "delay-75",
  100: "delay-100",
  150: "delay-150",
  200: "delay-200",
  300: "delay-300",
  400: "delay-400",
  500: "delay-500",
  700: "delay-700",
  1e3: "delay-1000"
};
const durationClasses = {
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
};
function getHiddenTransformClass(direction, distance) {
  if (direction === "none" || distance === "none") return "";
  const scale = distance === "sm" ? "2" : distance === "lg" ? "8" : "4";
  switch (direction) {
    case "up":
      return `translate-y-${scale}`;
    case "down":
      return `-translate-y-${scale}`;
    case "left":
      return `translate-x-${scale}`;
    case "right":
      return `-translate-x-${scale}`;
    default:
      return `translate-y-4`;
  }
}
const Reveal = ({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 700,
  direction = "up",
  distance = "md",
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  triggerOnce = true,
  style,
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce
  });
  const hiddenTransform = getHiddenTransformClass(direction, distance);
  const durationClass = durationClasses[duration] || "duration-700";
  const delayClass = delayClasses[delay] || (delay > 0 ? `delay-[${delay}ms]` : "");
  const stateClasses = isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`;
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref,
      style,
      className: `transition-all ${durationClass} ease-out will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${stateClasses} ${delayClass} ${className}`,
      ...rest,
      children
    }
  );
};
var Reveal_default = Reveal;
export {
  Reveal,
  Reveal_default as default
};
