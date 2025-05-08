import React from "react";

type TitleInfos = {
  text: string;
  className?: string;
};

const Title: React.FC<TitleInfos> = ({ text, className = "" }) => {
  return <h1 className={`text-5xl font-extrabold text-center mb-10 text-pink-400 ${className}`}>{text}</h1>;
};

export default Title;