const cities = [
  { name: "București", distance: "15 minute" },
  { name: "Brașov", distance: "2 ore" },
  { name: "Cluj-Napoca", distance: "5 ore" },
  { name: "Constanța", distance: "3 ore" }
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8">
        Explorează în apropiere
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="cursor-pointer group">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 mb-3 group-hover:scale-105 transition"></div>
            <h3 className="font-semibold">{city.name}</h3>
            <p className="text-gray-500 text-sm">{city.distance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
