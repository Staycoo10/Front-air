import React from 'react';
import { type Service } from '../../data/services'; // ajustează calea către tipul Service

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="flex flex-col gap-2 min-w-60 md:min-w-65 max-w-65 snap-start group cursor-pointer">
      <div className="relative aspect-4/5 rounded-xl overflow-hidden mb-1">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Butoane dreapta sus (Inimă și Share pentru Originals) */}
        <div className="absolute top-3 right-3 flex gap-2">
          {service.badge === 'Original' && (
            <button className="bg-white/90 p-1.5 rounded-full hover:scale-105 transition-transform shadow-sm">
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-none stroke-black stroke-[3px]"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 4v20M9 11l7-7 7 7"></path></svg>
            </button>
          )}
          <button className="text-white hover:scale-110 transition-transform">
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-black/40 stroke-white stroke-[2px]">
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-6.94c-2.24 0-4.66.86-6.47 2.76A9.67 9.67 0 0 0 16 8.58a9.67 9.67 0 0 0-.53-1.76C13.66 4.92 11.24 4.06 9 4.06A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
          </button>
        </div>

        {/* Badges (Original sau Popular) */}
        {service.badge && (
          <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-md text-xs font-semibold shadow-sm flex items-center gap-1">
            {service.badge === 'Original' && (
              <svg viewBox="0 0 16 16" className="w-3 h-3 fill-yellow-500"><path d="M14.2 1.8a4.5 4.5 0 0 0-6.4 0L2.3 7.3a1.5 1.5 0 0 0-.4 1v4.2c0 .8.7 1.5 1.5 1.5h4.2c.4 0 .8-.1 1-.4l5.5-5.5a4.5 4.5 0 0 0 0-6.3zM5.5 12H4V10.5L9.5 5 11 6.5 5.5 12z"></path></svg>
            )}
            {service.badge}
          </div>
        )}
      </div>

      <div className="text-[15px] leading-tight flex flex-col gap-0.5 mt-1">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{service.title}</h3>
        {service.subtitle && <p className="text-gray-500 truncate text-[14px]">{service.subtitle}</p>}
        
        <div className="flex items-center text-gray-900 mt-1">
          <span className="font-semibold">From ${service.price}</span> 
          <span className="mx-1">/</span> 
          <span>{service.unit}</span>
          
          {service.rating && (
            <>
              <span className="mx-1.5 text-xs">·</span>
              <svg viewBox="0 0 32 32" className="w-3 h-3 fill-current mr-1"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>
              <span>{service.rating.toFixed(2).replace(/\.00$/, '.0')}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;