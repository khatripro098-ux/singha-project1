import { useEffect } from "react";

export default function useScrollAnimation(selector = ".animate-on-scroll, .fade-in-left, .fade-in-right, .scale-in, .stagger-animation") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          observer.unobserve(entry.target); // only animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}