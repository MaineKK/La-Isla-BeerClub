import React from "react";

const copasData = {
  "Copas clásicas": {
    price: "7€",
    categories: {
      "Ronería": ["Brugal", "Barcelo", "Santa Teresa", "Arehucas", "Legendario", "Matusalem"],
      "Ginebras": ["Larios", "Larios 12", "Tanqueray", "Seagrams", "Beefeater", "Zeeland pink"],
      "Whiskies": ["White Label", "Red Label", "Jamson", "FourRoses", "Cutty Sark", "Ballantines"],
      "Vodka": ["Moskovskaya"]
    }
  },
  "Copas Premium": {
    price: "8.50€",
    categories: {
      "Ronería": ["Barceló Imperial"],
      "Ginebras": ["Hendricks", "Martin Miller's", "Nordés", "Brockmans", "Mombasa", "G'Vine", "Formentera Gin"],
      "Whiskies": ["Black Label", "Jack Daniel's", "Tomatin Legacy(Single Malt)"],
    }
  },
  "Whisky Macallan 12": {
    price: "15€",
    categories: {
      "": [""]
    }
  },
  "Chupitos": {
    price: "2€",
    categories: {
      "": [
        "Tequila Jose Cuervo",
        "Jaggermaister",
        "Orujo de Hierbas",
        "Fireball",
        "Tequila de Fresa",
        "Tequila de Fruta de la Pasión",
        "Marcas clásicas"
      ]
    }
  },
  "Chupitos Premium": {
    price: "3€",
    categories: {
      "Marcas Premium": [""]
    }
  }
};

const CopasSection = () => {
    return (
      <div>
        {Object.entries(copasData).map(([title, data]) => (
          <div key={title} className="mb-6">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-xl font-bold text-[#432416]">{title}</h3>
              <span className="text-xl font-bold text-[#432416]">{data.price}</span>
            </div>
            {Object.entries(data.categories).map(([category, items]) => (
              <div key={category} className="mt-3">
                <h4 className="font-bold text-[#432416]">{category}</h4>
                <p className="text-[#432416]">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export default CopasSection;
