'use client';
import Link from 'next/link';
import React from 'react';
import { productfinancing, content, ROUTES } from '@/constants/index';
import { ParagraphSize } from './paragraph';
import { Button } from '@heroui/react';

const ProductFinancing: React.FC = () => {
	return (
		<section className="bg-cyan-blue mt-10 md:mt-20 py-10 md:py-20 rounded-t-4xl md:rounded-none px-4">
			<div className="max-container m-auto relative">
				<ParagraphSize
					className="text-white font-sans m-auto text-center text-balancetext-4xl font-bold tracking-tight text-4xl lg:text-6xl"
					text="Приобретите товар в рассрочку "
					size="xl"
				/>
				<div className="md:grid md:block hidden grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{productfinancing.map((advantage, index) => (
						<div key={index} className="text-center">
							<img
								src={advantage.imageUrl}
								alt={advantage.title}
								className="mx-auto w-[150px]"
								width={100}
								height={100}
								loading="lazy"
							/>
							<h3 className="text-white font-sans text-balancetext-4xl font-bold tracking-tight text-2xl py-2">
								{advantage.title}
							</h3>
							<p className="text-gray-100">{advantage.description}</p>
						</div>
					))}
				</div>

				<div className="bg-gray-700 flex flex-col lg:flex-row items-center relative rounded-4xl w-full bg-clip-padding backdrop-filter mt-10 backdrop-blur-xl bg-opacity-40 shadow-md gap-4 lg:gap-8">
					<img
						src="/format.png"
						alt="Business Time"
						className="rounded-4xl md:block hidden"
						width={450}
						height={450}
						loading="lazy"
					/>
					<div className="flex-1 p-8">
						<h3 className="text-white font-sans text-balancetext-4xl font-bold tracking-tight text-2xl lg:text-3xl py-2">
							{content.title}
						</h3>
						{content.description.map((text, index) => (
							<p key={index} className="py-2 text-gray-100">
								{text}
							</p>
						))}
						<Button
							as={Link}
							href={ROUTES.installment}
							className="rounded-full h-14 w-full md:w-fit bg-tiffany mt-2 px-8 py-4 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							{content.buttonText}
						</Button>
					</div>
					<img
						src="/format.png"
						alt="Business Time"
						className="rounded-4xl block md:hidden"
						width={450}
						height={450}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export default ProductFinancing;
