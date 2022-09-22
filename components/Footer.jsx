import React from 'react';
import { AiFillInstagram ,AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <a className="logo"></a>
      <p>BEEGUN STORE 2022</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        </p>
    </div>
  )
}

export default Footer ;