import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Logo with glow effect */}
        <div className="relative mb-8 sm:mb-12">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110"></div>
          <Image
            className="relative mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
            src="/majorlogo.png"
            alt="Major House logomark"
            width={500}
            height={500}
          />
        </div>

        {/* Coming soon text with animation */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider animate-fade-in leading-tight">
            Coming Soon
          </h1>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Bottom subtle text */}
      <div className="absolute bottom-8 text-center text-gray-500 text-sm">
        <p>© 2025 Major House. All rights reserved.</p>
      </div>
    </div>
  );
}
