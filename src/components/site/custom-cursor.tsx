"use client";

import { motion, useMotionValue, useSpring, useVelocity, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Architectural HUD Reticle Cursor
 * Features:
 * - Ultra-responsive precision center point
 * - Trailing HUD framing reticle with spring physics
 * - Dynamic corner brackets that expand & rotate on interactive hover
 * - Velocity-aware dynamic trailing
 * - Universal mix-blend-difference visibility across light/dark themes
 * - Touch-device aware (gracefully disappears)
 */
export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing HUD frame
  const smoothX = useSpring(mouseX, { stiffness: 280, damping: 22, mass: 0.15 });
  const smoothY = useSpring(mouseY, { stiffness: 280, damping: 22, mass: 0.15 });

  // Velocity for dynamic micro-tilt
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  const rotateReticle = useTransform(velX, [-1000, 1000], [-15, 15]);
  const scaleReticle = useTransform(velY, [-1000, 1000], [1.1, 0.9]);

  useEffect(() => {
    // Only show on desktop devices with a mouse
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]";

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest(interactiveSelector) as HTMLElement | null;
      if (el) {
        setHovering(true);
        const customText = el.getAttribute("data-cursor-text");
        if (customText) {
          setHoverText(customText);
        } else if (el.tagName.toLowerCase() === "a" || el.getAttribute("href") || el.getAttribute("to")) {
          setHoverText("VIEW");
        } else if (el.tagName.toLowerCase() === "button" || el.getAttribute("role") === "button") {
          setHoverText("OPEN");
        } else {
          setHoverText(null);
        }
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(interactiveSelector)) {
        setHovering(false);
        setHoverText(null);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden mix-blend-difference">
      {/* Outer Spring HUD Frame */}
      <motion.div
        className="fixed top-0 left-0"
        style={{
          x: smoothX,
          y: smoothY,
          rotate: hovering ? 0 : rotateReticle,
          scale: hovering ? 1.2 : scaleReticle,
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
          {/* Reticle bounding box with corner marks */}
          <motion.div
            animate={{
              width: hovering ? 52 : clicking ? 22 : 32,
              height: hovering ? 52 : clicking ? 22 : 32,
              borderRadius: hovering ? 8 : 4,
              opacity: hovering ? 1 : 0.75,
              borderColor: hovering ? "#ffffff" : "rgba(255,255,255,0.45)",
            }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            className="relative border border-dashed flex items-center justify-center"
          >
            {/* 4 Corner Crosshairs */}
            <span className="absolute -top-1 -left-1 size-2 border-t-2 border-l-2 border-white" />
            <span className="absolute -top-1 -right-1 size-2 border-t-2 border-r-2 border-white" />
            <span className="absolute -bottom-1 -left-1 size-2 border-b-2 border-l-2 border-white" />
            <span className="absolute -bottom-1 -right-1 size-2 border-b-2 border-r-2 border-white" />

            {/* Hover Micro Badge */}
            <AnimatePresence>
              {hoverText && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="font-mono text-[9px] font-bold tracking-widest uppercase text-white bg-black/60 px-1 py-0.5 rounded-xs"
                >
                  {hoverText}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Target Dot (zero-lag direct position) */}
      <motion.div
        className="fixed top-0 left-0"
        style={{ x: mouseX, y: mouseY }}
      >
        <motion.div
          animate={{
            scale: clicking ? 1.8 : hovering ? 0 : 1,
            opacity: hovering ? 0 : 1,
          }}
          transition={{ duration: 0.12 }}
          className="size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
        />
      </motion.div>
    </div>
  );
}
