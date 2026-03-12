// components/CategorySection.tsx
import React, { useRef } from 'react';
import { type Experience } from '../../data/experience'; // ajustează calea
import ExperienceCard from './ExperienceCard';

interface Props {
  title: string;
  items: Experience[];
}

const Category: React.FC<Props> = ({ title, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Funcția de scroll pentru săgeți
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Câți pixeli facem scroll la un click
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mb-12">
      {/* Header cu Titlu și Butoane */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-gray-300 hover:shadow-md transition-all active:scale-95"
          >
            <svg viewBox="0 0 32 32" className="w-3 h-3 block fill-none stroke-current stroke-[4px]"><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-gray-300 hover:shadow-md transition-all active:scale-95"
          >
            <svg viewBox="0 0 32 32" className="w-3 h-3 block fill-none stroke-current stroke-[4px]"><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
          </button>
        </div>
      </div>

      {/* Containerul cu scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((item) => (
          <ExperienceCard key={item.id} experience={item} />
        ))}
      </div>
    </section>
  );
};

export default Category;