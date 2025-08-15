import React from "react";
import { NavigationLink } from "@/components/common/NavigationLink";

export const Navigation = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/about">About</NavigationLink>
      <NavigationLink href="/services">Services</NavigationLink>
      <NavigationLink href="/projects">Projects</NavigationLink>
      <NavigationLink href="/invest">Invest</NavigationLink>
      <NavigationLink href="/careers">Careers</NavigationLink>
      <NavigationLink href="/contact">Contact</NavigationLink>
    </nav>
  );
};
