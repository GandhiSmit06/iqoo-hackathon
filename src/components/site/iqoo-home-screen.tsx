"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowRight, Zap, Radio, Battery, Wifi } from "lucide-react";
import { useState, useEffect } from "react";

interface IqooHomeScreenProps {
  onLaunchApp: () => void;
}

export function IqooHomeScreen({ onLaunchApp }: IqooHomeScreenProps) {
  const [time, setTime] = useState("12:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-950 text-white select-none">
      {/* Authentic iQOO Wallpaper Image */}
      <img
        src="/iqoo-front.png"
        alt="iQOO Wallpaper"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* Subtle overlay gradient to ensure high-contrast readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

      {/* Top Status Bar & Camera Punch Hole */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[11px] font-mono text-white/90">
        <span className="font-bold tracking-tight">{time}</span>

        {/* Center Punch Hole Camera */}
        <div className="size-3.5 rounded-full bg-black border border-white/20 shadow-inner flex items-center justify-center">
          <div className="size-1 rounded-full bg-blue-900/80" />
        </div>

        <div className="flex items-center gap-1.5 opacity-90">
          <Wifi className="size-3" />
          <span className="text-[9px] font-bold">5G</span>
          <Battery className="size-3.5" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex h-[calc(100%-2rem)] flex-col justify-between p-6 pb-8">
        {/* Clock & Date Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center pt-8"
        >
          <h1 className="font-display text-5xl font-black tracking-tight drop-shadow-md text-white/95">
            {time}
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-wider text-white/80 mt-1 drop-shadow">
            Wednesday, Aug 27 · iQOO OS
          </p>
        </motion.div>

        {/* Center Prompt Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 font-mono text-[10px] uppercase tracking-wider shadow-lg">
            <span className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
            iQOO Performance Edition
          </div>
        </motion.div>

        {/* The ONLY Interactive Button on Home Screen: "TRY THE APP" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.button
            type="button"
            onClick={onLaunchApp}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 p-0.5 shadow-[0_8px_32px_rgba(255,68,0,0.5)] transition-all cursor-pointer"
          >
            {/* Glow backdrop pulse */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center justify-between gap-3 rounded-[14px] bg-slate-950/90 backdrop-blur-md px-5 py-4 transition-colors group-hover:bg-slate-950/75">
              <div className="flex items-center gap-3.5">
                {/* App Launcher Icon */}
                <div className="relative flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-md shadow-orange-500/40">
                  <Zap className="size-6 text-white fill-current" />
                  <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-white border-2 border-orange-600 animate-ping" />
                </div>

                <div className="text-left">
                  <span className="block font-display text-base font-black tracking-tight text-white uppercase group-hover:text-amber-400 transition-colors">
                    Try the APP
                  </span>
                  <span className="block font-mono text-[10px] text-white/70 uppercase tracking-wider">
                    Launch ProtoPatch
                  </span>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="flex size-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ArrowRight className="size-4 text-white transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.button>

          <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 text-center">
            Tap to experience live dual-engine AI
          </p>
        </motion.div>
      </div>

      {/* Bottom Gesture Bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-28 rounded-full bg-white/60" />
    </div>
  );
}
