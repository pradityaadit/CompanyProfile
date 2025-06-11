import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxEffect = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", parallaxEffect);
    return () => window.removeEventListener("scroll", parallaxEffect);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Office team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/60"></div>
      </div>

      {/* Parallax element */}
      <div ref={heroRef} className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-primary-500/20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-1/4 w-full h-full rounded-full bg-secondary-500/20 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-1/2 left-1/4 w-full h-full rounded-full bg-accent-500/20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white mt-20 md:mt-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeIn">
            PT. PANAM ARI WIBISONO <br />{" "}
            <span className="text-accent-400 text-2xl md:text-1xl">
              Finance, Management & Tax
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fadeIn animation-delay-300">
            Kami memberikan solusi manajemen, keuangan, dan perpajakan yang
            profesional untuk membantu bisnis Anda tumbuh secara sehat, efisien,
            dan patuh terhadap regulasi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-600">
            <button className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce animation-delay-1000">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-1 h-10 rounded-full bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-accent-500 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
