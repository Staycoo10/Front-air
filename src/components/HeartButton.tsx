import React, { useState } from 'react';

// 1. Definim ce "setări" (props) poate primi acest buton
interface HeartProps {
  className?: string; 
}

// 2. Setăm valoarea default pentru className 
const HeartButton: React.FC<HeartProps> = ({ className = "absolute top-3 right-3 z-10" }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    setIsLiked(!isLiked);
    
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button 
      onClick={toggleLike}
      // 3. Aici folosim variabila className în loc să hardcodăm poziția și stilul. Astfel, putem reutiliza acest buton în alte locuri fără să ne facem griji de poziționare.
      className={`focus:outline-none group/heart ${className}`}
    >
      <svg 
        viewBox="0 0 32 32" 
        className={`w-6 h-6 transition-all duration-300 ease-out 
          ${isLiked ? 'fill-[#FF385C] stroke-[#FF385C]' : 'fill-black/50 stroke-white stroke-[2px] group-hover/heart:scale-110'}
          ${isAnimating ? 'scale-125' : 'scale-100'}
        `}
      >
        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-6.94c-2.24 0-4.66.86-6.47 2.76A9.67 9.67 0 0 0 16 8.58a9.67 9.67 0 0 0-.53-1.76C13.66 4.92 11.24 4.06 9 4.06A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
      </svg>
    </button>
  );
};

export default HeartButton;