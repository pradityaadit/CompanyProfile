import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  BookOpenText,
  Scale,
  FileBarChart,
  ChevronRight,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: FileBarChart, // Cocok untuk sistem akuntansi & laporan
    title: "Jasa Pembuatan Sistem Akuntansi",
    description:
      "Kami merancang sistem akuntansi yang terintegrasi untuk mendukung pencatatan transaksi, pelaporan keuangan, dan kepatuhan pajak secara efisien.",
    features: [
      "Pencatatan transaksi otomatis (jurnal umum)",
      "Pembuatan laporan keuangan (neraca, laba rugi, arus kas)",
      "Integrasi perpajakan (PPN, PPh)",
    ],
  },
  {
    icon: FileText, // Ikon dokumen cocok untuk laporan keuangan
    title: "Penyusunan Laporan Keuangan Bulanan dan Tahunan",
    description:
      "Kami menyusun laporan keuangan yang akurat dan sesuai standar akuntansi untuk kebutuhan internal, eksternal, maupun pelaporan perpajakan.",
    features: [
      "Laporan Neraca dan Laba Rugi",
      "Laporan Arus Kas dan Bank",
      "Penyusunan Trial Balance",
    ],
  },
  {
    icon: BookOpenText, // Ikon buku terbuka = general ledger/buku besar
    title: "Penyusunan dan Pembukuan General Ledger",
    description:
      "Kami membantu menyusun General Ledger (Buku Besar) lengkap dari jurnal, posting, hingga jurnal penyesuaian sebagai dasar laporan keuangan.",
    features: [
      "Jurnal transaksi lengkap",
      "Posting ke Buku Besar",
      "Pembuatan jurnal adjustment",
    ],
  },
  {
    icon: Scale, // Ikon timbangan = keadilan/pajak = simbol umum perpajakan
    title: "Layanan Perpajakan Lengkap",
    description:
      "Kami mendampingi perusahaan dalam pemenuhan kewajiban perpajakan, perhitungan pajak, pelaporan, hingga konsultasi dan restitusi pajak.",
    features: [
      "SPT Masa dan SPT Tahunan (PPh & PPN)",
      "Tax planning & compliance",
      "Restitusi, keberatan, dan banding pajak",
    ],
  },
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 bg-primary-900 text-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-400 mb-2 tracking-widest">
            OUR SERVICES
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Solusi Terpadu untuk Kebutuhan Bisnis Anda
          </h3>
          <p className="text-gray-300 text-lg">
            Kami menyediakan layanan profesional di bidang manajemen, keuangan,
            dan perpajakan untuk membantu perusahaan Anda tumbuh secara sehat,
            patuh, dan efisien.
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
                    ? "bg-primary-800 shadow-lg"
                    : "bg-primary-950/30 hover:bg-primary-800/50"
                }`}
              >
                <div
                  className={`p-3 rounded-full mr-4 ${
                    activeService === index ? "bg-accent-500" : "bg-primary-700"
                  }`}
                >
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
                {React.createElement(services[activeService].icon, {
                  className: "h-8 w-8",
                })}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                {services[activeService].title}
              </h4>
              <p className="text-gray-300 mb-6">
                {services[activeService].description}
              </p>
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
