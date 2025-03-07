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
    "rounded bg-[#808080] p-[2px] px-2 font-bold text-white hover:bg-black",
    className,
  );
  return (
    <button onClick={navigate} className={formatting}>
      {children}
    </button>
  );
};

export default Button;
