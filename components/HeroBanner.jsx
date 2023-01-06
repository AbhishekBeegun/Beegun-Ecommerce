import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="relative h-[60vh] p-5 w-[100vw] bg-[url('https://cdn.sanity.io/images/d5pxilw4/production/32f975a8440a3507793a56a6978da1c07bf9be24-1280x960.jpg')] bg-center bg-no-repeat bg-cover lg:bg-top">
        <div className="flex flex-col h-[100%] box-border p-2 lg:p-10 justify-evenly items-center">
            <p className="text-white text-xl font-medium">
                {heroBanner.smallText}
            </p>
            
            <h1 className="text-white text-[6rem] lg:text-[12rem] font-semibold">
                {heroBanner.largeText1}
            </h1>

            <img src={urlFor(heroBanner.image)} alt="HeadSet White"
             className="absolute hidden lg:block top-0 right-0 lg:right-[15%] w-[15rem] h-[15rem] lg:w-[25rem] lg:h-[25rem]"/>

            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button className="bg-black text-white rounded-xl w-[10rem] h-[2.5rem] cursor-pointer text-lg font-semibold hover:invert" 
                    type ="button">
                        {heroBanner.buttonText}
                    </button>
                </Link>
                <div className="absolute flex flex-col text-white right-10 bottom-10 lg:right-[20%]">
                    <h5 className="text-xl font-normal">Description : </h5>
                    <p className="font-light">{heroBanner.desc}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroBanner