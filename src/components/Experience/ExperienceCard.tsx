import React, { useState } from 'react';
import { type Experience } from '../../data/experience';
import HeartButton from '../../components/HeartButton'; 

interface Props {
  experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="flex flex-col gap-2 min-w-65 md:min-w-70 max-w-70 snap-start group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-1">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Aici am înlocuit butonul static cu noua componentă interactivă */}
        <HeartButton />

        {/* Popular Badge */}
        {experience.isPopular && (
          <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
            Popular
          </div>
          
        )}
      </div>

      {/* Details */}
      <div className="text-[15px] leading-tight flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-900 truncate">{experience.title}</h3>
        </div>
        
        {experience.location && (
          <p className="text-gray-500 truncate">{experience.location}</p>
        )}

        <div className="flex items-center text-gray-900 mt-1">
          <span className="font-semibold">From ${experience.price}</span> 
          <span className="mx-1">/</span> 
          <span>{experience.unit}</span>
          <span className="mx-1.5 text-xs">·</span>
          <svg viewBox="0 0 32 32" className="w-3 h-3 fill-current mr-1"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>
          <span>{experience.rating.toFixed(2).replace(/\.00$/, '.0')}</span>
        </div>

        {experience.minBooking && (
          <p className="text-gray-500 text-[13px]">{experience.minBooking}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;