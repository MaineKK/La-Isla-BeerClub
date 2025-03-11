import React from "react";

const PicoteoSection = () => {
  const picoteoPrices = [
    "Marinera - 2.00€",
    "Bicicleta - 2.00€",
    "Papas fritas - 1.00€",
    "Aceitunas rellenas - 1.50€",
    "Almendras - 2.00€",
    "Papas con olivas - 2.50€",
    "Nachos con Guacamole - 3.00€",
    "Salchicha seca con almendras - 4.00€",
    "Perrito caliente - 3.00€",
    "Queso con almendras - 4.00€"
  ];

  return (
    <div>
      <ul className="mt-4 mb-28 space-y-2">
        {picoteoPrices.map((item, index) => (
          <li key={index} className="flex justify-between items-center text-[#432416] font-semibold text-lg border-b">
            <span className="text-left">{item.split(" - ")[0]}</span>
            <span className="text-right">{item.split(" - ")[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PicoteoSection;
