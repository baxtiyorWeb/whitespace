import React from "react";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "bold";
  color?: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  size = "md",
  weight = "normal",
  color = "black",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    bold: "font-bold",
  };

  return (
    <p
      className={`${sizeClasses[size]} ${weightClasses[weight]} ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
};

export default Text;
