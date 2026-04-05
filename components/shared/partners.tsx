"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { accordionItems } from '@/constants/index'


const GoodToKnow: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1200px] mt-20 mx-auto px-4">
      <Accordion type="single" collapsible className="w-full">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            className="bg-gray-100 p-3 rounded-4xl mt-3"
            value={`item-${index}`}
          >
            <AccordionTrigger
              className="text-md font-[600] md:font-bold md:text-xl p-6"
              onClick={() => handleButtonClick(index)}
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default GoodToKnow;
