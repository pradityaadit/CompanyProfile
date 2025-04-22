import React, { useState, useEffect, useRef } from 'react';
import { Globe, Palette, Code, Database, ChevronRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Create stunning, responsive websites that engage visitors and convert leads.',
    features: ['Responsive design', 'UX/UI optimization', 'E-commerce solutions', 'CMS integration']
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Build a strong, memorable brand identity that resonates with your target audience.',
    features: ['Logo design', 'Brand strategy', 'Visual identity', 'Brand guidelines']
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Custom software solutions tailored to your specific business needs and challenges.',
    features: ['Scalable architecture', 'Agile development', 'Quality assurance', 'Ongoing support']
  },
  {
    icon: Database,
    title: 'Digital Marketing',
    description: 'Drive targeted traffic and increase conversions with data-driven marketing strategies.',
    features: ['SEO optimization', 'Content marketing', 'Social media management', 'PPC campaigns']
  }
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 bg-primary-900 text-white">
      <div ref={sectionRef} className="container mx-auto px-4 md:px-6 opacity-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-400 mb-2 tracking-widest">OUR SERVICES</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Comprehensive Digital Solutions For Your Business
          </h3>
          <p className="text-gray-300 text-lg">
            We offer a wide range of services to help your business thrive in the digital landscape,
            from stunning web design to powerful marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => setActiveService(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 flex items-start ${
                  activeService === index 
                    ? 'bg-primary-800 shadow-lg' 
                    : 'bg-primary-950/30 hover:bg-primary-800/50'
                }`}
              >
                <div className={`p-3 rounded-full mr-4 ${
                  activeService === index ? 'bg-accent-500' : 'bg-primary-700'
                }`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Active Service Details */}
          <div className="bg-primary-800 p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
              <div className="p-4 bg-accent-500 rounded-full inline-block mb-4">
                {React.createElement(services[activeService].icon, { className: "h-8 w-8" })}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">{services[activeService].title}</h4>
              <p className="text-gray-300 mb-6">{services[activeService].description}</p>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold text-accent-400">Key Features:</h5>
              {services[activeService].features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-accent-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-accent-500 hover:bg-accent-600 text-white py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center">
              Learn More
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;