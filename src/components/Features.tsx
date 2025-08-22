import React from 'react';
import { Brain, Users, Lightbulb, Zap, Target, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Augmentation',
      description: 'Seamlessly blend human intuition with AI precision to unlock unprecedented creative potential.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Human-Centric Design',
      description: 'Technology that amplifies human capabilities rather than replacing them.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description: 'Foster breakthrough thinking through the perfect marriage of human creativity and machine intelligence.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI processing that keeps pace with human thought and creativity.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Target,
      title: 'Precision Enhancement',
      description: 'Enhance decision-making with data-driven insights while preserving human judgment.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Scalable Impact',
      description: 'Solutions that grow with your needs, from individual enhancement to global transformation.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Redefining Human Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Augmentelligence transforms the way we think, create, and solve problems by harmoniously combining human insight with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <div className="w-0 group-hover:w-4 h-0.5 bg-blue-600 ml-2 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;