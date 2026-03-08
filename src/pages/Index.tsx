import { useEffect, useRef } from "react";
import jarvisHero from "@/assets/jarvis-hero.png";
import jarvisShowcase from "@/assets/jarvis-showcase.png";
import jarvisCloseup from "@/assets/jarvis-closeup.png";
import jarvisDetail from "@/assets/jarvis-detail.png";
import boardRaspi from "@/assets/board-raspi.png";
import boardArduino from "@/assets/board-arduino.png";
import boardUno from "@/assets/board-uno.png";
import boardPico from "@/assets/board-pico.png";
import { Cpu, CircuitBoard, Microchip, Zap, FileText, Users, Eye, Wrench, Image, Shield, Radio, Battery, Download, Cable } from "lucide-react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("fade-in"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".sr").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const Index = () => {
  const r = useScrollReveal();

  return (
    <div ref={r} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 rounded-t-none border-x-0">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold tracking-wider text-primary">JARVIS</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {["Vision", "Architecture", "Build", "Gallery", "Team"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-glow-muted/10 blur-[80px] animate-pulse-glow" />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-24">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 fade-in">Meet the star of the show</p>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 fade-in delay-100">
              <span className="glow-text text-primary">JARVIS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 fade-in delay-200">
              A 4-foot, 4-board edge-computing humanoid android. Bio-inspired but engineered.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-3 fade-in delay-200">
              Architect Division · St. Anthony's School · Target: September 16th
            </p>
            <div className="mt-10 flex gap-4 justify-center lg:justify-start fade-in delay-300">
              <a href="#vision" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Explore</a>
              <a href="#docs" className="px-8 py-3 border border-border text-foreground rounded-lg hover:border-primary/50 hover:text-primary transition-colors">Documentation</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center fade-in delay-200">
            <img src={jarvisHero} alt="JARVIS — 4-foot humanoid android" className="w-[400px] md:w-[500px] animate-float drop-shadow-[0_0_60px_hsl(210_100%_60%/0.3)]" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="section-spacing">
        <div className="container mx-auto px-6 max-w-3xl text-center sr">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-[0.2em] text-primary">Engineering Philosophy</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Bio-Inspired.<br /><span className="text-primary">Engineered.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Most humanoid robots fail because they prioritize acrobatics over intelligence — wasting computational power trying to balance on two legs. JARVIS operates on a different philosophy: by utilizing a geometrically perfect mechanical base, we free up 100% of CPU power for true Artificial Intelligence, computer vision, and social interaction.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            JARVIS is a generative, contextual android. He does not use pre-recorded lines. Powered by the Gemini AI API, OpenCV face tracking, and a multi-board distributed architecture, he sees, listens, thinks, and speaks in real time.
          </p>
        </div>
      </section>

      {/* Meet JARVIS */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative sr">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <img src={jarvisShowcase} alt="JARVIS full body showcase" className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_hsl(210_100%_60%/0.2)]" />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold">Meet <span className="text-primary">JARVIS</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A 4-foot boxy humanoid android built from wood and reinforced cardboard. Designed to look bipedal while secretly running on a hyper-stable, zero-turn 6-point chassis with BO motor drive wheels and ball casters.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Height", value: "4 feet" },
                  { label: "Compute Boards", value: "4-board edge" },
                  { label: "Chassis", value: "6-point tripod" },
                  { label: "AI Engine", value: "Gemini API" },
                  { label: "Vision", value: "OpenCV" },
                  { label: "Frame", value: "Wood + Cardboard" },
                ].map((s) => (
                  <div key={s.label} className="glass-panel glow-border p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
                    <p className="text-sm font-semibold text-primary mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Board Architecture */}
      <section id="architecture" className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="sr text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CircuitBoard className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Multi-Core Brain</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">4-Board Edge-Computing <span className="text-primary">Architecture</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Tasks are distributed across four dedicated logic boards via a centralized USB bus using star topology. No single chip is bottlenecked.</p>
          </div>

          <div className="sr grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { img: boardRaspi, title: "Raspberry Pi 3B+", codename: "The Master", desc: "Linux OS, OpenCV vision processing, Gemini AI API, STT/TTS audio routing. The central brain.", color: "text-primary" },
              { img: boardUno, title: "Arduino Uno", codename: "The Bouncer", desc: "Ultra-low-power perimeter guard. HC-SR04 ultrasonic at 1m range. Wakes the Master on human detection.", color: "text-primary" },
              { img: boardArduino, title: "Arduino Mega", codename: "The Muscle", desc: "Real-time motor control via L298N driver. 30cm kill-zone safety override — ignores AI if obstacle detected.", color: "text-primary" },
              { img: boardPico, title: "Raspberry Pi Pico", codename: "The Artist", desc: "Dedicated NeoPixel LED animation processor. Pulsing blue (listening), gold (thinking), flickering white (speaking).", color: "text-primary" },
            ].map((b) => (
              <div key={b.title} className="glass-panel glow-border p-6 text-center group hover:border-primary/30 transition-all duration-500">
                <img src={b.img} alt={b.title} className="w-28 h-28 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-display text-lg font-bold">{b.title}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wider ${b.color} mb-3`}>{b.codename}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Connection bus */}
          <div className="sr flex justify-center mt-10">
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary glow-dot" />
                  {i < 3 && <div className="w-16 md:w-24 h-px bg-gradient-to-r from-primary/50 to-primary/10" />}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3 sr">USB Star Topology · Common Ground · Dual-Juice Power Isolation</p>
        </div>
      </section>

      {/* Wiring Diagram */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative max-w-5xl">
          <div className="sr text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cable className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Wiring</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">System <span className="text-primary">Topology</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Centralized USB bus with star topology and dual-isolated power domains. All boards share a common ground for signal integrity.</p>
          </div>

          {/* Star Topology Diagram */}
          <div className="sr glass-panel glow-border p-8 md:p-12 mb-8">
            <h3 className="font-display text-lg font-bold text-center mb-8">USB Star Topology — Data Routing</h3>
            <div className="relative flex flex-col items-center gap-0">
              {/* Center hub */}
              <div className="relative w-full flex justify-center">
                <div className="relative z-10 bg-primary/20 border-2 border-primary rounded-xl px-6 py-4 text-center glow-border">
                  <p className="font-display font-bold text-primary">Raspberry Pi 3B+</p>
                  <p className="text-xs text-muted-foreground">THE MASTER · USB Hub Center</p>
                </div>
              </div>

              {/* Lines from center */}
              <div className="w-full flex justify-center">
                <div className="flex items-start gap-0 w-full max-w-2xl">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-primary/30" />
                    <div className="w-2 h-2 rounded-full bg-primary glow-dot" />
                    <div className="w-px h-4 bg-primary/30" />
                    <div className="bg-secondary border border-border rounded-lg px-4 py-3 text-center">
                      <p className="font-display font-semibold text-sm">Arduino Uno</p>
                      <p className="text-xs text-muted-foreground">THE BOUNCER</p>
                      <p className="text-[10px] text-primary mt-1">USB Serial · /dev/ttyACM0</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-primary/30" />
                    <div className="w-2 h-2 rounded-full bg-primary glow-dot" />
                    <div className="w-px h-4 bg-primary/30" />
                    <div className="bg-secondary border border-border rounded-lg px-4 py-3 text-center">
                      <p className="font-display font-semibold text-sm">Arduino Mega</p>
                      <p className="text-xs text-muted-foreground">THE MUSCLE</p>
                      <p className="text-[10px] text-primary mt-1">USB Serial · /dev/ttyUSB0</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-primary/30" />
                    <div className="w-2 h-2 rounded-full bg-primary glow-dot" />
                    <div className="w-px h-4 bg-primary/30" />
                    <div className="bg-secondary border border-border rounded-lg px-4 py-3 text-center">
                      <p className="font-display font-semibold text-sm">Pi Pico</p>
                      <p className="text-xs text-muted-foreground">THE ARTIST</p>
                      <p className="text-[10px] text-primary mt-1">USB Serial · /dev/ttyACM1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">Short shielded USB cables · No EMI interference · Professional server-rack style routing</p>
          </div>

          {/* Power Domain Diagram */}
          <div className="sr glass-panel glow-border p-8 md:p-12">
            <h3 className="font-display text-lg font-bold text-center mb-8">Dual-Juice Power Isolation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Dirty Power Domain */}
              <div className="border border-destructive/30 rounded-xl p-6 bg-destructive/5">
                <div className="flex items-center gap-2 mb-4">
                  <Battery className="w-5 h-5 text-destructive" />
                  <h4 className="font-display font-bold text-destructive">DIRTY POWER · 12V Domain</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-background/50 rounded-lg p-3 border border-border">
                    <p className="text-xs font-semibold">12V Li-ion Battery</p>
                    <p className="text-[10px] text-muted-foreground">Lowest chassis point · Low CoG</p>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-4 bg-destructive/50" /></div>
                  <div className="bg-background/50 rounded-lg p-3 border border-border">
                    <p className="text-xs font-semibold">1000μF Capacitor</p>
                    <p className="text-[10px] text-muted-foreground">Brownout spike absorption</p>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-4 bg-destructive/50" /></div>
                  <div className="bg-background/50 rounded-lg p-3 border border-border">
                    <p className="text-xs font-semibold">L298N Motor Driver</p>
                    <p className="text-[10px] text-muted-foreground">VIN 5–35V · 2× BO Motor output</p>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-4 bg-destructive/50" /></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-background/50 rounded-lg p-2 border border-border text-center">
                      <p className="text-[10px] font-semibold">BO Motor L</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2 border border-border text-center">
                      <p className="text-[10px] font-semibold">BO Motor R</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Power Domain */}
              <div className="border border-primary/30 rounded-xl p-6 bg-primary/5">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h4 className="font-display font-bold text-primary">CLEAN POWER · 5V Domain</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-background/50 rounded-lg p-3 border border-border">
                    <p className="text-xs font-semibold">20,000mAh 5V Power Bank</p>
                    <p className="text-[10px] text-muted-foreground">Smooth regulated voltage</p>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-4 bg-primary/50" /></div>
                  <div className="bg-background/50 rounded-lg p-3 border border-border">
                    <p className="text-xs font-semibold">Raspberry Pi 3B+ (Master)</p>
                    <p className="text-[10px] text-muted-foreground">~700mA · USB hub to sub-boards</p>
                  </div>
                  <div className="flex justify-center"><div className="w-px h-4 bg-primary/50" /></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-background/50 rounded-lg p-2 border border-border text-center">
                      <p className="text-[10px] font-semibold">Uno</p>
                      <p className="text-[9px] text-muted-foreground">~50mA</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2 border border-border text-center">
                      <p className="text-[10px] font-semibold">Mega</p>
                      <p className="text-[9px] text-muted-foreground">~100mA</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2 border border-border text-center">
                      <p className="text-[10px] font-semibold">Pico</p>
                      <p className="text-[9px] text-muted-foreground">~30mA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Ground Bridge */}
            <div className="mt-8 border border-yellow-500/30 rounded-xl p-4 bg-yellow-500/5 text-center">
              <p className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-1">⚡ Common Ground Bridge</p>
              <p className="text-[11px] text-muted-foreground">GND of 12V battery and 5V power bank connected at one point. Enables 5V brain to send signals to 12V muscles without frying circuitry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Power & Safety */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative max-w-4xl">
          <div className="sr text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Power & Safety</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Dual-Juice <span className="text-primary">Architecture</span></h2>
          </div>
          <div className="sr grid md:grid-cols-2 gap-6">
            <div className="glass-panel glow-border p-6">
              <Battery className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-2">Muscle Juice (Dirty Power)</h3>
              <p className="text-sm text-muted-foreground">12V Li-ion battery, lowest chassis point for low CoG. Wired exclusively to L298N motor driver. 1000μF capacitor for brownout protection.</p>
            </div>
            <div className="glass-panel glow-border p-6">
              <Zap className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-2">Brain Juice (Clean Power)</h3>
              <p className="text-sm text-muted-foreground">20,000mAh 5V power bank. Smooth voltage for all microcontrollers. Common ground bridge connects both domains for signal integrity.</p>
            </div>
            <div className="glass-panel glow-border p-6">
              <Radio className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-2">Dual-Ping Ultrasonic Security</h3>
              <p className="text-sm text-muted-foreground">Sensor 1 (Uno): 1m wake-up zone triggers Pi boot. Sensor 2 (Mega): 30cm kill-zone — hardware motor override, ignores all AI commands.</p>
            </div>
            <div className="glass-panel glow-border p-6">
              <Shield className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-display font-bold mb-2">Fail-Safes</h3>
              <p className="text-sm text-muted-foreground">Brownout capacitor, verbal diagnostics announcer on drive power loss, physical kill switch severing common ground for instant shutdown.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section id="build" className="section-spacing">
        <div className="container mx-auto px-6 sr">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Wrench className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-[0.2em] text-primary">Fabrication</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">From concept to <span className="text-primary">reality</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                JARVIS is built from 6mm/12mm plywood (structural backbone) and double-wall corrugated cardboard (geometry and silhouette). A 25mm PVC pipe spine rises from the center of the chassis, with a "Palla" tray at waist height.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Phase 1–2: 6-point chassis, BO motor mounts, PVC spine",
                  "Phase 3–4: Leg boxes, torso shell, arm articulation",
                  "Phase 5–6: Head unit with AV hub, arc reactor chest LED",
                  "Phase 7: Electronics mounting on nylon standoffs",
                  "Phase 8: Spray paint, matte varnish, craft foam detailing",
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary glow-dot flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img src={jarvisCloseup} alt="JARVIS head closeup with LED eyes" className="w-full max-w-md mx-auto rounded-2xl drop-shadow-[0_0_40px_hsl(210_100%_60%/0.15)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="sr text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Gallery</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Visual <span className="text-primary">Showcase</span></h2>
          </div>
          <div className="sr grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { img: jarvisHero, alt: "JARVIS full body front" },
              { img: jarvisShowcase, alt: "JARVIS 3/4 angle" },
              { img: jarvisCloseup, alt: "JARVIS head closeup" },
              { img: jarvisDetail, alt: "JARVIS hand detail" },
              { img: boardRaspi, alt: "Raspberry Pi 3B+ — The Master" },
              { img: boardUno, alt: "Arduino Uno — The Bouncer" },
              { img: boardArduino, alt: "Arduino Mega — The Muscle" },
              { img: boardPico, alt: "Raspberry Pi Pico — The Artist" },
            ].map((item, i) => (
              <div key={i} className="glass-panel glow-border overflow-hidden aspect-square group">
                <img src={item.img} alt={item.alt} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs */}
      <section id="docs" className="section-spacing">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="sr text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Documentation</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Project <span className="text-primary">Archive</span></h2>
          </div>
          <div className="sr space-y-4">
            {[
              { name: "The JARVIS Manifesto", desc: "Engineering philosophy & system design", file: "THE_JARVIS_MANIFESTO.docx" },
              { name: "The JARVIS Compendium", desc: "Complete reference encyclopedia", file: "THE_JARVIS_COMPENDIUM.docx" },
              { name: "Fabrication Guide", desc: "Physical build manual", file: "JARVIS_FABRICATION_GUIDE.docx" },
              { name: "Print Manual", desc: "Step-by-step build, wiring & code", file: "JARVIS_PRINT_MANUAL.docx" },
              { name: "The Complete Archive", desc: "Master 131-page reference", file: "THE_COMPLETE_ARCHIVE.docx" },
            ].map((doc) => (
              <a
                key={doc.file}
                href={`/docs/${doc.file}`}
                download={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glow-border p-5 flex items-center justify-between hover:border-primary/30 transition-all group block"
              >
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">{doc.name}</span>
                    <p className="text-xs text-muted-foreground">{doc.desc}</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 max-w-3xl relative">
          <div className="sr text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Architect Division</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The <span className="text-primary">Team</span></h2>
          </div>
          <div className="sr space-y-10">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Lead Architect</p>
              <p className="font-display text-2xl font-bold">Vikhyat Gupta</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Fabrication Team</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Aayush Agarwal", "Shresth Adukia", "Adhyansh Kumar", "Rudraksh Sharma"].map((n) => (
                  <div key={n} className="glass-panel p-4"><p className="font-display font-semibold text-sm">{n}</p></div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Organization</p>
              <p className="font-display text-lg font-semibold text-primary">St. Anthony's School</p>
              <p className="text-xs text-muted-foreground mt-1">Target Deployment: September 16th</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display text-lg font-bold text-primary mb-2">PROJECT JARVIS</p>
          <p className="text-sm text-muted-foreground">A 4-board edge-computing android · Architect Division · St. Anthony's School</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
