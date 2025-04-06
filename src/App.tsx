import React, { useState } from 'react';
import { MessageSquareText, Brain, Target, Clock, Users, BrainCircuit, Languages, Trophy, Send, GitBranch as BrandTelegram, Mail, Phone, ArrowRight, Mic, Square } from 'lucide-react';
import { useReactMediaRecorder } from 'react-media-recorder';

function VoiceRecorder() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
    video: false,
  });

  const handlePlayPause = () => {
    const audio = document.querySelector('audio');
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        {status !== "recording" ? (
          <button
            onClick={startRecording}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
          >
            <Mic className="w-6 h-6" />
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full"
          >
            <Square className="w-6 h-6" />
          </button>
        )}
      </div>
      {mediaBlobUrl && (
        <div className="flex flex-col items-center space-y-2">
          <audio src={mediaBlobUrl} controls className="w-full" />
          <p className="text-sm text-gray-500">Listen to your recording</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Master IELTS Speaking with AI</h1>
              <p className="text-xl mb-8">Get personalized feedback and recommendations from our advanced AI system through Telegram.</p>
              <div className="space-y-6">
                <VoiceRecorder />
                <a
                  href="https://t.me/your_bot_username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 inline-flex items-center"
                >
                  <BrandTelegram className="mr-2" />
                  Start Practice Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000"
                alt="AI Language Learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our AI IELTS Assistant?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <BrainCircuit className="w-12 h-12 text-blue-600" />, title: "AI-Powered Analysis", description: "Get instant, accurate feedback on your speaking performance" },
              { icon: <Languages className="w-12 h-12 text-blue-600" />, title: "Natural Conversations", description: "Practice with AI that understands context and nuances" },
              { icon: <Trophy className="w-12 h-12 text-blue-600" />, title: "Personalized Learning", description: "Receive tailored recommendations for improvement" },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">See How It Works</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000"
                alt="Demo Interface"
                className="w-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <p className="text-lg mb-6">Experience real-time AI feedback and scoring through our Telegram bot</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
                Watch Demo
                <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Who Can Benefit?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Students", description: "Preparing for IELTS exam" },
              { title: "Professionals", description: "Needing IELTS for career advancement" },
              { title: "Immigrants", description: "Requiring IELTS for migration" },
              { title: "English Learners", description: "Wanting to improve speaking skills" },
            ].map((user, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{user.title}</h3>
                <p className="text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "Free",
                features: ["5 practice sessions/month", "Basic feedback", "Score prediction"],
              },
              {
                title: "Pro",
                price: "$19.99/month",
                features: ["Unlimited practice", "Detailed feedback", "Personalized tips", "Progress tracking"],
                highlighted: true,
              },
              {
                title: "Enterprise",
                price: "Custom",
                features: ["Team management", "Custom exercises", "Priority support", "Analytics dashboard"],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white shadow-xl scale-105'
                    : 'bg-white shadow-lg'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Practicing Now</h2>
          <p className="text-xl mb-12">Connect with our AI tutor through Telegram</p>
          <a
            href="https://t.me/your_bot_username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            <BrandTelegram className="mr-2" />
            Open in Telegram
          </a>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">About Us</h4>
              <p className="text-gray-400">Helping students achieve their IELTS goals through AI-powered practice and feedback.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  support@ieltsai.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <BrandTelegram className="w-5 h-5 mr-2" />
                  @ieltsai_support
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} IELTS AI Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;