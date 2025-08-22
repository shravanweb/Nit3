
import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import ParticleBackground1 from './ParticleBackground'; // Assuming you have a ParticleBackground component
import Bg1 from '../components/assets/c2.png'; // Adjust the path as necessary
import { loadFull } from "tsparticles";
const Hero = () => {
  // Particle options (customize as needed)
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden"
      style={{
        // backgroundImage: `url(${`../assets/77.jpg`})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Particle background */}
  <img src={Bg1} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-80 mt-16" style={{ top: '.9rem' }} />
      <ParticleBackground1 />
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

   
      {/* Centered bottom text */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Augmentelligence
            </span>
          </h1>
          <div className="text-xl md:text-1xl text-white mb-2 animate-fadeInUp animation-delay-300">
            AII - A Fusion of <span className="text-blue-400 font-semibold">'AUGMENTED'</span> and <span className="text-orange-400 font-semibold">'INTELLIGENCE'</span>
          </div>
          <p className="text-lg text-white-200 mb-4 animate-fadeInUp animation-delay-500 max-w-3xl mx-auto leading-relaxed" style={{ color: 'white' }}>
            Where human creativity meets artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;