"use client";

import { useState } from "react";
import Image from "next/image";

export default function MenuNewsPopup() {
  const [open, setOpen] = useState(false);

  const imageSrc = "/images/novedad-rivera.png";

  return (
    <>
      {/* Botón redondo flotante (arriba izquierda) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-20 left-4 z-40 rounded-full bg-[#d26306] text-white font-semibold
                   w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-xs shadow-lg shadow-black/20
                   hover:bg-[#e07c20] transition"
      >
        Novedad
      </button>

      {/* Popup con la imagen */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-24">
          <div className="relative max-w-3xl w-[90%] bg-[#e5cdbd] rounded-xl overflow-hidden shadow-2xl">

            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 z-10 text-[#432416] text-lg hover:text-black"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <Image
              src={imageSrc}
              alt="Novedad en la carta"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

