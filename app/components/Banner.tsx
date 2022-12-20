import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className='flex flex-col  lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div className='mt-4 md:mt-0'>
        wellcome to <span>evry developers</span> favorite blog
      </div>

      <p className='mt-4 md:mt-2 text-green-400 max-w-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        ducimus.
      </p>
    </div>
  );
};

export default Banner;
