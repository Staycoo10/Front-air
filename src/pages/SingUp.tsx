import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+373');

  const handleContinue = () => {
    if (phoneNumber.length < 5) {
      alert("Te rugăm să introduci un număr de telefon valid.");
      return;
    }
    console.log("Date trimise:", { countryCode, phoneNumber });
   
  };

  return (

    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
        <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-142 bg-white rounded-xl border border-gray-300 shadow-lg">
          
          {/* Header-ul ferestrei de login */}
          <div className="border-b border-gray-200 py-4 px-6 flex items-center">
            <h1 className="flex-1 text-center font-bold text-base">Log in or sign up</h1>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#222222]">Welcome to Airbnb</h2>

          {/* Formular Inputs */}
          <div className="mb-4">
            <div className="border border-gray-400 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-black">
              <div className="p-3 border-b border-gray-400 bg-white">
                <label className="text-[10px] uppercase font-bold text-gray-500 block">Country code</label>
                <select 
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full bg-transparent text-base outline-none cursor-pointer pt-1"
                >
                  <option value="+373">Moldova (+373)</option>
                  <option value="+40">Romania (+40)</option>
                  <option value="+1">United States (+1)</option>
                </select>
              </div>
              <div className="p-3 bg-white">
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))} // Permite doar cifre
                  className="w-full outline-none text-base placeholder-gray-500"
                />
              </div>
            </div>
            <p className="text-[12px] text-[#717171] mt-2 leading-tight">
              We'll call or text you to confirm your number. Standard message and data rates apply. 
              <span className="underline font-semibold cursor-pointer ml-1 text-black">Privacy Policy</span>
            </p>
          </div>

          <button 
            onClick={handleContinue}
            className="w-full bg-[#FF385C] hover:bg-[#E31C5F] text-white font-semibold py-3.5 rounded-lg transition-all active:scale-[0.98] mb-4 text-base"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-[12px] text-gray-500 font-normal">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Butoane Sociale (fără librării) */}
          <div className="space-y-4">
            <SocialBtn text="Continue with Facebook">
               <svg viewBox="0 0 32 32" className="w-5 h-5 fill-[#1877F2]"><path d="M30 16a14.03 14.03 0 0 0-12.25-13.906V11.19h3.334l.635-4.125h-3.969v-2.677c0-1.13.554-2.23 2.327-2.23h1.801V0s-1.634-.279-3.197-.279c-3.262 0-5.39 1.977-5.39 5.548v3.136H9.31v4.125h3.997v9.643c-6.892-1.079-12.25-7.057-12.25-14.24 0-7.732 6.268-14 14-14s14 6.268 14 14z"></path></svg>
            </SocialBtn>
            
            <SocialBtn text="Continue with Google">
               <svg viewBox="0 0 32 32" className="w-5 h-5"><path d="M31.64 16.202c0-1.095-.1-2.19-.281-3.254H16.326v6.162h8.587c-.371 1.996-1.495 3.687-3.182 4.821l5.155 4c3.017-2.781 4.754-6.877 4.754-11.729z" fill="#4285F4"></path><path d="M16.326 31.798c4.264 0 7.84-1.415 10.453-3.829l-5.155-4c-1.427.957-3.251 1.522-5.298 1.522-4.075 0-7.527-2.751-8.761-6.451l-5.334 4.135c2.633 5.23 8.01 8.623 14.095 8.623z" fill="#34A853"></path><path d="M7.565 19.04c-.332-.996-.521-2.057-.521-3.161s.19-2.165.521-3.161V6.583H2.231C1.082 8.87.433 11.458.433 14.195c0 2.737.649 5.325 1.798 7.612l5.334-4.136z" fill="#FBBC05"></path><path d="M16.326 5.378c2.321 0 4.4.798 6.037 2.365l4.529-4.53C24.157 1.05 20.581-.004 16.326-.004c-6.085 0-11.462 3.393-14.095 8.623l5.334 4.136c1.234-3.7 4.686-6.451 8.761-6.451z" fill="#EA4335"></path></svg>
            </SocialBtn>

            <SocialBtn text="Continue with Apple">
               <svg viewBox="0 0 32 32" className="w-5 h-5 fill-black"><path d="M23.23 16.88c.03 3.63 3.16 4.83 3.2 4.85-.03.08-.5 1.7-1.65 3.38-1 1.45-2.03 2.9-3.64 2.93-1.58.03-2.09-.94-3.9-.94s-2.38.91-3.86.97c-1.55.06-2.71-1.57-3.72-3.02-2.06-2.96-3.63-8.38-1.52-12.04 1.05-1.82 2.91-2.97 4.93-3 1.54-.03 2.99 1.04 3.93 1.04.93 0 2.73-1.28 4.58-1.09 1.93.08 3.4 1.15 4.3 2.47-1.92 1.16-2.27 3.55-2.27 3.55zm-3.56-9.13c.83-1 1.39-2.39 1.24-3.77-1.18.05-2.61.79-3.46 1.78-.77.88-1.44 2.31-1.26 3.65 1.31.1 2.65-.66 3.48-1.66z"></path></svg>
            </SocialBtn>

            <SocialBtn text="Continue with email">
               <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none stroke-black stroke-[2.5]"><path d="M4 8l12 9 12-9M4 24h24V8H4v16z"></path></svg>
            </SocialBtn>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

// Componentă mică pentru butoane ca să nu repetăm codul
const SocialBtn = ({ children, text }: { children: React.ReactNode, text: string }) => (
  <button className="w-full flex items-center border-[1.5px] border-gray-400 hover:border-black py-3 px-5 rounded-lg font-semibold text-[14px] transition-all relative">
    <div className="absolute left-5">{children}</div>
    <div className="flex-1 text-center">{text}</div>
  </button>
);

export default Login;