'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { BlurImage } from './blur-image';

type Card = {
	src: string;
	title: string;
	category: string;
	price: string;
	content: React.ReactNode;
};

export const CardImage = ({ card }: { card: Card; index: number; layout?: boolean }) => {
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				handleClose();
			}
		}

		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open]);

	useOutsideClick(containerRef, () => handleClose());

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<div className="bg-white rounded-4xl p-5">
				<button className="relative z-10 flex h-80 w-[280px]">
					<BlurImage src={card.src} alt={card.title} fill className="object-cover p-14" />
				</button>
				<div className="relative">
					<p className="max-w-xs text-left font-sans text-[16px] font-semibold [text-wrap:balance] text-gray-800">
						{card.title}
					</p>
					<p className="text-gray-800 text-xs font-bold border border-tiffany w-fit px-6 p-1 rounded-full mt-3">
						{card.price} в мес.
					</p>
					<h1 className="text-left font-sans text-2xl md:text-3xl font-medium text-gray-800 mt-3">
						{card.category}
					</h1>
				</div>
			</div>
		</React.Fragment>
	);
};
