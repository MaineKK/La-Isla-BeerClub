'use client';

import Image from 'next/image';
import NavBar from "../NavBar";

const images = [
  { src: '/images/terraza.png', type: 'vertical' },
  { src: '/images/artesanas3.png', type: 'horizontal' },
  { src: '/images/artesanas.jpg', type: 'vertical' },
  { src: '/images/barra.png', type: 'horizontal' },
  { src: '/images/internacional.jpg', type: 'vertical' }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#EAD7C5]">
      <NavBar />

      <div className="relative w-full max-w-5xl mt-18 px-6 py-28 text-center bg-[#b59b83] rounded-xl shadow-lg overflow-hidden min-h-[1350px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/fondobg.png"
            alt="Fondo decorativo"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <h1 className="relative text-2xl font-bold text-[#e0bea9] z-10">Un murciano y dos canarios entran en un bar…</h1>
        <p className="relative text-l max-w-4xl mx-auto text-[#d4b9aa] z-10">
          Podría ser un chiste, pero el resultado fue una de las cervecerías más relevantes en Murcia. 
          <br />
          Tenían un objetivo claro: crear un espacio hogareño y divertido donde no parase de correr la buena cerveza. Con esa idea en mente, y tras algunos años detrás de las barras murcianas, Carlos del Toro, “Tito”, con la inestimable ayuda de Mara Kolesnikova, se junta con su hermano Germán y su hermano de aventuras Juan José Cánovas para inaugurar La Isla Beerclub&Coffee en 2020.
        </p>

        {/* Tarjetas con imagenes*/}
        <div className="relative flex justify-center gap-2 mt-8 z-10 overflow-x-auto whitespace-nowrap p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                inline-block relative overflow-hidden rounded-lg bg-white shadow-lg 
                transition-transform duration-300 ease-in-out hover:scale-150
                ${image.type === 'vertical' ? 'w-40 h-64' : 'w-64 h-40'}
              `}
            >
              <Image
                src={image.src}
                alt="Sobre Nosotros"
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Imagen central */}
        <div className="mt-12 relative flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto z-10 gap-10 text-left">
          <Image
            src="/images/jefesss.png"
            alt="Nuestra historia"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-100 h-auto"
          />
          <p className="text-l text-[#5C3B28] md:w-1/2">
            Nuestro compromiso es el de ofrecer siempre la mayor calidad y transmitir nuestra pasión por el mundo cervecero. Es por eso que trabajamos con las mejores marcas nacionales e internacionales, además de apostar por una continua oferta rotativa con las referencias artesanales más destacadas. Llevamos esta filosofía también a todos los productos del local, a cada taza de café y cada combinado, para buscar otorgar siempre una experiencia cuidada. 
            <br /><br />
            Todo esto sería imposible sin nuestro equipo, una gran familia de profesionales cualificados y cercanos siempre listos para generar el mejor ambiente y demostrar lo que fielmente creemos, que hay una cerveza para cada persona.
          </p>
        </div>
      </div>
    </div>
  );
}
