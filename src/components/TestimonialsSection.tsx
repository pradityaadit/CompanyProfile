import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    image:
      "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "Working with Innovate transformed our online presence completely. Their team understood our vision and delivered beyond our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "GrowthFusion",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "The team's ability to blend creative design with strategic thinking helped us increase our conversion rates by 45%. Truly exceptional work!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "Nexus Labs",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "From concept to launch, Innovate provided invaluable expertise and support. Our app launch was a massive success thanks to their guidance.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Founder",
    company: "Wilson & Co.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      "Their attention to detail and commitment to quality is unmatched. The rebrand they created for us has been instrumental in our growth.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }

    setTouchStart(null);
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-gradient-to-b from-primary-900 to-primary-800 text-white"
    >
      <div
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-400 mb-2 tracking-widest">
            TESTIMONIALS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What Our Clients Say
          </h3>
          <p className="text-gray-300 text-lg">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience working with our team and the results we've
            delivered.
          </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonial Slides */}
          <div
            ref={slideRef}
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-primary-800/50 p-8 md:p-10 rounded-2xl shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-accent-500"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-300">
                          {testimonial.position}, {testimonial.company}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg md:text-xl italic text-gray-200 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 p-2 rounded-full shadow-md z-10 focus:outline-none md:-left-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 p-2 rounded-full shadow-md z-10 focus:outline-none md:-right-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 mb-4 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-accent-500 scale-125"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
