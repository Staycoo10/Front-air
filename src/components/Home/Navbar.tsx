import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Airbnb_Logo_Bélo.svg";

export default function Navbar() {
  // 1. Folosim useLocation pentru a afla calea paginii curente
  const location = useLocation();


  const navLinks = [
    { name: "Cazări", path: "/" },
    { name: "Experiențe", path: "/experience" },
    { name: "Servicii", path: "/servicii" },
  ];

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="airbnb-logo" className="w-40" />
        </a>

        {/* Meniul central */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            // Verificăm dacă linkul curent este cel activ
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
                
                {/* 3. Linia animată cu Tailwind */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Meniul din dreapta */}
        <div className="flex items-center space-x-4">
          <Link to="/contact" 
          className="text-sm text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-full transition">
          Contactează-ne
          </Link>
  
          <Link
            to="/login"
            className="border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}