export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8">
        Nu ești sigur unde să mergi? Perfect.
      </h1>

      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div className="h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8">
            <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Mă simt norocos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
