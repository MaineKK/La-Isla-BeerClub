import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#432416] text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menú de navegación */}
          <div className="flex space-x-4">
            {[
              { name: "Nosotros", href: "/aboutus" },
              { name: "Carta", href: "/#menu-section" }, 
              { name: "Localización", href: "/localizacion" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className="px-4 py-2 border border-white text-white rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 transition-opacity"
              >
                {item.name}
              </Link>
            ))}
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
