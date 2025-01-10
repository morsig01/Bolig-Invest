import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className="bg-hero-pattern bg-cover bg-center">
      <div className="flex justify-center pt-32">
        <Image src="/logo black.png" width={500} height={500} alt="logo" />
      </div>
      <div className="bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-700 mx-40 -mt-48 pt-36 pb-36 rounded-t-lg">
        <div className="flex justify-center items-center space-x-64">
          {/* circle 1 */}
          <div>
            <div className="h-80 w-80 bg-black rounded-full flex items-center justify-center text-white text-5xl font-bold">
              300+
            </div>
            <div className="text-black text-4xl font-bold my-7 flex justify-center">
              Investments made
            </div>
          </div>
          {/* circle 2 */}
          <div>
            <div className="h-96 w-96 bg-black rounded-full flex items-center justify-center text-white text-5xl font-bold">
              $1.5B+
            </div>
            <div className="text-black text-4xl font-bold my-7 flex justify-center">
              Revenue accumulated
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
