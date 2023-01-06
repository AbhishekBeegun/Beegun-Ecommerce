import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
    <div className="p-0">
      <Head>
        <title> BEEGUN Ecommerce</title>
      </Head>
      <header>
        <Navbar />        
      </header>
      <main className="m-auto overflow-x-hidden w-[100vw]">
        {children}
        <Section />
      </main>
      

      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default Layout