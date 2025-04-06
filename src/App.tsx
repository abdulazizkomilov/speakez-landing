import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Audience />
      <Pricing />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;