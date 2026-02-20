import searchImage from '../assets/Search.png';

export default function SearchBar() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-full shadow-xl border border-gray-200 p-2 flex items-center divide-x divide-gray-200">
          
          <input 
            placeholder="Caută destinații" 
            className="flex-[1.5] px-6 py-3 outline-none text-sm bg-transparent" 
          />
          <input 
            placeholder="Check-in" 
            className="flex-1 px-6 py-3 outline-none text-sm bg-transparent" 
          />
          <input 
            placeholder="Check-out" 
            className="flex-1 px-6 py-3 outline-none text-sm bg-transparent" 
          />
          <input 
            placeholder="Oaspeți" 
            className="flex-1 px-6 py-3 outline-none text-sm bg-transparent" 
          />

          <button className="bg-rose-500 text-white rounded-full p-4 hover:bg-rose-600 transition">
            <img src={searchImage} alt="Search" className="w-4 h-4" />
          </button>
          
        </div>
      </div>
    </div>
  );
}