import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const plans = [
  {
    name: "Free Trial",
    price: "0",
    features: ["3 Practice Sessions", "Basic Feedback", "Community Support"]
  },
  {
    name: "Premium Weekly",
    price: "12.000 so'm",
    features: ["Unlimited Sessions", "Detailed Analysis", "Priority Support", "Progress Tracking"]
  },
  {
    name: "Premium Monthly",
    price: "35.000 so'm",
    features: ["Custom Integration", "Team Management", "Dedicated Support", "Custom Features"]
  }
];

const Pricing = () => {
  return (
    <motion.section id="pricing"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Choose the plan that fits your needs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition flex flex-col justify-between h-full ${plan.name === 'Premium Monthly' ? 'bg-blue-500 text-white' :
                  plan.name === 'Free Trial' || plan.name === 'Premium Weekly' ? 'bg-blue-50 text-blue-800' : ''
                }`}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className={`text-lg font-normal ${plan.name === 'Premium Monthly' ? 'text-white' : 'text-gray-600'}`}>
                    /month
                  </span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Star size={16} className="text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://t.me/speakez_robot"
                className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
