import React from 'react';
import { Heart, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of Human-AI Collaboration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe the future isn't about AI replacing humans, but about creating a powerful synergy that amplifies our collective potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {[
            {
              icon: Heart,
              title: 'Human-Centered',
              description: 'Every solution is designed with human needs, emotions, and creativity at the core.',
              color: 'from-red-500 to-pink-500'
            },
            {
              icon: Eye,
              title: 'Visionary Approach',
              description: 'Looking beyond current limitations to imagine what\'s possible when minds and machines unite.',
              color: 'from-blue-500 to-indigo-500'
            },
            {
              icon: Lightbulb,
              title: 'Innovation First',
              description: 'Pioneering new ways to think, create, and solve problems through intelligent augmentation.',
              color: 'from-yellow-500 to-orange-500'
            }
          ].map((value, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To create a world where artificial intelligence amplifies human creativity, intuition, and wisdom. 
                We're building technologies that don't replace human thinking, but enhance it in ways that seemed impossible before.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Through Augmentelligence, we're not just advancing technology – we're evolving human potential itself.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2030</div>
                  <div className="text-gray-600 mb-4">Vision Timeline</div>
                  <p className="text-sm text-gray-700">
                    Creating seamless human-AI collaboration that feels as natural as thinking itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;