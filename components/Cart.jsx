import React,{ useRef } from 'react';
import Link from 'next/link';
import {AiOutlineMinus,AiOutlinePlus,AiOutlineShopping, AiOutlineLeft} from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import  toast  from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';


const Cart = () => {
  const cartRef = useRef();
  const { totalPrice ,totalQuantities,cartItems,setShowCart,toggleCartItemQuantity,onRemove} = useStateContext();
  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body :JSON.stringify(cartItems),
    });
   if(response.statusCode === 500) return ;

   const data = await response.json();
   toast.loading('Redirecting.....');

   stripe.redirectToCheckout({sessionId: data.id});
   
  }

  return (
    <div className="fixed right-0 top-0 z-10 w-[100vw] bg-[rgba(255,0,0,0.5)] transition ease-in-out duration-100" >
     <div className="h-[100vh] lg:w-[600px] bg-white lg:float-right p-10 flex flex-col">
      <button type="button"
      className="flex gap-3 items-center cursor-pointer lg:hover:scale-125 transition-all py-4"
      onClick={() => setShowCart(false)}>
      <AiOutlineLeft/>
      <span className="text-lg">Shopping Cart</span>
      <span className="text-red-500">({totalQuantities} items)</span>
      </button>
  {/*if cart vide show that => */}
      {cartItems.length < 1 && (
        <div className="flex flex-col items-center gap-44 p-20">
          <AiOutlineShopping size={100}/>
          <h3 className="text-4xl">Zafer la vide</h3>
          <Link href="/">
            <button 
            type="button"
            onClick={() => setShowCart(false)}
            className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-4 px-20 rounded-xl hover:scale-125 transition-all">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
       
       <div className="flex flex-col p-2 min-h-[70vh] max-h-[70vh]">
        {cartItems.length >= 1 && cartItems.map((item) => (
          <div className="flex justify-evenly" key={item._id}>
            <img src ={urlFor(item?.image[0])} className="h-[100px] w-[100px]" alt=""/>
            <div className="flex">
              <div className="flex flex-col justify-evenly w-[100px]">
                <h5 className="text-lg">{item.name}</h5>
                <h4 className="">Rs {item.price}</h4>
              </div>


              <div className="flex">
                <div className="flex items-center p-5 px-10">
                  <p className="flex gap-5 items-center">
                  <span className="text-red-500 cursor-pointer"
                     onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                      <AiOutlineMinus/></span>
                     <span className="text-xl cursor-pointer">{item.quantity}</span>
                     <span className="text-green-600 cursor-pointer animate-bounce hover:pause"
                     onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                      <AiOutlinePlus/></span>
                  </p>
                </div>


                <button type="button"
                 className="text-xl text-red-500 hover:scale-75"
                 onClick={() => onRemove(item)}>
                 <FaTrash/>
                </button>
              </div>
            </div>

          </div>
        ))}

       </div>


        {cartItems.length >= 1 && (
          <div className="flex flex-col items-center gap-10">
            <div className="flex gap-52 text-xl font-semibold">
              <h3>Entous Fer </h3>
              <h3>Rs {totalPrice}</h3>
            </div>
            <div>
              <button type="button"
              className="bg-red-500 hover:bg-red-700 text-xl text-white font-bold py-3 px-20 rounded-xl hover:scale-125 transition-all" 
              onClick={handleCheckout}>
                Payer
              </button>
            </div>
          </div>
        )}

      </div>
      </div>

    
  )
}

export default Cart ;