import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import SearchBar from '../components/Home/SearchBar';
import ServiceSection from '../components/Servicii/ServiceSection';
import { mockServices } from '../data/services';

const Servicii: React.FC = () => {
  // Filtrăm datele pe secțiuni
  const originals = mockServices.filter(s => s.section === 'Airbnb Originals');
  const bucharest = mockServices.filter(s => s.section === 'Experiences in Bucharest');
  const milan = mockServices.filter(s => s.section === 'Experiences in Milan');

  return (
    <>
      <Navbar />
      <SearchBar />
      <main className="max-w-360 mx-auto px-6 py-8 font-sans text-[#222222] min-h-screen">
        
        <ServiceSection 
          title="Airbnb Originals" 
          subtitle="Hosted by the world's most interesting people"
          items={originals} 
          showArrow={true}
        />

        {/* Titlu intermediar mare, conform designului */}
        <h1 className="text-3xl font-bold mt-12 mb-8">Popular with travelers from your area</h1>

        <ServiceSection 
          title="Experiences in Bucharest" 
          items={bucharest} 
          showArrow={true}
        />

        <ServiceSection 
          title="Experiences in Milan" 
          items={milan} 
          showArrow={true}
        />

      </main>

      <Footer />
    </>
  );
};

export default Servicii;