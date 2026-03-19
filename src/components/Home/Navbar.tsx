import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Airbnb_Logo_Bélo.svg";

export default function Navbar() {
  const location = useLocation();
  
  // 1. State pentru a controla deschiderea/închiderea meniului pe mobil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lista de link-uri (astfel le putem folosi și la desktop, și la mobil)
  const navLinks = [
    { name: "Cazări", path: "/" },
    { name: "Experiențe", path: "/experience" },
    { name: "Servicii", path: "/servicii" },
  ];

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link to="/" className="z-20">
          <img src={logo} alt="airbnb-logo" className="w-32 md:w-40" />
        </Link>

        {/* Meniul Desktop (Ascuns pe ecrane mici: hidden md:flex) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative pb-1 font-medium transition-colors duration-200 ${
                  isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Partea Dreaptă */}
        <div className="flex items-center gap-2 z-20">
          {/* Link-urile de Contact și Login - Ascunse pe mobil (hidden md:block) */}
          <Link
            to="/contact" // Am actualizat href-ul cu un Link de React Router
            className="hidden md:block text-sm text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full transition font-medium"
          >
            Contactează-ne
          </Link>
          <Link
            to="/login"
            className="hidden md:block border border-gray-300 rounded-full px-5 py-2 hover:shadow-md transition text-sm font-medium"
          >
            Login
          </Link>

          {/* Butonul de Meniu Mobil (Tipic Airbnb: Hamburger + Profil) - Vizibil doar pe mobil (md:hidden) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center gap-2 p-2 border border-gray-300 rounded-full hover:shadow-md transition bg-white focus:outline-none"
          >
            {/* Iconița Hamburger */}
            <svg viewBox="0 0 32 32" className="w-4 h-4 ml-1 block fill-none stroke-current stroke-[3px]">
              <g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g>
            </svg>
            {/* Iconița Profil generică */}
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-gray-500"><path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A13.93 13.93 0 0 1 16 28.7z"></path></svg>
          </button>
        </div>
      </div>

      {/* Dropdown-ul pentru Mobil */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-white shadow-lg border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden z-10 ${
          isMobileMenuOpen ? "top-full max-h-100 opacity-100" : "top-full max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-3 px-6 gap-4">
          {/* Paginile Principale */}
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Închidem meniul când dă click
                className={`text-lg font-medium transition-colors ${
                  isActive ? "text-[#FF385C]" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="border-t border-gray-200 my-1"></div>
          
          {/* Link-urile de Contact și Login pe mobil */}
          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-[15px] text-gray-600 hover:text-gray-900"
          >
            Contactează-ne
          </Link>
          <Link 
            to="/login" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-[15px] font-semibold text-gray-900"
          >
            Log in / Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}