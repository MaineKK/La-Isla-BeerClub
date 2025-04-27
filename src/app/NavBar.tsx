"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-[#432416] text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menú principal */}
          <div className="flex items-center space-x-3 sm:space-x-8">
            {/* Botón hamburguesa en móvil */}
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                {menuOpen ? (
                  <HiOutlineX className="text-3xl" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-3xl" />
                )}
              </button>
            </div>

            {/* Links en escritorio */}
            <div className="hidden sm:flex space-x-3 sm:space-x-8">
              {[
                { name: "Nosotros", href: "/aboutus" },
                { name: "Carta", href: "/#menu-section" },
                { name: "Localización", href: "/localizacion" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={false}
                  className="text-base px-4 py-2 sm:text-lg sm:px-5 md:py-2.5 border border-white text-white rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 transition-opacity"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Iconos de redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/laislabeerclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/p/La-Isla-Beer-Club-Coffee-100031056206718/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Menú desplegable en móvil */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center mt-2 space-y-4 pb-4">
            {[
              { name: "Nosotros", href: "/aboutus" },
              { name: "Carta", href: "/#menu-section" },
              { name: "Localización", href: "/localizacion" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className="text-base px-4 py-2 border border-white text-white rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 transition-opacity w-3/4 text-center"
                onClick={() => setMenuOpen(false)} // Cierra menú al hacer clic
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
