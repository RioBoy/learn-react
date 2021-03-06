import React from 'react';

import logo from '../logo.png';
import pic from '../assets/images/hero.jpg';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Item from '../components/Item';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar logoNav={logo} />
      <Hero heroPic={pic} />
      <Feature />
      <Item />
      <Footer footerLogo={logo} />
    </>
  );
}
