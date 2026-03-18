import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  url: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ url, children, className = "" }: ButtonProps) => {
  const navigate = () => window.open(url, "_blank", "noreferrer");
  const formatting = twMerge(
    "rounded border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 " +
    "transition-all duration-300 cursor-pointer " +
    "hover:border-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-100 " +
    "hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
    className,
  );
  return (
    <button onClick={navigate} className={formatting}>
      {children}
    </button>
  );
};

export default Button;
