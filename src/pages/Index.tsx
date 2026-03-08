import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import jarvisHero from "@/assets/jarvis-hero.png";
import jarvisShowcase from "@/assets/jarvis-showcase.png";
import jarvisCloseup from "@/assets/jarvis-closeup.png";
import jarvisDetail from "@/assets/jarvis-detail.png";
import boardRaspi from "@/assets/board-raspi.png";
import boardArduino from "@/assets/board-arduino.png";
import boardUno from "@/assets/board-uno.png";
import boardPico from "@/assets/board-pico.png";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Navigation ─── */
const navLinks = [
  { label: "Vision", href: "#vision" },
  { label: "JARVIS", href: "#meet" },
  { label: "Architecture", href: "#architecture" },
  { label: "Wiring", href: "#wiring" },
  { label: "Build", href: "#build" },
  { label: "Docs", href: "#docs" },
  { label: "Team", href: "#team" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-background/70 backdrop-blur-2xl border-b border-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display font-bold text-base tracking-[0.35em] text-foreground hover:text-jarvis-cyan transition-colors duration-300">
            JARVIS
          </button>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-jarvis-cyan transition-colors duration-300">{l.label}</button>
            ))}
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5">
            <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
            {navLinks.map((l, i) => (
              <motion.button key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, ease }} onClick={() => go(l.href)} className="text-sm tracking-[0.3em] uppercase text-muted-foreground hover:text-jarvis-cyan transition-colors">
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Hero ─── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "linear-gradient(rgba(0,229,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.4) 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-jarvis-cyan/[0.025] blur-[200px] pointer-events-none" />
      <div className="absolute top-1/4 left-[20%] w-[400px] h-[400px] rounded-full bg-jarvis-purple/[0.03] blur-[150px] pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-jarvis-cyan/20 to-transparent" style={{ animation: "scan-line 8s linear infinite" }} />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 pt-24">
        <div className="flex-1 text-center lg:text-left">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-6">
            Meet the star of the show
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.15, ease }} className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="glow-text bg-gradient-to-r from-jarvis-cyan via-jarvis-blue to-jarvis-cyan bg-clip-text text-transparent">JARVIS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }} className="text-[15px] sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-[1.8]">
            A 4-foot, 4-board edge-computing humanoid android. Bio-inspired but engineered.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 mt-4">
            Architect Division · St. Anthony's School · Target: September 16th
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease }} className="mt-10 flex gap-4 justify-center lg:justify-start">
            <a href="#vision" className="px-8 py-3 bg-jarvis-cyan/10 border border-jarvis-cyan/30 text-jarvis-cyan font-semibold rounded-xl hover:bg-jarvis-cyan/20 transition-all duration-300">Explore</a>
            <a href="#docs" className="px-8 py-3 border border-border text-foreground rounded-xl hover:border-jarvis-cyan/30 hover:text-jarvis-cyan transition-all duration-300">Documentation</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3, ease }} className="flex-1 flex justify-center">
          <img src={jarvisHero} alt="JARVIS humanoid android" className="w-[350px] md:w-[450px] animate-float drop-shadow-[0_0_80px_rgba(0,229,255,0.2)]" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

/* ─── Section wrapper with inView animation ─── */
function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-28 sm:py-40 overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

/* ─── Vision ─── */
function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="vision">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-jarvis-blue/[0.025] blur-[180px] pointer-events-none -translate-y-1/2" />
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-10">
          Engineering Philosophy
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12, ease }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground leading-[1.2] tracking-wide">
          Bio-Inspired.{" "}
          <span className="bg-gradient-to-r from-jarvis-cyan via-jarvis-blue to-jarvis-cyan bg-clip-text text-transparent">Engineered.</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3, ease }} className="mt-10 space-y-6 text-muted-foreground text-[15px] leading-[1.9]">
          <p>Most humanoid robots fail because they prioritize acrobatics over intelligence — wasting computational power trying to balance on two legs. JARVIS operates on a different philosophy: by utilizing a geometrically perfect mechanical base, we free up 100% of CPU power for true Artificial Intelligence, computer vision, and social interaction.</p>
          <p>JARVIS is a generative, contextual android. He does not use pre-recorded lines. Powered by the Gemini AI API, OpenCV face tracking, and a multi-board distributed architecture, he sees, listens, thinks, and speaks in real time.</p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Meet JARVIS ─── */
