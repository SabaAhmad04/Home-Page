import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef(null);
  const [animationAxis, setAnimationAxis] = useState("y"); // "x" or "y"

  // Decide direction based on screen size
  useEffect(() => {
    const updateDirection = () => {
      const isRowLayout = window.innerWidth > 768; // breakpoint
      setAnimationAxis(isRowLayout ? "x" : "y");
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);
    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = animationAxis; // "x" or "y"
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    // Initial state
    gsap.set(el, {
      x: axis === "x" ? offset : 0,
      y: axis === "y" ? offset : 0,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
    });

    // Animation with ScrollTrigger
    const tween = gsap.to(el, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill(); // ❗ kill only THIS trigger
      tween.kill();
    };
  }, [
    distance,
    animationAxis,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return (
    <div style={{ display: "inline-block" }}>
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default AnimatedContent;
