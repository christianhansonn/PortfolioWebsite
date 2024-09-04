import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ url, children, className = "" }) => {
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
