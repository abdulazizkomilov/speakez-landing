import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import heroRobot from '../assets/ai-robot.png';

const Hero = () => {
  return (
    <motion.section id="hero"
      className="container mx-auto px-6 pt-24 pb-16 sm:pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 max-w-2xl">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Speak<span className="gradient-text">Easy</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 font-bold mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SpeakEz helps you improve your IELTS skills with instant feedback, mock exams, and personalized guidance. 🚀
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="https://t.me/speakez_robot" 
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              <MessageSquare size={20} />
              Start Practice
            </a>
            <a href="https://t.me/speakez_robot" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
              Learn More
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="lg:w-1/3"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img 
            src={heroRobot}
            alt="AI Assistant Robot"
            className="w-full max-w-xl mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;