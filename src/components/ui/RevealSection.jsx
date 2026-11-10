import { jsx } from "react/jsx-runtime";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
const RevealSection = ({
  children,
  className = "",
  id,
  as: Component = "section",
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  style
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });
  const delayClasses = {
    0: "",
    100: "delay-100",
    150: "delay-150",
    200: "delay-200",
    300: "delay-300",
    400: "delay-400",
    500: "delay-500"
  };
  const animationClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  return /* @__PURE__ */ jsx(
    Component,
    {
      id,
      ref,
      style,
      className: `transition-all duration-700 ease-out will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${animationClasses} ${delayClasses[delay] || ""} ${className}`,
      children
    }
  );
};
export {
  RevealSection
};
