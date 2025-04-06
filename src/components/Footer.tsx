import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer id='footer'
      className="bg-gray-900 text-white py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Speak<span className="gradient-text">Easy</span></h3>
            <p className="text-gray-400">Revolutionizing IELTS speaking practice with AI technology</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:contact@speakez.uz" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Mail size={16} />
                contact@speakez.uz
              </a>
              <a href="tel:+998931159963" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Phone size={16} />
                +998 93 115 99 63
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="space-y-3">
              <a href="https://t.me/speakez_robot" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Share2 size={16} />
                Telegram Bot
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <br />
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SpeakEasy. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
