import React from 'react';

function Section() {
  return (
  <div className="flex flex-col">
    <div className="flex flex-col justify-evenly items-center h-[50vh] bg-[url('https://cdn.sanity.io/images/d5pxilw4/production/cc821d69150f6e076509a1de30a7e607fed899c6-1920x1080.webp')] bg-center bg-no-repeat bg-cover">
      <p className="text-white text-center text-4xl lg:text-7xl font-semibold">Hear The Music <br></br>
      And The Moment.</p>
      <button className="bg-black text-white rounded-xl w-[10rem] h-[2.5rem] cursor-not-allowed text-lg font-semibold hover:text-black">Shop</button>
    </div>


    <div className="flex flex-col justify-evenly items-center h-[50vh] bg-[url('https://cdn.sanity.io/images/d5pxilw4/production/367d0036923cea7123580b22a563b23e87a42d1f-1920x640.jpg')] bg-center bg-no-repeat bg-cover">
      <p className="text-white text-center text-4xl lg:text-7xl font-semibold">Engineered for YOU.</p>

      <button className="bg-black text-white rounded-xl w-[10rem] h-[2.5rem] cursor-not-allowed text-lg font-semibold hover:text-black">Shop</button>
    </div>


  </div>
  )
}

export default Section