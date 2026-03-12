import { mockQuickLinks } from '../../data/quickLinks'; // Ajustează calea în funcție de structura ta

export default function QuickLinks() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-[#222222]">
        Inspirație pentru călătorii viitoare
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {mockQuickLinks.map((item) => (
          <div key={item.id} className="cursor-pointer group">
            {/* Noul container pentru imagine */}
            <div className="h-64 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden shadow-md">
              {/* Imaginea propriu-zisă */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}