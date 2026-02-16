export default function SearchBar() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-full shadow-xl border border-gray-200 p-2 flex items-center">

          <input placeholder="Caută destinații" className="flex-1 px-6 py-3 outline-none text-sm" />
          <input placeholder="Check-in" className="px-6 py-3 outline-none text-sm" />
          <input placeholder="Check-out" className="px-6 py-3 outline-none text-sm" />
          <input placeholder="Oaspeți" className="flex-1 px-6 py-3 outline-none text-sm" />

          <button className="bg-rose-500 text-white rounded-full p-4 hover:bg-rose-600 transition">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
