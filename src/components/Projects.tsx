import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComments,
  faServer,
  faChartLine,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

library.add(faComments, faServer, faChartLine, faBolt);

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  accentFrom: string;
  accentTo: string;
  icon: IconDefinition;
}

function ProjectCard({ title, description, tags, accentFrom, accentTo, icon }: ProjectCardProps) {
  return (
    <div className="glass-card relative flex flex-col rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-300 overflow-hidden">
      {/* Top accent bar */}
      <div className={`absolute left-0 right-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${accentFrom} ${accentTo}`} />
      <div className="mb-4 text-2xl text-cyan-400">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="mb-2 text-base font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-xs text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-all duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const projects: ProjectCardProps[] = [
  {
    title: "Document Chat Platform",
    description:
      "LangChain RAG pipeline with Azure AI Search vector search over a Snowflake data layer — reduced enterprise document review from ~1 hour to seconds.",
    tags: ["LangChain", "RAG", "Azure AI Search", "Snowflake", "Python"],
    accentFrom: "from-indigo-500",
    accentTo: "to-violet-500",
    icon: faComments as IconDefinition,
  },
  {
    title: "Custom MCP Server",
    description:
      "Separation-of-duties layer for AI agent tooling — governed, reusable connections to client data and enterprise services, decoupling agent logic from data access.",
    tags: ["MCP", "Python", "AI Agents", "API Design"],
    accentFrom: "from-cyan-500",
    accentTo: "to-blue-500",
    icon: faServer as IconDefinition,
  },
  {
    title: "Client Churn Prediction + LangChain Agents",
    description:
      "scikit-learn + XGBoost churn model hosted in Snowflake; LangChain agents autonomously conduct client pulse checks and surface at-risk accounts — boosted retention 5%.",
    tags: ["scikit-learn", "XGBoost", "LangChain", "Snowflake", "Salesforce"],
    accentFrom: "from-emerald-500",
    accentTo: "to-cyan-500",
    icon: faChartLine as IconDefinition,
  },
  {
    title: "Enterprise AI API",
    description:
      "Django-based unified AI access layer for OCR processing and LLM interactions via Azure OpenAI and Azure AI Foundry — standardized generative AI capabilities across teams.",
    tags: ["Django", "Azure OpenAI", "Azure AI Foundry", "OCR", "Python"],
    accentFrom: "from-orange-500",
    accentTo: "to-rose-500",
    icon: faBolt as IconDefinition,
  },
];

export default function Projects() {
  return (
    <div className="mx-auto w-[85%]">
      {/* HUD section header */}
      <div className="mb-12 flex items-center gap-4">
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/60"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          04
        </span>
        <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Projects
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
