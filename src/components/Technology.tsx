import React from 'react';
import { Cpu, Database, Network, Shield, Rocket, Infinity } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on a foundation of advanced AI, machine learning, and human-computer interaction principles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                icon: Cpu,
                title: 'Neural Processing Units',
                description: 'Advanced AI processing capabilities that mirror human cognitive patterns.',
                color: 'text-blue-600'
              },
              {
                icon: Database,
                title: 'Adaptive Learning Systems',
                description: 'Continuously evolving algorithms that learn from human behavior and preferences.',
                color: 'text-purple-600'
              },
              {
                icon: Network,
                title: 'Seamless Integration',
                description: 'APIs and frameworks that integrate effortlessly with existing workflows.',
                color: 'text-orange-600'
              }
            ].map((tech, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className={`p-3 rounded-lg bg-white shadow-md group-hover:shadow-lg transition-shadow ${tech.color} bg-opacity-10`}>
                  <tech.icon className={`w-6 h-6 ${tech.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: 'Security', value: '99.9%', color: 'text-green-600' },
                  { icon: Rocket, label: 'Performance', value: '10x', color: 'text-blue-600' },
                  { icon: Infinity, label: 'Scalability', value: '∞', color: 'text-purple-600' },
                  { icon: Network, label: 'Uptime', value: '99.99%', color: 'text-orange-600' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;