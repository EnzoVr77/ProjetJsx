import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;