import React from 'react';

import {client} from '../lib/client';

import {Product ,FooterBanner,HeroBanner}
from '../components';

const Home = ({ products , bannerData }) => (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {console.log(bannerData)}
    
    <div className="text-3xl font-semibold p-10 text-center">
      <h2>Our Products</h2>
    </div>

    <div className="flex flex-wrap w-full gap-20 justify-center p-10">
      {products?.map(
        (product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner FooterBanner={bannerData && bannerData[0]} />

    </div>
  );

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props:{products,bannerData}
  }
}

export default Home