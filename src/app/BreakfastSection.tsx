const breakfastItems = [
    { name: "Café + 1/2 tostada", details: "(Aceite, Tomate, Mantequilla y Mermelada)", price: "2.70€" },
    { name: "Café + tostada entera", details: "(Aceite, Tomate, Mantequilla y Mermelada)", price: "3.70€" },
    { name: "Café + 1/2 tostada sup", details: "(Atún, Jamón Serrano o Queso Semi)", price: "3.70€" },
    { name: "Café + tostada entera sup", details: "(Atún, Jamón Serrano o Queso Semi)", price: "5.70€" },
    { name: "zumo + 1/2 tostada", details: "(Aceite, Tomate, Mantequilla y Mermelada)", price: "3.20€" },
    { name: "zumo + 1/ tostada sup", details: "(Atún, Jamón Serrano o Queso Semi)", price: "4.20€" },
    { name: "+ Queso, Jamón o Atún", details: "", price: "1.00€" },
    { name: "+ Aguacate", details: "", price: "1.20€" },
    { name: "Zumo de naranja natural", details: "", price: "2.00€" },
  ];
  
  export default function BreakfastSection() {
    return (
      <div className="text-[#432416]">
        {/* Horario */}
        <h2 className="text-center text-xl font-bold mb-6">
          Lunes - Viernes : 10:15h - 12:30h
        </h2>
  
        {/* Lista de desayunos */}
        <ul className="space-y-4 mb-28">
          {breakfastItems.map((item, index) => (
            <li key={index} className="border-b pb-2 flex items-center justify-between">
              <div>
                <span className="font-semibold">{item.name}</span>
                {item.details && <span className="block text-sm text-gray-600">{item.details}</span>}
              </div>
              <span className="font-bold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  