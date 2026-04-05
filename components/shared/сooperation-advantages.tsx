import React from "react";
import { ParagraphSize } from "./paragraph";
import { cooperationadvantages } from "@/constants";

export const CooperationAdvantages: React.FC = () => {
  return (
    <div className="mt-10 md:mt-20 px-4">
      <ParagraphSize
        className="text-gray-800 font-sans max-w-[550px] m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Этический шопинг и качество"
        size="xl"
      />
      <div className="grid max-container m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
        {cooperationadvantages.map((item, index) => (
          <div
            className="flex items-start bg-gray-100 md:text-start text-center md:bg-white p-8 rounded-4xl"
            key={index}
          >
            <div className="md:block hidden">
              <div className="text-white p-5 mr-4 bg-tiffany font-bold font-sans rounded-full w-10 h-10 flex justify-center items-center text-xl">
                <span>{item.number}</span>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-gray-800 font-sans text-2xl">{item.title}</h2>
              <p className="text-gray-800 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
