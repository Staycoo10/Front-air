import { useParams } from 'react-router-dom';
import { cities } from '../data/listings';
import Navbar from '../components/Home/Navbar'; 

const ListingDetail = () => {
  const { id } = useParams();
  const listing = cities.find(item => item.id === id);

  if (!listing) return <div className="p-20 text-center">Locația nu a fost găsită.</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-10 pt-24">
        <h1 className="text-2xl font-semibold mb-2">{listing.title}</h1>
        <p className="underline font-medium mb-6 cursor-pointer">{listing.location}</p>

        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-112.5 rounded-xl overflow-hidden mb-8">
          <div className="col-span-2 row-span-2 bg-gray-200">
             <img src={listing.images[0] || listing.image} className="w-full h-full object-cover hover:brightness-90 transition cursor-pointer" />
          </div>
          <div className="bg-gray-200">
             <img src={listing.images[1] || listing.image} className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 hidden md:block">
             <img src={listing.image} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold">Găzduit de Bogdan</h2>
              <div className="flex gap-2 text-gray-500 text-sm mt-1">
                <span>{listing.maxGuests} oaspeți</span> • 
                <span>{listing.bedrooms} dormitoare</span> • 
                <span>{listing.beds} paturi</span>
              </div>
            </div>
            
            <div className="py-8 border-b">
              <p className="text-gray-700 leading-relaxed">{listing.description}</p>
            </div>
            
            <div className="py-8">
              <h3 className="text-lg font-semibold mb-4">Ce oferă această locație</h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-700">
                {listing.amenities.map(amenity => (
                  <li key={amenity} className="flex items-center gap-2">✓ {amenity}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-28 p-6 border rounded-xl shadow-xl bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">${listing.price} <span className="text-sm font-light">noapte</span></span>
                <span className="text-sm">★ {listing.rating}</span>
              </div>
              <button className="w-full bg-[#FF385C] text-white py-3 rounded-lg font-semibold hover:bg-[#E31C5F] transition active:scale-95">
                Rezervă
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListingDetail;