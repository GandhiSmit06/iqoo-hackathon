"use client";

import { motion } from "motion/react";
import { ArrowRight, Camera, GitPullRequest } from "lucide-react";
import { Button } from "./button";
import { useDemo } from "./demo-context";

export function Engines() {
  const { setMode, play } = useDemo();
  return (
    <section className="border-t border-ink">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        {[
          {
            id: "sketch",
            kicker: "02 · Genesis friction",
            icon: Camera,
            title: "Sketch2Stack",
            copy: "Eighty-five percent of architecture still starts on paper. Photograph a wireframe. In fifteen seconds the engine emits a live Tailwind UI and production Django models.",
            bullets: [
              "Client-side ink enhancement and contrast boost",
              "Vision model extracts layout, labels, and relations",
              "Frontend: semantic HTML + Tailwind utilities",
              "Backend: ORM models, serializers, REST routes",
            ],
            cta: "Run Sketch2Stack",
            mode: "sketch" as const,
          },
          {
            id: "patch",
            kicker: "03 · Maintenance friction",
            icon: GitPullRequest,
            title: "ScreenToPatch",
            copy: "Testers burn a third of the week reproducing mobile bugs. Record five seconds, speak the issue, and the engine opens a GitHub pull request with the exact diff.",
            bullets: [
              "Whisper transcription of the voice memo",
              "Frame-level visual glitch hypothesis",
              "Tree-sitter AST search across the repo",
              "PyGithub branch, commit, and PR dispatch",
            ],
            cta: "Run ScreenToPatch",
            mode: "patch" as const,
            outline: true,
          },
        ].map((e, idx) => (
          <motion.article
            key={e.id}
            id={e.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -2 }}
            className="group border-b border-ink px-4 py-12 sm:px-8 sm:py-16 lg:border-b-0 lg:border-r last:border-r-0 scroll-mt-16"
          >
            <p className="font-mono text-label tracking-label uppercase text-muted">{e.kicker}</p>
            <div className="mt-4 flex items-center gap-3">
              <motion.span whileHover={{ rotate: 6, scale: 1.06 }} className="flex size-10 items-center justify-center border border-ink bg-paper group-hover:bg-ink group-hover:text-paper transition-colors duration-200">
                <e.icon className="size-4" />
              </motion.span>
              <h2 className="font-display text-section font-black uppercase leading-section tracking-section">{e.title}</h2>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{e.copy}</p>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {e.bullets.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-start gap-3 py-3 font-mono text-micro tracking-wide uppercase text-ink"
                >
                  <span className="mt-1 size-1.5 shrink-0 bg-accent group-hover:scale-125 transition-transform" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-block">
              <Button
                variant={e.outline ? "outline" : "solid"}
                onClick={() => {
                  setMode(e.mode);
                  document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
                  window.setTimeout(() => play(e.mode), 400);
                }}
                icon={<ArrowRight className="size-4" />}
              >
                {e.cta}
              </Button>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
