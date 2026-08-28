import { useEffect, useRef, useState } from 'react';

export const FRAME_COUNT = 120;
const FRAME_PATH = (i: number) => `/frames/frame_${String(i).padStart(4, '0')}.webp`;

/**
 * Native, scroll-driven canvas frame sequence. This system is intentionally
 * NOT implemented with Framer Motion — it stays plain requestAnimationFrame +
 * passive scroll listeners so the cinematic sequence remains buttery smooth
 * and independent of the interface animation layer.
 */
export function useCinematicScroll() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const tickingRef = useRef(false);

  const [progress, setProgress] = useState(0);
  const [pageProgress, setPageProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    }
    resizeCanvas();

    function drawFrame(idx: number) {
      const img = imagesRef.current[idx];
      if (!canvas || !ctx || !img || !img.complete || !img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (ir > cr) {
        dh = ch;
        dw = ch * ir;
        dx = (cw - dw) / 2;
        dy = 0;
      } else {
        dw = cw;
        dh = cw / ir;
        dx = 0;
        dy = (ch - dh) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const im = new Image();
      im.src = FRAME_PATH(i);
      if (i === 1) im.onload = () => drawFrame(0);
      images.push(im);
    }
    imagesRef.current = images;

    function update() {
      const wrap = wrapRef.current;
      if (!wrap) {
        tickingRef.current = false;
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      let p = total > 0 ? -rect.top / total : 0;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);

      const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(p * (FRAME_COUNT - 1)));
      if (frameIdx !== currentFrameRef.current) {
        currentFrameRef.current = frameIdx;
        drawFrame(frameIdx);
      }

      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setPageProgress(docH > 0 ? Math.max(0, Math.min(1, window.scrollY / docH)) : 0);

      tickingRef.current = false;
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    }
    function onResize() {
      resizeCanvas();
      drawFrame(currentFrameRef.current < 0 ? 0 : currentFrameRef.current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { wrapRef, canvasRef, progress, pageProgress };
}
