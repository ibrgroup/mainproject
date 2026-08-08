'use client';

import React, { memo } from 'react';
import { ParagraphSize } from './paragraph';
import { Button } from '@heroui/react';

const IbrMarket: React.FC = () => {
	return (
		<section className="bg-cyan-blue rounded-b-4xl">
			<div className="max-container m-auto relative isolate overflow-hidden pt-16 lg:flex lg:gap-x-20 lg:pt-0">
				<svg
					viewBox="0 0 1024 1024"
					aria-hidden="true"
					className="absolute left-1/2 top-1/3 md:top-1/2 -z-10 size-[64rem] -translate-y-1/3 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
					<circle r="512" cx="512" cy="512" fill="#40E0D0" fillOpacity="0.7" />
				</svg>
				<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<ParagraphSize
						className="text-white font-bold font-sans lg:text-6xl"
						text="Проверенный выбор"
						size="xl"
					/>
					<p className="mt-5 text-white">
						Откройте для себя ibrmarket – ваш идеальный выбор для умных покупок онлайн
					</p>
					<div className="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
						<Button
							as="a"
							href="https://ibr-market.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-2xl h-14 bg-tiffany px-8 py-5 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							Приобрести
						</Button>
					</div>
				</div>
				<div className="mt-16 m-auto md:w-[500px] object-cover lg:mt-8">
					<img
						className="object-cover"
						src="/ibrmarket.webp"
						alt="close"
						width={500}
						height={500}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export const MainIbrMarket = memo(IbrMarket);
