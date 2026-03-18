import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRobot,
  faCode,
  faLayerGroup,
  faCloud,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

library.add(faRobot, faCode, faLayerGroup, faCloud, faDatabase);

interface SkillCategory {
  label: string;
  icon: IconDefinition;
  skills: string[];
  featured?: boolean;
}

const categories: SkillCategory[] = [
  {
    label: "AI / ML",
    icon: faRobot as IconDefinition,
    featured: true,
    skills: [
      "LangChain",
      "MCP",
      "RAG Pipelines",
      "LLM Orchestration",
      "AI Agent Workflows",
      "Azure AI Foundry",
      "Azure OpenAI",
      "Prompt Engineering",
      "OCR",
    ],
  },
  {
    label: "Languages",
    icon: faCode as IconDefinition,
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    icon: faLayerGroup as IconDefinition,
    skills: ["Django", "React", "Playwright", "MCP Python SDK"],
  },
  {
    label: "Cloud & Infra",
    icon: faCloud as IconDefinition,
    skills: ["AWS (S3, Lambda, EC2, SQS)", "Azure", "Terraform", "Docker", "CI/CD"],
  },
  {
    label: "Databases",
    icon: faDatabase as IconDefinition,
    skills: ["PostgreSQL", "Snowflake", "SQL Server", "DynamoDB"],
  },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto w-[85%]">
        {/* HUD section header */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/60"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            03
          </span>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={`glass-card hud-corners relative rounded-2xl p-6 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-glow-cyan transition-all duration-300 ${cat.featured ? "md:col-span-2" : ""}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-cyan-400 text-glow-cyan">
                  <FontAwesomeIcon icon={cat.icon} />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_8px_rgba(34,211,238,0.2)] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
