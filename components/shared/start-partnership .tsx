import React from "react";
import { ParagraphSize } from "./paragraph";
import { startpartnership } from '@/constants/index'

export const StartPartnership: React.FC = () => {
  return (
    <div className="max-container m-auto mt-20 px-4">
      <ParagraphSize
        className="text-gray-800 font-sans m-auto max-w-sm text-balancetext-4xl text-center font-bold tracking-tight text-4xl lg:text-6xl"
        text="Как стать партнером"
        size="xl"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {startpartnership.map((service, index) => (
          <div key={index} className="bg-gray-100 rounded-4xl p-8">
            <h1 className="text-3xl w-16 mb-4 h-16 bg-tiffany flex justify-center items-center rounded-full text-white font-bold tracking-tight">
              {service.title}
            </h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
