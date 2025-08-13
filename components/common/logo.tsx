import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/majorlogo.png"
        alt="Major House"
        width={200}
        height={200}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
      />
      <div className="ml-2 flex flex-col items-center text-center">
        <span className="font-montserrat font-medium text-sm sm:text-base md:text-lg lg:text-xl text-white">
          HOUSE MAJOR
        </span>
        <span className="font-montserrat font-light text-xs sm:text-sm text-gray-300">
          make.IT.now
        </span>
      </div>
    </Link>
  );
};
