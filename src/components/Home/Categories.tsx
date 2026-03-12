import { useRef } from "react";
import { Link } from "react-router-dom";
import { cities } from "../../data/listings";

export default function Categories() {
  // 1. Creăm o referință pentru containerul de scroll
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Funcția pentru scroll stânga/dreapta
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Ajustează în funcție de lățimea cardului + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular homes in Bucharest &rsaquo;</h2>
        
        {/* 3. Atașăm funcția scroll pe butoane */}
        <div className="flex gap-2">
          <button
  onClick={() => scroll("left")}
  className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 transition text-sm active:scale-90"
>
  {"<"}
</button>

<button
  onClick={() => scroll("right")}
  className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100 transition text-sm active:scale-90"
>
  {">"}
</button>
        </div>
      </div>

      {/* 4. Adăugăm scrollRef pe container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x scroll-smooth"
      >
        {cities.map((city) => (
          <Link 
            to={`/listing/${city.id}`} 
            key={city.id} 
            className="min-w-70 w-70 shrink-0 snap-start cursor-pointer group"
          >
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-3">
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              
              <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-md text-[12px] font-bold">
                Guest favorite
              </div>

              <button className="absolute top-3 right-3 hover:scale-110 transition">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-black/30 stroke-white stroke-2">
                  <path d="m16 28c7-4.73 14-10 14-17a6.91 6.91 0 0 0 -7-7c-3.75 0-6.26 2.45-7 4.63c-.74-2.18-3.25-4.63-7-4.63a6.91 6.91 0 0 0 -7 7c0 7 7 12.27 14 17z" />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-start">
              <div className="max-w-[80%]">
                <h3 className="font-bold text-gray-900 truncate">Apartment in {city.name}</h3>
                <p className="text-gray-500 text-sm">{city.distance}</p>
                <p className="mt-1 text-sm">
                  <span className="font-bold">${city.price}</span> 
                  <span className="text-gray-500 ml-1 font-light text-xs">per noapte</span>
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-light">
                <span className="text-[10px] text-yellow-500">★</span>
                <span>{city.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}