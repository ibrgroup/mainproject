import React from "react";
import { decisionData3 } from "@/constants/index";
import { ParagraphSize } from "./paragraph";

const ClientDecisionComponent: React.FC = () => {
  return (
    <section className="">
      <div className="max-container mt-10 md:mt-20 m-auto px-4">
        <ParagraphSize
          className="text-gray-800 font-sans max-w-lg m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
          text="Доверие и высокое качество"
          size="xl"
        />
        <div className="flex flex-col mt-5 md:mt-10 justify-between lg:flex-row items-center gap-10">
          <div className="md:hidden w-fit rounded-4xl">
            <img
              className="object-cover"
              width={500}
              height={500}
              src="/6998fb9f1a46c0c079cb433d.webp"
              alt="Доверие и высокое качество"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            {decisionData3.map((item, index) => (
              <div key={index} className="md:bg-white py-3 rounded-3xl">
                <h3 className="text-gray-800 font-sans text-balancetext-4xl font-bold tracking-tight text-2xl py-4">
                  {item.title}
                </h3>
                <p className="max-w-md">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-fit p-10 hidden md:block md:bg-gray-100 rounded-4xl">
            <img
              className="object-cover"
              width={500}
              height={500}
              src="/6998fb9f1a46c0c079cb433d.webp"
              alt="Доверие и высокое качество"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientDecisionComponent
