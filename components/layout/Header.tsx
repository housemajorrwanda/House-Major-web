import React from "react";
import { Logo } from "@/components/common/logo";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import Search from "@/components/common/search";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header
      className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 overflow-hidden"
      role="banner"
    >
      <div className="relative h-16 sm:h-20 md:h-22 lg:h-24">
        {/* Full-height gradient background extending to left edge */}
        <div className="absolute left-0 top-0 h-full bg-blue-900 w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 [clip-path:polygon(0_0,_100%_0,_75%_100%,_0%_100%)] sm:[clip-path:polygon(0_0,_100%_0,_80%_100%,_0%_100%)] md:[clip-path:polygon(0_0,_100%_0,_85%_100%,_0%_100%)] lg:[clip-path:polygon(0_0,_100%_0,_87%_100%,_0%_100%)] xl:[clip-path:polygon(0_0,_100%_0,_90%_100%,_0%_100%)]"></div>

        <div className="relative w-full mx-auto h-full max-w-none">
          <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16">
            {/* Logo */}
            <div className="flex items-center h-full z-10 flex-shrink-0 pr-2 sm:pr-3 md:pr-4 lg:pr-6 xl:pr-8">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="flex-1 flex justify-center lg:ml-12 xl:ml-20 2xl:ml-24 lg:mr-2 xl:mr-6">
              <Navigation />
            </div>

            {/* Search & CTA (desktop only) */}
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 2xl:gap-3 flex-shrink-0">
              <Search />
              <Button
                size="md"
                className="text-xs lg:text-sm xl:text-base whitespace-nowrap"
              >
                Get A Quote
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