function MeetJarvis() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { label: "Height", value: "4 feet" },
    { label: "Compute", value: "4-board edge" },
    { label: "Chassis", value: "6-point tripod" },
    { label: "AI Engine", value: "Gemini API" },
    { label: "Vision", value: "OpenCV" },
    { label: "Frame", value: "Wood + Cardboard" },
  ];

  return (
    <Section id="meet">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-jarvis-purple/[0.02] blur-[200px] pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5">
          The Robot
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide mb-14">
          Meet JARVIS
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, delay: 0.2, ease }} className="lg:col-span-2 flex justify-center">
            <img src={jarvisShowcase} alt="JARVIS full body" className="w-full max-w-sm drop-shadow-[0_0_60px_rgba(0,229,255,0.15)]" />
          </motion.div>

          <div className="lg:col-span-3 space-y-5">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25, ease }} className="text-muted-foreground text-[15px] leading-[1.8]">
              A 4-foot boxy humanoid android built from wood and reinforced cardboard. Designed to look bipedal while secretly running on a hyper-stable, zero-turn 6-point chassis with BO motor drive wheels and ball casters.
            </motion.p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }} className="glass-card glow-border p-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{s.label}</p>
                  <p className="text-sm font-semibold text-jarvis-cyan mt-1">{s.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Architecture ─── */
const boards = [
  { img: boardRaspi, title: "Raspberry Pi 3B+", codename: "The Master", desc: "Linux OS, OpenCV vision, Gemini AI API, STT/TTS audio routing. The central brain.", accent: "cyan" as const },
  { img: boardUno, title: "Arduino Uno", codename: "The Bouncer", desc: "Ultra-low-power perimeter guard. HC-SR04 ultrasonic at 1m range. Wakes the Master on human detection.", accent: "blue" as const },
  { img: boardArduino, title: "Arduino Mega", codename: "The Muscle", desc: "Real-time motor control via L298N driver. 30cm kill-zone safety override — ignores AI if obstacle detected.", accent: "purple" as const },
  { img: boardPico, title: "Raspberry Pi Pico", codename: "The Artist", desc: "Dedicated NeoPixel LED animation processor. Blue (listening), gold (thinking), white (speaking).", accent: "cyan" as const },
];

const accentMap = {
  cyan: { dot: "bg-jarvis-cyan", border: "border-jarvis-cyan/20", hover: "hover:border-jarvis-cyan/35", glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.06)]" },
  blue: { dot: "bg-jarvis-blue", border: "border-jarvis-blue/20", hover: "hover:border-jarvis-blue/35", glow: "group-hover:shadow-[0_0_30px_rgba(61,90,254,0.06)]" },
  purple: { dot: "bg-jarvis-purple", border: "border-jarvis-purple/20", hover: "hover:border-jarvis-purple/35", glow: "group-hover:shadow-[0_0_30px_rgba(124,77,255,0.06)]" },
};

