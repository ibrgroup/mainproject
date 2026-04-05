import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { investigation } from "@/constants/index";
import { ParagraphSize } from "./paragraph";

const Investigation = () => {
  return (
    <section className="max-container m-auto">
      <ParagraphSize
        className="text-gray-800 max-w-lg font-sans mt-10 md:mt-20 m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
        text="Нас часто спрашивают"
        size="xl"
      />
      <Timeline data={investigation} />
    </section>
  );
};
export default React.memo(Investigation);
