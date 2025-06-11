import React, { useEffect, useRef } from "react";
import { Users, Trophy, TrendingUp } from "lucide-react";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
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

  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Trophy, value: "10+", label: "Years Experience" },
    { icon: TrendingUp, value: "100+", label: "Projects Completed" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-500 rounded-lg"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={sectionRef} className="md:w-1/2 opacity-0">
            <h2 className="text-sm font-bold text-accent-500 mb-2 tracking-widest">
              ABOUT US
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              Solusi Profesional untuk Keuangan dan Perpajakan Anda
            </h3>
            <p className="text-gray-700 mb-8 text-lg">
              PT. Panam Ari Wibisono adalah perusahaan yang berdiri di Jakarta
              sejak 2020, bergerak di bidang manajemen, perdagangan, keuangan,
              dan perpajakan. Didirikan oleh dua profesional berpengalaman,
              perusahaan ini didukung oleh tim yang berintegritas tinggi,
              independen, dan berdedikasi. Kami fokus memberikan layanan
              profesional dalam perencanaan dan pengendalian manajemen keuangan
              serta kepatuhan perpajakan, baik untuk badan usaha maupun
              perorangan. Kepatuhan pajak kami anggap sebagai kewajiban penting
              bagi setiap Wajib Pajak. Dengan pengalaman dan keahlian di
              bidangnya, kami siap menjadi mitra terpercaya yang memberikan
              solusi tepat dan nyaman atas berbagai persoalan perpajakan klien.
              Profesionalisme dan kepuasan klien adalah prioritas utama kami.
            </p>

            <button className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-primary-50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary-500" />
              </div>
              <h4 className="text-4xl font-bold text-primary-900 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
