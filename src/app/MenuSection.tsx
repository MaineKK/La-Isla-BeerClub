"use client"
import { useState, useTransition } from "react";
import Image from "next/image";
import BeerSection from "./BeerSection";
import CafeSection from "./CafeSection";
import PicoteoSection from "./PicoteoSection";
import CopasSection from "./CopasSection";
import OtrosSection from "./OtrosSection";
import BreakfastSection from "./BreakfastSection";

const menuItems = [
  { name: "Cerveza", image: "/images/yakka.png" },
  { name: "Café", image: "/images/maracana.png" },
  { name: "Picoteo", image: "/images/tapas2.png" },
  { name: "Copas", image: "/images/copas.jpeg" },
  { name: "Otros", image: "/images/vermut.png" },
  { name: "Desayunos", image: "/images/tostada2.jpeg" }
];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("Cerveza");
  const [, startTransition] = useTransition();

  return (
    <section id="menu-section" className="bg-white mb-8 min-h-[500px]">
      <div className="relative w-full">
        <Image
          src="/images/portadafinal1.png"
          alt="Portada"
          width={1000}
          height={400}
          className="w-full h-auto object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full bg-[#522c25] font-serif text-white text-xl font-bold py-1 text-center">
          La Carta
        </div>
      </div>

      {/* Categorías */}
      <div className="flex justify-center gap-6 flex-wrap mt-4 mb-10">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`flex flex-col items-center focus:outline-none transition-all duration-300 ${
              selectedCategory === item.name ? "opacity-100 scale-110" : "opacity-50"
            }`}
            onClick={() => startTransition(() => setSelectedCategory(item.name))}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#8f766a]">
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-[#432416] font-semibold">{item.name}</p>
          </button>
        ))}
      </div>
      <div className="mt-10 p-8 bg-white shadow-lg rounded-lg max-w-2xl mx-auto transition-opacity duration-300 mb-8 min-h-[500px]">
        {selectedCategory === "Cerveza" && <BeerSection />}
        {selectedCategory === "Café" && <CafeSection />}
        {selectedCategory === "Picoteo" && <PicoteoSection />}
        {selectedCategory === "Copas" && <CopasSection />}
        {selectedCategory === "Otros" && <OtrosSection />}
        {selectedCategory === "Desayunos" && <BreakfastSection />} 
      </div>
    </section>
  );
}
