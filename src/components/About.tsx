interface HighlightTextProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children, onClick }) => (
  <span
    onClick={onClick}
    className={`font-bold ${onClick ? "cursor-pointer underline" : ""}`}
  >
    {children}
  </span>
);

export default function About() {
  return (
    <div id="about" className="bg-[#808080] py-10 text-white max-sm:text-xs">
      <div className="mx-auto w-[80%] space-y-4">
        <p>
          I specialize in developing{" "}
          <HighlightText>
            fault-tolerant APIs, cloud-based data pipelines, and AI-powered
            automations
          </HighlightText>{" "}
          to streamline workflows and uncover insights. My expertise spans{" "}
          <HighlightText>backend development with Django</HighlightText>,{" "}
          <HighlightText>
            frontend development with React and Tailwind
          </HighlightText>
          , and{" "}
          <HighlightText>
            automation and E2E testing with Playwright
          </HighlightText>
          . I'm passionate about{" "}
          <HighlightText>leading key projects</HighlightText>,{" "}
          <HighlightText>mentoring engineers</HighlightText>, and creating
          solutions that can both{" "}
          <HighlightText>drive efficiency and innovation</HighlightText>, and be{" "}
          <HighlightText>adopted across the entire organization</HighlightText>.
        </p>
      </div>
    </div>
  );
}
