import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  return (
    <motion.button
      className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;