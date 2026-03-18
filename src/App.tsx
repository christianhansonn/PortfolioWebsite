import { useRef, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import HyperspaceIntro from "./components/HyperspaceIntro";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const homeScroll = () => homeRef.current?.scrollIntoView({ behavior: "smooth" });
  const aboutScroll = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const skillsScroll = () => skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  const projectScroll = () => projectRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#050814" }}>

      {showIntro && (
        <HyperspaceIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* LAYER 1: Fixed animated mesh background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Cyan blob — top left */}
        <div
          className="animate-blob absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Violet blob — center right, delayed */}
        <div
          className="animate-blob animation-delay-4000 absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Emerald blob — bottom center, delayed */}
        <div
          className="animate-blob animation-delay-2000 absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        {/* CSS grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* LAYER 2: Fixed glassmorphism nav */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-500/20 bg-black/30 backdrop-blur-xl">
        <div ref={navRef} className="flex items-center justify-between px-8 py-4">
          <span
            className="text-sm font-bold tracking-widest text-cyan-400 text-glow-cyan"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            {"<CH />"}
          </span>
          <ul className="flex">
            <li
              className="group relative mx-4 cursor-pointer text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              onClick={homeScroll}
            >
              Home
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li
              className="group relative mx-4 cursor-pointer text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              onClick={aboutScroll}
            >
              About
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li
              className="group relative mx-4 cursor-pointer text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              onClick={skillsScroll}
            >
              Skills
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
            <li
              className="group relative mx-4 cursor-pointer text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              onClick={projectScroll}
            >
              Projects
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>
        </div>
      </nav>

      {/* LAYER 3: Scrollable content */}
      <div className="relative z-10">
        <div className="flex min-h-screen items-center px-8 pt-20 max-sm:px-6" ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div className="px-8 py-20 max-sm:px-4" ref={projectRef}>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
