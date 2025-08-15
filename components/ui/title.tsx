import React from "react";

interface TitleProps {
  subtitle?: string;
  title: string;
  className?: string;
  titleSize?: "sm" | "md" | "lg" | "xl";
  subtitleSize?: "xs" | "sm" | "md" | "lg";
}

const Title: React.FC<TitleProps> = ({
  subtitle = "BEST IT SOLUTION PROVIDER",
  title,
  className = "",
  titleSize = "lg",
  subtitleSize = "sm",
}) => {
  const titleSizeClasses = {
    sm: "text-lg sm:text-xl md:text-2xl lg:text-3xl",
    md: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    lg: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    xl: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
  };

  const subtitleSizeClasses = {
    xs: "text-xs sm:text-sm",
    sm: "text-xs sm:text-sm md:text-base lg:text-lg",
    md: "text-sm sm:text-base md:text-lg lg:text-xl",
    lg: "text-base sm:text-lg md:text-xl lg:text-2xl",
  };
  return (
    <div className={`max-w-4xl ${className}`}>
      {subtitle && (
        <div
          className={`${subtitleSizeClasses[subtitleSize]} font-medium mb-8 tracking-wide flex items-center text-blue-600`}
        >
          <div className="relative w-12 h-6 mr-3 flex-shrink-0">
            {/* Base rounded rectangle */}
            <div className="w-full h-full bg-white rounded-full border-blue-600 border-2"></div>
            {/* Half blue square with rounded corners */}
            <div className="absolute top-0 left-0 w-8 h-6 bg-blue-600 rounded-full"></div>
          </div>
          {subtitle}
        </div>
      )}
      <h1
        className={`${titleSizeClasses[titleSize]} font-bold leading-tight break-words`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
