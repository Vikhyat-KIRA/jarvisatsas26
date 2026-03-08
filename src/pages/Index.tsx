import { useEffect, useRef } from "react";
import jarvisHero from "@/assets/jarvis-hero.png";
import jarvisShowcase from "@/assets/jarvis-showcase.png";
import jarvisCloseup from "@/assets/jarvis-closeup.png";
import jarvisDetail from "@/assets/jarvis-detail.png";
import { Cpu, CircuitBoard, Microchip, Wifi, Download, FileText, Users, Eye, Wrench, Image } from "lucide-react";

// Intersection Observer hook for fade-in
function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".scroll-reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Index = () => {
  const contentRef = useScrollFadeIn();

  return (
    <div ref={contentRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 rounded-t-none border-x-0">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-bold tracking-wider text-primary">JARVIS</span>
          <div className="hidden md:flex items-center gap-8">
            {["Vision", "Architecture", "Build", "Gallery", "Team"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-glow-muted/10 blur-[80px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-24">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 fade-in">
              Meet the star of the show
            </p>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 fade-in delay-100">
              <span className="glow-text text-primary">JARVIS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 fade-in delay-200">
              A 4-foot humanoid robot powered by Raspberry Pi and Arduino.
            </p>
            <div className="mt-10 flex gap-4 justify-center lg:justify-start fade-in delay-300">
              <a href="#vision" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Explore
              </a>
              <a href="#docs" className="px-8 py-3 border border-border text-foreground rounded-lg hover:border-primary/50 hover:text-primary transition-colors">
                Documentation
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center fade-in delay-200">
            <img
              src={jarvisHero}
              alt="JARVIS papercraft humanoid robot"
              className="w-[400px] md:w-[500px] animate-float drop-shadow-[0_0_60px_hsl(210_100%_60%/0.3)]"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="section-spacing">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="scroll-reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Vision</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Building the future of<br />
              <span className="text-primary">accessible robotics</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Project JARVIS is an ambitious endeavor to design and build a fully functional 4-foot humanoid robot using accessible, off-the-shelf components. Powered by Raspberry Pi and Arduino, JARVIS demonstrates that advanced robotics can be achieved through creativity, determination, and open-source technology.
            </p>
          </div>
        </div>
      </section>

      {/* Meet JARVIS */}
      <section className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="scroll-reveal flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <img
                src={jarvisShowcase}
                alt="JARVIS robot showcase view"
                className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_hsl(210_100%_60%/0.2)]"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Meet <span className="text-primary">JARVIS</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Standing at 4 feet tall, JARVIS is a humanoid robot built from the ground up by a team of students. Every joint, every servo, every line of code — crafted with precision and passion.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Height", value: "4 feet" },
                  { label: "Brain", value: "Raspberry Pi" },
                  { label: "Controllers", value: "Arduino" },
                  { label: "Design", value: "Humanoid" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-panel glow-border p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    <p className="text-lg font-semibold text-primary mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="scroll-reveal text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CircuitBoard className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Architecture</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              System <span className="text-primary">Architecture</span>
            </h2>
          </div>

          <div className="scroll-reveal grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Cpu,
                title: "Raspberry Pi",
                subtitle: "Main Brain",
                description: "Central processing unit handling high-level decision making, computer vision, and communication.",
              },
              {
                icon: Microchip,
                title: "Arduino",
                subtitle: "Motor Controllers",
                description: "Real-time motor control and sensor management for precise movement and interaction.",
              },
              {
                icon: Wifi,
                title: "Raspberry Pi Pico",
                subtitle: "Edge Computing",
                description: "Lightweight edge processing for distributed sensor networks and rapid response systems.",
              },
            ].map((item) => (
              <div key={item.title} className="glass-panel glow-border p-8 text-center group hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-primary mb-3">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Connection lines visual */}
          <div className="scroll-reveal flex justify-center mt-10">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <div className="w-3 h-3 rounded-full bg-primary glow-dot" />
              <div className="w-24 h-px bg-gradient-to-r from-primary/50 to-primary/10" />
              <div className="w-3 h-3 rounded-full bg-primary glow-dot" />
              <div className="w-24 h-px bg-gradient-to-r from-primary/50 to-primary/10" />
              <div className="w-3 h-3 rounded-full bg-primary glow-dot" />
            </div>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section id="build" className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="scroll-reveal flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Wrench className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-[0.2em] text-primary">Build Process</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                From concept to <span className="text-primary">reality</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                JARVIS was constructed through iterative design and fabrication, combining 3D modeling, manual assembly, and electronic integration. The team designed and built the structural frame, integrated servo motors for articulated movement, and programmed the control systems from scratch.
              </p>
              <div className="space-y-4 pt-4">
                {["Structural frame design & fabrication", "Servo motor integration for articulated joints", "Raspberry Pi & Arduino programming", "Sensor array and wiring assembly"].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary glow-dot flex-shrink-0" />
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src={jarvisCloseup}
                alt="JARVIS robot closeup detail"
                className="w-full max-w-md mx-auto rounded-2xl drop-shadow-[0_0_40px_hsl(210_100%_60%/0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="scroll-reveal text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Gallery</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Visual <span className="text-primary">Showcase</span>
            </h2>
          </div>

          <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[jarvisHero, jarvisShowcase, jarvisCloseup, jarvisDetail].map((img, i) => (
              <div key={i} className="glass-panel glow-border overflow-hidden aspect-square group">
                <img
                  src={img}
                  alt={`JARVIS gallery image ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
            {[1, 2, 3, 4].map((i) => (
              <div key={`placeholder-${i}`} className="glass-panel aspect-square flex items-center justify-center">
                <p className="text-xs text-muted-foreground text-center px-4">Image will be added</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="docs" className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative max-w-3xl">
          <div className="scroll-reveal text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Documentation</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Project <span className="text-primary">Docs</span>
            </h2>
          </div>

          <div className="scroll-reveal space-y-4">
            {[
              { name: "Build Guide", file: "jarvis-build-guide.pdf" },
              { name: "Technical Specifications", file: "jarvis-tech-specs.pdf" },
              { name: "Wiring Diagrams", file: "jarvis-wiring-diagrams.pdf" },
            ].map((doc) => (
              <div key={doc.name} className="glass-panel glow-border p-5 flex items-center justify-between group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium">{doc.name}</span>
                </div>
                <span className="text-xs text-muted-foreground italic">Content will be added</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-spacing">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="scroll-reveal text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-[0.2em] text-primary">Team</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The <span className="text-primary">Team</span>
            </h2>
          </div>

          <div className="scroll-reveal space-y-10">
            {/* Lead */}
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Lead Architect</p>
              <p className="font-display text-2xl font-bold">Vikhyat Gupta</p>
            </div>

            {/* Fabrication */}
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Fabrication Team</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Aayush Agarwal", "Shresth Adukia", "Adhyansh Kumar", "Rudraksh Sharma"].map((name) => (
                  <div key={name} className="glass-panel p-4">
                    <p className="font-display font-semibold text-sm">{name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization */}
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Organization</p>
              <p className="font-display text-lg font-semibold text-primary">St. Anthony's School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display text-lg font-bold text-primary mb-2">JARVIS</p>
          <p className="text-sm text-muted-foreground">
            A student-built humanoid robot project from St. Anthony's School.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
