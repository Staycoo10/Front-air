import logo from "../assets/Airbnb_Logo_Bélo.svg";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <img src={logo} alt="airbnb-logo" className="w-40" />

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1">Cazări</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">Experiențe</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">Aventuri</a>
        </div>

        
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-full transition">
            Contactează-ne
          </a>
          <button className="border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
