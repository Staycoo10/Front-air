const cities = [
  {
  name: "Brașov",
  distance: "2 ore",
  image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=512&h=384&q=80",
  rating: "4.91",
  price: "110"
},
{
  name: "Cluj-Napoca",
  distance: "5 ore",
  image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=512&h=384&q=80",
  rating: "4.76",
  price: "85"
},
{
  name: "Constanța",
  distance: "3 ore",
  image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=512&h=384&q=80",
  rating: "4.88",
  price: "120"
},
{
  name: "Sibiu",
  distance: "4 ore",
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=512&h=384&q=80",
  rating: "4.95",
  price: "140"
},
{
  name: "Timișoara",
  distance: "6 ore",
  image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=512&h=384&q=80",
  rating: "4.69",
  price: "75"
}
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular homes in Bucharest &rsaquo;</h2>
        <div className="flex gap-2">
          <button className="p-2 border rounded-full hover:bg-gray-100 transition text-sm">←</button>
          <button className="p-2 border rounded-full hover:bg-gray-100 transition text-sm">→</button>
        </div>
      </div>

      {/* Container cu scroll orizontal */}
      <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x">
        {cities.map((city, index) => (
          /* FIX 1: Setăm o lățime fixă pentru fiecare coloană (ex: 280px) */
          <div key={index} className="min-w-[280px] w-[280px] flex-shrink-0 snap-start cursor-pointer">
            
            {/* FIX 2: Container cu aspect-ratio și overflow-hidden */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
              <img 
                src={city.image} 
                alt={city.name} 
                /* FIX 3: h-full și object-cover forțează imaginea să stea în interiorul containerului */
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-md text-[12px] font-bold">
                Guest favorite
              </div>

              {/* Heart Button */}
              <button className="absolute top-3 right-3">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-black/30 stroke-white stroke-2">
                  <path d="m16 28c7-4.73 14-10 14-17a6.91 6.91 0 0 0 -7-7c-3.75 0-6.26 2.45-7 4.63c-.74-2.18-3.25-4.63-7-4.63a6.91 6.91 0 0 0 -7 7c0 7 7 12.27 14 17z" />
                </svg>
              </button>
            </div>

            {/* Detalii text */}
            <div className="flex justify-between items-start">
              <div className="max-w-[80%]">
                <h3 className="font-bold text-gray-900 truncate">Apartment in {city.name}</h3>
                <p className="text-gray-500 text-sm">{city.distance}</p>
                <p className="mt-1 text-sm">
                  <span className="font-bold">${city.price}</span> 
                  <span className="text-gray-500 ml-1 font-light text-xs">for 2 nights</span>
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-light">
                <span className="text-[10px]">★</span>
                <span>{city.rating}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}