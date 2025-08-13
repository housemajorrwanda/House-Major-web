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
  onClick 
}: NavigationLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-montserrat font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};