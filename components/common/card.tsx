import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`
      group relative overflow-hidden p-4 sm:p-5 md:p-6 lg:p-7
      bg-white border border-gray-200 hover:text-white
      transition-all duration-300 hover:shadow-lg hover:scale-105
      ${className}
    `}
    >
      {/* Sliding background effect - slides in from left, out to right */}
      <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 bg-blue-50 group-hover:bg-white group-hover:bg-opacity-20 transition-colors duration-300 inline-block">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white mb-2 sm:mb-3 text-left transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-white text-left leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
