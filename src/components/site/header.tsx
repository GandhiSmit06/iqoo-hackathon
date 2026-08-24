"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useDemo } from "./demo-context";

const NAV = [
  { id: "overview", num: "01", label: "Overview" },
  { id: "sketch", num: "02", label: "Sketch2Stack" },
  { id: "patch", num: "03", label: "ScreenToPatch" },
  { id: "architecture", num: "04", label: "Architecture" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");
  const { setMode, play } = useDemo();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  function go(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (id === "sketch") setMode("sketch");
    if (id === "patch") setMode("patch");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90">
      <motion.div className="absolute bottom-0 left-0 h-0.5 bg-accent origin-left" style={{ scaleX }} />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#overview" className="font-display text-lg font-black tracking-tight uppercase" onClick={(e) => { e.preventDefault(); go("overview"); }}>
          Proto<span className="text-subtle">.</span>Patch<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  "relative flex h-9 items-center gap-2 border px-3 font-mono text-label tracking-label uppercase overflow-hidden transition-colors duration-150",
                  isActive ? "border-ink text-paper" : "border-ink/10 bg-paper text-muted hover:border-ink hover:text-ink",
                )}
              >
                {isActive && <motion.div layoutId="nav-active" className="absolute inset-0 bg-ink" transition={{ type: "spring", stiffness: 420, damping: 30 }} />}
                <span className={cn("relative", isActive ? "text-accent" : "text-subtle")}>{item.num}</span>
                <span className="relative">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Button size="md" className="hidden sm:inline-flex" onClick={() => { document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" }); play(); }} icon={<span aria-hidden>↗</span>}>
              Run a demo
            </Button>
          </motion.div>
          <button type="button" className="inline-flex size-11 items-center justify-center border border-ink lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <AnimatePresence mode="wait" initial={false}>
              {open ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="size-5" /></motion.span> : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Menu className="size-5" /></motion.span>}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden border-t border-ink bg-paper lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2" aria-label="Mobile">
              {NAV.map((item) => (
                <button key={item.id} type="button" onClick={() => go(item.id)} className="flex h-12 items-center justify-between border-b border-ink/5 font-mono text-micro tracking-label uppercase last:border-b-0">
                  <span>{item.label}</span>
                  <span className="text-subtle">{item.num}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
