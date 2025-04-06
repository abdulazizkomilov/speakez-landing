import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Star } from 'lucide-react';

const features = [
  {
    icon: <Brain className="text-blue-600" size={32} />,
    title: "AI-Powered Analysis",
    description: "Advanced AI algorithms assess your speaking patterns and provide insightful analysis."
  },
  {
    icon: <Star className="text-blue-600" size={32} />,
    title: "Full Speaking Mock Exam",
    description: "Simulate a real IELTS & Multilevel speaking exam with mock tests in Parts 1, 2, and 3."
  },
  {
    icon: <MessageSquare className="text-blue-600" size={32} />,
    title: "Speaking Practices",
    description: "Tailored practice sessions across multiple levels, with Part 1, 2, and 3 for each."
  },
  {
    icon: <MessageSquare className="text-blue-600" size={32} />,
    title: "30+ Categorized Questions",
    description: "Over 30 categories of questions for comprehensive speaking practice."
  },
  {
    icon: <Brain className="text-blue-600" size={32} />,
    title: "30,000+ Questions & Pronunciations",
    description: "Access a library of over 30,000 questions with audio pronunciation for effective practice."
  },
  {
    icon: <MessageSquare className="text-blue-600" size={32} />,
    title: "Useful Words & Phrases",
    description: "Get helpful top words and phrases to enrich your speaking and enhance fluency."
  }
];

const Features = () => {
  return (
    <motion.section id='features'
      className="bg-white py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-100 transition"
              whileHover={{ scale: 1.05 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
