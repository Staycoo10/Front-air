import React from 'react';
import { mockExperiences } from '../data/experience'; 
import CategorySection from '../components/Experience/Category';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import SearchBar from '../components/Home/SearchBar';
const Adventures: React.FC = () => {
  const categories = ['Chefs', 'Training', 'Massage'];

  return (
    <>
      <Navbar />
      <SearchBar />
      {/* Containerul principal */}
      <div className="max-w-7xl mx-auto px-6 py-8 font-sans text-[#222222] min-h-screen">
        {categories.map((category) => {
          const categoryItems = mockExperiences.filter((exp) => exp.category === category);
          
          return (
            <CategorySection 
              key={category} 
              title={category} 
              items={categoryItems} 
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Adventures;