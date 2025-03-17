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
              src="/images/fondonosotros.png"
              alt="Fondo decorativo"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>

          <h1 className="text-3xl mt-6 font-serif font-bold text-[#e0bea9] mb-16 relative z-10">
            Dónde y cuándo puedes encontrarnos
          </h1>
          <p className="text-lg text-[#7f5749] mb-12 relative z-10">
            
          </p>

          {/* Mapa */}
          <div className="relative flex justify-center mt-36 z-10">
            <div className="w-full max-w-3xl h-96">
              <Map />
            </div>
          </div>

          {/* Horarios con tarjeta blanca */}
          <div className="mt-20 relative z-10 flex justify-center">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-[#432416] mb-4 text-center">Horarios*</h2>
              <p className="text-[#5C3B28] text-lg text-center">Lunes a Jueves: 10:00 - 01:00</p>
              <p className="text-[#5C3B28] text-lg text-center">Viernes: 10:00 - 02:00</p>
              <p className="text-[#5C3B28] text-lg text-center">Sábado: 12:00 - 02:00</p>
              <p className="text-[#5C3B28] text-lg text-center">Domingo: 16:00 - 00:00</p>
              <p className="text-sm text-[#7f5749] text-center mt-2">
                *Los festivos y vísperas de festivo están sujetos a cambios
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
