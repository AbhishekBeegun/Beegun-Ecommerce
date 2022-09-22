import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title> BEEGUN STORE</title>
      </Head>
      <header>
        <Navbar />        
      </header>
      <main className="main-container">
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