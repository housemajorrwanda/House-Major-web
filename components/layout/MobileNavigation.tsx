"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { NavigationLink } from "@/components/common/NavigationLink";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Note: avoid direct DOM manipulation; overlay intercepts interactions

  // Close on Escape is handled via onKeyDown on the panel (React-only)

  return (
    <div className="lg:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {/* Hamburger/Close icon */}
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
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

      {/* Mobile menu (rendered in a portal to escape header/page stacking contexts) */}
      {isOpen &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <div
              className="fixed top-0 right-0 h-dvh w-full sm:w-80 md:w-96 bg-white shadow-xl border-l border-gray-200 z-[9999]"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === "Escape") closeMenu();
              }}
            >
              {/* Close button */}
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className="flex flex-col space-y-1 sm:space-y-2 p-3 sm:p-4 md:p-6 bg-white pt-16 sm:pt-20 md:pt-24">
                <NavigationLink
                  href="/"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </NavigationLink>
                <NavigationLink
                  href="/services"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Services
                </NavigationLink>
                <NavigationLink
                  href="/projects"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Projects
                </NavigationLink>
                <NavigationLink
                  href="/invest"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Invest in Us
                </NavigationLink>
                <NavigationLink
                  href="/careers"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Careers
                </NavigationLink>
                <NavigationLink
                  href="/about"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  About Us
                </NavigationLink>
                <NavigationLink
                  href="/contact"
                  className="block px-3 py-2.5 sm:px-4 sm:py-3 rounded-md hover:bg-gray-100 text-sm sm:text-base md:text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  Contact
                </NavigationLink>
              </nav>
            </div>
          </>,
          document.body
        )}
    </div>
  );
};
