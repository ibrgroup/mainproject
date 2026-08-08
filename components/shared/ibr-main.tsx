'use client';
import React from 'react';
import { ParagraphSize } from './paragraph';
import Link from 'next/link';
import { Button } from '@heroui/react';

const IbrMain: React.FC = () => {
	return (
		<section className="bg-cyan-blue rounded-b-4xl">
			<div className="max-container px-4 md:px-0 m-auto relative isolate overflow-hidden pt-16 lg:flex lg:gap-x-20 lg:pt-0">
				<svg
					viewBox="0 0 1024 1024"
					aria-hidden="true"
					className="absolute left-1/2 top-1/3 md:top-1/2 -z-10 size-[64rem] -translate-y-1/3 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
					<circle r="512" cx="512" cy="512" fill="#40E0D0" fillOpacity="0.7" />
				</svg>
				<div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<ParagraphSize
						className="text-white text-balancetext-4xl font-sans font-bold tracking-tight text-4xl lg:text-6xl"
						text="IBR GROUP"
						size="xl"
					/>
					<p className="py-5 mb-5 max-w-lg text-white">
						Быстро решают ваши финансовые вопросы в соответствии с нормами шариата
					</p>

					<Button
						as={Link}
						href="/installment"
						className="w-fit h-14 rounded-2xl bg-tiffany px-8 py-5 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
						Рассчитать выгоду
					</Button>
				</div>
				<div className="mt-16 lg:mt-8">
					<img
						alt="Изображение бизнес-мурабаха"
						src="/ibr-group.webp"
						width="700"
						height="700"
						decoding="async"
						fetchPriority="high"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export default React.memo(IbrMain);
