import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import {AiOutlineShopping} from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import Cart  from './Cart';



const Navbar = () => {
  const {showCart,setShowCart,totalQuantities} = useStateContext();
  return (
    <div className="bg-black flex justify-around items-center p-2 h-[60px]">
       <Link href="/">
       <div className="w-[100px] cursor-pointer">
        <img src="https://cdn.sanity.io/images/d5pxilw4/production/88934fbadc6868394ef60d8369c2ce378c01428a-347x96.png" alt="LOGO" />
       </div>
       </Link>
       
     <button type="button"
      className="text-3xl text-white flex flex-row-reverse" onClick={() => 
      setShowCart(true)}>
      <AiOutlineShopping/>
      <span className="absolute text-xs w-4 bg-red-600 rounded-full flex justify-center items-center">{totalQuantities}</span>
      </button>
     {showCart && <Cart />} 

      </div>
  )
}

export default Navbar 
