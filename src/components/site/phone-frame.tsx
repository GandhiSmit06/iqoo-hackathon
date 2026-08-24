"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const REST = { x: 2, y: -4 };

export function PhoneFrame({
  children,
  className,
  onSwipeLeft,
  onSwipeRight,
}: {
  children: ReactNode;
  className?: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(REST);
  const [hover, setHover] = useState(false);
  const reduce = useRef(false);
  const coarse = useRef(false);

  // spring for drag offset
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 420, damping: 30 });
  const dragRotate = useTransform(springX, [-120, 120], [-8, 8]);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    coarse.current = window.matchMedia("(hover: none)").matches;
    if (coarse.current || reduce.current) setTilt(REST);

    // gyro tilt on mobile
    const onOrient = (e: DeviceOrientationEvent) => {
      if (reduce.current) return;
      const beta = e.beta ?? 0; // front/back
      const gamma = e.gamma ?? 0; // left/right
      // clamp to avoid wild swings + ignore when flat
      if (Math.abs(beta) < 2 && Math.abs(gamma) < 2) return;
      setTilt({
        x: REST.x + Math.max(-6, Math.min(6, (beta - 45) * 0.14)),
        y: REST.y + Math.max(-7, Math.min(7, gamma * 0.18)),
      });
    };
    window.addEventListener("deviceorientation", onOrient, true);
    return () => window.removeEventListener("deviceorientation", onOrient);
  }, []);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce.current || coarse.current) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: REST.x + py * -7, y: REST.y + px * 10 });
  }

  return (
    <div className={cn("relative touch-pan-y select-none", className)} style={{ perspective: "2000px" }}>
      {/* hint */}
      <p className="pointer-events-none mx-auto mb-3 hidden w-fit rounded-full border border-ink/10 bg-paper px-3 py-1 font-mono text-[10px] tracking-label uppercase text-subtle sm:block lg:hidden">
        Drag phone ← → to switch engines · Hover to tilt
      </p>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => {
          setHover(false);
          if (!coarse.current) setTilt(REST);
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        dragMomentum={false}
        style={{ x: springX, rotateY: dragRotate } as any}
        onDragEnd={(_, info) => {
          const v = info.offset.x;
          if (v < -70) onSwipeLeft?.();
          else if (v > 70) onSwipeRight?.();
          dragX.set(0);
        }}
        className="relative mx-auto h-phone w-phone cursor-grab active:cursor-grabbing"
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={
          hover
            ? { type: "spring", stiffness: 260, damping: 22 }
            : { type: "spring", stiffness: 120, damping: 18 }
        }
      >
        <div
          className="absolute inset-0 rounded-phone bg-ink shadow-phone"
          aria-hidden
        />
        <div className="absolute inset-0 rounded-phone bg-linear-to-br from-paper/15 via-transparent to-ink/50" />
        <div className="absolute inset-2.5 overflow-hidden rounded-screen bg-paper">
          {children}
        </div>
        <div className="pointer-events-none absolute left-1/2 top-3.5 z-20 h-5 w-24 -translate-x-1/2 rounded-pill bg-ink" />
        <div className="pointer-events-none absolute bottom-3.5 left-1/2 z-20 h-1 w-28 -translate-x-1/2 rounded-pill bg-ink/70" />
        {/* specular highlight morphs with tilt */}
        <div
          className="pointer-events-none absolute inset-0 rounded-phone opacity-[0.07]"
          style={{
            background: `radial-gradient(520px 320px at ${50 + tilt.y * 3}% ${28 - tilt.x * 2}%, white, transparent 62%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
