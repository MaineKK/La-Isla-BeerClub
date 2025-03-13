"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import NavBar from "../NavBar";

const Map = dynamic(() => import("./map"), { ssr: false });

export default function Localizacion() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#d1af95]">
      <NavBar />

      <div className="w-full flex flex-col items-center bg-[#EAD7C5] pt-10 pb-20">
        <div className="relative w-full max-w-6xl mx-4 px-8 py-28 text-center bg-[#b59b83] rounded-xl shadow-lg overflow-hidden min-h-[1350px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/fondobg.png"
              alt="Fondo decorativo"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>

          <h1 className="text-3xl mt-12 font-serif font-bold text-[#e0bea9] mb-16 relative z-10">
            Dónde y cuándo puedes encontrarnos
          </h1>
          <p className="text-lg text-[#7f5749] mb-12 relative z-10">
            Encuéntranos fácilmente en Google Maps.
          </p>

          {/* Mapa */}
          <div className="relative flex justify-center mt-36 z-10">
            <div className="w-full max-w-3xl h-96">
              <Map />
            </div>
          </div>

          {/* Horarios */}
          <div className="mt-20 text-lg text-[#5C3B28] text-center relative z-10">
            <h2 className="text-2xl font-bold text-[#432416] mb-2">Horarios*</h2>
            <p>Lunes a Jueves: 10:00 - 01:00</p>
            <p>Viernes: 10:00 - 02:00</p>
            <p>Sábado: 12:00 - 02:00</p>
            <p>Domingo: 16:00 - 00:00</p>
            <p>*Los festivos y vísperas de festivo sujeto a cambios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
