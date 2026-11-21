import React, { ReactNode } from 'react';
import Image from 'next/image';
import { investFeatures } from '@/constants/index';
import { ParagraphSize } from './paragraph';
import ContributionConditions from './contribution-conditions';
import ScrollToTop from './scroll-top';
import CookieConsent from './сookie-сonsent';

interface Feature {
	title: string;
	description: string;
	icon?: ReactNode;
}

const FeatureCard: React.FC<Feature> = React.memo(({ title, description, icon }) => (
	<article className="bg-gray-700 relative overflow-hidden h-[200px] rounded-4xl p-8 w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-md">
		<h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
		<p className="text-white">{description}</p>
		<div className="absolute text-white text-2xl p-4 rounded-2xl bg-gray-100 bottom-5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 shadow-md">
			{icon}
		</div>
	</article>
));
FeatureCard.displayName = 'FeatureCard';

const IbrInvestHero: React.FC = () => {
	return (
		<section className="bg-cyan-blue relative rounded-b-4xl px-4">
			<div className="max-container m-auto relative isolate overflow-hidden pt-16 lg:flex lg:items-center lg:gap-x-20 lg:pt-0">
				<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
					<ParagraphSize
						className="text-white font-bold font-sans lg:text-6xl"
						text="IBR Invest — халяльные инвестиции"
						size="xl"
					/>
					<p className="mt-5 text-white">
						Инвестируйте в реальную торговлю по договору мудараба и получайте долю прибыли без
						процентов — в соответствии с нормами шариата
					</p>
					<a
						href="#InvestCalculator"
						className="inline-flex items-center mt-5 rounded-2xl h-14 bg-tiffany px-8 text-sm font-bold text-white active:bg-[#5dc9c5da] shadow-sm hover:bg-[#57cfcbef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
						Рассчитать доход
					</a>
				</div>

				<div className="mt-10 lg:mt-0 lg:pb-32">
					<Image
						className="object-cover m-auto max-w-sm w-full lg:max-w-md"
						src="/invest.webp"
						alt="Доходность до 21% годовых"
						width={800}
						height={800}
						priority
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 max-container m-auto lg:mt-[-6rem] py-6">
				{investFeatures.map((feature: Feature) => (
					<FeatureCard key={feature.title} {...feature} />
				))}
			</div>
		</section>
	);
};

const IbrInvestMain: React.FC = () => (
	<>
		<IbrInvestHero />
		<ContributionConditions />
		<CookieConsent />
		<ScrollToTop />
	</>
);

export default IbrInvestMain;
