import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Audience', href: '#audience' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#footer' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-lg shadow-md`}
    >
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        <a href="#hero" className="text-xl font-extrabold">
          Speak<span className="gradient-text">Easy</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 backdrop-blur-md px-4 py-2">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-700 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white px-6 py-4 shadow-md"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
