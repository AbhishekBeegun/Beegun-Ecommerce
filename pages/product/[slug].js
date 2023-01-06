import React from 'react';
import { useState } from 'react';
import { client,urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus,AiFillStar,AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ product,products}) => { 
    const { image, name, details, price } = product;
    const[index,setIndex] = useState (0);
    const {decQty,incQty,qty,onAdd,setShowCart} = useStateContext();
    
    const handleBuy = () => {
       onAdd(product,qty);
       setShowCart(true);
    }
  return (
    <div className="flex flex-col w-[100vw]">
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row lg:w-1/2">
                <div className="p-10">
                    <img src={urlFor(image && image[index])
                    } className="bg-white lg:w-[500px] hover:bg-[rgb(0,0,0,1)] transition-all ease-in-out duration-[0.3s] rounded-2xl hover:cursor-zoom-in" alt=""/>
                </div>
                <div className="flex lg:flex-col justify-evenly">
                    {image?.map((item, i) => (
                        <img key ={i}
                        src={urlFor(item)} className = {i === index ? 
                        'small-image selected-image':
                        'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        alt =""/>
                    ))}
                </div> 
            </div>

            <div className="flex flex-col items-center justify-evenly lg:h-[90vh] lg:w-1/2">
                <h1 className="text-3xl font-medium p-5">{name}</h1>
                <div className="flex items-center gap-5 p-2">
                    <div className="flex text-yellow-600">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                    <p className="text-[0.5rem] lg:text-[0.7rem]">
                        (249)
                    </p>
                </div>
                <p className="text-2xl font-semibold p-8">Rs {price}</p>
                {/*<div className="quantity">
                    <h3>Quantity</h3>
                    <p className ="quantity-desc">
                     <span className="minus"
                     onClick={decQty}><AiOutlineMinus/></span>
                     <span className="num"
                     onClick="">{qty}</span>
                     <span className="plus"
                     onClick={incQty}><AiOutlinePlus/></span>
                    </p> problem kan add 2 fois add to cart akz item.name
                        </div>*/}
                <div className="flex gap-4 items-center w-11/12 justify-center text-white">
                 <button type="button"
                 className="bg-yellow-500 px-10 py-5 rounded-lg font-semibold hover:scale-110 transition-all ease-in-out" 
                 onClick={() => onAdd(product,qty)}>MET DAN KADI</button>

                 <button type="button"
                 className="bg-red-500 px-10 py-5 rounded-lg font-semibold hover:scale-110 transition-all ease-in-out" 
                 onClick={handleBuy}>Buy NOW</button>
                </div>

                <div className="flex flex-col items-center p-8">
                <h4 className="p-5 text-xl">Details :</h4>
                <p className="text-slate-400 text-center h-[300px] overflow-scroll">{details}</p>
                </div>
            </div>

        </div>


        <div className="flex flex-col items-center">
            <h2 className="text-2xl">Enkor Foss Products</h2>
            <div className="">
                <div className="flex py-12 animate-marquee gap-10 whitespace-nowrap w-[180%] hover:pause">
                    {products.map((item)=> (
                        <Product key ={item._id}
                        product={item} />
                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug{
            current
        }
    }
    `;
    const products = await client.fetch(query) ;

    const paths = products.map((product) =>({
        params:{
            slug: product.slug.current
        }

    }));

    return {
        paths,
        fallback:'blocking'
    }
}


export const getStaticProps = async ({params:{ slug }}) => {
    const query = `*[_type == "product" && slug.current =='${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
    return{
      props:{products,product}
    }
  }

export default ProductDetails