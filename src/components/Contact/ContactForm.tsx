import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <div className="border border-gray-400 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-black transition-shadow">
          <div className="p-3 border-b border-gray-400 bg-white">
            <label className="text-[10px] uppercase font-bold text-gray-500 block">Name</label>
            <input 
              type="text" 
              required
              placeholder="Jane Doe" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full outline-none text-base placeholder-gray-400 bg-transparent pt-1"
            />
          </div>
          
          <div className="p-3 border-b border-gray-400 bg-white">
            <label className="text-[10px] uppercase font-bold text-gray-500 block">Email</label>
            <input 
              type="email" 
              required
              placeholder="jane@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full outline-none text-base placeholder-gray-400 bg-transparent pt-1"
            />
          </div>

          <div className="p-3 bg-white">
            <label className="text-[10px] uppercase font-bold text-gray-500 block">Message</label>
            <textarea 
              required
              rows={4}
              placeholder="How can we help you today?" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full outline-none text-base placeholder-gray-400 bg-transparent pt-1 resize-none"
            ></textarea>
          </div>
        </div>

        <p className="text-[12px] text-[#717171] leading-tight mt-1 mb-2">
          By clicking "Send message", you agree to our <span className="underline font-semibold cursor-pointer text-black">Terms of Service</span> and <span className="underline font-semibold cursor-pointer text-black">Privacy Policy</span>.
        </p>

        <button 
          type="submit"
          className="bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold py-3.5 px-6 rounded-lg transition-all active:scale-[0.98] text-base w-full md:w-auto self-start"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;