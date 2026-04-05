"use client";
import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ParagraphSize } from "./paragraph";
import { Calculator } from "./calculator";

export const IBRCalculator: React.FC = () => {
return (
<Tabs className="max-container m-auto mt-10 md:mt-20" defaultValue="installmentplan">
  <div className="flex flex-col items-center md:flex-row md:justify-between">
    <ParagraphSize
      className="text-gray-800 m-auto max-w-lg font-sans font-bold md:text-center text-center text-balancetext-4xl tracking-tight text-4xl lg:text-6xl"
      text="Рассчитайте выгоду для себя" size="xl" />
  </div>
  <TabsContent value="installmentplan">
    <Calculator title="Рассчитайте комфортные условия рассрочки" />
  </TabsContent>
</Tabs>
);
};