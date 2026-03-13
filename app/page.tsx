"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  PlayCircle,
  ArrowRight,
  Search,
  Sparkles,
  Lightbulb,
  Network,
  Brain,
  Layers,
  Layout,
  Plus,
  Calendar,
  MessageSquare,
  Home as HomeIcon,
  Settings,
  MapPin,
  Notebook,
  CheckCircle,
  Mic,
  Type,
  PenTool,
  GripVertical,
  FileText,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";

// Fully typed Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function LandingPage() {
  const appUrl = "https://quick-notes-flax.vercel.app";
  const logoStyle = { fontFamily: "'League Spartan', sans-serif" };

  // Mouse tilt logic for the Feature Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] selection:bg-brand-accent selection:text-white pb-0 overflow-hidden font-sans relative">
      {/* ========================================
        HERO ANIMATED BACKGROUND
        ========================================
      */}
      <div className="absolute top-0 left-0 w-full h-[110vh] overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-125 h-125 bg-linear-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-150 h-150 bg-linear-to-tr from-pink-100/20 to-orange-100/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* FLOATING NAVBAR */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/75 backdrop-blur-xl border border-slate-200/60 shadow-lg shadow-slate-200/20 rounded-full px-6 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-8">
          <div
            className="flex items-center gap-2 text-2xl tracking-tighter text-brand-dark font-bold"
            style={logoStyle}
          >
            QuickNotes
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-500">
            <a href="#" className="text-brand-dark">
              Home
            </a>
            <a href="#" className="hover:text-brand-dark transition-colors">
              Features
            </a>
          </div>
        </div>
        <Button
          onClick={() => window.open(appUrl, "_blank")}
          className="rounded-full px-6 py-2 bg-brand-dark text-white font-bold text-sm flex items-center gap-2 hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          Launch App <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="pt-48 pb-20 px-6 text-center max-w-5xl mx-auto relative z-10">
        {/* Abstract Floating Shape - Left */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-0 md:-left-12 w-24 h-24 bg-linear-to-tr from-orange-400 to-pink-500 opacity-60 blur-[2px] -z-10 shadow-2xl"
          style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
        />

        {/* Abstract Floating Shape - Right */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-0 md:-right-12 w-32 h-32 bg-linear-to-bl from-blue-400 to-purple-500 rounded-full opacity-50 blur-[1px] -z-10 shadow-2xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-600 text-xs font-bold mb-8 shadow-sm"
        >
          <Sparkles className="h-3 w-3 text-blue-500" />
          <span className="uppercase tracking-wider">AI-Powered Workspace</span>
        </motion.div>

        {/* UPDATED TYPOGRAPHY: Lighter weight for "Your Notes and" */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-6xl md:text-8xl tracking-tighter text-brand-dark leading-[0.9] mb-8 relative"
        >
          <span className="font-black">Organize</span>{" "}
          <span className="font-medium text-slate-700">
            Your <br /> Notes and
          </span>{" "}
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-[#FF512F] to-[#DD2476]">
            Projects.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-10 leading-relaxed"
        >
          The ultimate intelligent workspace built for clarity. Manage notes,
          generate mind maps, and boost productivity effortlessly.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 relative"
        >
          <Button
            onClick={() => window.open(appUrl, "_blank")}
            className="rounded-full px-10 py-7 font-bold text-lg bg-brand-dark text-white hover:bg-black hover:shadow-2xl hover:shadow-brand-dark/30 transition-all hover:-translate-y-1 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Get started today</span>
          </Button>
        </motion.div>
      </section>

      {/* WORKSPACE PREVIEW (WITH 3 STACKED GLASS LAYERS) */}
      <section className="py-24 relative overflow-hidden mt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100/40 rounded-full blur-[120px] -z-20" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto px-6 relative z-20"
        >
          <div className="relative">
            {/* BACKGROUND GLASS LAYER 1 (Smallest, furthest back) */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[85%] h-full bg-slate-200/30 backdrop-blur-sm rounded-[3rem] border border-white/30 -z-30 shadow-sm" />

            {/* BACKGROUND GLASS LAYER 2 (Medium, middle) */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[92%] h-full bg-slate-100/50 backdrop-blur-md rounded-[3rem] border border-white/50 -z-20 shadow-md" />

            {/* MAIN MOCKUP (Foreground) */}
            <div className="bg-white rounded-[2.2rem] border border-slate-200/60 overflow-hidden flex h-162.5 shadow-2xl relative z-10">
              {/* Sidebar */}
              <div className="w-64 bg-[#F9FAFB] border-r border-slate-200 hidden md:flex flex-col">
                <div
                  className="p-6 text-2xl tracking-tighter text-brand-dark font-bold"
                  style={logoStyle}
                >
                  QuickNotes
                </div>
                <div className="px-4 mb-6">
                  <div className="relative bg-white border border-slate-200 rounded-xl flex items-center px-3 py-2 shadow-sm">
                    <Search className="h-4 w-4 text-slate-400 mr-2" />
                    <span className="text-sm text-slate-400 font-medium flex-1">
                      Search notes...
                    </span>
                    <span className="text-[10px] bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-200">
                      ⌘K
                    </span>
                  </div>
                </div>
                <div className="px-4 space-y-1 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3">
                    Smart Workspaces
                  </p>
                  <div className="flex items-center gap-3 px-3 py-2 bg-blue-50/50 text-blue-700 rounded-lg text-sm font-bold border border-blue-100/50">
                    <HomeIcon className="h-4 w-4" /> Home
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-white rounded-lg text-sm font-bold cursor-pointer transition-all">
                    <Plus className="h-4 w-4" /> Add Workspace
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-white flex flex-col relative">
                <div className="h-16 border-b border-slate-100 flex items-center justify-between px-8">
                  <span className="text-brand-dark font-bold text-lg">
                    All Notes
                  </span>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      className="h-9 w-9 p-0 text-slate-400"
                    >
                      <Network className="h-4 w-4" />
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 h-9 font-bold text-sm transition-colors shadow-md shadow-blue-500/20">
                      + New Note
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#FCFCFD]">
                  <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6">
                    <Sparkles className="h-10 w-10 text-blue-500" />
                  </div>
                  <h2 className="text-3xl font-black text-brand-dark mb-2 tracking-tight">
                    Welcome to QuickNotes
                  </h2>
                  <p className="text-slate-400 mb-10 font-medium max-w-sm">
                    Your intelligent workspace for learning and note-taking
                  </p>

                  <div className="flex gap-4 mb-10">
                    {[
                      { l: "Workspaces", v: 1 },
                      { l: "Folders", v: 0 },
                      { l: "Notes", v: 1 },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 w-28"
                      >
                        <div className="text-2xl font-black text-blue-600">
                          {stat.v}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">
                          {stat.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Quick Actions
                  </p>
                  <div className="flex gap-3 mb-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-5 flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20">
                      <Layout className="h-4 w-4" /> Create Workspace
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white border-slate-200 text-slate-600 font-bold rounded-xl px-6 py-5 flex items-center gap-2 hover:bg-slate-50"
                    >
                      <FileText className="h-4 w-4" /> Create Note
                    </Button>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    Select a workspace or folder from the sidebar to create
                    notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI BUBBLE SECTION */}
      <section className="relative mt-20 z-10">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -translate-y-[98%] pointer-events-none">
          <svg
            className="relative block w-full h-25"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
              fill="#09090b"
            />
          </svg>
        </div>

        <div className="py-40 bg-brand-dark text-white relative">
          <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6"
            >
              Highlight. Transform.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                Understand.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400 font-medium max-w-2xl mb-24 leading-relaxed"
            >
              Contextual AI that lives inside your notes. Highlight any sentence
              to trigger the magic bubble and summarize instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-3xl"
            >
              <div className="text-left text-2xl md:text-3xl leading-relaxed font-medium text-slate-400 p-10 border border-white/10 rounded-4xl bg-white/3 backdrop-blur-sm">
                The most efficient way to{" "}
                <span className="bg-purple-500/40 text-white px-3 rounded-lg transition-all relative z-0">
                  visualize complex information structures
                </span>{" "}
                is by utilizing AI-generated mind maps...
              </div>

              {/* FLOATING BUBBLE */}
              <motion.div
                animate={{ y: [40, 32, 40] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] px-10 py-6 flex items-center gap-10 border border-slate-100/20 z-50 backdrop-blur-xl"
              >
                {[
                  { icon: Sparkles, color: "#8B5CF6" },
                  { icon: Lightbulb, color: "#F59E0B" },
                  { icon: Network, color: "#3B82F6" },
                  { icon: Brain, color: "#22C55E" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="hover:scale-125 transition-transform duration-300"
                  >
                    <item.icon
                      className="h-8 w-8 stroke-[2.5]"
                      style={{ color: item.color }}
                    />
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 translate-y-[98%] pointer-events-none">
          <svg
            className="relative block w-full h-25 rotate-180"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
              fill="#09090b"
            />
          </svg>
        </div>
      </section>

      {/* FEATURE GRID (EXPANDED BENTO STYLE - FIXED VISIBILITY) */}
      <section className="py-40 bg-[#FCFCFD]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-dark tracking-tighter mb-4">
              Incredibly Powerful.
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Everything you need to master your knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* ROW 1 */}
            {/* CARD 1: TILT ANIMATED MIND MAP */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="md:col-span-2 bg-white rounded-4xl p-10 border border-slate-200/60 shadow-xs hover:shadow-2xl transition-shadow duration-500 group overflow-hidden relative flex flex-col justify-between min-h-[300px]"
            >
              <div
                className="absolute inset-0 opacity-10 md:group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ transform: "translateZ(20px)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[150%] h-[150%] absolute -top-[25%] -left-[25%]"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <line
                      x1="50"
                      y1="50"
                      x2="20"
                      y2="20"
                      stroke="currentColor"
                      className="text-blue-600"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="80"
                      y2="30"
                      stroke="currentColor"
                      className="text-purple-600"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <line
                      x1="50"
                      y1="50"
                      x2="40"
                      y2="80"
                      stroke="currentColor"
                      className="text-pink-600"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>

              <div
                className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 z-10 mb-8"
                style={{ transform: "translateZ(40px)" }}
              >
                <Network className="text-white h-8 w-8" />
              </div>
              <div
                style={{ transform: "translateZ(30px)" }}
                className="relative z-10"
              >
                <h3 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">
                  Mind Map Maker
                </h3>
                <p className="text-slate-500 font-medium text-lg max-w-sm">
                  Auto-generate visual structures of your complex notes
                  instantly.
                </p>
              </div>
            </motion.div>

            {/* CARD 2: SUMMARIES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="md:col-span-1 bg-white rounded-4xl p-8 border border-slate-200/60 shadow-xs hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[300px]"
            >
              <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-500 shadow-sm group-hover:shadow-purple-600/30">
                <Notebook className="text-purple-600 group-hover:text-white h-7 w-7 transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">
                  Smart Summaries
                </h3>
                <p className="text-slate-500 font-medium">
                  Extract key insights from long documents with our refined AI
                  logic.
                </p>
              </div>
            </motion.div>

            {/* CARD 3: QUIZZES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="md:col-span-1 bg-white rounded-4xl p-8 border border-slate-200/60 shadow-xs hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[300px]"
            >
              <div className="bg-pink-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors duration-500 shadow-sm group-hover:shadow-pink-600/30">
                <CheckCircle className="text-pink-600 group-hover:text-white h-7 w-7 transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">
                  AI Quizzes
                </h3>
                <p className="text-slate-500 font-medium">
                  Turn any page into a custom quiz to test your memory recall.
                </p>
              </div>
            </motion.div>

            {/* ROW 2 */}
            {/* CARD 4: VOICE RECORD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="md:col-span-1 bg-white rounded-4xl p-8 border border-slate-200/60 shadow-xs hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[300px]"
            >
              <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-sm group-hover:shadow-orange-500/30">
                <Mic className="text-orange-500 group-hover:text-white h-7 w-7 transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">
                  Voice Record
                </h3>
                <p className="text-slate-500 font-medium">
                  Dictate on the go. Your audio is transcribed and formatted
                  automatically.
                </p>
              </div>
            </motion.div>

            {/* CARD 5: SMART WORKSPACES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="md:col-span-2 bg-white rounded-4xl p-10 border border-slate-200/60 shadow-xs hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[300px] relative overflow-hidden"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-500 shadow-sm group-hover:shadow-indigo-600/30 relative z-10">
                <Layers className="text-indigo-600 group-hover:text-white h-8 w-8 transition-colors" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">
                  Smart Workspaces
                </h3>
                <p className="text-slate-500 font-medium text-lg max-w-sm">
                  Organize your life into dedicated, distraction-free zones for
                  work, study, or personal projects.
                </p>
              </div>
            </motion.div>

            {/* CARD 6: WHITEBOARD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="md:col-span-1 bg-white rounded-4xl p-8 border border-slate-200/60 shadow-xs hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[300px]"
            >
              <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-500 shadow-sm group-hover:shadow-teal-500/30">
                <PenTool className="text-teal-500 group-hover:text-white h-7 w-7 transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">
                  Whiteboard
                </h3>
                <p className="text-slate-500 font-medium">
                  An infinite canvas to sketch ideas freely right next to your
                  notes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMBINED CTA & FOOTER SECTION (GLASSY BLUE) */}
      <section className="relative z-10 mt-10">
        {/* Stylized Cartoon Curved Wave Divider - Fill matches bg-blue-50 (#eff6ff) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -translate-y-[99%] pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 block"
          >
            <path
              d="M0,120 C150,120 150,0 300,0 C450,0 450,120 600,120 C750,120 750,0 900,0 C1050,0 1050,120 1200,120 L1200,120 L0,120 Z"
              fill="#eff6ff"
            />
          </svg>
        </div>

        {/* The entire wrapper for CTA and Footer using vibrant light blue */}
        <div className="bg-blue-50 relative overflow-hidden">
          {/* Animated Glow hidden within the blue background */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 blur-[150px] rounded-full pointer-events-none"
          />

          {/* CTA Content */}
          <div className="py-40 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="container mx-auto px-6 relative"
            >
              <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-brand-dark">
                Ready to upgrade <br /> your notes?
              </h3>
              <p className="text-slate-500 mb-12 max-w-xl mx-auto text-lg font-medium">
                Join the revolution of intelligent note-taking. Built for
                clarity, designed for you.
              </p>
              <Button
                onClick={() => window.open(appUrl, "_blank")}
                className="bg-brand-dark text-white hover:bg-black font-bold px-12 py-8 text-xl rounded-full shadow-2xl shadow-brand-dark/20 transition-all hover:-translate-y-1 active:scale-95 border border-transparent hover:border-white/10"
              >
                Start using QuickNotes
              </Button>
            </motion.div>
          </div>

          {/* CLEAN FOOTER (Integrated into the blue section) */}
          <footer className="py-12 relative z-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-blue-200/60 pt-8">
                <div
                  className="text-2xl tracking-tighter font-bold text-brand-dark"
                  style={logoStyle}
                >
                  QuickNotes
                </div>
                <p className="text-slate-500 font-bold text-sm">
                  © {new Date().getFullYear()} QuickNotes Inc. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
