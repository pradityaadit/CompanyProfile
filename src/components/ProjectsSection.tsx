import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A full-featured e-commerce solution with seamless checkout and inventory management.',
    link: '#'
  },
  {
    id: 2,
    title: 'Financial Services Rebrand',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete brand overhaul for a growing financial services company.',
    link: '#'
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Patient-centered mobile application for healthcare appointment booking and management.',
    link: '#'
  },
  {
    id: 4,
    title: 'Real Estate Marketing Campaign',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/5816289/pexels-photo-5816289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Integrated digital marketing campaign for luxury real estate development.',
    link: '#'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Online reservation system with kitchen management integration for fine dining restaurants.',
    link: '#'
  },
  {
    id: 6,
    title: 'Fitness Brand Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete visual identity for a premium fitness center chain.',
    link: '#'
  }
];

const categories = ['All', 'Web Development', 'Branding', 'App Development', 'Marketing'];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
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

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div ref={sectionRef} className="container mx-auto px-4 md:px-6 opacity-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-500 mb-2 tracking-widest">OUR PROJECTS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Our Recent Work
          </h3>
          <p className="text-gray-700 text-lg">
            Browse our portfolio of successful projects that showcase our expertise and creativity.
            We're proud of the results we've achieved for our clients.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-primary-900 hover:bg-primary-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a 
                    href={project.link} 
                    className="bg-white text-primary-900 p-3 rounded-full transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-accent-500 bg-accent-100 py-1 px-3 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-primary-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="text-primary-500 font-medium inline-flex items-center hover:text-primary-700 transition-colors duration-300"
                >
                  View Project
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;