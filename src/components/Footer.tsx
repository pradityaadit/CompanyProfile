import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">PT. PANAM ARI WIBISONO</h3>
            <p className="text-gray-300 mb-4">
              Perusahaan yang bergerak di bidang manajemen, perdagangan,
              keuangan, dan perpajakan. Kami berdiri sejak 2020 dan berkomitmen
              memberikan solusi profesional untuk kebutuhan keuangan dan
              perpajakan Anda.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Alamat:</strong>
              <br />
              Jln. Asem Baris Raya No.15C
              <br />
              RT 04 / RW 03, Kel. Kebon Baru
              <br />
              Kec. Tebet, Jakarta Selatan 12830
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2 text-xs">›</span> {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Jasa Kami</h4>
            <ul className="space-y-3">
              {[
                "Akuntansi & Keuangan",
                "Laporan Keuangan",
                "Pembuatan Sistem Akuntansi",
                "Perencanaan Pajak (Tax Planning)",
                "Kepatuhan Pajak (Tax Compliance)",
                "Restitusi dan Banding Pajak",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className="text-gray-300 hover:text-white flex items-center"
                  >
                    <span className="mr-2 text-xs">›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Berlangganan</h4>
            <p className="text-gray-300 mb-4">
              Dapatkan info dan edukasi perpajakan terbaru langsung ke email
              Anda.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="bg-primary-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button className="bg-accent-500 hover:bg-accent-600 px-4 rounded-r-lg flex items-center justify-center">
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PT. Panam Ari Wibisono. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white">
                Syarat dan Ketentuan
              </a>
              <a href="#" className="hover:text-white">
                Pengaturan Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
