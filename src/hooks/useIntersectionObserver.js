import { useEffect, useRef, useState } from "react";
function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -40px 0px",
    triggerOnce = true
  } = options;
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  useEffect(() => {
    if (isVisible && triggerOnce) return;
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }
    const handleMotionPreferenceChange = (e) => {
      if (e.matches) {
        setIsVisible(true);
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      }
    };
  }, [threshold, rootMargin, triggerOnce, isVisible]);
  return { ref: elementRef, isVisible };
}
export {
  useIntersectionObserver
};
