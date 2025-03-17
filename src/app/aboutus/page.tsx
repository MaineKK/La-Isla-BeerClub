"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from "../NavBar";

const horizontalImages = [
  { src: "/images/jefesss.png" },
  { src: "/images/barra.png" },
  { src: "/images/artesanas3.png" },
  { src: "/images/delirium.jpeg" },
  { src: "/images/local.jpeg" },
];

const verticalImages = [
  { src: "/images/terraza.png" },
  { src: "/images/artesanas.jpg" },
  { src: "/images/logo.jpeg" },
  { src: "/images/chouffe.jpeg" },
  { src: "/images/exterior.jpeg" },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#d1af95]">
      <NavBar />

      <div className="relative w-full max-w-5xl mt-18 px-8 py-22 text-center bg-[#b59b83] rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/fondonosotros.png"
            alt="Fondo decorativo"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        {/* Texto de la Cabecera */}
        <h1 className="relative text-2xl font-bold text-[#e0bea9] mt-16 z-10">
          Un murciano y dos canarios entran en un bar…
        </h1>
        <p className="relative text-sm max-w-3xl mx-auto text-[#d4b9aa] z-10 mt-2 mb-32">
          Podría ser un chiste, pero el resultado fue una de las cervecerías más relevantes en Murcia.
          <br />
          Tenían un objetivo claro: crear un espacio hogareño y divertido donde no parase de correr la buena cerveza.
          Con esa idea en mente, y tras algunos años detrás de las barras murcianas, Carlos del Toro, “Tito”,
          con la inestimable ayuda de Mara Kolesnikova, se junta con su hermano Germán y su hermano de aventuras
          Juan José Cánovas para inaugurar La Isla Beerclub&Coffee en 2020.
        </p>

        
        <div className="mt-24"></div>

        {/* Primer bloque */}
        <div className="mt-38 relative flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto z-10 gap-20">
          <div className="w-full md:w-1/2">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
            >
              {horizontalImages.map((image, index) => (
                <div key={index} className="relative w-full h-64">
                  <Image
                    src={image.src}
                    alt="Sobre Nosotros"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="md:w-1/2 text-[#5C3B28] text-base text-justify max-w-xl leading-relaxed">
            <p>
              Nuestro compromiso es el de ofrecer siempre la mayor calidad y transmitir nuestra pasión por el mundo cervecero. 
              Es por eso que trabajamos con las mejores marcas nacionales e internacionales, además de apostar por una continua 
              oferta rotativa con las referencias artesanales más destacadas. Llevamos esta filosofía también a todos los productos 
              del local, a cada taza de café y cada combinado, para buscar otorgar siempre una experiencia cuidada.
            </p>
          </div>
        </div>

        
        <div className="mt-20"></div>

        {/* Segundo bloque */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start max-w-4xl mx-auto z-10 gap-20">
         
     

          <div className="w-full md:w-1/2 flex justify-center">
            <Carousel
              autoPlay
              infiniteLoop
              interval={2000}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
            >
              {verticalImages.map((image, index) => (
                <div key={index} className="relative w-full max-w-[380px] md:max-w-[420px] h-[520px] md:h-[550px] mx-auto">
                <Image
                  src={image.src}
                  alt="Sobre Nosotros"
                  width={380}
                  height={520}
                  quality={100}
                  className="rounded-lg shadow-lg"
                />
              </div>
              ))}
            </Carousel>
          </div>
          <p className="text-base text-[#5C3B28] md:w-1/2 text-justify leading-relaxed">
            Todo esto sería imposible sin nuestro equipo, una gran familia de profesionales cualificados y cercanos
            siempre listos para generar el mejor ambiente y demostrar lo que fielmente creemos, que hay una cerveza
            para cada persona.
          </p>
        </div>
      </div>
    </div>
  );
}