function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="architecture">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-jarvis-blue/[0.02] blur-[200px] pointer-events-none" />
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5">
          Multi-Core Brain
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide">
          4-Board Architecture
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 }} className="mt-6 text-muted-foreground text-[15px] max-w-2xl leading-[1.8]">
          Tasks are distributed across four dedicated logic boards via a centralized USB bus using star topology. No single chip is bottlenecked.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14">
          {boards.map((b, i) => {
            const a = accentMap[b.accent];
            return (
              <motion.div key={b.title} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease }}
                className={`group relative rounded-xl border ${a.border} ${a.hover} bg-card/20 backdrop-blur-sm p-6 text-center transition-all duration-500 overflow-hidden ${a.glow}`}
              >
                <div className="absolute inset-0 rounded-xl bg-jarvis-cyan/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img src={b.img} alt={b.title} className="w-24 h-24 mx-auto mb-4 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-display font-bold text-sm text-foreground relative z-10">{b.title}</h3>
                <div className="flex items-center justify-center gap-2 my-2 relative z-10">
                  <div className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-jarvis-cyan">{b.codename}</p>
                </div>
                <p className="text-[12px] text-muted-foreground leading-relaxed relative z-10">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ─── Wiring Diagram ─── */
function WiringDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="wiring">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-jarvis-purple/[0.025] blur-[180px] pointer-events-none -translate-y-1/2" />
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5">
          Wiring
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide mb-14">
          System Topology
        </motion.h2>

        {/* Star Topology */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease }} className="glass-card glow-border p-8 md:p-12 mb-6">
          <h3 className="font-display font-bold text-sm tracking-wider text-center mb-8 text-foreground">USB STAR TOPOLOGY — DATA ROUTING</h3>
          <div className="flex flex-col items-center gap-0">
            {/* Master node */}
            <div className="bg-jarvis-cyan/10 border border-jarvis-cyan/30 rounded-xl px-6 py-4 text-center glow-border">
              <p className="font-display font-bold text-jarvis-cyan text-sm">Raspberry Pi 3B+</p>
              <p className="text-[10px] text-muted-foreground">THE MASTER · USB Hub Center</p>
            </div>
            {/* Vertical trunk line */}
            <div className="w-px h-8 bg-gradient-to-b from-jarvis-cyan/60 to-jarvis-cyan/30" />
            {/* Horizontal branch line */}
            <div className="w-full max-w-2xl h-px bg-jarvis-cyan/30 relative">
              {/* Branch dots at each connection point */}
              <div className="absolute left-[16.66%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-jarvis-cyan glow-dot" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-jarvis-cyan glow-dot" />
              <div className="absolute left-[83.33%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-jarvis-cyan glow-dot" />
            </div>
            {/* Board cards with individual vertical lines */}
            <div className="flex items-start gap-0 w-full max-w-2xl mt-0">
              {[
                { name: "Arduino Uno", code: "THE BOUNCER", port: "/dev/ttyACM0" },
                { name: "Arduino Mega", code: "THE MUSCLE", port: "/dev/ttyUSB0" },
                { name: "Pi Pico", code: "THE ARTIST", port: "/dev/ttyACM1" },
              ].map((b) => (
                <div key={b.name} className="flex-1 flex flex-col items-center">
                  <div className="w-px h-8 bg-gradient-to-b from-jarvis-cyan/30 to-jarvis-cyan/15" />
                  <div className="rounded-lg border border-border bg-secondary/50 px-3 py-3 text-center w-full mx-1">
                    <p className="font-display font-semibold text-[11px] text-foreground">{b.name}</p>
                    <p className="text-[9px] text-muted-foreground">{b.code}</p>
                    <p className="text-[8px] text-jarvis-cyan mt-1 font-mono">{b.port}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-6">Shielded USB cables · No EMI · Server-rack routing</p>
        </motion.div>

        {/* Power Domains */}
        <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.35, ease }} className="glass-card glow-border p-8 md:p-12">
          <h3 className="font-display font-bold text-sm tracking-wider text-center mb-8 text-foreground">DUAL-JUICE POWER ISOLATION</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dirty */}
            <div className="rounded-xl border border-destructive/20 p-6 bg-destructive/[0.03]">
              <h4 className="font-display font-bold text-destructive text-xs tracking-wider mb-4">DIRTY POWER · 12V</h4>
              <div className="space-y-2">
                {["12V Li-ion Battery — lowest chassis point", "1000μF Capacitor — brownout absorption", "L298N Motor Driver — VIN 5–35V", "2× BO Motors — drive wheels"].map((t) => (
                  <div key={t} className="rounded-lg bg-background/50 border border-border px-3 py-2">
                    <p className="text-[11px] text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Clean */}
            <div className="rounded-xl border border-jarvis-cyan/20 p-6 bg-jarvis-cyan/[0.03]">
              <h4 className="font-display font-bold text-jarvis-cyan text-xs tracking-wider mb-4">CLEAN POWER · 5V</h4>
              <div className="space-y-2">
                {["20,000mAh 5V Power Bank — smooth regulated", "Pi 3B+ (Master) — ~700mA via USB", "Arduino Uno — ~50mA · Arduino Mega — ~100mA", "Pi Pico — ~30mA + NeoPixel up to 720mA"].map((t) => (
                  <div key={t} className="rounded-lg bg-background/50 border border-border px-3 py-2">
                    <p className="text-[11px] text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-6 rounded-xl border border-yellow-500/20 p-4 bg-yellow-500/[0.03] text-center">
            <p className="text-[10px] font-bold text-yellow-500 tracking-wider uppercase mb-1">⚡ Common Ground Bridge</p>
            <p className="text-[11px] text-muted-foreground">GND of 12V battery and 5V power bank connected at one point for signal integrity.</p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Build Process ─── */
const phases = [
  { n: "01", title: "Chassis & Drive System", desc: "12mm plywood base, 6-point tripod with 2 BO motors and 4 ball casters. Zero-wobble engineering." },
  { n: "02", title: "Spine & Skeleton", desc: "25mm PVC pipe spine, leg boxes, torso shell, arm articulation from 6mm plywood and reinforced cardboard." },
  { n: "03", title: "Electronics Integration", desc: "All boards mounted on M3 nylon standoffs. USB star topology, dual-juice power wiring, sensor array." },
  { n: "04", title: "Head & AV Hub", desc: "USB webcam for OpenCV vision + STT mic, external speaker for TTS, NeoPixel arc reactor in chest." },
  { n: "05", title: "Paint & Polish", desc: "Black/silver spray paint, matte varnish, craft foam detailing. Cable management and exhibit prep." },
];

function BuildProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="build">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-jarvis-cyan/[0.02] blur-[180px] pointer-events-none" />
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5">
          Fabrication
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide mb-14">
          Build Process
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            {phases.map((p, i) => (
              <motion.div key={p.n} initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25 + i * 0.15, ease }} className="flex gap-6 items-start">
                <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-xl border border-border bg-card/30 items-center justify-center">
                  <span className="font-display font-bold text-lg bg-gradient-to-b from-jarvis-cyan to-jarvis-blue bg-clip-text text-transparent">{p.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1">{p.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.7]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, delay: 0.3, ease }} className="flex-1 hidden lg:block">
            <img src={jarvisCloseup} alt="JARVIS head closeup" className="w-full max-w-sm mx-auto rounded-2xl drop-shadow-[0_0_50px_rgba(0,229,255,0.1)]" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

/* ─── Interactive Tech Showcase ─── */
const subsystems = [
  {
    id: "brain",
    label: "AI Brain",
    icon: "🧠",
    color: "jarvis-cyan",
    specs: [
      { key: "Processor", val: "Raspberry Pi 3B+" },
      { key: "AI Engine", val: "Gemini API" },
      { key: "Vision", val: "OpenCV + USB Cam" },
      { key: "Audio", val: "STT/TTS Pipeline" },
    ],
    desc: "The Master node runs Linux, handling all AI inference, computer vision, speech processing, and high-level decision making in real time.",
    img: boardRaspi,
  },
  {
    id: "motor",
    label: "Motor Control",
    icon: "⚡",
    color: "jarvis-blue",
    specs: [
      { key: "Controller", val: "Arduino Mega" },
      { key: "Driver", val: "L298N H-Bridge" },
      { key: "Motors", val: "2× BO Geared" },
      { key: "Safety", val: "30cm Kill Zone" },
    ],
    desc: "The Muscle handles real-time motor control with a hardware safety override — if an obstacle is within 30cm, it ignores AI commands entirely.",
    img: boardArduino, // Arduino Mega board image
  },
  {
    id: "sensors",
    label: "Sensor Array",
    icon: "📡",
    color: "jarvis-purple",
    specs: [
      { key: "Controller", val: "Arduino Uno" },
      { key: "Range Sensor", val: "HC-SR04 Ultrasonic" },
      { key: "Detection", val: "1m Perimeter" },
      { key: "Power", val: "~50mA Ultra-Low" },
    ],
    desc: "The Bouncer runs an ultra-low-power detection loop, waking the entire system when a human enters the 1-meter perimeter zone.",
    img: boardUno,
  },
  {
    id: "leds",
    label: "LED System",
    icon: "💡",
    color: "jarvis-cyan",
    specs: [
      { key: "Controller", val: "Raspberry Pi Pico" },
      { key: "LEDs", val: "NeoPixel Ring" },
      { key: "Modes", val: "Blue · Gold · White" },
      { key: "Location", val: "Chest Arc Reactor" },
    ],
    desc: "The Artist drives the NeoPixel arc reactor — blue when listening, gold when thinking, white when speaking. Pure visual personality.",
    img: jarvisDetail,
  },
];

function TechShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const current = subsystems[active];

  return (
    <Section id="gallery">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-jarvis-cyan/[0.02] blur-[200px] pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5">
          Systems
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide mb-14">
          Component Breakdown
        </motion.h2>

        {/* Subsystem tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap gap-2 mb-10">
          {subsystems.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[12px] font-semibold tracking-wider uppercase transition-all duration-500 border ${
                active === i
                  ? "bg-jarvis-cyan/10 border-jarvis-cyan/40 text-jarvis-cyan glow-border"
                  : "border-border/50 text-muted-foreground hover:border-jarvis-cyan/20 hover:text-foreground"
              }`}
            >
              <span className="text-base">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="glass-card glow-border p-8 flex items-center justify-center aspect-square lg:aspect-auto lg:h-[420px]">
              <motion.img
                src={current.img}
                alt={current.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease }}
                className="max-h-full max-w-full object-contain drop-shadow-[0_0_60px_rgba(0,229,255,0.15)]"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-3">
                  <span className="text-2xl">{current.icon}</span>
                  {current.label}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.8] mt-3">{current.desc}</p>
              </div>

              {/* Spec grid */}
              <div className="grid grid-cols-2 gap-3">
                {current.specs.map((spec, i) => (
                  <motion.div
                    key={spec.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-xl border border-border/50 bg-secondary/30 p-4"
                  >
                    <p className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground">{spec.key}</p>
                    <p className="text-sm font-semibold text-jarvis-cyan mt-1">{spec.val}</p>
                  </motion.div>
                ))}
              </div>

              {/* Data flow indicator */}
              <div className="rounded-xl border border-border/30 bg-card/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((j) => (
                      <motion.div
                        key={j}
                        className="w-1.5 h-6 rounded-full bg-jarvis-cyan/30"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1.2, delay: j * 0.15, repeat: Infinity }}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider uppercase text-muted-foreground">Data Flow Active</p>
                    <p className="text-[11px] text-jarvis-cyan font-mono">USB Bus → Star Topology</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

/* ─── Documentation ─── */
const docs = [
  { name: "The JARVIS Manifesto", desc: "Engineering philosophy & system design", file: "THE_JARVIS_MANIFESTO.docx" },
  { name: "The JARVIS Compendium", desc: "Complete reference encyclopedia", file: "THE_JARVIS_COMPENDIUM.docx" },
  { name: "Fabrication Guide", desc: "Physical build manual", file: "JARVIS_FABRICATION_GUIDE.docx" },
  { name: "Print Manual", desc: "Step-by-step build, wiring & code", file: "JARVIS_PRINT_MANUAL.docx" },
  { name: "The Complete Archive", desc: "Master 131-page reference", file: "THE_COMPLETE_ARCHIVE.docx" },
];

function Documentation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="docs">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-jarvis-purple/[0.02] blur-[160px] pointer-events-none -translate-y-1/2" />
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5">
          Resources
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide mb-14">
          Documentation
        </motion.h2>

        <div className="space-y-3">
          {docs.map((doc, i) => (
            <motion.a key={doc.file} href={`/docs/${doc.file}`} download={doc.file} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
              className="group relative flex items-center justify-between rounded-xl border border-border bg-card/20 backdrop-blur-sm p-5 hover:border-jarvis-cyan/25 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl bg-jarvis-cyan/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4">
                <svg className="w-5 h-5 text-jarvis-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="font-display font-medium text-sm text-foreground">{doc.name}</p>
                  <p className="text-[11px] text-muted-foreground">{doc.desc}</p>
                </div>
              </div>
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-jarvis-cyan transition-colors relative z-10 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── Team ─── */
function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="team">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-[11px] tracking-[0.5em] uppercase text-jarvis-cyan/60 mb-5 text-center">
          Architect Division
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 35 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.12 }} className="font-display font-bold text-2xl sm:text-3xl md:text-[2.75rem] text-foreground tracking-wide text-center mb-14">
          The Team
        </motion.h2>

        {/* Lead */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.25, ease }} className="text-center mb-12">
          <p className="text-[9px] tracking-[0.5em] uppercase text-muted-foreground/50 mb-3">Lead Architect</p>
          <p className="font-display font-bold text-xl text-foreground tracking-wide">Vikhyat Gupta</p>
        </motion.div>

        {/* Fabrication */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4, ease }} className="text-center mb-12">
          <p className="text-[9px] tracking-[0.5em] uppercase text-muted-foreground/50 mb-5">Fabrication Team</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {["Aayush Agarwal", "Sreshth Adukia", "Adhyansh Kumar", "Rudraksh Sharma"].map((name, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease }}
                className="group relative rounded-xl border border-border/25 bg-card/20 backdrop-blur-sm py-5 px-4 hover:border-jarvis-cyan/15 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-xl bg-jarvis-cyan/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <p className="font-display font-medium text-sm text-foreground tracking-wide relative z-10">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Org */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.85 }} className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[60px] bg-border" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">St. Anthony's School</p>
          <div className="h-px flex-1 max-w-[60px] bg-border" />
        </motion.div>
      </div>
    </Section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="font-display font-bold tracking-[0.3em] text-sm bg-gradient-to-r from-jarvis-cyan to-jarvis-blue bg-clip-text text-transparent mb-2">PROJECT JARVIS</p>
        <p className="text-[11px] text-muted-foreground/50">A 4-board edge-computing android · Architect Division · St. Anthony's School</p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Nav />
    <Hero />
    <Vision />
    <MeetJarvis />
    <Architecture />
    <WiringDiagram />
    <BuildProcess />
    <TechShowcase />
    <Documentation />
    <Team />
    <Footer />
  </div>
);

export default Index;
