import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Bot, Layers, Gauge, ShieldCheck, Globe2, Mail, Send, Linkedin, Instagram, Twitter, Github, Activity } from "lucide-react";
const quorbitLogo = "/assets/quorbit-logo-DASv7J26.jpg";
const CYAN = "#00F0FF";
const CORAL = "#FF5A36";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const links = ["Platform", "Solutions", "Projects", "Company"];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(motion.header, { initial: {
    y: -40,
    opacity: 0
  }, animate: {
    y: 0,
    opacity: 1
  }, transition: {
    type: "spring",
    stiffness: 120,
    damping: 18
  }, className: `fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled ? "w-[88%] max-w-5xl" : "w-[94%] max-w-6xl"}`, children: /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 backdrop-blur-md transition-all duration-500 ${scrolled ? "py-2 shadow-[0_10px_40px_-10px_rgba(0,240,255,0.25)]" : "py-3"}`, children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "relative h-9 w-9", animate: {
        rotate: [0, 0]
      }, whileHover: {
        rotate: 12,
        scale: 1.08
      }, transition: {
        type: "spring",
        stiffness: 200
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full", style: {
          background: `radial-gradient(circle, ${CYAN}80, transparent 70%)`,
          filter: "blur(8px)"
        } }),
        /* @__PURE__ */ jsx("img", { src: quorbitLogo, alt: "Quorbit Labs", className: "relative h-9 w-9 rounded-md object-cover" })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold tracking-[0.2em] text-white", children: [
        "QUORBIT",
        /* @__PURE__ */ jsx("span", { style: {
          color: CYAN
        }, children: "·" }),
        "LABS"
      ] })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 md:flex", onMouseLeave: () => setHovered(null), children: links.map((l) => /* @__PURE__ */ jsxs("a", { href: `#${l.toLowerCase()}`, onMouseEnter: () => setHovered(l), className: "relative rounded-lg px-3 py-1.5 text-sm text-white/70 transition-colors hover:text-white", children: [
      hovered === l && /* @__PURE__ */ jsx(motion.span, { layoutId: "nav-pill", transition: {
        type: "spring",
        stiffness: 380,
        damping: 30
      }, className: "absolute inset-0 rounded-lg bg-white/10" }),
      /* @__PURE__ */ jsx("span", { className: "relative", children: l })
    ] }, l)) }),
    /* @__PURE__ */ jsxs(motion.button, { whileHover: {
      scale: 1.04
    }, whileTap: {
      scale: 0.97
    }, className: "relative overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold text-[#030712]", style: {
      backgroundColor: CYAN
    }, children: [
      /* @__PURE__ */ jsx(motion.span, { className: "absolute inset-0", animate: {
        boxShadow: [`0 0 0 0 ${CYAN}80`, `0 0 0 12px ${CYAN}00`]
      }, transition: {
        duration: 1.8,
        repeat: Infinity
      } }),
      /* @__PURE__ */ jsx("span", { className: "relative", children: "Request Demo" })
    ] })
  ] }) });
}
function Hero() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { ref, id: "top", className: "relative flex min-h-screen items-center justify-center overflow-hidden pt-32", children: [
    /* @__PURE__ */ jsxs(motion.div, { style: {
      y
    }, className: "pointer-events-none absolute inset-0", children: [
      [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx(motion.div, { className: "absolute left-1/2 top-1/2 rounded-full border border-white/5", style: {
        width: `${300 + i * 220}px`,
        height: `${300 + i * 220}px`,
        x: "-50%",
        y: "-50%",
        borderColor: i % 2 === 0 ? `${CYAN}15` : `${CORAL}12`
      }, animate: {
        rotate: i % 2 === 0 ? 360 : -360
      }, transition: {
        duration: 40 + i * 10,
        repeat: Infinity,
        ease: "linear"
      }, children: /* @__PURE__ */ jsx("div", { className: "absolute h-2 w-2 rounded-full", style: {
        top: "-4px",
        left: "50%",
        background: i % 2 === 0 ? CYAN : CORAL,
        boxShadow: `0 0 16px ${i % 2 === 0 ? CYAN : CORAL}`
      } }) }, i)),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30", style: {
        background: `radial-gradient(circle, ${CYAN}30, transparent 60%)`
      } })
    ] }),
    /* @__PURE__ */ jsxs(motion.div, { variants: container, initial: "hidden", animate: "visible", className: "relative z-10 mx-auto max-w-5xl px-6 text-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5", style: {
          color: CYAN
        } }),
        "Now in private beta — Q2 2026"
      ] }),
      /* @__PURE__ */ jsxs(motion.h1, { variants: item, className: "text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl", children: [
        "Intelligent AI.",
        " ",
        /* @__PURE__ */ jsx("span", { style: {
          background: `linear-gradient(135deg, ${CYAN}, #7dd3fc)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }, children: "Autonomous Modules." }),
        /* @__PURE__ */ jsx("br", {}),
        "One Unified Platform."
      ] }),
      /* @__PURE__ */ jsx(motion.p, { variants: item, className: "mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/60", children: "Quorbit Labs fuses conversational AI, autonomous business modules and intelligent automation into a single enterprise operating system." }),
      /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxs(motion.button, { whileHover: {
          scale: 1.04,
          boxShadow: `0 0 40px ${CYAN}80`
        }, whileTap: {
          scale: 0.97
        }, className: "group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-[#030712]", style: {
          backgroundColor: CYAN,
          boxShadow: `0 0 24px ${CYAN}50`
        }, children: [
          "Explore AI Suites",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxs(motion.button, { whileHover: {
          scale: 1.04,
          borderColor: CORAL,
          boxShadow: `0 0 30px ${CORAL}60`
        }, whileTap: {
          scale: 0.97
        }, className: "group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm", children: [
          "View Projects",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1", style: {
            color: CORAL
          } })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { variants: item, className: "mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8", children: [{
        v: "99.99%",
        l: "Uptime SLA"
      }, {
        v: "120ms",
        l: "Avg AI Latency"
      }, {
        v: "ISO 27001",
        l: "Certified"
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: s.v }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-white/40", children: s.l })
      ] }, s.l)) })
    ] })
  ] });
}
function ProductSuite() {
  const accent = CYAN;
  const aiCards = [{
    icon: Bot,
    title: "Conversational AI Chatbots",
    desc: "Enterprise-grade multilingual agents trained on your data with sub-second responses."
  }, {
    icon: Layers,
    title: "AIMS Business Modules",
    desc: "Autonomous Intelligence Management — finance, ops, HR, all orchestrated by AI."
  }, {
    icon: Gauge,
    title: "Real-time Insights Engine",
    desc: "Live KPIs, anomaly detection and predictive scoring across every workflow."
  }];
  return /* @__PURE__ */ jsx("section", { id: "platform", style: {
    scrollMarginTop: "6rem"
  }, className: "relative px-6 py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsx(motion.h2, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "text-4xl font-black tracking-tight text-white md:text-5xl", children: "The Core Engine" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-white/60", children: "One AI-native control plane orchestrating every module of your business." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-center gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5", children: aiCards.map((c, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 110,
        damping: 18
      }, whileHover: {
        y: -4
      }, className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40", style: {
          background: accent
        } }),
        /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl", style: {
          background: `${accent}20`,
          color: accent
        }, children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: c.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/60", children: c.desc })
      ] }, c.title)) }),
      /* @__PURE__ */ jsx(FloatingDashboard, {})
    ] })
  ] }) });
}
function FloatingDashboard() {
  const [activeChat, setActiveChat] = useState(0);
  const messages = [{
    q: "How many quizzes were auto-graded today?",
    a: "1,284 quizzes scored in 42s"
  }, {
    q: "Forecast Q3 revenue for EMEA.",
    a: "€14.2M projected · 94% confidence"
  }, {
    q: "Top risk in operations today?",
    a: "Inventory drift in 3 warehouses"
  }];
  useEffect(() => {
    const i = setInterval(() => setActiveChat((v) => (v + 1) % messages.length), 4200);
    return () => clearInterval(i);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative h-[520px] w-full", style: {
    perspective: "1400px"
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full", style: {
      background: `radial-gradient(circle, ${CYAN}40, transparent 65%)`,
      filter: "blur(40px)"
    } }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      x: -40,
      y: -10
    }, whileInView: {
      opacity: 1,
      x: 0,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 90
    }, className: "absolute left-0 top-12 z-20", children: /* @__PURE__ */ jsxs(motion.div, { animate: {
      y: [0, -8, 0]
    }, transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-xl", style: {
      boxShadow: `0 20px 60px -20px ${CYAN}50`
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-white/50", children: "Active Users" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-white", children: "12,480" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", style: {
          color: CYAN
        }, children: "+18.2%" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      x: 40,
      y: -10
    }, whileInView: {
      opacity: 1,
      x: 0,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 90
    }, className: "absolute right-0 top-4 z-20", children: /* @__PURE__ */ jsxs(motion.div, { animate: {
      y: [0, -10, 0]
    }, transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.8
    }, className: "flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-xl", style: {
      boxShadow: `0 20px 60px -20px ${CYAN}50`
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full", style: {
        background: `${CYAN}25`
      }, children: /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4", style: {
        color: CYAN
      } }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-white/50", children: "Engagement" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl font-black text-white", children: "94.6%" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold", style: {
            color: CYAN
          }, children: "+4.1%" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      scale: 0.9,
      rotateX: 50
    }, whileInView: {
      opacity: 1,
      scale: 1,
      rotateX: 42
    }, viewport: {
      once: true
    }, transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }, className: "absolute left-1/2 top-1/2 z-10 h-[340px] w-[480px] -translate-x-1/2 -translate-y-1/2", style: {
      transformStyle: "preserve-3d",
      rotateZ: "-8deg"
    }, children: /* @__PURE__ */ jsxs(motion.div, { animate: {
      y: [0, -6, 0]
    }, transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }, className: "relative h-full w-full rounded-[28px] border border-white/15 bg-gradient-to-br from-[#0a1628] to-[#04080f] p-4", style: {
      boxShadow: `0 0 60px ${CYAN}40, 0 0 120px ${CYAN}20, inset 0 0 30px rgba(0,0,0,0.6)`
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid h-full grid-cols-3 grid-rows-3 gap-2", children: [
        Array.from({
          length: 6
        }).map((_, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0
        }, whileInView: {
          opacity: 1
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.4 + i * 0.08
        }, className: "rounded-lg border border-white/5 bg-white/[0.03] p-2", style: {
          gridColumn: i === 0 ? "span 2" : "span 1",
          gridRow: i === 0 ? "span 1" : "span 1"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "mb-1 h-1 w-8 rounded-full bg-white/10" }),
          /* @__PURE__ */ jsx(MiniChart, { seed: i })
        ] }, i)),
        /* @__PURE__ */ jsx("div", { className: "col-span-3 row-span-1 flex items-center justify-around rounded-lg border border-white/5 bg-white/[0.03] px-3", children: [0.5, 0.8, 0.3, 0.9, 0.6, 0.7, 0.4].map((h, i) => /* @__PURE__ */ jsx(motion.div, { className: "w-2 rounded-sm", style: {
          background: `linear-gradient(180deg, ${CYAN}, ${CYAN}40)`
        }, initial: {
          height: 0
        }, whileInView: {
          height: `${h * 100}%`
        }, viewport: {
          once: true
        }, transition: {
          delay: 0.6 + i * 0.05,
          duration: 0.6,
          ease: "easeOut"
        } }, i)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-1 rounded-[32px]", style: {
        background: `linear-gradient(135deg, ${CYAN}30, transparent 40%, transparent 60%, ${CYAN}30)`,
        filter: "blur(20px)",
        opacity: 0.6,
        zIndex: -1
      } })
    ] }) }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 90
    }, className: "absolute bottom-2 right-0 z-30 w-[260px]", children: /* @__PURE__ */ jsxs(motion.div, { animate: {
      y: [0, -6, 0]
    }, transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.2
    }, className: "rounded-2xl border border-white/15 bg-white/[0.06] p-3 backdrop-blur-xl", style: {
      boxShadow: `0 20px 60px -20px ${CYAN}60`
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full", style: {
          background: `${CYAN}30`
        }, children: /* @__PURE__ */ jsx(Bot, { className: "h-3.5 w-3.5", style: {
          color: CYAN
        } }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-white", children: "Quorbit Assistant" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[9px] text-white/50", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: {
              background: CYAN,
              boxShadow: `0 0 6px ${CYAN}`
            } }),
            "Online · AI"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 6
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -6
      }, transition: {
        duration: 0.3
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-white/[0.04] px-2.5 py-2 text-[11px] text-white/80", children: messages[activeChat].q }),
        /* @__PURE__ */ jsx("div", { className: "mt-1.5 rounded-lg px-2.5 py-2 text-[11px] font-medium", style: {
          background: `${CYAN}18`,
          color: CYAN
        }, children: messages[activeChat].a })
      ] }, activeChat) })
    ] }) })
  ] });
}
function MiniChart({
  seed
}) {
  const points = Array.from({
    length: 12
  }).map((_, i) => {
    const v = 50 + Math.sin((i + seed) * 0.9) * 22 + Math.cos(i * 0.4 + seed) * 10;
    return `${i / 11 * 100},${100 - v}`;
  });
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "none", className: "h-[calc(100%-8px)] w-full", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `mg-${seed}`, x1: "0", x2: "0", y1: "0", y2: "1", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: CYAN, stopOpacity: "0.5" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: CYAN, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsx(motion.polyline, { points: points.join(" "), fill: "none", stroke: CYAN, strokeWidth: "1.5", initial: {
      pathLength: 0
    }, whileInView: {
      pathLength: 1
    }, viewport: {
      once: true
    }, transition: {
      duration: 1.5,
      delay: 0.3 + seed * 0.1
    } }),
    /* @__PURE__ */ jsx("polygon", { points: `0,100 ${points.join(" ")} 100,100`, fill: `url(#mg-${seed})`, opacity: "0.7" })
  ] });
}
const PROJECTS = [{
  title: "EduFlow — AI-Powered LMS & School Management",
  category: "LMS / Education",
  desc: "End-to-end cloud school management and learning platform — from admin operations to AI-graded assignments, plagiarism detection, and auto-generated lesson slides. Built on Next.js for speed, SEO, and scale.",
  stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI", "Tailwind"],
  metrics: ["Unlimited students", "AI grading", "Multi-portal"],
  image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200",
  featured: true,
  tone: CYAN,
  client: "K-12 & Higher-Ed Institutions",
  year: "2025",
  challenge: "Schools were juggling 6+ disconnected tools — attendance, fees, gradebooks, LMS, comms — with zero AI assistance for teachers drowning in lesson prep, grading, and plagiarism review.",
  outcome: "Shipped EduFlow as a modular Next.js platform with five tiered packages, role-based portals for admin, teachers, parents and students, and an optional AI layer that auto-generates slides, quizzes, and grades submissions with plagiarism checks.",
  tiers: [{
    name: "Basic",
    tagline: "Cloud school management essentials",
    setup: "PKR 50,000 setup",
    monthly: "PKR 10,000 / month",
    features: ["Cloud-based school management", "Admin dashboard & user roles", "Attendance, classes & timetables", "Fees & basic reporting", "Email + standard support"]
  }, {
    name: "Standard",
    tagline: "Adds student portal, unlimited scale",
    setup: "PKR 80,000 setup",
    monthly: "PKR 20,000 / month",
    features: ["Everything in Basic", "Dedicated student portal", "Unlimited students & staff", "Announcements & messaging", "Advanced reporting (no AI)"]
  }, {
    name: "Elite",
    tagline: "Full LMS + all role portals",
    setup: "PKR 150,000 setup",
    monthly: "PKR 70,000 / month",
    features: ["Admin, teacher, parent & student portals", "Full CRUD across every module", "Assignments, quizzes & submissions", "Manual grading & gradebook", "Course content & resources"],
    highlight: true
  }, {
    name: "Premium AI",
    tagline: "Elite + full AI teaching layer",
    setup: "PKR 220,000 setup",
    monthly: "PKR 100,000 / month",
    features: ["Everything in Elite", "AI plagiarism detection", "AI quiz & assignment generation", "AI auto-grading with feedback", "AI slide generator for any topic"]
  }, {
    name: "Custom White-Label",
    tagline: "Your brand, your AI LMS",
    setup: "PKR 400,000 setup",
    monthly: "PKR 100,000 / month",
    features: ["Fully custom AI-powered LMS", "Your logo, name & domain", "Tailored modules & workflows", "Priority roadmap & SLA", "Dedicated success engineer"]
  }]
}, {
  title: "KMC Karachi — Citizen Services Portal",
  category: "Web Development",
  desc: "Full-stack MERN portal digitizing public services and administrative workflows for the Karachi Metropolitan Corporation.",
  stack: ["React", "Node.js", "MongoDB", "D3.js"],
  metrics: ["+40% engagement", "60% faster data", "99.9% uptime"],
  image: "https://m4softwares.com/14.jpg",
  featured: true,
  tone: CYAN,
  client: "Karachi Metropolitan Corporation",
  year: "2024",
  challenge: "Replace fragmented paper-based municipal workflows with a unified digital portal handling millions of citizen requests across 18 districts.",
  outcome: "Shipped a role-based dashboard with realtime D3 analytics, reducing average request resolution from 11 days to 4 and lifting citizen engagement by 40%."
}, {
  title: "Healthcare Telemedicine App",
  category: "Mobile Apps",
  desc: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers seamlessly.",
  stack: ["React Native", "Firebase", "WebRTC", "Stripe"],
  metrics: ["10K+ users", "4.8★ rating", "−50% wait time"],
  image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
  featured: true,
  tone: CORAL,
  client: "Private Healthcare Network",
  year: "2024",
  challenge: "Build a secure cross-platform consultation app with low-latency video, encrypted records, and integrated billing under strict HIPAA constraints.",
  outcome: "Launched on iOS + Android with end-to-end encrypted WebRTC, scaling to 10K+ active patients in the first quarter and a 4.8★ store rating."
}, {
  title: "ImmortalBoost — Gaming Services",
  category: "Web Development",
  desc: "High-converting platform for a professional gaming boost service with tiered offerings and secure global checkout.",
  stack: ["React", "PHP", "JavaScript"],
  metrics: ["Global checkout", "Tiered pricing", "Trust-first UX"],
  image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tone: CYAN,
  client: "ImmortalBoost",
  year: "2023",
  challenge: "Convert a niche gaming-services audience with a checkout flow that builds trust across regions and currencies.",
  outcome: "Rebuilt the storefront with a tiered pricing engine and Stripe-backed global checkout, doubling conversion within 8 weeks."
}, {
  title: "AI Conversational Chatbot",
  category: "AI / ML",
  desc: "NLP-driven chatbot automating customer support and handling complex queries with sub-second responses.",
  stack: ["Python", "TensorFlow", "OpenAI API"],
  metrics: ["24/7 support", "Multi-intent", "Continuous learning"],
  image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  featured: true,
  tone: CORAL,
  client: "SaaS Customer-Success Team",
  year: "2024",
  challenge: "Cut a growing ticket backlog without sacrificing the empathetic tone of the in-house support team.",
  outcome: "Deployed a multi-intent assistant that auto-resolves 62% of tickets and hands warm context to humans for the rest."
}, {
  title: "Cloud Infrastructure Automation",
  category: "Cloud Solutions",
  desc: "Secure, highly-available AWS architecture with automated scaling, failover and real-time alerting.",
  stack: ["EC2", "RDS", "VPC", "Auto Scaling", "Route 53"],
  metrics: ["Zero-downtime", "Auto-scale", "IaC"],
  image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tone: CYAN,
  client: "Fintech Platform",
  year: "2023",
  challenge: "Migrate a monolithic stack to a fault-tolerant cloud topology without a single second of customer downtime.",
  outcome: "Codified the entire stack as IaC with blue-green deploys, achieving zero-downtime cutover and 4× faster release cadence."
}, {
  title: "Crypto Analytics Dashboard",
  category: "UI / UX Design",
  desc: "Intuitive dashboard letting traders monitor portfolios, track trends and execute trades seamlessly.",
  stack: ["Figma", "Data Viz", "Sass"],
  metrics: ["Realtime feed", "Custom widgets", "Dark-first"],
  image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tone: CORAL,
  client: "Crypto Trading Startup",
  year: "2024",
  challenge: "Surface dense market data without overwhelming retail traders — fast scanning, calm hierarchy, custom layouts.",
  outcome: "Designed a dark-first dashboard with composable widgets that lifted DAU 35% and shortened time-to-decision by 22%."
}];
const PROJECT_FILTERS = ["All", "LMS / Education", "Web Development", "Mobile Apps", "AI / ML", "UI / UX Design", "Cloud Solutions"];
function ProjectModal({
  project,
  onClose
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: project && /* @__PURE__ */ jsxs(motion.div, { className: "fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8", initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, exit: {
    opacity: 0
  }, children: [
    /* @__PURE__ */ jsx(motion.div, { className: "absolute inset-0 bg-black/70 backdrop-blur-md", onClick: onClose, initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    } }),
    /* @__PURE__ */ jsxs(motion.div, { role: "dialog", "aria-modal": "true", "aria-label": project.title, className: "relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B132B]", initial: {
      opacity: 0,
      y: 40,
      scale: 0.96
    }, animate: {
      opacity: 1,
      y: 0,
      scale: 1
    }, exit: {
      opacity: 0,
      y: 20,
      scale: 0.97
    }, transition: {
      type: "spring",
      stiffness: 220,
      damping: 26
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "relative h-56 shrink-0 overflow-hidden sm:h-72", children: [
        /* @__PURE__ */ jsx(motion.img, { src: project.image, alt: project.title, className: "h-full w-full object-cover", initial: {
          scale: 1.15
        }, animate: {
          scale: 1
        }, transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent" }),
        /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur transition hover:bg-black/70 hover:text-white", "aria-label": "Close", children: "✕" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-5 right-5 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#030712]", style: {
            backgroundColor: project.tone
          }, children: project.category }),
          project.year && /* @__PURE__ */ jsx("span", { className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur", children: project.year }),
          project.client && /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-white/70", children: [
            "· ",
            project.client
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { className: "flex-1 overflow-y-auto p-6 sm:p-8", initial: "hidden", animate: "visible", variants: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15
          }
        }
      }, children: [/* @__PURE__ */ jsx("h3", { className: "text-2xl font-black tracking-tight text-white sm:text-3xl", children: project.title }, "t"), /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/70", children: project.desc }, "d"), /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/10 bg-white/[0.03] p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-wider", style: {
            color: project.tone
          }, children: "The Challenge" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-white/75", children: project.challenge })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/10 bg-white/[0.03] p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-wider", style: {
            color: project.tone
          }, children: "The Outcome" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-white/75", children: project.outcome })
        ] })
      ] }, "cha"), /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-3 gap-3", children: project.metrics.map((m) => /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-white", children: m }) }, m)) }, "m"), /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] font-bold uppercase tracking-wider text-white/50", children: "Tech Stack" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: project.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70", children: s }, s)) })
      ] }, "s"), ...project.tiers ? [/* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-white/50", children: "Packages" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] text-white/40", children: "Pick the right fit for your school" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: project.tiers.map((t) => /* @__PURE__ */ jsxs(motion.div, { whileHover: {
          y: -3
        }, transition: {
          type: "spring",
          stiffness: 280,
          damping: 22
        }, className: `relative rounded-2xl border p-4 ${t.highlight ? "border-transparent bg-gradient-to-b from-white/[0.06] to-white/[0.02]" : "border-white/10 bg-white/[0.03]"}`, style: t.highlight ? {
          boxShadow: `0 0 0 1px ${project.tone}55, 0 18px 50px -20px ${project.tone}66`
        } : void 0, children: [
          t.highlight && /* @__PURE__ */ jsx("span", { className: "absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#030712]", style: {
            backgroundColor: project.tone
          }, children: "Most Popular" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-white", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] text-white/55", children: t.tagline }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-0.5", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[13px] font-semibold text-white", children: t.setup }),
            /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-white/60", children: [
              t.monthly,
              " maintenance"
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-1.5", children: t.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2 text-[11px] leading-relaxed text-white/70", children: [
            /* @__PURE__ */ jsx("span", { style: {
              color: project.tone
            }, children: "✓" }),
            /* @__PURE__ */ jsx("span", { children: f })
          ] }, f)) })
        ] }, t.name)) })
      ] }, "tiers")] : []].map((node, idx) => /* @__PURE__ */ jsx(motion.div, { variants: {
        hidden: {
          opacity: 0,
          y: 16
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 180,
            damping: 22
          }
        }
      }, children: node }, idx)) })
    ] })
  ] }) });
}
function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const counts = {
    All: PROJECTS.length
  };
  PROJECT_FILTERS.slice(1).forEach((f) => {
    counts[f] = PROJECTS.filter((p) => p.category === f).length;
  });
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "relative scroll-mt-24 px-6 py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, className: "mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3", style: {
              color: CYAN
            } }),
            " Featured Work"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black tracking-tight text-white md:text-5xl", children: "Projects we've shipped" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xl text-white/60", children: "From civic platforms to AI chatbots — 10+ projects delivered across industries with a 98% success rate." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 md:flex md:gap-8", children: [{
          v: "10+",
          l: "Projects"
        }, {
          v: "9+",
          l: "Clients"
        }, {
          v: "300%",
          l: "Avg ROI"
        }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-white/40", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-8 flex flex-wrap gap-2", children: PROJECT_FILTERS.map((f) => {
        const isActive = filter === f;
        return /* @__PURE__ */ jsxs(motion.button, { onClick: () => setFilter(f), whileTap: {
          scale: 0.94
        }, className: "relative rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white", children: [
          isActive && /* @__PURE__ */ jsx(motion.span, { layoutId: "filter-pill", transition: {
            type: "spring",
            stiffness: 380,
            damping: 32
          }, className: "absolute inset-0 rounded-full", style: {
            background: `linear-gradient(135deg, ${CYAN}, ${CORAL})`,
            boxShadow: `0 8px 24px -8px ${CYAN}66`
          } }),
          /* @__PURE__ */ jsxs("span", { className: "relative inline-flex items-center gap-1.5", style: {
            color: isActive ? "#030712" : void 0
          }, children: [
            f,
            /* @__PURE__ */ jsx("span", { className: `rounded-full px-1.5 py-px text-[9px] font-bold ${isActive ? "bg-[#030712]/15 text-[#030712]" : "bg-white/10 text-white/50"}`, children: counts[f] })
          ] })
        ] }, f);
      }) }),
      /* @__PURE__ */ jsx(motion.div, { layout: true, className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "popLayout", children: [
        visible.length === 0 && /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, className: "col-span-full rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-white/50", children: "No projects in this category yet." }, "empty"),
        visible.map((p, i) => /* @__PURE__ */ jsxs(motion.article, { layout: true, initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          scale: 0.95
        }, transition: {
          delay: i * 0.05,
          type: "spring",
          stiffness: 120,
          damping: 18
        }, whileHover: {
          y: -6
        }, onClick: () => setActive(p), className: "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
            /* @__PURE__ */ jsx(motion.img, { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover", whileHover: {
              scale: 1.08
            }, transition: {
              duration: 0.6
            } }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute left-3 top-3 flex gap-2", children: [
              p.featured && /* @__PURE__ */ jsx("span", { className: "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#030712]", style: {
                backgroundColor: p.tone
              }, children: "Featured" }),
              /* @__PURE__ */ jsx("span", { className: "rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm", children: p.category })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: p.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/60", children: p.desc }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/60", children: s }, s)) }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4", children: p.metrics.map((m) => /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium text-white/70", children: m }) }, m)) }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: (e) => {
              e.stopPropagation();
              setActive(p);
            }, className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors", style: {
              color: p.tone
            }, children: [
              "View case study ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40", style: {
            background: p.tone
          } })
        ] }, p.title))
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(ProjectModal, { project: active, onClose: () => setActive(null) })
  ] });
}
function WhyUs() {
  const items = [{
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Enterprise SLAs, redundant infrastructure across 12 regions, zero-trust security.",
    tone: CYAN,
    span: "md:col-span-1 md:row-span-2"
  }, {
    icon: Gauge,
    title: "Algorithmic Scale",
    desc: "Process billions of geometric operations and tokens per day without breaking a sweat.",
    tone: CORAL,
    span: "md:col-span-2"
  }, {
    icon: Globe2,
    title: "Global Standards",
    desc: "ISO 27001, SOC 2 Type II, GDPR — every layer audited.",
    tone: CYAN,
    span: "md:col-span-1"
  }, {
    icon: Sparkles,
    title: "Composable by Design",
    desc: "Mix AI, data and automation modules through a single API surface. Build once, run anywhere.",
    tone: CORAL,
    span: "md:col-span-1"
  }];
  return /* @__PURE__ */ jsx("section", { id: "solutions", style: {
    scrollMarginTop: "6rem"
  }, className: "px-6 py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-black tracking-tight text-white md:text-5xl", children: "Why teams choose Quorbit" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-white/60", children: "Built for enterprises that refuse to compromise between intelligence and precision." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-50px"
    }, transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 110,
      damping: 18
    }, whileHover: {
      y: -6
    }, className: `group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm ${it.span}`, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50", style: {
        background: it.tone
      } }),
      /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl", style: {
        background: `${it.tone}20`,
        color: it.tone
      }, children: /* @__PURE__ */ jsx(it.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: it.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/60", children: it.desc })
    ] }, it.title)) })
  ] }) });
}
function ContactFooter() {
  const [focus, setFocus] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    msg: ""
  });
  const [sent, setSent] = useState(false);
  const fields = [{
    key: "name",
    label: "Full name"
  }, {
    key: "email",
    label: "Work email",
    type: "email"
  }, {
    key: "company",
    label: "Company",
    full: true
  }, {
    key: "msg",
    label: "How can we help?",
    full: true
  }];
  return /* @__PURE__ */ jsx("footer", { id: "company", style: {
    scrollMarginTop: "6rem"
  }, className: "relative px-6 pt-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl font-black tracking-tight text-white md:text-5xl", children: [
          "Let's build the",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { style: {
            background: `linear-gradient(135deg, ${CYAN}, ${CORAL})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }, children: "next decade together." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-white/60", children: "Tell us about your stack. We'll show you what a unified AI platform looks like in production." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 text-sm text-white/70", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4", style: {
            color: CYAN
          } }),
          /* @__PURE__ */ jsx("a", { href: "mailto:musabkhan703@gmail.com", className: "transition-colors hover:text-white", children: "musabkhan703@gmail.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2500);
      }, className: "grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md", children: [
        fields.map((f) => /* @__PURE__ */ jsxs("div", { className: `relative ${f.full ? "col-span-2" : "col-span-1"}`, children: [
          /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-[11px] uppercase tracking-wider text-white/40", children: f.label }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            f.key === "msg" ? /* @__PURE__ */ jsx("textarea", { value: form.msg, onChange: (e) => setForm({
              ...form,
              msg: e.target.value
            }), onFocus: () => setFocus(f.key), onBlur: () => setFocus(null), rows: 3, className: "w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors" }) : /* @__PURE__ */ jsx("input", { type: f.type || "text", value: form[f.key], onChange: (e) => setForm({
              ...form,
              [f.key]: e.target.value
            }), onFocus: () => setFocus(f.key), onBlur: () => setFocus(null), className: "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition-colors" }),
            /* @__PURE__ */ jsx(AnimatePresence, { children: focus === f.key && /* @__PURE__ */ jsx(motion.div, { layoutId: "focus-ring", initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, exit: {
              opacity: 0
            }, transition: {
              type: "spring",
              stiffness: 380,
              damping: 30
            }, className: "pointer-events-none absolute inset-0 rounded-lg ring-2", style: {
              boxShadow: `0 0 0 2px ${CYAN}, 0 0 20px ${CYAN}60`
            } }) })
          ] })
        ] }, f.key)),
        /* @__PURE__ */ jsx(motion.button, { type: "submit", whileHover: {
          scale: 1.02
        }, whileTap: {
          scale: 0.97
        }, className: "col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#030712]", style: {
          backgroundColor: CYAN,
          boxShadow: `0 0 24px ${CYAN}50`
        }, children: sent ? "Message sent ✓" : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Request a demo ",
          /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-9 w-9", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full", style: {
              background: `radial-gradient(circle, ${CYAN}80, transparent 70%)`,
              filter: "blur(8px)"
            } }),
            /* @__PURE__ */ jsx("img", { src: quorbitLogo, alt: "Quorbit Labs", className: "relative h-9 w-9 rounded-md object-cover" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold tracking-[0.2em] text-white", children: [
            "QUORBIT",
            /* @__PURE__ */ jsx("span", { style: {
              color: CYAN
            }, children: "·" }),
            "LABS"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm text-white/50", children: "Engineering the unified intelligence layer for industrial and enterprise software." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: [{
          Icon: Linkedin,
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7365745698845220868"
        }, {
          Icon: Instagram,
          href: "https://www.instagram.com/qubit.labs_/"
        }, {
          Icon: Twitter,
          href: "#"
        }, {
          Icon: Github,
          href: "#"
        }].map(({
          Icon,
          href
        }, i) => /* @__PURE__ */ jsx(motion.a, { href, target: href.startsWith("http") ? "_blank" : void 0, rel: href.startsWith("http") ? "noopener noreferrer" : void 0, whileHover: {
          y: -2,
          color: CYAN
        }, className: "flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/60", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] }),
      [{
        h: "Platform",
        l: ["AI Suite", "AIMS", "Insights", "API"]
      }, {
        h: "Company",
        l: ["About", "Careers", "Press", "Contact"]
      }, {
        h: "Resources",
        l: ["Docs", "Changelog", "Status", "Security"]
      }].map((col) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-white/40", children: col.h }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: col.l.map((li) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-white/70 transition-colors hover:text-white", children: li }) }, li)) })
      ] }, col.h))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2026 Quorbit Labs, Inc. All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ jsx("a", { href: "#", children: "Terms" }),
        /* @__PURE__ */ jsx("a", { href: "#", children: "Cookies" })
      ] })
    ] })
  ] }) });
}
function ScrollProgress() {
  const {
    scrollYProgress
  } = useScroll();
  return /* @__PURE__ */ jsx(motion.div, { className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left", style: {
    scaleX: scrollYProgress,
    background: `linear-gradient(90deg, ${CYAN}, ${CORAL})`,
    boxShadow: `0 0 12px ${CYAN}`
  } });
}
function CursorSpotlight() {
  const [pos, setPos] = useState({
    x: -400,
    y: -400
  });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e) => setPos({
      x: e.clientX,
      y: e.clientY
    });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsx(motion.div, { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-[55]", animate: {
    background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(0,240,255,0.08), transparent 60%)`
  }, transition: {
    type: "tween",
    duration: 0.18,
    ease: "linear"
  } });
}
function GrainOverlay() {
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-[45] opacity-[0.035] mix-blend-overlay", style: {
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`
  } });
}
function QuorbitLanding() {
  return /* @__PURE__ */ jsxs("div", { className: "quorbit-root relative min-h-screen overflow-x-hidden text-white antialiased", style: {
    background: `linear-gradient(180deg, #030712 0%, #0B132B 50%, #030712 100%)`,
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
  }, children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(CursorSpotlight, {}),
    /* @__PURE__ */ jsx(GrainOverlay, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(ProductSuite, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(WhyUs, {}),
    /* @__PURE__ */ jsx(ContactFooter, {})
  ] });
}
export {
  QuorbitLanding as component
};
