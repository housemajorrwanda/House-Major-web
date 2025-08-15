import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const Text: React.FC<TextProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    xs: "text-xs sm:text-sm",
    sm: "text-xs sm:text-sm md:text-base",
    md: "text-sm sm:text-base md:text-lg lg:text-xl",
    lg: "text-base sm:text-lg md:text-xl lg:text-2xl",
  };

  return (
    <p
      className={`leading-relaxed max-w-4xl my-4 sm:my-6 md:my-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
