"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { accordionItems } from '@/constants/index'

const AnswersQuestions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-container m-auto md:mb-20 mb-10 md:mt-20 mt-10 px-4">
      <Accordion type="single" collapsible className="w-full">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            className="bg-gray-100 p-3 rounded-3xl mt-3"
            value={`item-${index}`}
          >
            <AccordionTrigger
              className="text-mdfont-bold font-sans text-gray-800 font-bold text-xl p-6"
              onClick={() => handleButtonClick(index)}
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-4" dangerouslySetInnerHTML={{ __html: item.content }} />
            </AccordionContent>
          </AccordionItem>
          
        ))}
      </Accordion>
    </section>
  );
};

export default React.memo(AnswersQuestions);
