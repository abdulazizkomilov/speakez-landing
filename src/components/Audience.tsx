import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const audiences = [
  {
    title: "IELTS & Multilevel Test Candidates",
    description: "Tailored for students preparing for both IELTS and Multilevel speaking exams, helping you build confidence and skills for success."
  },
  {
    title: "Aspiring English Speakers",
    description: "Perfect for individuals eager to enhance their English speaking fluency and communication skills."
  }  
];

const Audience = () => {
  return (
    <motion.section id="audience"
      className="py-20 bg-gradient-to-b from-white to-indigo-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Who Is This For?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
              <Users className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Audience;