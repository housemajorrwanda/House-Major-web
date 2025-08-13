import React from "react";
import { NavigationLink } from "@/components/common/NavigationLink";

export const Navigation = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/services">Services</NavigationLink>
      <NavigationLink href="/projects">Projects</NavigationLink>
      <NavigationLink href="/invest">Invest in Us</NavigationLink>
      <NavigationLink href="/careers">Careers</NavigationLink>
      <NavigationLink href="/about">About Us</NavigationLink>
      <NavigationLink href="/contact">Contact</NavigationLink>
    </nav>
  );
};
