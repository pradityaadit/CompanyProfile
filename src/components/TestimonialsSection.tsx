import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Yafet M.S",
    position: "JAKARTA",
    company: "PT. Stratsol Global Solusi",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 2,
    name: "Mr. M. Kurnia",
    position: "JAKARTA",
    company: "PT. Profesien Cipta Solusi",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 3,
    name: "Mr. Andri",
    position: "JAKARTA",
    company: "PT. Sinergi Sistem Solusindo",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 4,
    name: "Mr. Anwar",
    position: "JAKARTA",
    company: "PT. Anwar Karsa Persada",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 5,
    name: "Mr. Hidayat",
    position: "JAKARTA",
    company: "PT. Semut Merah Teknologi",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 6,
    name: "Mr. Trias",
    position: "JAKARTA",
    company: "PT. Kaypuna Aditama Prakasa",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    id: 7,
    name: "Mr. Susanto",
    position: "JAKARTA",
    company: "PT. Fortem Digital Asia",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
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
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
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
            OUR CLIENTS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Clients yang pernah kita pegang
          </h3>
        </div>

        <div
          className="relative max-w-3xl mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={slideRef}
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-primary-800/50 p-8 md:p-10 rounded-2xl shadow-xl text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 mx-auto mb-4 rounded-full object-cover border-2 border-accent-500"
                    />
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 p-2 rounded-full shadow-md z-10 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-primary-600 hover:bg-primary-700 p-2 rounded-full shadow-md z-10 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

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
