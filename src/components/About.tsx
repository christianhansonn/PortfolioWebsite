interface HighlightTextProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children, onClick }) => (
  <span
    onClick={onClick}
    className={`font-bold text-cyan-400 ${onClick ? "cursor-pointer underline" : ""}`}
  >
    {children}
  </span>
);

const stats = [
  { value: "5+", label: "Years AI Experience" },
  { value: "8+", label: "AI Projects" },
  { value: "1", label: "Cloud Certification" },
];

export default function About() {
  return (
    <section id="about" className="py-20 text-slate-300">
      <div className="mx-auto w-[85%]">
        {/* HUD section header */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/60"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            02
          </span>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            About Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        {/* Two-column layout */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          {/* Left: content card */}
          <div className="glass-card hud-corners relative rounded-2xl p-8 space-y-4 text-sm leading-relaxed max-sm:text-xs">
            <p>
              I specialize in{" "}
              <HighlightText>LangChain RAG pipelines & AI agent orchestration</HighlightText>
              , building intelligent systems that turn complex enterprise data into actionable intelligence.
            </p>
            <p>
              My recent work includes designing{" "}
              <HighlightText>custom MCP server architecture</HighlightText>
              {" "}for governed, reusable agent tooling — decoupling AI agent logic from data access across the organization.
            </p>
            <p>
              I architect{" "}
              <HighlightText>enterprise AI APIs with Django + Azure OpenAI + Azure AI Foundry</HighlightText>
              , standardizing generative AI capabilities across teams, including OCR processing and LLM interactions.
            </p>
            <p>
              On the ML side, I build{" "}
              <HighlightText>predictive models with scikit-learn and XGBoost</HighlightText>
              {" "}layered with LangChain agents that autonomously surface insights and drive retention.
            </p>
            <p>
              I deliver{" "}
              <HighlightText>React frontends for AI-powered internal tools</HighlightText>
              {" "}and full-stack solutions in Python and TypeScript, deployed on{" "}
              <HighlightText>Azure and AWS cloud platforms</HighlightText>.
            </p>
          </div>

          {/* Right: stats panels */}
          <div className="flex flex-col gap-4 md:w-44">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card hud-corners relative rounded-2xl p-5 text-center">
                <p
                  className="text-3xl font-black text-cyan-400 text-glow-cyan"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
