import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-40 px-80 flex flex-col items-start">
      <div className="border-white border-2 rounded-full px-12 py-2 text-4xl">
        About
      </div>
      <div className="flex flex-row items-center my-20">
        <div className="max-w-5xl text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          fermentum sapien nec ipsum luctus, ultricies mollis magna condimentum.
          Mauris feugiat aliquet lorem in ultricies. Cras a pulvinar urna, quis
          scelerisque lorem. Etiam bibendum maximus tempus. Aliquam aliquet
          massa nec augue fermentum mattis. Donec venenatis suscipit aliquet.
          Etiam viverra a lectus sed auctor. Nunc nec mauris nec eros vestibulum
          auctor ut eget nibh. Aenean nec magna lorem.
        </div>
        <div className="ml-52 rotate-180 flex-shrink-0 bg-white p-20 rounded-full">
          <Image src="/arrow-black.svg" width={50} height={50} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default About;
