import searchImage from '../../assets/Search.png';

export default function SearchBar() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-6 md:py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <div className="bg-white rounded-[2rem] md:rounded-full shadow-xl border border-gray-200 p-2 flex flex-col md:flex-row items-stretch md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <input 
            placeholder="Caută destinații" 
            className="flex-[1.5] px-6 py-4 md:py-3 outline-none text-sm bg-transparent" 
          />
          
          <div className="flex flex-row divide-x divide-gray-200 md:contents">
             <input 
                placeholder="Check-in" 
                className="flex-1 w-1/2 md:w-auto px-6 py-4 md:py-3 outline-none text-sm bg-transparent" 
              />
              <input 
                placeholder="Check-out" 
                className="flex-1 w-1/2 md:w-auto px-6 py-4 md:py-3 outline-none text-sm bg-transparent" 
              />
          </div>

          <input 
            placeholder="Oaspeți" 
            className="flex-1 px-6 py-4 md:py-3 outline-none text-sm bg-transparent" 
          />

          
          <button className="bg-rose-500 text-white rounded-2xl md:rounded-full p-4 hover:bg-rose-600 transition flex items-center justify-center mt-2 md:mt-0">
            <img src={searchImage} alt="Search" className="w-5 h-5 mr-2 md:mr-0" />
            <span className="md:hidden font-semibold">Caută</span>
          </button>
          
        </div>
      </div>
    </div>
  );
}