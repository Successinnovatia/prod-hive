import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Program from '../components/Program';
import Community from '../components/Community';
import Resources from '../components/Resources';
import Success from '../components/Success';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Program />
      <Community />
      <Resources />
      <Success />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;