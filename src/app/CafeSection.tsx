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

  return (
    <div>
      <ul className="mt-4 mb-28 space-y-2">
        {cafePrices.map((price, index) => (
          <li key={index} className="flex justify-between items-center text-[#432416] font-semibold text-lg border-b">
            <span className="text-left">{price.name}</span>
            <span className="text-right">{price.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafeSection;
