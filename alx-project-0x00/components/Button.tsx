import React from "react";

interface ButtonProps {
  title: string;
  className?: string; // tailwind styles passed in
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 transition ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
