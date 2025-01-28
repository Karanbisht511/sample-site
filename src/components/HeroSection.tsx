
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 md:pt-48 relative z-10">
        <div className="max-w-4xl">
          <p className="text-gray-400 uppercase tracking-wider mb-6 text-sm md:text-base">
            A Creative Solutions Company
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-12">
            Helping you to meet the goals of the digital age
          </h1>

          <div className="text-left">
            <button className="group bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-6 py-3 rounded-sm inline-flex items-center space-x-2 text-sm md:text-base">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 left-0 text-[120px] md:text-[200px] font-bold opacity-5 leading-none select-none">
        SOLUTIONS
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900 opacity-50"></div>

      {/* Animated background circle */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default HeroSection;