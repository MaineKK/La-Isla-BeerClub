import React from "react";

const CafeSection = () => {
  const cafePrices = [
    { name: "Sólo", price: "1.30€" },
    { name: "Americano", price: "1.40€" },
    { name: "Cortado", price: "1.50€" },
    { name: "Manchado", price: "1.50€" },
    { name: "Café con Leche", price: "1.70€" },
    { name: "Leche Manchada", price: "1.70€" },
    { name: "Bombón", price: "1.70€" },
    { name: "Míxto", price: "1.80€" },
    { name: "Capuccino", price: "2.00€" },
    { name: "Carajillo", price: "2.00€" },
    { name: "Belmonte", price: "2.00€" },
    { name: "Asiático", price: "3.50€" },
  ];

  const teas = [
    "Té rojo - 'Pu-erh'",
    "Té verde - 'Gunpowder'",
    "Té negro - 'English Breakfast",
    "Té chai - 'Pakistaní'",
    "Té chino -  'Jazmín'",
    "Rooibos - 'Flor del Desierto'",
    "Infusión de Flor de Manzanilla",
    "Infusión de Poleo",
    "Infusión de Frutos del Bosque",
  ];

  return (
    <div>
      <h3 className="text-[#522c25] font-serif font-bold text-xl mb-4">
        Café Salzillo - Maracaná
      </h3>
      <ul className="mt-4 mb-8 space-y-2">
        {cafePrices.map((price, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-[#432416] font-semibold text-lg border-b pb-1"
          >
            <span>{price.name}</span>
            <span>{price.price}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[#522c25] font-serif font-bold text-xl">
            Tés e infusiones
          </h3>
          <span className="font-semibold text-[#432416] text-lg">1,70€</span>
        </div>
        <ul>
          {teas.map((tea, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-[#432416] font-semibold text-lg border-b pb-1"
            >
              <span>{tea}</span>
              <span></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CafeSection;