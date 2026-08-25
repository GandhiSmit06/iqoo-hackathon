"use client";

import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Camera, Sparkles, Eye, Code, Server, Download, ChevronDown } from "lucide-react";
import { useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { sketch2stack, type Sketch2StackResponse, type StyleOption } from "@/lib/api-client";
import { AppHeader } from "@/components/app/app-header";
import { FileDropzone } from "@/components/app/file-dropzone";
import { CodeBlock } from "@/components/app/code-block";
import { PipelineProgress } from "@/components/app/pipeline-progress";

export const Route = createFileRoute("/sketch")({ component: SketchPage });

const STEPS = [
  { id: "upload", label: "Upload sketch" },
  { id: "enhance", label: "Ink enhance" },
  { id: "vision", label: "Vision parse" },
  { id: "generate", label: "Code generate" },
  { id: "preview", label: "Live preview" },
];

const STYLES: { value: StyleOption; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
  { value: "material", label: "Material" },
  { value: "ios", label: "iOS" },
  { value: "minimal", label: "Minimal" },
];

type ResultTab = "preview" | "models" | "api";

function SketchPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [style, setStyle] = useState<StyleOption>("auto");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [result, setResult] = useState<Sketch2StackResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<ResultTab>("preview");
  const [cameraMode, setCameraMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1920 }, height: { ideal: 1080 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setCameraMode(true);
    } catch {
      setError("Camera access denied. Please use file upload instead.");
    }
  }, []);

  const captureFromCamera = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], "sketch-capture.jpg", { type: "image/jpeg" });
          setImageFile(file);
          setCameraMode(false);
          streamRef.current?.getTracks().forEach((t) => t.stop());
        }
      },
      "image/jpeg",
      0.92,
    );
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!imageFile) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      setCurrentStep("upload");
      await delay(400);
      setCurrentStep("enhance");
      await delay(600);
      setCurrentStep("vision");

      const response = await sketch2stack(imageFile, {
        notes: notes || undefined,
        style,
      });

      setCurrentStep("generate");
      await delay(500);
      setCurrentStep("preview");
      await delay(300);

      setResult(response);
      setTab("preview");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setLoading(false);
      setCurrentStep(null);
    }
  }, [imageFile, notes, style]);

  const tabs: { id: ResultTab; label: string; icon: typeof Eye }[] = [
    { id: "preview", label: "Live UI", icon: Eye },
    { id: "models", label: "models.py", icon: Code },
    { id: "api", label: "serializers.py", icon: Server },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <AppHeader title="Sketch2Stack" subtitle="Napkin → Full-Stack in 15s" />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Left panel — Input */}
          <div className="lg:col-span-5 space-y-6">
            {/* Section header */}
            <div>
              <p className="font-mono text-label tracking-label uppercase text-muted">
                01 · Upload wireframe
              </p>
              <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                Capture your sketch<span className="text-accent">.</span>
              </h2>
              <p className="mt-2 text-sm text-muted max-w-md">
                Take a photo of your hand-drawn wireframe or upload an image. The AI will extract
                UI components, generate HTML + Tailwind CSS, and output Django models.
              </p>
            </div>

            {/* Camera/Upload toggle */}
            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={() => setCameraMode(false)}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 h-10 font-mono text-label tracking-label uppercase border transition-colors",
                  !cameraMode ? "bg-ink text-paper border-ink" : "bg-paper text-ink border-ink/20 hover:border-ink",
                )}
              >
                <Download className="size-3.5 rotate-180" /> Upload
              </motion.button>
              <motion.button
                type="button"
                onClick={startCamera}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 h-10 font-mono text-label tracking-label uppercase border transition-colors",
                  cameraMode ? "bg-ink text-paper border-ink" : "bg-paper text-ink border-ink/20 hover:border-ink",
                )}
              >
                <Camera className="size-3.5" /> Camera
              </motion.button>
            </div>

            {/* Camera view */}
            <AnimatePresence>
              {cameraMode && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border border-ink"
                >
                  <div className="relative bg-ink">
                    <video ref={videoRef} className="w-full aspect-4/3 object-cover" playsInline muted />
                    <canvas ref={canvasRef} className="hidden" />
                    {/* Viewfinder overlay */}
                    <div className="absolute inset-6 border border-paper/30 pointer-events-none" />
                    <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 border border-paper/50 pointer-events-none" />
                    {/* Capture button */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <motion.button
                        type="button"
                        onClick={captureFromCamera}
                        whileTap={{ scale: 0.88 }}
                        className="size-14 rounded-full border-4 border-paper bg-paper/20 flex items-center justify-center"
                      >
                        <span className="block size-10 rounded-full bg-paper" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* File upload */}
            {!cameraMode && (
              <FileDropzone
                accept="image/jpeg,image/png,image/webp"
                label="Drop your wireframe sketch here"
                hint="JPEG, PNG, or WebP · Max 10MB"
                onFile={setImageFile}
                disabled={loading}
              />
            )}

            {/* Style selector */}
            <div>
              <label className="block font-mono text-label tracking-label uppercase text-muted mb-2">
                UI Style
              </label>
              <div className="relative">
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value as StyleOption)}
                  className="w-full appearance-none border border-ink/20 bg-paper px-3 py-2.5 pr-8 font-mono text-micro uppercase tracking-label text-ink focus:border-ink focus:outline-none"
                  disabled={loading}
                >
                  {STYLES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-subtle pointer-events-none" />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-mono text-label tracking-label uppercase text-muted mb-2">
                Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g. 'This is an e-commerce product card with cart functionality'"
                className="w-full resize-none border border-ink/20 bg-paper px-3 py-2.5 font-mono text-micro text-ink placeholder:text-subtle/60 focus:border-ink focus:outline-none min-h-[5rem]"
                disabled={loading}
                maxLength={2000}
              />
            </div>

            {/* Generate button */}
            <motion.button
              type="button"
              onClick={handleGenerate}
              disabled={!imageFile || loading}
              whileHover={imageFile && !loading ? { y: -1 } : undefined}
              whileTap={imageFile && !loading ? { scale: 0.97 } : undefined}
              className={cn(
                "flex w-full items-center justify-center gap-2 h-12 font-mono text-label tracking-label uppercase transition-all duration-200",
                imageFile && !loading
                  ? "bg-ink text-paper hover:bg-accent hover:text-accent-fg hover:shadow-[0_6px_20px_rgb(255_68_0/0.25)]"
                  : "bg-ink/20 text-ink/40 cursor-not-allowed",
              )}
            >
              {loading ? (
                <>
                  <Sparkles className="size-4 animate-spin" /> Generating…
                </>
              ) : (
                <>
                  <Sparkles className="size-4" /> Generate Full Stack
                </>
              )}
            </motion.button>

            {/* Pipeline progress */}
            <AnimatePresence>
              {loading && currentStep && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <PipelineProgress steps={STEPS} currentStep={currentStep} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-danger/30 bg-danger/5 p-4"
              >
                <p className="font-mono text-label tracking-label uppercase text-danger">Error</p>
                <p className="mt-1 text-sm text-danger/80">{error}</p>
              </motion.div>
            )}
          </div>

          {/* Right panel — Results */}
          <div className="lg:col-span-7 lg:sticky lg:top-[88px]">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 26 }}
                  className="space-y-4"
                >
                  {/* Detected components badges */}
                  {result.detected_components.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <span className="font-mono text-[10px] tracking-label uppercase text-subtle self-center mr-1">
                        Detected:
                      </span>
                      {result.detected_components.map((comp) => (
                        <span
                          key={comp}
                          className="inline-flex h-6 items-center border border-ink/15 bg-paper px-2.5 font-mono text-[10px] tracking-label uppercase text-muted"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tab bar */}
                  <LayoutGroup>
                    <div className="flex border border-ink overflow-hidden">
                      {tabs.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTab(t.id)}
                          className={cn(
                            "relative flex-1 flex items-center justify-center gap-2 h-10 font-mono text-label tracking-label uppercase overflow-hidden transition-colors",
                            tab === t.id ? "text-paper" : "text-muted hover:text-ink",
                          )}
                        >
                          {tab === t.id && (
                            <motion.div
                              layoutId="sketch-result-tab"
                              className="absolute inset-0 bg-ink"
                              transition={{ type: "spring", stiffness: 420, damping: 32 }}
                            />
                          )}
                          <t.icon className="relative size-3.5" />
                          <span className="relative">{t.label}</span>
                        </button>
                      ))}
                    </div>
                  </LayoutGroup>

                  {/* Tab content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tab === "preview" && (
                        <div className="border border-ink overflow-hidden">
                          <div className="flex items-center justify-between border-b border-ink/10 px-3 py-2 bg-cream">
                            <span className="font-mono text-label tracking-label uppercase text-muted">
                              Live Preview
                            </span>
                            <span className="flex items-center gap-1.5 font-mono text-[10px] text-subtle">
                              <span className="size-1.5 rounded-full bg-ok" /> Sandbox
                            </span>
                          </div>
                          <iframe
                            srcDoc={result.sandbox_html}
                            className="w-full bg-white"
                            style={{ minHeight: "28rem" }}
                            sandbox="allow-scripts"
                            title="Generated UI Preview"
                          />
                        </div>
                      )}
                      {tab === "models" && (
                        <CodeBlock
                          code={result.django_models}
                          language="Python"
                          filename="models.py"
                          downloadFilename="models.py"
                        />
                      )}
                      {tab === "api" && (
                        <CodeBlock
                          code={result.drf_serializers}
                          language="Python"
                          filename="serializers.py"
                          downloadFilename="serializers.py"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Raw HTML code block */}
                  {tab === "preview" && (
                    <CodeBlock
                      code={result.html_code}
                      language="HTML"
                      filename="index.html"
                      downloadFilename="index.html"
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center min-h-[28rem] border-2 border-dashed border-ink/10"
                >
                  <div className="paper-grid absolute inset-0 opacity-20 pointer-events-none" />
                  <div className="relative flex flex-col items-center gap-4 p-8 text-center">
                    <motion.div
                      animate={{
                        borderRadius: [
                          "50%",
                          "44% 56% 58% 42% / 52% 44% 56% 48%",
                          "56% 44% 42% 58% / 46% 58% 42% 54%",
                          "50%",
                        ],
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="size-20 bg-ink/5 flex items-center justify-center"
                    >
                      <Sparkles className="size-8 text-subtle" />
                    </motion.div>
                    <p className="font-display text-xl font-black uppercase tracking-tight">
                      Upload a wireframe
                    </p>
                    <p className="text-sm text-muted max-w-xs">
                      Your generated UI preview, Django models, and REST serializers will appear here.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
