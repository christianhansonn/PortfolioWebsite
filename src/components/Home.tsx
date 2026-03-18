import bannerImage from "/image/bannerpicture.jpeg";
import Button from "../utils/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

library.add(faAws as IconDefinition);

const techBadges = ["LangChain", "RAG", "MCP", "Azure OpenAI", "Django", "TypeScript"];

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col">
        {/* Name */}
        <h1
          className="text-gradient-cyan-violet text-5xl font-black tracking-tight max-sm:text-3xl"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          Christian Hanson
        </h1>

        {/* Role */}
        <p className="mt-2 text-3xl font-bold max-sm:text-2xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          AI{" "}
          <span className="text-cyan-400 text-glow-cyan">Engineer</span>
        </p>

        {/* Summary */}
        <p className="ml-[2px] mt-4 text-sm leading-relaxed text-slate-300 max-sm:mt-2 max-sm:w-[90%] sm:w-[50%] md:w-[48%] lg:w-[40%]">
          5+ years designing and deploying enterprise AI platforms, with a focus on{" "}
          <span className="text-cyan-400 font-medium">LangChain RAG</span>,{" "}
          <span className="text-violet-400 font-medium">MCP server architecture</span>, and{" "}
          <span className="text-cyan-400 font-medium">Azure OpenAI</span> integrations.
        </p>

        {/* Tech badge strip */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="rounded border border-cyan-500/30 bg-cyan-500/5 px-2.5 py-0.5 text-xs font-medium text-cyan-300/80"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap gap-2 max-sm:w-[90%]">
          <Button url="https://www.linkedin.com/in/christianhansonn/">
            LinkedIn
          </Button>
          <Button url="https://github.com/christianhansonn/PortfolioProject">
            GitHub{" "}
            <span role="img" aria-label="GitHub logo" className="fa fa-github" />
          </Button>
          <Button url="https://www.credly.com/badges/802048a5-2802-46cf-bb82-874b94ba7b4e/linked_in_profile">
            <span role="img" aria-label="AWS logo">
              <FontAwesomeIcon icon={faAws as IconDefinition} />{" "}
            </span>
            AWS Cert
          </Button>
        </div>
      </div>

      {/* Profile image */}
      <div className="absolute right-[10%] max-md:hidden">
        <div className="relative">
          {/* Glow halo */}
          <div
            className="animate-glow-pulse absolute inset-0 rounded-full"
            style={{ filter: "blur(20px)", background: "rgba(34,211,238,0.2)" }}
          />
          {/* HUD corners overlay */}
          <div className="hud-corners absolute inset-[-12px] rounded-full" />
          <img
            className="relative rounded-full bg-cover object-cover ring-2 ring-cyan-400/60 grayscale filter md:h-[320px] md:w-[320px] lg:h-[380px] lg:w-[380px] xl:h-[400px] xl:w-[400px]"
            src={bannerImage}
            alt="Profile banner"
          />
        </div>
      </div>
    </>
  );
}
