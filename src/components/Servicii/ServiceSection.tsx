import React, { useRef } from 'react';
import { type Service } from '../../data/services';
import ServiceCard from './ServiceCard';

interface Props {
  title: string;
  subtitle?: string;
  items: Service[];
  showArrow?: boolean;
}

const ServiceSection: React.FC<Props> = ({ title, subtitle, items, showArrow = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mb-14">
      <div className="flex justify-between items-end mb-5">
        <div>
          <h2 className="text-[26px] font-bold flex items-center gap-2 cursor-pointer hover:underline">
            {title}
            {showArrow && (
              <svg viewBox="0 0 32 32" className="w-4 h-4 mt-1 stroke-current stroke-[4px] fill-none"><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
            )}
          </h2>
          {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-2.5 rounded-full border border-gray-300 hover:shadow-md transition-all active:scale-95 bg-white">
            <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 block fill-none stroke-current stroke-[4px]"><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
          </button>
          <button onClick={() => scroll('right')} className="p-2.5 rounded-full border border-gray-300 hover:shadow-md transition-all active:scale-95 bg-white">
            <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 block fill-none stroke-current stroke-[4px]"><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;