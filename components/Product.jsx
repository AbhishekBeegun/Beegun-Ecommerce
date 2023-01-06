import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <div id="products">
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer hover:scale-110 transition-all">
          <img src ={urlFor(image && image[0])}
           width={250}
           height={250}
           className="rounded-xl hover:bg-black"
           alt="" />
           <p className="font-semibold p-2">{name}</p>
           <p className="text-slate-600 font-medium text-end">Rs {price}</p>
        </div>
      </Link>
    </div>
   
  )
}

export default Product