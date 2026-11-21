import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { investFaq } from "@/constants/index";
import { ParagraphSize } from "./paragraph";

const InvestFaq: React.FC = () => {
  return (
    <section className="max-container m-auto md:mb-20 mb-10 md:mt-20 mt-10 px-4">
      <ParagraphSize
        className="text-gray-800 max-w-lg m-auto text-center mb-10 text-balance font-bold tracking-tight text-4xl lg:text-6xl"
        text="Частые вопросы"
        size="xl"
      />
      <Accordion type="single" collapsible className="w-full">
        {investFaq.map((item, index) => (
          <AccordionItem
            key={item.title}
            className="bg-gray-100 p-3 rounded-3xl mt-3 border-b-0"
            value={`item-${index}`}
          >
            <AccordionTrigger className="font-sans text-gray-800 font-bold text-xl p-6 text-left">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base px-6">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default React.memo(InvestFaq);
