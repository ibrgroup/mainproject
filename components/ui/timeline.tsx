"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full mt-10 rounded-t-4xl lg:rounded-none"
      ref={containerRef}
    >
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10">
            <div className="sticky flex flex-col z-50 md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-tiffany flex items-center justify-center">
                <div className="h-4 w-4 rounded-full  bg-white p-2" />
              </div>
              <h3 className="hidden md:block text-xl  font-sans md:pl-20 md:text-5xl mt-10 font-bold text-gray-800">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block font-sans text-2xl mb-4 text-left font-bold mt-5 text-tiffany">
                {item.title}
              </h3>

              {Array.isArray(item.content) ? (
                <ul className="list-disc list-inside">
                  {item.content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (

                <>{item.content}</>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: "2200px",
          }}
          className="absolute md:left-8 left-8 bottom-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 :via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 bottom-0  w-[2px] bg-gradient-to-t from-[#3cb4b0] via-[#50e5ff] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
