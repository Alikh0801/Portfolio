import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function animateWindowScrollTo(targetY: number, durationMs = 550) {
  const startY = window.scrollY || window.pageYOffset || 0;
  const delta = targetY - startY;
  if (Math.abs(delta) < 2) return;

  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / durationMs);
    const y = startY + delta * easeOutCubic(t);
    window.scrollTo(0, y);
    if (t < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible((window.scrollY || 0) > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scrollTop ${visible ? "scrollTop--visible" : ""}`}
      aria-label="Scroll to top"
      onClick={() => animateWindowScrollTo(0)}
    >
      <span className="scrollTop__icon" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}

