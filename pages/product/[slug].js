import React from 'react';
import { useState } from 'react';
import { client,urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus,AiFillStar,AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ product,products}) => { 
    const { image, name, details, price } = product;

    const[index,setIndex] =useState (0);
    const {decQty,incQty,qty,onAdd} = useStateContext();

  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[index])
                    } className="product-detail-image" alt=""/>
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                        <img 
                        key ={i}
                        src={urlFor(item)}
                        className ={i === index ? 
                        'small-image selected-image':
                        'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        alt =""/>
                    ))}
                    </div> 
            </div>
            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                    <p>
                        (249)
                    </p>
                </div>
                <p className="price">Rs {price}</p>
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
                <div className="buttons">
                 <button type="button"
                 className="add-to-cart" 
                 onClick={() => onAdd(product,qty)}>MET DAN KABA</button>

                 <button type="button"
                 className="buy-now" 
                 onClick="">Buy NOW</button>

                </div>
                <h4>Details:</h4>
                <p>{details}</p>
            </div>

        </div>
        <div className="maylike-products-wrapper">
            <h2>Enkor Foss Products</h2>
            <div className="marquee">
                <div className="maylike-products-container track">
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