"use client";
import React, { useState } from "react";
import { NavigationLink } from "@/components/common/NavigationLink";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {/* Hamburger/Close icon */}
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />

          {/* Menu panel */}
          <div className="fixed top-20 right-0 w-64 bg-white shadow-xl border-l border-gray-200 z-50 h-full">
            <nav className="flex flex-col space-y-1 p-4 bg-white">
              <NavigationLink
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                Home
              </NavigationLink>
              <NavigationLink
                href="/services"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                Services
              </NavigationLink>
              <NavigationLink
                href="/projects"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                Projects
              </NavigationLink>
              <NavigationLink
                href="/invest"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                Invest in Us
              </NavigationLink>
              <NavigationLink
                href="/careers"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                Careers
              </NavigationLink>
              <NavigationLink
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                About Us
              </NavigationLink>
              <NavigationLink
                href="/contact"
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={closeMenu}
              >
                Contact
              </NavigationLink>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};
