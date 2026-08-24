import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, a as Sparkles, c as RotateCcw, d as Menu, f as GitPullRequest, g as ArrowUp, h as Battery, i as Star, l as Play, m as Camera, n as Wifi, o as Signal, p as Check, s as ShoppingBag, t as X, u as Mic } from "../_libs/lucide-react.mjs";
import { a as useScroll, c as AnimatePresence, i as useMotionValue, n as useSpring, r as useTransform, s as LayoutGroup, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as extendTailwindMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DoBgz0UN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLS = [
	{
		kicker: "01 Input",
		title: "Mobile",
		items: [
			"Camera capture",
			"Screen recording",
			"Voice memo"
		]
	},
	{
		kicker: "02 Gateway",
		title: "Django",
		items: [
			"REST router",
			"Celery / Redis",
			"GitHub OAuth"
		]
	},
	{
		kicker: "03 Intelligence",
		title: "Multimodal",
		items: [
			"Gemini 1.5 Flash",
			"Whisper STT",
			"Tree-sitter AST"
		]
	},
	{
		kicker: "04 Output",
		title: "Deliverable",
		items: [
			"Live sandbox UI",
			"Django models",
			"GitHub pull request"
		]
	}
];
function Architecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "architecture",
		className: "border-t border-ink scroll-mt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "font-mono text-label tracking-label uppercase text-muted",
					children: "04 · Blueprint"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .06 },
					className: "mt-3 max-w-3xl font-display text-section font-black uppercase leading-section tracking-section",
					children: "Dual-engine orchestrator."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .1 },
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: "A touch-native PWA on the device. A Python intelligence layer behind it. No desktop IDE required to go from paper to a merged patch."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-mono text-[10px] tracking-label uppercase text-subtle md:hidden",
					children: "Swipe →"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scrollbar-hide mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto border border-ink p-0 md:grid md:grid-cols-4 md:gap-0 md:overflow-visible",
					children: COLS.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						whileHover: { y: -2 },
						className: "group relative w-[78%] shrink-0 snap-center border border-ink/15 bg-surface p-6 transition-colors hover:bg-cream/40 sm:w-[52%] md:w-auto md:shrink md:border-0 md:border-b-0 md:border-r md:border-ink md:bg-transparent md:last:border-r-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center justify-between font-mono text-label tracking-label uppercase text-muted",
								children: [col.kicker, i < COLS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 24 24",
									className: "size-4 text-ink transition-colors group-hover:text-accent",
									"aria-hidden": true,
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M3 12h14",
										strokeDasharray: "3 3",
										className: "dash-move"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 6l6 6-6 6" })]
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-black uppercase",
								children: col.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2",
								children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm text-muted flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 bg-accent shrink-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, { className: "absolute inset-x-0 bottom-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" })
						]
					}, col.title))
				})
			]
		})
	});
}
var ROWS = [
	{
		name: "Copilot / Cursor",
		gap: "Desktop-locked. Cannot ingest paper or a phone screen recording."
	},
	{
		name: "v0 / Bolt",
		gap: "Text prompts only. No camera, schema parse, or patch loop."
	},
	{
		name: "Jira / Loom",
		gap: "Records the bug. Never writes the fix or opens the PR."
	},
	{
		name: "ProtoPatch",
		gap: "Paper in, running stack out. Screen bug in, merged PR out."
	}
];
function Compare() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "compare",
		className: "border-t border-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "font-mono text-label tracking-label uppercase text-muted",
					children: "Why the wrappers fail"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .06 },
					className: "mt-3 font-display text-section font-black uppercase leading-section tracking-section",
					children: "Not another prompt box."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 border-t border-ink overflow-hidden",
					children: ROWS.map((row, i) => {
						const ours = row.name === "ProtoPatch";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .06 },
							whileHover: { x: ours ? 0 : 4 },
							className: ours ? "relative grid gap-2 overflow-hidden border-b border-ink bg-ink px-4 py-5 text-paper sm:grid-cols-12 sm:items-baseline" : "grid gap-2 border-b border-ink px-4 py-5 sm:grid-cols-12 sm:items-baseline hover:bg-cream transition-colors",
							children: [
								ours && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-0 bg-paper",
									initial: { scaleX: 1 },
									whileInView: { scaleX: 0 },
									style: { originX: 1 },
									viewport: { once: true },
									transition: {
										duration: .8,
										ease: [
											.22,
											1,
											.36,
											1
										],
										delay: .25
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "relative font-display text-lg font-black uppercase sm:col-span-4",
									children: [row.name, ours ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "."
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: ours ? "relative text-sm text-paper/75 sm:col-span-8" : "text-sm text-muted sm:col-span-8",
									children: row.gap
								})
							]
						}, row.name);
					})
				})
			]
		})
	});
}
var SKETCH_SEQUENCE = [
	{
		phase: "capture",
		ms: 480
	},
	{
		phase: "enhance",
		ms: 1100
	},
	{
		phase: "scan",
		ms: 1700
	},
	{
		phase: "generate",
		ms: 1900
	},
	{
		phase: "preview",
		ms: 0
	}
];
var PATCH_SEQUENCE = [
	{
		phase: "bug",
		ms: 700
	},
	{
		phase: "record",
		ms: 2400
	},
	{
		phase: "transcribe",
		ms: 1e3
	},
	{
		phase: "ast",
		ms: 1700
	},
	{
		phase: "diff",
		ms: 1500
	},
	{
		phase: "pr",
		ms: 0
	}
];
var DemoContext = (0, import_react.createContext)(null);
function DemoProvider({ children }) {
	const [mode, setModeState] = (0, import_react.useState)("sketch");
	const [sketchPhase, setSketchPhase] = (0, import_react.useState)("idle");
	const [patchPhase, setPatchPhase] = (0, import_react.useState)("idle");
	const [sketchTab, setSketchTab] = (0, import_react.useState)("ui");
	const [running, setRunning] = (0, import_react.useState)(false);
	const [cartCount, setCartCount] = (0, import_react.useState)(0);
	const timers = (0, import_react.useRef)([]);
	const modeRef = (0, import_react.useRef)(mode);
	modeRef.current = mode;
	const clearTimers = (0, import_react.useCallback)(() => {
		for (const id of timers.current) window.clearTimeout(id);
		timers.current = [];
	}, []);
	const reset = (0, import_react.useCallback)(() => {
		clearTimers();
		setRunning(false);
		setSketchPhase("idle");
		setPatchPhase("idle");
		setSketchTab("ui");
		setCartCount(0);
	}, [clearTimers]);
	const setMode = (0, import_react.useCallback)((next) => {
		clearTimers();
		setRunning(false);
		modeRef.current = next;
		setModeState(next);
		setSketchPhase("idle");
		setPatchPhase("idle");
		setSketchTab("ui");
	}, [clearTimers]);
	const play = (0, import_react.useCallback)((next) => {
		const m = next === "sketch" || next === "patch" ? next : modeRef.current;
		if (m !== modeRef.current) {
			modeRef.current = m;
			setModeState(m);
		}
		clearTimers();
		setRunning(true);
		setCartCount(0);
		setSketchTab("ui");
		if (m === "sketch") {
			setSketchPhase("idle");
			let elapsed = 40;
			for (const step of SKETCH_SEQUENCE) {
				const id = window.setTimeout(() => {
					setSketchPhase(step.phase);
					if (step.phase === "preview") setRunning(false);
				}, elapsed);
				timers.current.push(id);
				elapsed += step.ms;
			}
		} else {
			setPatchPhase("idle");
			let elapsed = 40;
			for (const step of PATCH_SEQUENCE) {
				const id = window.setTimeout(() => {
					setPatchPhase(step.phase);
					if (step.phase === "pr") setRunning(false);
				}, elapsed);
				timers.current.push(id);
				elapsed += step.ms;
			}
		}
	}, [clearTimers]);
	(0, import_react.useEffect)(() => () => clearTimers(), [clearTimers]);
	const jumpTo = (0, import_react.useCallback)((phase) => {
		clearTimers();
		setRunning(false);
		if ([
			"idle",
			"capture",
			"enhance",
			"scan",
			"generate",
			"preview"
		].includes(phase)) {
			modeRef.current = "sketch";
			setModeState("sketch");
			setSketchPhase(phase);
			setPatchPhase("idle");
			if (phase === "preview") setCartCount(1);
		} else {
			modeRef.current = "patch";
			setModeState("patch");
			setPatchPhase(phase);
			setSketchPhase("idle");
		}
	}, [clearTimers]);
	const addToBag = (0, import_react.useCallback)(() => {
		setCartCount((n) => n + 1);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		mode,
		sketchPhase,
		patchPhase,
		sketchTab,
		running,
		cartCount,
		setMode,
		setSketchTab,
		play,
		reset,
		addToBag,
		jumpTo
	}), [
		mode,
		sketchPhase,
		patchPhase,
		sketchTab,
		running,
		cartCount,
		setMode,
		play,
		reset,
		addToBag,
		jumpTo
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoContext.Provider, {
		value,
		children
	});
}
function useDemo() {
	const ctx = (0, import_react.useContext)(DemoContext);
	if (!ctx) throw new Error("useDemo must be used within DemoProvider");
	return ctx;
}
var twMerge = extendTailwindMerge({ extend: { classGroups: { "font-size": [
	"text-display",
	"text-section",
	"text-sub",
	"text-micro",
	"text-label"
] } } });
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Button({ variant = "solid", size = "md", icon, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		whileHover: !props.disabled ? { y: -1 } : void 0,
		whileTap: !props.disabled ? { scale: .97 } : void 0,
		transition: {
			type: "spring",
			stiffness: 420,
			damping: 18
		},
		className: cn("group inline-flex items-center justify-center gap-2 font-mono text-label tracking-label uppercase", "transition-[background-color,color,transform,border-color,box-shadow] duration-150 ease-[var(--ease-press)]", "disabled:opacity-40 disabled:cursor-not-allowed", variant === "solid" && "bg-ink text-paper hover:bg-accent hover:text-accent-fg hover:shadow-[0_6px_20px_rgb(255_68_0/0.25)]", variant === "outline" && "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper", variant === "ghost" && "text-ink hover:text-accent", size === "md" && "h-11 px-5", size === "lg" && "h-12 px-6", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex transition-transform duration-200 group-hover:translate-x-0.5",
			children: icon
		})]
	});
}
var REST = {
	x: 2,
	y: -4
};
function PhoneFrame({ children, className, onSwipeLeft, onSwipeRight }) {
	const ref = (0, import_react.useRef)(null);
	const [tilt, setTilt] = (0, import_react.useState)(REST);
	const [hover, setHover] = (0, import_react.useState)(false);
	const reduce = (0, import_react.useRef)(false);
	const coarse = (0, import_react.useRef)(false);
	const dragX = useMotionValue(0);
	const springX = useSpring(dragX, {
		stiffness: 420,
		damping: 30
	});
	const dragRotate = useTransform(springX, [-120, 120], [-8, 8]);
	(0, import_react.useEffect)(() => {
		reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		coarse.current = window.matchMedia("(hover: none)").matches;
		if (coarse.current || reduce.current) setTilt(REST);
		const onOrient = (e) => {
			if (reduce.current) return;
			const beta = e.beta ?? 0;
			const gamma = e.gamma ?? 0;
			if (Math.abs(beta) < 2 && Math.abs(gamma) < 2) return;
			setTilt({
				x: REST.x + Math.max(-6, Math.min(6, (beta - 45) * .14)),
				y: REST.y + Math.max(-7, Math.min(7, gamma * .18))
			});
		};
		window.addEventListener("deviceorientation", onOrient, true);
		return () => window.removeEventListener("deviceorientation", onOrient);
	}, []);
	function onMove(e) {
		if (reduce.current || coarse.current) return;
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		setTilt({
			x: REST.x + py * -7,
			y: REST.y + px * 10
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative touch-pan-y select-none", className),
		style: { perspective: "2000px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pointer-events-none mx-auto mb-3 hidden w-fit rounded-full border border-ink/10 bg-paper px-3 py-1 font-mono text-[10px] tracking-label uppercase text-subtle sm:block lg:hidden",
			children: "Drag phone ← → to switch engines · Hover to tilt"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onPointerMove: onMove,
			onPointerEnter: () => setHover(true),
			onPointerLeave: () => {
				setHover(false);
				if (!coarse.current) setTilt(REST);
			},
			drag: "x",
			dragConstraints: {
				left: 0,
				right: 0
			},
			dragElastic: .18,
			dragMomentum: false,
			style: {
				x: springX,
				rotateY: dragRotate
			},
			onDragEnd: (_, info) => {
				const v = info.offset.x;
				if (v < -70) onSwipeLeft?.();
				else if (v > 70) onSwipeRight?.();
				dragX.set(0);
			},
			className: "relative mx-auto h-phone w-phone cursor-grab active:cursor-grabbing",
			animate: {
				rotateX: tilt.x,
				rotateY: tilt.y
			},
			transition: hover ? {
				type: "spring",
				stiffness: 260,
				damping: 22
			} : {
				type: "spring",
				stiffness: 120,
				damping: 18
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 rounded-phone bg-ink shadow-phone",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-phone bg-linear-to-br from-paper/15 via-transparent to-ink/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-2.5 overflow-hidden rounded-screen bg-paper",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-3.5 z-20 h-5 w-24 -translate-x-1/2 rounded-pill bg-ink" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-3.5 left-1/2 z-20 h-1 w-28 -translate-x-1/2 rounded-pill bg-ink/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 rounded-phone opacity-[0.07]",
					style: { background: `radial-gradient(520px 320px at ${50 + tilt.y * 3}% ${28 - tilt.x * 2}%, white, transparent 62%)` }
				})
			]
		})]
	});
}
function StatusBar({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: light ? "flex h-11 items-end justify-between px-5 pb-1 text-paper" : "flex h-11 items-end justify-between px-5 pb-1 text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-micro font-medium tabular-nums",
			children: "9:41"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, {
					className: "size-3",
					strokeWidth: 2.4
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {
					className: "size-3",
					strokeWidth: 2.4
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Battery, {
					className: "size-3.5",
					strokeWidth: 2.4
				})
			]
		})]
	});
}
function PatchScreen() {
	const { patchPhase, play } = useDemo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-label tracking-label uppercase text-muted",
					children: "ScreenToPatch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-label tracking-label uppercase text-subtle",
					children: labelFor$1(patchPhase)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
					mode: "popLayout",
					children: [
						patchPhase === "idle" || patchPhase === "bug" || patchPhase === "record" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -8
							},
							transition: { duration: .28 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BugView, {
								recording: patchPhase === "record",
								highlight: patchPhase !== "idle",
								onRecord: play
							})
						}, "bug") : null,
						patchPhase === "transcribe" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								y: 10,
								filter: "blur(6px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							exit: { opacity: 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranscribeView, {})
						}, "tr") : null,
						patchPhase === "ast" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AstView, {})
						}, "ast") : null,
						patchPhase === "diff" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffView, {})
						}, "diff") : null,
						patchPhase === "pr" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								scale: .97
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: { opacity: 0 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrView, {})
						}, "pr") : null
					]
				})
			})
		]
	});
}
function labelFor$1(phase) {
	switch (phase) {
		case "idle": return "Ready";
		case "bug": return "Glitch";
		case "record": return "Rec 0:05";
		case "transcribe": return "Whisper";
		case "ast": return "AST scan";
		case "diff": return "Diff";
		case "pr": return "PR #14";
	}
}
function BugView({ recording, highlight, onRecord }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col overflow-hidden bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-black uppercase leading-tight",
					children: "Checkout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-label tracking-label uppercase text-muted",
					children: "Aurora tee · qty 1"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-4 mt-3 border border-ink/15 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono tabular-nums",
							children: "$48.00"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono tabular-nums",
							children: "$6.00"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between border-t border-ink/15 pt-2 font-display text-base font-black",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: "$54.00"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pt-3 text-micro text-muted",
				children: "Deliver to 14 Market St · ETA Friday"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative mt-auto h-28 overflow-hidden", highlight && "ring-2 ring-inset ring-accent"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					type: "button",
					tabIndex: -1,
					layoutId: "cta-morph",
					animate: {
						y: highlight ? 0 : 18,
						height: highlight ? 48 : 36
					},
					transition: {
						type: "spring",
						stiffness: 340,
						damping: 28
					},
					className: "absolute bottom-4 left-4 right-4 flex items-center justify-center bg-ink font-mono text-label tracking-label uppercase text-paper",
					style: { y: highlight ? 0 : 18 },
					children: "Place order"
				}), !highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-paper to-transparent pointer-events-none" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: recording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					y: 80,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				exit: {
					y: 80,
					opacity: 0
				},
				transition: {
					type: "spring",
					stiffness: 320,
					damping: 28
				},
				className: "absolute inset-x-0 bottom-0 bg-ink/96 px-4 py-3 text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rec-dot size-2 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-label tracking-label uppercase",
							children: "Recording"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex h-8 items-end gap-0.5",
						children: Array.from({ length: 28 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "w-1 bg-accent",
							animate: { scaleY: [
								.35,
								1,
								.55,
								.9,
								.4
							] },
							transition: {
								duration: .9,
								repeat: Infinity,
								delay: i % 8 * .07
							},
							style: {
								height: `${10 + i * 37 % 22}px`,
								transformOrigin: "bottom"
							}
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-micro leading-snug text-paper/80",
						children: "“The submit button is clipped on Android screens.”"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				onClick: () => {
					try {
						navigator.vibrate?.(15);
					} catch {}
					onRecord();
				},
				whileTap: { scale: .92 },
				whileHover: {
					scale: 1.06,
					y: -2
				},
				className: "absolute bottom-16 right-4 flex size-12 items-center justify-center rounded-full bg-accent text-accent-fg shadow-phone",
				"aria-label": "Record bug",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" })
			}) })
		]
	});
}
function TranscribeView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-code p-4 text-code-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-label tracking-label uppercase text-accent",
				children: "Whisper · 98.4%"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: .15 },
				className: "mt-4 font-sans text-sm leading-relaxed",
				children: "The submit button is clipped on Android screens."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: .32 },
				className: "mt-6 space-y-2 font-mono text-micro text-code-fg/70",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "intent · overflow clip" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "target · btn.place-order" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "fix · safe-area + mb-4" })
				]
			})
		]
	});
}
var FILES = [
	{
		name: "src/",
		kind: "dir",
		hit: false
	},
	{
		name: "  components/",
		kind: "dir",
		hit: false
	},
	{
		name: "    CartSheet.tsx",
		kind: "file",
		hit: false
	},
	{
		name: "    CheckoutFooter.tsx",
		kind: "file",
		hit: true
	},
	{
		name: "    ProductCard.tsx",
		kind: "file",
		hit: false
	},
	{
		name: "  styles.css",
		kind: "file",
		hit: false
	}
];
function AstView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-code p-4 text-code-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-label tracking-label uppercase text-accent",
				children: "Tree-sitter scan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-1 font-mono text-micro",
				children: FILES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						x: 8
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: { delay: .08 * i },
					className: cn("px-2 py-1 rounded-sm", f.hit && "bg-accent text-accent-fg"),
					children: [f.hit ? "▸ " : "  ", f.name]
				}, f.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-auto font-mono text-label tracking-label uppercase text-subtle",
				children: "Match · line 42"
			})
		]
	});
}
function DiffView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-auto bg-code p-3 font-mono text-label leading-relaxed text-code-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-subtle",
				children: "CheckoutFooter.tsx"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					x: -6,
					opacity: 0
				},
				animate: {
					x: 0,
					opacity: 1
				},
				className: "mt-2 text-danger",
				children: "- overflow-hidden pb-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					x: -6,
					opacity: 0
				},
				animate: {
					x: 0,
					opacity: 1
				},
				transition: { delay: .08 },
				className: "text-add",
				children: "+ overflow-visible pb-6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					x: -6,
					opacity: 0
				},
				animate: {
					x: 0,
					opacity: 1
				},
				transition: { delay: .16 },
				className: "mt-2 text-danger",
				children: "- className=\"btn-submit\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					x: -6,
					opacity: 0
				},
				animate: {
					x: 0,
					opacity: 1
				},
				transition: { delay: .24 },
				className: "text-add",
				children: "+ className=\"btn-submit mb-4\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-subtle",
				children: "safe-area-inset-bottom applied ✓"
			})
		]
	});
}
function PrView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-paper p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitPullRequest, { className: "size-4 text-ok" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-label tracking-label uppercase text-ok",
					children: "Open · merged"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-xl font-black uppercase leading-tight",
				children: "Fix clipped checkout CTA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-micro text-muted",
				children: "proto.patch/fix/ai-patch-14"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-2 border border-ink/15 p-3 text-micro leading-relaxed text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-ink",
					children: "Bug."
				}), " Place Order is clipped on Android viewports."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-ink",
					children: "Fix."
				}), " Restore overflow and add safe-area padding."] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				whileHover: { scale: 1.02 },
				whileTap: { scale: .98 },
				className: "mt-auto flex h-11 items-center justify-center bg-ok font-mono text-label tracking-label uppercase text-paper",
				children: "Review PR #14"
			})
		]
	});
}
function NapkinSketch({ enhanced = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 320",
		className: "h-full w-full",
		"aria-hidden": true,
		style: { filter: enhanced ? "contrast(1.35) saturate(0.2)" : "contrast(0.92) brightness(1.04)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
				id: "rough",
				x: "-8%",
				y: "-8%",
				width: "116%",
				height: "116%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
					type: "turbulence",
					baseFrequency: "0.05",
					numOctaves: "2",
					seed: "3",
					result: "n"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
					in: "SourceGraphic",
					in2: "n",
					scale: "1.6"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pattern", {
				id: "paper",
				width: "8",
				height: "8",
				patternUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "8",
					height: "8",
					fill: "#f3ead6"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 8 L8 0",
					stroke: "#e4d7b8",
					strokeWidth: "0.4"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "240",
				height: "320",
				fill: "url(#paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: "#1a1a1a",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				filter: "url(#rough)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "28",
						y: "22",
						width: "184",
						height: "276"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "44",
						y: "38",
						width: "152",
						height: "92"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M52 54 h40 M52 66 h28",
						strokeWidth: "1.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "168",
						cy: "78",
						r: "16"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M160 78 h16 M168 70 v16",
						strokeWidth: "1.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M48 148 h120",
						strokeWidth: "2.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M48 162 h86",
						strokeWidth: "1.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M48 178 l8 -8 8 4 8 -6 8 8",
						strokeWidth: "1.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "48",
						y: "206",
						fontFamily: "ui-monospace, monospace",
						fontSize: "13",
						fill: "#111",
						stroke: "none",
						filter: "none",
						children: "$48"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "48",
						y: "224",
						width: "128",
						height: "32"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M64 240 h96",
						strokeWidth: "1.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M170 268 c18 -6 28 10 12 18",
						strokeWidth: "1.1"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "112",
				y: "244",
				textAnchor: "middle",
				fontFamily: "ui-monospace, monospace",
				fontSize: "9",
				letterSpacing: "1.4",
				fill: "#111",
				children: "ADD TO BAG"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "48",
				y: "144",
				fontFamily: "ui-sans-serif, system-ui, sans-serif",
				fontSize: "11",
				fontWeight: "700",
				fill: "#111",
				children: "AURORA TEE"
			})
		]
	});
}
var GEN_LINES = [
	{
		delay: 0,
		text: "vision.parse(napkin.jpg)"
	},
	{
		delay: .18,
		text: "layout · product-card · 4 regions"
	},
	{
		delay: .38,
		text: "ocr · \"AURORA TEE\" · \"$48\""
	},
	{
		delay: .58,
		text: "emit · ProductCard.tsx"
	},
	{
		delay: .78,
		text: "emit · models.Product"
	},
	{
		delay: .98,
		text: "sandbox · hot-reload ok"
	}
];
function SketchScreen() {
	const { sketchPhase, sketchTab, setSketchTab, play, running, addToBag, cartCount } = useDemo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-4 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-label tracking-label uppercase text-muted",
					children: "Sketch2Stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-label tracking-label uppercase text-subtle",
					children: labelFor(sketchPhase)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
					mode: "popLayout",
					children: [
						sketchPhase === "idle" || sketchPhase === "capture" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								scale: .97,
								filter: "blur(6px)"
							},
							animate: {
								opacity: 1,
								scale: 1,
								filter: "blur(0px)"
							},
							exit: {
								opacity: 0,
								scale: 1.02,
								filter: "blur(6px)"
							},
							transition: {
								duration: .38,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraView, {
								onShutter: play,
								capturing: sketchPhase === "capture"
							})
						}, "cam") : null,
						sketchPhase === "enhance" || sketchPhase === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: { duration: .32 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanView, { phase: sketchPhase })
						}, "scan") : null,
						sketchPhase === "generate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -8
							},
							transition: { duration: .34 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GenerateView, {})
						}, "gen") : null,
						sketchPhase === "preview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							layout: true,
							className: "absolute inset-0",
							initial: {
								opacity: 0,
								y: 12,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: { opacity: 0 },
							transition: {
								type: "spring",
								stiffness: 280,
								damping: 26
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewView, {
								tab: sketchTab,
								onTab: setSketchTab,
								onAdd: addToBag,
								cartCount
							})
						}, "prev") : null
					]
				})
			}),
			running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 bg-cream overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-accent",
					initial: { width: "0%" },
					animate: { width: "100%" },
					transition: {
						duration: 5.2,
						ease: "linear"
					}
				})
			}) : null
		]
	});
}
function labelFor(phase) {
	switch (phase) {
		case "idle": return "Ready";
		case "capture": return "Shutter";
		case "enhance": return "Ink boost";
		case "scan": return "Vision";
		case "generate": return "Compile";
		case "preview": return "Live";
	}
}
function CameraView({ onShutter, capturing }) {
	const doShutter = () => {
		try {
			navigator.vibrate?.(18);
		} catch {}
		onShutter();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			layoutId: "napkin-morph",
			className: "relative mx-3 mt-1 min-h-0 flex-1 overflow-hidden rounded-md bg-cream",
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 28
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 origin-center p-4",
					animate: {
						rotate: capturing ? 0 : -4,
						scale: capturing ? 1 : 1.1
					},
					transition: {
						type: "spring",
						stiffness: 180,
						damping: 22
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full w-full shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NapkinSketch, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-6 border border-paper/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 border border-paper/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: capturing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "shutter-flash pointer-events-none absolute inset-0 bg-paper",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 }
				}) : null })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-8 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-paper/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					type: "button",
					onClick: doShutter,
					"aria-label": "Capture sketch",
					whileTap: { scale: .88 },
					whileHover: { scale: 1.04 },
					className: "size-14 rounded-full border-4 border-paper bg-paper/20 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "block size-10 rounded-full bg-paper",
						animate: { scale: capturing ? .72 : 1 },
						transition: {
							type: "spring",
							stiffness: 400,
							damping: 20
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4 text-paper/50" })
			]
		})]
	});
}
function ScanView({ phase }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-full bg-cream p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			layoutId: "napkin-morph",
			className: "relative h-full overflow-hidden border border-ink/20 bg-paper",
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 28
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NapkinSketch, { enhanced: phase !== "enhance" }), phase === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "scan-line pointer-events-none absolute right-3 left-3 h-px bg-accent",
					initial: { top: "8%" },
					animate: { top: [
						"8%",
						"88%",
						"8%"
					] },
					transition: {
						duration: 1.45,
						repeat: Infinity,
						ease: "easeInOut"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
					className: "left-[18%] top-[12%] h-[28%] w-[64%]",
					delay: "0.1s"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
					className: "left-[18%] top-[44%] h-[8%] w-[48%]",
					delay: "0.35s"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
					className: "left-[18%] top-[68%] h-[10%] w-[54%]",
					delay: "0.55s"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					y: 8,
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				className: "absolute bottom-3 left-3 right-3 bg-ink px-3 py-2 font-mono text-label tracking-label uppercase text-paper",
				children: "Adaptive threshold · boosting ink"
			})]
		})
	});
}
function Box({ className, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pointer-events-none absolute border border-accent/90", className),
		style: { animation: `ink-pop 280ms var(--ease-out-soft) ${delay} both` }
	});
}
function GenerateView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-code px-4 py-3 text-code-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-label tracking-label uppercase text-accent",
				children: "Dual emit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2 font-mono text-micro",
				children: GEN_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						x: 6
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						delay: line.delay,
						duration: .25
					},
					className: "text-code-fg/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "›"
						}),
						" ",
						line.text
					]
				}, line.text))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "mt-auto h-1 bg-white/10 overflow-hidden rounded-full",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: .2 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-accent",
					initial: { width: 0 },
					animate: { width: "100%" },
					transition: {
						duration: 1.9,
						ease: "easeInOut"
					}
				})
			})
		]
	});
}
function PreviewView({ tab, onTab, onAdd, cartCount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex border-b border-ink/10 relative",
			children: [
				{
					id: "ui",
					label: "Live UI"
				},
				{
					id: "models",
					label: "models.py"
				},
				{
					id: "api",
					label: "REST"
				}
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onTab(t.id),
				className: cn("relative h-9 flex-1 font-mono text-label tracking-label uppercase overflow-hidden", tab === t.id ? "text-paper" : "text-muted hover:text-ink"),
				children: [tab === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layoutId: "sketch-tab",
					className: "absolute inset-0 bg-ink",
					transition: {
						type: "spring",
						stiffness: 420,
						damping: 32
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative",
					children: t.label
				})]
			}, t.id))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 6,
						filter: "blur(4px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					exit: {
						opacity: 0,
						y: -6,
						filter: "blur(4px)"
					},
					transition: { duration: .24 },
					className: "h-full",
					children: tab === "ui" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveCard, {
						onAdd,
						cartCount
					}) : tab === "models" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePane, { code: MODELS }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodePane, { code: API })
				}, tab)
			})
		})]
	});
}
function LiveCard({ onAdd, cartCount }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-black uppercase tracking-tight",
					children: "Aurora"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: cartCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: { scale: 0 },
						animate: { scale: 1 },
						className: "absolute -right-2 -top-2 flex size-4 items-center justify-center bg-accent font-mono text-label text-accent-fg",
						children: cartCount
					}, cartCount) : null })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layoutId: "napkin-morph",
				className: "aspect-4/3 border border-ink bg-cream overflow-hidden",
				transition: {
					type: "spring",
					stiffness: 260,
					damping: 28
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 160 120",
					className: "h-full w-full",
					"aria-hidden": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "160",
							height: "120",
							fill: "#e8e8e0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "118",
							cy: "38",
							r: "22",
							fill: "#ff4400"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M20 96 L70 52 L110 78 L160 40 V120 H20 Z",
							fill: "#111"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-base font-black uppercase leading-tight",
					children: "Aurora Tee"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 flex items-center gap-0.5 text-ink",
					children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-ink" }, i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm tabular-nums",
					children: "$48"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				type: "button",
				onClick: () => {
					try {
						navigator.vibrate?.(12);
					} catch {}
					onAdd();
				},
				whileTap: { scale: .97 },
				whileHover: { scale: 1.01 },
				className: "mt-4 flex h-11 w-full items-center justify-center gap-2 bg-ink font-mono text-label tracking-label uppercase text-paper transition-colors hover:bg-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: cartCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							scale: .9,
							opacity: 0
						},
						animate: {
							scale: 1,
							opacity: 1
						},
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }),
							" Added · ",
							cartCount
						]
					}, "added") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						children: "Add to bag"
					}, "add")
				})
			})
		]
	});
}
function CodePane({ code }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "h-full overflow-auto bg-code p-3 font-mono text-label leading-relaxed text-code-fg",
		children: code
	});
}
var MODELS = `class Product(models.Model):
    name = models.CharField(
        max_length=120)
    price = models.DecimalField(
        max_digits=8, decimal_places=2)
    stock = models.PositiveIntegerField(
        default=0)
    rating = models.DecimalField(
        max_digits=3, decimal_places=2)`;
