import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({FooterBanner:{discount,largeText1,largeText2,
  saleTime,smallText,midText,desc,product,buttonText,
  image}}) => {
  return (
    <div className="relative h-[50vh] bg-cyan-500 text-white p-2">
      <div className="flex flex-col lg:flex-row justify-around h-full p-10">
        <div className="flex flex-col justify-evenly">
          <p>{discount}</p>
          <h3 className="text-6xl font-semibold lg:text-[6rem]">
          {largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className="flex flex-col justify-evenly h-[55%] lg:h-full">
          <p>{smallText}</p>
          <h3 className="text-4xl font-semibold lg:text-[6rem]">{midText}</h3>
          <Link href={`/product/${product}`}>
            <button className="bg-black text-white rounded-xl w-[10rem] h-[2.5rem] cursor-pointer text-lg font-semibold hover:invert" type="button">{buttonText}</button>
          </Link>

        </div>

        <img src={urlFor(image)} className="absolute top-20 right-0 lg:right-[40%] w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem]" alt="" />
      </div>
    </div>
  )
}

export default FooterBanner