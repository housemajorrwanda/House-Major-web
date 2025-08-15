import React from "react";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  background?: "white" | "black" | "gray";
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  backgroundColor,
  backgroundImage,
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  background,
}) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: backgroundImage ? backgroundSize : undefined,
    backgroundPosition: backgroundImage ? backgroundPosition : undefined,
    backgroundRepeat: backgroundImage ? backgroundRepeat : undefined,
  };

  // Define predefined background styles
  const backgroundClasses = {
    white: "bg-white text-black",
    black: "bg-black text-white",
    gray: "bg-gray-100 text-black",
  };

  // Get the appropriate background class
  const backgroundClass = background ? backgroundClasses[background] : "";

  return (
    <section
      className={`mx-auto px-8 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-16 sm:py-20 md:py-28 lg:py-36 xl:py-44 ${backgroundClass} ${className}`}
      style={backgroundStyle}
    >
      {children}
    </section>
  );
};

export default Section;
