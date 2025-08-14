import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logonew.svg"
        alt="Major House"
        width={200}
        height={200}
        className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20"
      />
      <div className="ml-1.5 xs:ml-2 sm:ml-2.5 md:ml-3 flex flex-col items-center text-center">
        <span className="font-montserrat font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white whitespace-nowrap">
          HOUSE MAJOR
        </span>
        <span className="font-montserrat font-light text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-base text-gray-300 whitespace-nowrap">
          make.IT.now
        </span>
      </div>
    </Link>
  );
};
