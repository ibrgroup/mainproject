"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { todolist } from '@/constants/index'

const Todolist: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-container m-auto md:mb-20 mb-10 px-4">
      <Accordion type="single" collapsible className="w-full">
        {todolist.map((item, index) => (
          <AccordionItem
            key={index}
            className="bg-gray-100 p-3 rounded-3xl mt-3"
            value={`item-${index}`}
          >
            <AccordionTrigger
              className="text-xl font-sans text-gray-800 font-bold md:font-bold md:text-xl p-6"
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

export default React.memo(Todolist);
