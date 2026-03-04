export default function QuickLinks() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8">
        Inspirație pentru călătorii viitoare
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["Despre noi", "Contact", "Contul tău"].map((item, index) => (
          <div key={index} className="cursor-pointer group">
            <div className="h-64 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 mb-4 group-hover:scale-105 transition"></div>
            <h3 className="font-semibold text-lg">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
