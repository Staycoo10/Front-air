import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchImage from '../../assets/Search.png';

export default function SearchBar() {
  // 1. Adăugăm state-ul pentru textul introdus și hook-ul de navigare
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // 2. Funcția care decide unde te trimite pe baza textului
  const handleSearch = () => {
    const term = query.toLowerCase().trim();
    
    if (term.includes("bra")) {
      navigate('/listing/brasov-1');
    } else if (term.includes("cluj")) {
      navigate('/listing/cluj-1');
    } else if (term.includes("sibiu")) {
      navigate('/listing/sibiu-1');
    } else if (term.includes("con")) {
      navigate('/listing/constanta-1');
    } else if (term.includes("tim")) {
      navigate('/listing/timisoara-1');
    } else if (term !== "") {
      alert("Nu am găsit destinația. Încearcă Brașov, Cluj, Sibiu, Constanța sau Timișoara.");
    }
  };

  return (
    <div className=" py-6 md:py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <div className="bg-white rounded-4xl md:rounded-full shadow-xl border border-gray-200 p-2 flex flex-col md:flex-row items-stretch md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* 3. Legăm input-ul de state-ul nostru */}
          <input 
            placeholder="Caută destinații" 
            className="flex-[1.5] px-6 py-4 md:py-3 outline-none text-sm bg-transparent" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
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

          {/* 4. Declanșăm căutarea la apăsarea butonului */}
          <button 
            
            onClick={handleSearch}
            className="bg-rose-500 text-white rounded-2xl md:rounded-full p-4 hover:bg-rose-600 transition flex items-center justify-center mt-2 cursor-pointer md:mt-0"
          >
            <img src={searchImage} alt="Search" className="w-5 h-5 mr-2 md:mr-0" />
            <span className="md:hidden font-semibold">Caută</span>
          </button>
          
        </div>
      </div>
    </div>
  );
}