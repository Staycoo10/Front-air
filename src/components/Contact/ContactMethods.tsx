import React from 'react';
import ContactCard from './ContactCard';

const ContactMethods: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <ContactCard 
        title="Call us" 
        description="We're available 24/7 to answer your questions."
        detail="+1 (800) 123-4567"
        icon={<svg viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M25.7 20.3a14.7 14.7 0 0 1-5.1-1.3c-.6-.2-1.3-.1-1.8.3l-2.6 2.6c-3.6-1.8-6.5-4.7-8.3-8.3l2.6-2.6c.4-.4.5-1.1.3-1.8a14.7 14.7 0 0 1-1.3-5.1c-.1-1-.9-1.8-1.9-1.8H3.3c-1 0-1.9.9-1.9 2 0 14.1 11.4 25.5 25.5 25.5 1.1 0 2-.9 2-1.9v-4.3c0-1-.8-1.8-1.8-1.9z"></path></svg>}
      />
      
      <ContactCard 
        title="Send a message" 
        description="Drop us a line and we'll get back to you within 24 hours."
        detail="support@miniairbnb.com"
        icon={<svg viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.8 6.2 8h19.6zM4 24V9.7l11.4 8c.4.3.8.3 1.2 0L28 9.7V24H4z"></path></svg>}
      />

      <ContactCard 
        title="Safety Center" 
        description="Get help with a safety issue or emergency."
        detail="Visit Help Center"
        icon={<svg viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M16 2L3 8v10.5c0 7.5 5.5 14.4 13 16.5 7.5-2.1 13-9 13-16.5V8L16 2zm11 16.5c0 6.3-4.6 12-11 14-6.4-2-11-7.7-11-14V9.6l11-5.1 11 5.1v8.9zM16 11a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path></svg>}
      />
    </div>
  );
};

export default ContactMethods;