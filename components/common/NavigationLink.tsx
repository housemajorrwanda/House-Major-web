import React from "react";
import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavigationLink = ({
  href,
  children,
  className = "",
  onClick,
}: NavigationLinkProps) => {
  const baseClasses =
    "font-montserrat font-medium text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg transition-colors duration-200 whitespace-nowrap text-black hover:text-blue-600 hover:font-semibold";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </Link>
  );
};
