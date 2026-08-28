import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorLabel = null | 'view' | 'explore' | 'arrow';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<CursorLabel>(null);
  const [big, setBig] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 500, damping: 40, mass: 0.4 });
  const rootSet = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wide = window.matchMedia('(min-width: 901px)').matches;
    const on = !isTouch && !reduced && wide;
    setEnabled(on);
    if (on && !rootSet.current) {
      document.documentElement.classList.add('has-custom-cursor');
      rootSet.current = true;
    }
    if (!on) return;

    function move(e: MouseEvent) {
      mx.set(e.clientX);
      my.set(e.clientY);
      const target = e.target as HTMLElement;
      const projectEl = target.closest('[data-cursor="project"]');
      const exploreEl = target.closest('[data-cursor="explore"]');
      const ctaEl = target.closest('[data-cursor="cta"]');
      const interactive = target.closest('a, button, input, textarea, [data-cursor]');
      if (projectEl) {
        setLabel('view');
        setBig(true);
      } else if (exploreEl) {
        setLabel('explore');
        setBig(true);
      } else if (ctaEl) {
        setLabel('arrow');
        setBig(true);
      } else if (interactive) {
        setLabel(null);
        setBig(true);
      } else {
        setLabel(null);
        setBig(false);
      }
    }
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        width: big ? 64 : 8,
        height: big ? 64 : 8,
        background: label ? 'transparent' : '#D7E2EA',
        border: label ? '1px solid #D7E2EA' : 'none',
      }}
      transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
    >
      {label && (
        <span className="font-display text-[9px] font-medium uppercase tracking-[0.14em] text-ink text-center leading-tight px-1">
          {label === 'view' && (
            <>
              View
              <br />
              Project
            </>
          )}
          {label === 'explore' && 'Explore'}
          {label === 'arrow' && '→'}
        </span>
      )}
    </motion.div>
  );
}
