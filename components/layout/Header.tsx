import React from "react";
import { Logo } from "@/components/common/logo";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";

export const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 overflow-hidden">
      <div className="relative h-20">
        {/* Full-height gradient background extending to left edge */}
        <div className="absolute left-0 top-0 h-full bg-blue-900 w-62 sm:w-64 md:w-82 lg:w-[20rem] xl:w-[28rem] [clip-path:polygon(0_0,_100%_0,_75%_100%,_0%_100%)] sm:[clip-path:polygon(0_0,_100%_0,_80%_100%,_0%_100%)] md:[clip-path:polygon(0_0,_100%_0,_85%_100%,_0%_100%)] lg:[clip-path:polygon(0_0,_100%_0,_87%_100%,_0%_100%)] xl:[clip-path:polygon(0_0,_100%_0,_90%_100%,_0%_100%)]"></div>

        <div className="relative max-w-7xl mx-auto h-full">
          <div className="flex items-center justify-between h-full px-0.5 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center h-full relative z-10">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <Navigation />

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
