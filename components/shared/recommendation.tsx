import React from "react";
import { recommendation } from "@/constants/index";
import { ParagraphSize } from "./paragraph";
import { CardComponent } from "./card-component";

interface LinkItem {
  link: string;
}
  

export const Recommendation: React.FC = () => {
  return (
    <section>
      <ParagraphSize
        className="text-gray-800 font-sans md:mt-20 mt-10 max-w-lg font-bold m-auto text-center text-balance tracking-tight text-4xl lg:text-6xl"
        text="Рекомендуемые продукты"
        size="xl"
      />
      <div className="px-4 mt-10">
        <div className="max-container m-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {recommendation.slice(0, 2).map((rec) => (
            <CardComponent
              key={rec.id}
              id={rec.id}
              title={rec.title}
              description={rec.description}
              imageUrl={rec.imageUrl}
              altText={rec.altText}
              item={rec.item || {} as LinkItem}
            />
          ))}
        </div>

        <div className="max-container m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-10">
          {recommendation.slice(2, 4).map((rec) => (
            <CardComponent
              key={rec.id}
              id={rec.id}
              title={rec.title}
              description={rec.description}
              imageUrl={rec.imageUrl}
              altText={rec.altText}
              item={rec.item || {} as LinkItem}
            />
          ))}
        </div>

        <div className="max-container m-auto grid grid-cols-1 gap-10 mt-10">
          {recommendation.slice(4).map((rec) => (
            <CardComponent
              key={rec.id}
              id={rec.id}
              title={rec.title}
              description={rec.description}
              imageUrl={rec.imageUrl}
              altText={rec.altText}
              item={rec.item || {} as LinkItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};