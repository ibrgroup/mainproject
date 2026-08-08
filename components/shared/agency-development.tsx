'use client';
import React from 'react';
import { ParagraphSize } from './paragraph';
import { Button } from '@heroui/react';

const AgencyDevelopment: React.FC = () => {
	return (
		<section className="bg-cyan-blue relative rounded-b-4xl">
			<div className="max-container m-auto relative isolate overflow-hidden pt-16 lg:flex lg:gap-x-20 lg:pt-0">
				<svg
					viewBox="0 0 1024 1024"
					aria-hidden="true"
					className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
					<circle r="512" cx="512" cy="512" fill="#40E0D0" fillOpacity="0.7" />
				</svg>
				<div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<ParagraphSize
						className="text-white text-balancetext-4xl font-sans font-bold tracking-tight text-4xl lg:text-6xl"
						text="IT & Digital"
						size="xl"
					/>
					<p className="py-5 max-w-lg text-white">
						Мы создаем инновационные цифровые решения, которые помогают бизнесам достигать новых
						высот
					</p>
					<div className="flex w-full items-center gap-3">
						<Button
							as="a"
							href="#FreeConsultation"
							className="w-full rounded-2xl bg-tiffany mb-5 px-8 py-7 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							Подать заявку
						</Button>

						<Button
							as="a"
							href="https://t.me/ibrgroup_web_dev"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full rounded-2xl border border-white mb-5 px-8 py-7 text-sm font-bold text-white  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							<img
								className="w-5 hidden md:block"
								src="/telegram.png"
								alt="telegram"
								width={20}
								height={20}
							/>
							Перейти<span className="hidden md:block">в Telegram</span>{' '}
							<img
								className="w-5 black md:hidden"
								src="/telegram.png"
								alt="telegram"
								width={20}
								height={20}
							/>
						</Button>
					</div>
				</div>
				<div className="mt-16 lg:mt-8">
					<img
						className="object-cover m-auto"
						src="/IT_Digital.webp"
						alt="Изображение бизнес-мурабаха"
						width={590}
						height={600}
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
};

export default React.memo(AgencyDevelopment);
