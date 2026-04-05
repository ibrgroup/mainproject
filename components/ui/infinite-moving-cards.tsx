import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { ParagraphSize } from "../shared/paragraph";
import { MdOutlineFavorite } from "react-icons/md";

type Item = {
  title: string;
  image: string;
  price: string;
};

type Props = {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<Props> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Клонируем дочерние элементы для бесконечной прокрутки
    [...scrollerRef.current.children].forEach(child => {
      scrollerRef.current?.appendChild(child.cloneNode(true));
    });

    const duration = speed === "fast" ? "10s" : speed === "normal" ? "20s" : "30s";
    const directionValue = direction === "left" ? "forwards" : "reverse";

    containerRef.current.style.setProperty("--animation-duration", duration);
    containerRef.current.style.setProperty("--animation-direction", directionValue);
  }, [direction, speed]);

  return (
    <section
      className={cn(
        "min-h-0 bg-gradient-to-r from-[#684EFF] to-[#57CFBC]",
        "text-white relative overflow-hidden",
        "md:py-20 py-10 rounded-t-5 lg:rounded-t-8",
        className
      )}
    >
      <div
        ref={containerRef}
        className={cn(
          "scroller relative px-4 overflow-hidden",
          "md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          pauseOnHover && "group/hover:animate-pause"
        )}
      >
        <ParagraphSize
          className="text-white text-center font-sans max-w-full m-auto text-balance font-bold tracking-tight text-4xl lg:text-6xl"
          text="Часто покупаемые товары"
          size="xl"
        />

        <ul
          ref={scrollerRef}
          className="flex w-max shrink-0 flex-nowrap gap-8 md:gap-10 py-4 mt-10 animate-scroll"
        >
          {items.map(({ title, image, price }) => (
            <li
              key={title}
              className="relative w-[280px] max-w-full rounded-4xl bg-white"
            >
              <blockquote className="p-8">
                <MdOutlineFavorite
                  className="absolute top-5 right-10 text-red-500"
                  size={30}
                />
                <div className="relative m-auto ">
                  <img
                    src={image}
                    alt={title}
                    style={{ objectFit: "cover" }}
                    className="m-auto p-5 h-[258px]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none mt-10 select-none absolute inset-[-0.5rem] z-[-1]"
                />
                <div className="w-full text-gray-800 max-w-md truncate">{title}</div>
                <div className="flex mt-5 justify-between items-center gap-3">
                  <span className="font-sans text-2xl md:text-3xl font-medium text-gray-800">
                    {price}
                  </span>
                  <div className="bg-purple-500 p-4 rounded-full">
                    <FaCartShopping size={23} />
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};