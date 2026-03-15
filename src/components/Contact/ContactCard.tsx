import React from 'react';

interface Props {
  title: string;
  description: string;
  detail: string;
  icon: React.ReactNode;
}

const ContactCard: React.FC<Props> = ({ title, description, detail, icon }) => {
  return (
    <div className="flex gap-4 p-5 border border-gray-300 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-white">
      <div className="mt-1 text-[#222222]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-[15px] mt-1 mb-2 leading-relaxed">{description}</p>
        <span className="font-semibold text-[15px] underline">{detail}</span>
      </div>
    </div>
  );
};

export default ContactCard;