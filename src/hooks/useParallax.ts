import { useEffect, useRef } from 'react';
import type { Layer } from '../scene/layers';

const MAX_SHIFT = 40;
const DRIFT     = 12;
const EASE      = 0.05;

export function useParallax(layers: Layer[]) {
  const elsRef           = useRef<(HTMLDivElement | null)[]>(Array(layers.length).fill(null));
  const mouseRef         = useRef({ x: 0, y: 0 });
  const offsetsRef       = useRef<{ x: number; y: number }[]>(layers.map(() => ({ x: 0, y: 0 })));
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mq.matches;
    const onMQChange = (e: MediaQueryListEvent) => { reducedMotionRef.current = e.matches; };
    mq.addEventListener('change', onMQChange);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth)  * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let rafId = 0;

    const loop = (timestamp: number) => {
      const reduced = reducedMotionRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (let i = 0; i < layers.length; i++) {
        const el = elsRef.current[i];
        if (!el) continue;
        const off   = offsetsRef.current[i];
        const depth = layers[i].depth;

        const drift   = reduced ? 0 : Math.sin(timestamp * 0.0002) * depth * DRIFT;
        const targetX = (reduced ? 0 : -mx * depth * MAX_SHIFT) + drift;
        const targetY = reduced ? 0 : -my * depth * MAX_SHIFT * 0.5;

        off.x += (targetX - off.x) * EASE;
        off.y += (targetY - off.y) * EASE;

        el.style.transform = `translate3d(${off.x}px, ${off.y}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (rafId === 0) {
        rafId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    if (!document.hidden) {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
      mq.removeEventListener('change', onMQChange);
    };
  // layers is a module-level constant — empty deps is correct
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Stable across renders: same function object every call
  const setRefRef = useRef((i: number) => (el: HTMLDivElement | null) => {
    elsRef.current[i] = el;
  });

  return setRefRef.current;
}
