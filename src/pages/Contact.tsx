import React from 'react';
import Navbar from '../components/Home/Navbar'; // Ajustează calea
import Footer from '../components/Home/Footer'; // Ajustează calea
import ContactMethods from '../components/Contact/ContactMethods';
import ContactForm from '../components/Contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-14 font-sans text-[#222222] min-h-screen">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How can we help?</h1>
          <p className="text-gray-500 text-lg">We're here for you. Choose how you'd like to get in touch with our team.</p>
        </div>

        {/* Grid cu 2 coloane */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ContactMethods />
          <ContactForm />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;