var API = `@router.register("products")
class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_fields = ["stock"]

# GET  /api/products
# POST /api/products`;
var SKETCH_STEPS = [
	{
		id: "capture",
		label: "Capture"
	},
	{
		id: "enhance",
		label: "Ink enhance"
	},
	{
		id: "scan",
		label: "Vision parse"
	},
	{
		id: "generate",
		label: "Dual emit"
	},
	{
		id: "preview",
		label: "Hot reload"
	}
];
var PATCH_STEPS = [
	{
		id: "bug",
		label: "Spot glitch"
	},
	{
		id: "record",
		label: "Voice + video"
	},
	{
		id: "transcribe",
		label: "Whisper"
	},
	{
		id: "ast",
		label: "AST locate"
	},
	{
		id: "diff",
		label: "Write diff"
	},
	{
		id: "pr",
		label: "Open PR"
	}
];
function DemoStage() {
	const { mode, setMode, play, reset, running, sketchPhase, patchPhase, jumpTo } = useDemo();
	const steps = mode === "sketch" ? SKETCH_STEPS : PATCH_STEPS;
	const phase = mode === "sketch" ? sketchPhase : patchPhase;
	const activeIndex = steps.findIndex((s) => s.id === phase);
	const progress = phase === "idle" ? 0 : activeIndex === -1 ? 100 : (activeIndex + 1) / steps.length * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "demo",
		className: "border-t border-ink scroll-mt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:items-start lg:gap-6 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 lg:col-span-3 lg:sticky lg:top-[72px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-label tracking-label uppercase text-muted",
							children: "00 · Live engine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-section font-black uppercase leading-section tracking-section",
							children: "Run it on the device."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm text-muted",
							children: "Switch modes, then play the pipeline. The phone is a working prototype — drag it to switch, scrub the timeline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col border border-ink overflow-hidden lg:flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeBtn, {
								active: mode === "sketch",
								onClick: () => setMode("sketch"),
								kicker: "Mode 01",
								label: "Sketch2Stack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeBtn, {
								active: mode === "patch",
								onClick: () => setMode("patch"),
								kicker: "Mode 02",
								label: "ScreenToPatch"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border border-ink bg-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-ink/10 px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] tracking-label uppercase text-muted",
										children: "Pipeline"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] tracking-label uppercase text-subtle",
										children: [Math.round(progress), "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-1.5 bg-cream mx-3 mt-3 overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "absolute inset-y-0 left-0 bg-accent",
										animate: { width: `${progress}%` },
										transition: {
											type: "spring",
											stiffness: 160,
											damping: 22
										}
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-ink border-2 border-paper shadow",
										animate: { left: `calc(${progress}% - 5px)` },
										transition: {
											type: "spring",
											stiffness: 260,
											damping: 20
										}
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-3",
									children: steps.map((step, i) => {
										const state = phase === "idle" ? "todo" : i < activeIndex ? "done" : i === activeIndex ? "now" : "todo";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												"aria-label": `Jump to ${step.label}`,
												onClick: () => jumpTo(step.id),
												className: cn("flex w-full cursor-pointer items-center justify-between px-3 py-2.5 text-left border-t border-ink/5 first:border-t-0 transition-colors", state === "now" && "bg-ink text-paper", state === "done" && "bg-ink/5 hover:bg-ink/10", state === "todo" && "hover:bg-cream"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: cn("font-mono text-micro tracking-label uppercase flex items-center gap-2", state === "now" ? "text-paper" : "text-ink"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("text-[10px] opacity-60", state === "now" && "text-accent opacity-100"),
														children: String(i + 1).padStart(2, "0")
													}), step.label]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full transition-all duration-300", state === "now" && "bg-accent scale-125", state === "done" && "bg-ok", state === "todo" && "bg-ink/20") })]
											}), state === "now" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												layoutId: "active-row",
												className: "absolute inset-0 -z-10 bg-ink",
												transition: {
													type: "spring",
													stiffness: 380,
													damping: 30
												}
											})]
										}, step.id);
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								whileTap: { scale: .97 },
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => play(),
									disabled: running,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 fill-current" }),
									className: "w-full justify-center",
									children: running ? "Running" : "Play sequence"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: reset,
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }),
								children: "Reset"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex items-center gap-1 font-mono text-[10px] tracking-wide uppercase text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), " Tap shutter / mic on device"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center py-2 lg:col-span-5 lg:sticky lg:top-[88px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, {
						onSwipeLeft: () => setMode("patch"),
						onSwipeRight: () => setMode("sketch"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "popLayout",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layout: true,
								initial: {
									opacity: 0,
									scale: .98,
									filter: "blur(8px)"
								},
								animate: {
									opacity: 1,
									scale: 1,
									filter: "blur(0px)"
								},
								exit: {
									opacity: 0,
									scale: 1.02,
									filter: "blur(8px)"
								},
								transition: {
									duration: .42,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "h-full",
								children: mode === "sketch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchScreen, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatchScreen, {})
							}, mode)
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:col-span-4 lg:block lg:sticky lg:top-[88px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[clamp(30rem,42vw,36rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputPanel, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileOutput, {})
				})
			]
		}) })
	});
}
function ModeBtn({ active, onClick, kicker, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("relative flex-1 px-4 py-3.5 text-left transition-colors duration-200 overflow-hidden border-b border-ink last:border-b-0", active ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-cream"),
		children: [
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layoutId: "mode-bg",
				className: "absolute inset-0 bg-ink",
				transition: {
					type: "spring",
					stiffness: 420,
					damping: 32
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("relative block font-mono text-label tracking-label uppercase", active ? "text-paper/55" : "text-subtle"),
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative mt-1 block font-display text-base font-black uppercase leading-tight",
				children: label
			})
		]
	});
}
function OutputPanel() {
	const { mode, sketchPhase, patchPhase, sketchTab, setSketchTab } = useDemo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-96 flex-col border border-ink bg-code text-code-fg overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-white/10 px-4 py-3 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-label tracking-label uppercase",
				children: "Sidecar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] tracking-label uppercase text-white/40",
					children: mode
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent animate-pulse" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-auto p-4 font-mono text-micro leading-relaxed",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -6
					},
					transition: { duration: .2 },
					children: mode === "sketch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchLog, {
						phase: sketchPhase,
						tab: sketchTab,
						onTab: setSketchTab
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatchLog, { phase: patchPhase })
				}, mode + sketchPhase + patchPhase)
			})
		})]
	});
}
function MobileOutput() {
	const { mode, sketchPhase, patchPhase, sketchTab, setSketchTab } = useDemo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-ink bg-code text-code-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3 border-b border-white/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-label tracking-label uppercase",
				children: "Sidecar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", sketchPhase !== "idle" || patchPhase !== "idle" ? "bg-accent" : "bg-white/20") })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4 font-mono text-micro leading-relaxed",
			children: mode === "sketch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SketchLog, {
				phase: sketchPhase,
				tab: sketchTab,
				onTab: setSketchTab
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatchLog, { phase: patchPhase })
		})]
	});
}
function SketchLog({ phase, tab, onTab }) {
	if (phase === "idle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-code-fg/60",
		children: "Point the camera at a paper wireframe. Tap the shutter on the device or play the sequence. Drag phone to morph."
	});
	if (phase === "preview") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-accent",
			children: "sandbox mounted ✓"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2",
			children: "ProductCard.tsx · models.py · /api/products"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex gap-2",
			children: [
				"ui",
				"models",
				"api"
			].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onTab(t),
				className: cn("relative h-8 border px-3 uppercase tracking-label text-label overflow-hidden", tab === t ? "border-accent text-accent-fg" : "border-white/20 text-code-fg"),
				children: [tab === t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layoutId: "tab-pill",
					className: "absolute inset-0 bg-accent"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative",
					children: t
				})]
			}, t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-4 whitespace-pre-wrap text-code-fg/80",
			children: tab === "models" ? "class Product(models.Model):\n    name = CharField(120)\n    price = DecimalField(8,2)\n    stock = PositiveIntegerField()" : tab === "api" ? "GET  /api/products\nPOST /api/products\n\nViewSet + serializer ready." : "Live UI is interactive on-device.\nAdd to bag increments cart."
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-accent",
			children: "›"
		}),
		" phase ",
		phase,
		"\n",
		"streaming vision tokens…"
	] });
}
function PatchLog({ phase }) {
	if (phase === "idle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-code-fg/60",
		children: "A clipped checkout CTA is already on-screen. Record a voice note or play the sequence to open PR #14."
	});
	if (phase === "pr") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-accent",
			children: "pull request opened ✓"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2",
			children: "github.com/protopatch/demo/pull/14"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-code-fg/80",
			children: [
				"branch fix/ai-patch-14",
				"\n",
				"+ overflow-visible pb-6",
				"\n",
				"+ mb-4 safe-area"
			]
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-accent",
			children: "›"
		}),
		" phase ",
		phase,
		"\n",
		"locating CheckoutFooter.tsx"
	] });
}
function Engines() {
	const { setMode, play } = useDemo();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl lg:grid-cols-2",
			children: [{
				id: "sketch",
				kicker: "02 · Genesis friction",
				icon: Camera,
				title: "Sketch2Stack",
				copy: "Eighty-five percent of architecture still starts on paper. Photograph a wireframe. In fifteen seconds the engine emits a live Tailwind UI and production Django models.",
				bullets: [
					"Client-side ink enhancement and contrast boost",
					"Vision model extracts layout, labels, and relations",
					"Frontend: semantic HTML + Tailwind utilities",
					"Backend: ORM models, serializers, REST routes"
				],
				cta: "Run Sketch2Stack",
				mode: "sketch"
			}, {
				id: "patch",
				kicker: "03 · Maintenance friction",
				icon: GitPullRequest,
				title: "ScreenToPatch",
				copy: "Testers burn a third of the week reproducing mobile bugs. Record five seconds, speak the issue, and the engine opens a GitHub pull request with the exact diff.",
				bullets: [
					"Whisper transcription of the voice memo",
					"Frame-level visual glitch hypothesis",
					"Tree-sitter AST search across the repo",
					"PyGithub branch, commit, and PR dispatch"
				],
				cta: "Run ScreenToPatch",
				mode: "patch",
				outline: true
			}].map((e, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				id: e.id,
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: {
					duration: .45,
					delay: idx * .08
				},
				whileHover: { y: -2 },
				className: "group border-b border-ink px-4 py-12 sm:px-8 sm:py-16 lg:border-b-0 lg:border-r last:border-r-0 scroll-mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-label tracking-label uppercase text-muted",
						children: e.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							whileHover: {
								rotate: 6,
								scale: 1.06
							},
							className: "flex size-10 items-center justify-center border border-ink bg-paper group-hover:bg-ink group-hover:text-paper transition-colors duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-section font-black uppercase leading-section tracking-section",
							children: e.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-sm leading-relaxed text-muted",
						children: e.copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 divide-y divide-ink/10 border-y border-ink/10",
						children: e.bullets.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -6
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { delay: .06 * i },
							className: "flex items-start gap-3 py-3 font-mono text-micro tracking-wide uppercase text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1.5 shrink-0 bg-accent group-hover:scale-125 transition-transform" }), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						whileHover: { scale: 1.01 },
						whileTap: { scale: .98 },
						className: "mt-8 inline-block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: e.outline ? "outline" : "solid",
							onClick: () => {
								setMode(e.mode);
								document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
								window.setTimeout(() => play(e.mode), 400);
							},
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }),
							children: e.cta
						})
					})
				]
			}, e.id))
		})
	});
}
var TICKER = [
	"Napkin in → full stack out",
	"Screen bug in → merged PR out",
	"15s sketch to stack",
	"Voice note → working diff",
	"Built for flagship Android"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-b border-paper/10 py-3",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker-track flex w-max items-center gap-10 whitespace-nowrap",
				children: [
					...TICKER,
					...TICKER,
					...TICKER,
					...TICKER
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-10 font-mono text-label tracking-label uppercase text-paper/45",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1 rounded-full bg-accent/70" })]
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .45 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl font-black uppercase tracking-tight",
					children: [
						"Proto",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-subtle",
							children: "."
						}),
						"Patch",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-sm text-sm leading-relaxed text-paper/70",
					children: "From napkin prototype to merged patch in thirty seconds. A multimodal developer engine built for the iQOO National Hackathon — productivity and developer velocity, measured."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6 lg:flex-col lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-label tracking-label uppercase text-paper/50",
					children: "iQOO National Hackathon · Phase 1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
					type: "button",
					"aria-label": "Back to top",
					whileHover: { y: -3 },
					whileTap: { scale: .94 },
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "flex size-11 items-center justify-center border border-paper/25 text-paper/70 transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-accent-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
				})]
			})]
		})]
	});
}
var NAV = [
	{
		id: "overview",
		num: "01",
		label: "Overview"
	},
	{
		id: "sketch",
		num: "02",
		label: "Sketch2Stack"
	},
	{
		id: "patch",
		num: "03",
		label: "ScreenToPatch"
	},
	{
		id: "architecture",
		num: "04",
		label: "Architecture"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("overview");
	const { setMode, play } = useDemo();
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	(0, import_react.useEffect)(() => {
		const els = NAV.map((n) => document.getElementById(n.id)).filter((el) => Boolean(el));
		if (els.length === 0) return;
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-40% 0px -50% 0px",
			threshold: [
				0,
				.25,
				.5
			]
		});
		for (const el of els) io.observe(el);
		return () => io.disconnect();
	}, []);
	function go(id) {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		if (id === "sketch") setMode("sketch");
		if (id === "patch") setMode("patch");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute bottom-0 left-0 h-0.5 bg-accent origin-left",
				style: { scaleX }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#overview",
						className: "font-display text-lg font-black tracking-tight uppercase",
						onClick: (e) => {
							e.preventDefault();
							go("overview");
						},
						children: [
							"Proto",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: "."
							}),
							"Patch",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const isActive = active === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => go(item.id),
								className: cn("relative flex h-9 items-center gap-2 border px-3 font-mono text-label tracking-label uppercase overflow-hidden transition-colors duration-150", isActive ? "border-ink text-paper" : "border-ink/10 bg-paper text-muted hover:border-ink hover:text-ink"),
								children: [
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										layoutId: "nav-active",
										className: "absolute inset-0 bg-ink",
										transition: {
											type: "spring",
											stiffness: 420,
											damping: 30
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("relative", isActive ? "text-accent" : "text-subtle"),
										children: item.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative",
										children: item.label
									})
								]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileHover: { scale: 1.02 },
							whileTap: { scale: .97 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "md",
								className: "hidden sm:inline-flex",
								onClick: () => {
									document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
									play();
								},
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "↗"
								}),
								children: "Run a demo"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center border border-ink lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								initial: false,
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										rotate: -90,
										opacity: 0
									},
									animate: {
										rotate: 0,
										opacity: 1
									},
									exit: {
										rotate: 90,
										opacity: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
								}, "x") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										rotate: 90,
										opacity: 0
									},
									animate: {
										rotate: 0,
										opacity: 1
									},
									exit: {
										rotate: -90,
										opacity: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								}, "m")
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				transition: {
					duration: .24,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "overflow-hidden border-t border-ink bg-paper lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-7xl flex-col px-4 py-2",
					"aria-label": "Mobile",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(item.id),
						className: "flex h-12 items-center justify-between border-b border-ink/5 font-mono text-micro tracking-label uppercase last:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-subtle",
							children: item.num
						})]
					}, item.id))
				})
			}) : null })
		]
	});
}
var PILLS = [
	"Sketch2Stack",
	"ScreenToPatch",
	"iQOO Hackathon"
];
function Hero() {
	const { setMode, play } = useDemo();
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const gridY = useTransform(scrollYProgress, [0, 1], [0, 72]);
	const blobX = useTransform(scrollYProgress, [0, 1], [0, 28]);
	const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "overview",
		ref,
		className: "relative overflow-hidden scroll-mt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y: gridY },
				className: "pointer-events-none absolute inset-0 paper-grid opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					x: blobX,
					scale: blobScale
				},
				className: "pointer-events-none absolute -right-16 top-[38%] hidden size-[380px] bg-accent/8 blur-[1px] morph-blob lg:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { x: useTransform(scrollYProgress, [0, 1], [0, -18]) },
				className: "pointer-events-none absolute -left-12 bottom-8 hidden size-[220px] bg-ink/[0.04] morph-blob lg:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .42 },
						className: "flex flex-wrap gap-2",
						children: PILLS.map((pill, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .08 * i,
								duration: .32
							},
							className: "inline-flex h-7 items-center rounded-pill border border-ink/15 bg-paper px-3 font-mono text-label tracking-label uppercase text-muted",
							children: pill
						}, pill))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-8 sm:mt-9",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-full font-display text-display font-black uppercase leading-display tracking-display text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									y: 18
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .52,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "block",
								children: "From Napkin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: {
									opacity: 0,
									y: 18
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .52,
									delay: .08,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "mt-1 flex flex-wrap items-center gap-x-4 gap-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["To Patch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									"aria-hidden": true,
									initial: { scale: 0 },
									animate: {
										scale: 1,
										borderRadius: [
											"50%",
											"44% 56% 58% 42% / 52% 44% 56% 48%",
											"56% 44% 42% 58% / 46% 58% 42% 54%",
											"50%"
										]
									},
									transition: {
										scale: {
											type: "spring",
											stiffness: 260,
											damping: 18,
											delay: .42
										},
										borderRadius: {
											duration: 9,
											repeat: Infinity,
											ease: "easeInOut",
											delay: 1
										}
									},
									className: "size-10 shrink-0 bg-ink sm:size-14 lg:size-[4.2rem]"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								scale: 0
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: { delay: .58 },
							"aria-hidden": true,
							className: "absolute right-[18%] top-[56%] hidden size-3 rounded-full bg-accent lg:block"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .32,
							duration: .4
						},
						className: "mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:mt-12 sm:gap-8 sm:pt-10 lg:grid-cols-12 lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-sub leading-body text-muted lg:col-span-7",
							children: "Official portal for the multimodal developer engine that turns hand-drawn wireframes into live full-stack apps, and five-second bug recordings into autonomous GitHub pull requests."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								whileHover: { scale: 1.02 },
								whileTap: { scale: .98 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									onClick: () => {
										document.getElementById("sketch")?.scrollIntoView({ behavior: "smooth" });
										setMode("sketch");
									},
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }),
									children: "Explore engines"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								whileHover: { scale: 1.02 },
								whileTap: { scale: .98 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									variant: "outline",
									onClick: () => {
										document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
										play();
									},
									children: ["Mine a patch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "ml-1",
										children: "↗"
									})]
								})
							})]
						})]
					})
				]
			})
		]
	});
}
var STACK = [
	{
		name: "Django REST",
		role: "Orchestrator"
	},
	{
		name: "Gemini 1.5 Flash",
		role: "Vision LLM"
	},
	{
		name: "Whisper",
		role: "Speech to text"
	},
	{
		name: "Tree-sitter",
		role: "AST search"
	},
	{
		name: "PyGithub",
		role: "PR dispatch"
	},
	{
		name: "React PWA",
		role: "Mobile client"
	},
	{
		name: "Celery + Redis",
		role: "Async workers"
	},
	{
		name: "Tailwind CSS",
		role: "Generated UI"
	}
];
var HARDWARE = [
	{
		title: "Macro / OIS camera",
		copy: "Reads faint pencil and micro-annotations without a scanner."
	},
	{
		title: "Multi-mic array",
		copy: "Noise-cancelled voice notes in a loud hall or office."
	},
	{
		title: "On-device NPU",
		copy: "Local ink preprocessing and optional offline SLM inference."
	},
	{
		title: "High-refresh AMOLED",
		copy: "Sixty-frame sandbox preview of the generated interface."
	}
];
var METRICS = [
	{
		value: "15s",
		label: "Sketch to stack",
		numeric: 15,
		suffix: "s"
	},
	{
		value: "30s",
		label: "Napkin to patch",
		numeric: 30,
		suffix: "s"
	},
	{
		value: "10×",
		label: "Prototype velocity",
		numeric: 10,
		suffix: "×"
	},
	{
		value: "80%",
		label: "Faster bug turnaround",
		numeric: 80,
		suffix: "%"
	}
];
function Stack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "font-mono text-label tracking-label uppercase text-muted",
					children: "Stack · Hardware · Impact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					initial: {
						opacity: 0,
						y: 8
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .06 },
					className: "mt-3 font-display text-section font-black uppercase leading-section tracking-section",
					children: "Built for flagship Android."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: { delay: .1 },
					className: "mt-10 grid grid-cols-1 border-l border-t border-ink xs:grid-cols-2 sm:grid-cols-4",
					children: STACK.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .04 },
						whileHover: { y: -2 },
						className: "group border-b border-r border-ink p-4 transition-[background-color,color,box-shadow] duration-200 hover:bg-ink hover:text-paper hover:shadow-[5px_5px_0_0_var(--color-accent)] cursor-default",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-black uppercase leading-tight",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-label tracking-label uppercase text-muted group-hover:text-paper/70",
							children: item.role
						})]
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-black uppercase",
						children: "iQOO synergy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-ink/10 border-y border-ink/10",
						children: HARDWARE.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							initial: {
								opacity: 0,
								x: -6
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { delay: i * .05 },
							className: "grid grid-cols-12 gap-4 py-4 hover:bg-cream/50 transition-colors px-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "col-span-5 font-mono text-micro tracking-wide uppercase",
								children: row.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "col-span-7 text-sm text-muted",
								children: row.copy
							})]
						}, row.title))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 border-l border-t border-ink",
						children: METRICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-r border-ink p-5 hover:bg-cream transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Count, {
								value: m.numeric,
								suffix: m.suffix
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-label tracking-label uppercase text-muted",
								children: m.label
							})]
						}, m.label))
					})]
				})
			]
		})
	});
}
function Count({ value, suffix }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const mv = useMotionValue(0);
	const spring = useSpring(mv, {
		stiffness: 90,
		damping: 20
	});
	const text = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (inView) mv.set(value);
	}, [
		inView,
		value,
		mv
	]);
	(0, import_react.useEffect)(() => spring.on("change", (v) => {
		if (text.current) text.current.textContent = Math.round(v).toString();
	}), [spring]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		ref,
		className: "font-display text-4xl font-black tracking-display",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref: text,
				children: "0"
			}),
			suffix,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: "."
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoStage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Engines, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compare, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	}) });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
