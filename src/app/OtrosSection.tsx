import React from "react";

const OtrosSection = () => {
  const categories = {
    VermutYVinos: [
      { name: "Vermut - Yzaguirre", price: "3.50€" },
      { name: "Vino Tinto - Monastrell/Syrah", price: "3.00€" },
      { name: "Vino Blanco - Verdejo", price: "3.00€" },
    ],
    Sidras: [
      { name: "Rekorderling - Mango y Frambuesa", price: "4.50€" },
      { name: "Strongbow - Sidra Inglesa", price: "4.50€" },
      { name: "EXNER - Sidra Artesanal", price: "4.50€" },
      { name: "Ladrón de Manzanas", price: "3.50€" }
    ],
    Refrescos: [
      { name: "Agua", price: "1.00€" },
      { name: "Agua con Gas", price: "2.00€" },
      { name: "Coca-Cola", price: "2.00€" },
      { name: "Coca-Cola Zero", price: "2.00€" },
      { name: "Fanta Naranja", price: "2.00€" },
      { name: "Aquarade Limon", price: "2.00€" },
      { name: "Lipton", price: "2.00€" },
      { name: "Tonica Schweppes", price: "2.00€" },
      { name: "Schweppes Limon", price: "2.00€" },
      { name: "Schweppes Berry", price: "2.00€" },
      { name: "Red Bull", price: "2.50€" },
      { name: "7 UP", price: "2.00€" },
      { name: "Zumo - Piña / Melocotón", price: "2.00€" },

    ],
  };

  return (
    <div className="transition-opacity duration-300 mb-24 min-h-[500px]">
      {/* Vermut y Vinos */}
      <div >
        <h3 className="text-2xl font-bold text-[#432416] border-b">Vermut y Vinos</h3>
        <ul className="mt-4 space-y-2">
          {categories.VermutYVinos.map((item, index) => (
            <li key={index} className="flex justify-between text-[#432416] font-semibold text-lg">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidras */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-[#432416] border-b">Sidras</h3>
        <ul className="mt-4 space-y-2">
          {categories.Sidras.map((item, index) => (
            <li key={index} className="flex justify-between text-[#432416] font-semibold text-lg">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Refrescos */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-[#432416] border-b">Refrescos</h3>
        <ul className="mt-4 space-y-2">
          {categories.Refrescos.map((item, index) => (
            <li key={index} className="flex justify-between text-[#432416] font-semibold text-lg">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtrosSection;
