import React from "react";

const beerData = {
  "Grifos": [
    { name: "Estrella Galicia", type: "Lager", abv: "5.5%", half: "1.50€", full: "2.50€" },
    { name: "1906", type: "Lager", abv: "6.5%", half: "2.00€", full: "3.00€" },
    { name: "Blue Moon", type: "Belgian White Ale", abv: "5.4%", half: "2.50€", full: "4.50€" },
    { name: "Yakka IPA", type: "*", abv: "", half: "3.00€", full: "5.50€" },
    { name: "Yakka Negra", type: "*", abv: "", half: "3.00€", full: "5.50€" },
    { name: "Yakka Tostada", type: "*", abv: "", half: "2.50€", full: "4.50€" },
    { name: "Chouffe Blonde", type: "Belgian Ale", abv: "8%", half: "3.00€", full: "5.50€" },
    { name: "Chouffe Cherry", type: "Fruit Beer", abv: "8%", half: "3.00€", full: "5.50€" },
    { name: "Weihenstephaner Vitus", type: "Weissbier", abv: "7.7%", half: "3.00€", full: "5.00€" },
    { name: "Delirium Tremens", type: "Strong Ale", abv: "8.5%", half: "3.00€", full: "5.50€" },
    { name: "Grifo Artesanal Rotativo", type: "*", abv: "", half: "3.50€", full: "6.50€" },
  ],
  "Tercios": [
    { name: "Estrella Galicia", price: "2.00€" },
    { name: "1906", price: "2.50€" },
    { name: "Alhambra Reserva", price: "3.00€" },
    { name: "Águila Sin Filtrar", price: "3.00€" },
    { name: "Verna", price: "2.50€" },
    { name: "Estrella Galicia 0,0 Tostada", price: "2.50€" },
    { name: "Clausthaler Rubia / Tostada", price: "3.00€" },
    { name: "Yakka Blonde - Sin Gluten", price: "3.50€" },
  ]
};

const BeerSection: React.FC = () => {
  return (
    <div className="px-4">
      {/* Grifos */}
      <div className="mb-6">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-2xl font-bold text-[#432416]">Grifos</h3>
          <p className="text-lg font-semibold text-[#432416]">1/2 pinta - 1 pinta</p>
        </div>
        <ul className="mt-4 space-y-4">
          {beerData["Grifos"].map((item, index) => (
            <li key={index} className="text-[#432416] font-semibold text-lg border-b pb-4">
              <div className="flex justify-between items-center">
                {/* Nombre y precio en la misma línea */}
                <span className="text-xl font-bold">{item.name}</span>
                <span className="text-lg font-semibold">{item.half} / {item.full}</span>
              </div>
              {/* Tipo y ABV en una segunda línea más sutil */}
              {item.type && (
                <span className="block text-sm text-gray-600">{item.type} {item.abv && `- ${item.abv}`}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="text-right mt-4">
          <span className="text-sm text-gray-600 font-bold">* Grifos rotativos, preguntar al personal</span>
        </div>
      </div>

      {/* Tercios */}
      <div className="mt-8 mb-24">
        <h4 className="text-2xl font-bold text-[#432416] border-b pb-2">Tercios</h4>
        <ul className="mt-4 space-y-2">
          {beerData["Tercios"].map((bottle, index) => (
            <li key={index} className="text-[#432416] font-semibold text-lg border-b pb-2">
              <div className="flex justify-between">
                <span>{bottle.name}</span>
                <span>{bottle.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerSection;
