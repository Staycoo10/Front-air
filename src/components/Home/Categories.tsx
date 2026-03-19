import { useRef } from "react";
import { Link } from "react-router-dom";
import { cities } from "../../data/listings";
import HeartButton from '../../components/HeartButton'; 

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
        
        {/* 3. Butoanele actualizate în stilul Airbnb */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')} 
            className="p-2.5 rounded-full border border-gray-300 hover:shadow-md transition-all active:scale-95 bg-white"
          >
            <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 block fill-none stroke-current stroke-[4px]"><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="p-2.5 rounded-full border border-gray-300 hover:shadow-md transition-all active:scale-95 bg-white"
          >
            <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 block fill-none stroke-current stroke-[4px]"><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
          </button>
        </div>
      </div>

      {/* 4. Adăugăm scrollRef pe container (am adăugat și ascunderea scrollbar-ului default) */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-8 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
              <HeartButton />
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