import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

// Определяем интерфейс для элементов ссылок контакта
interface LinkItem {
	label: string;
	value: string;
}

const Footer = () => {
	return (
		<footer className="text-gray-500 text-base bg-gray-100">
			<div className="padding-container py-20 max-container p-4 m-auto flex w-full flex-col gap-14">
				<div className="flex flex-col items-start justify-center gap-10 md:flex-row">
					<div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 text-left text-[15px] [text-wrap:balance] text-gray-800">
						{FOOTER_LINKS.map((section) => (
							<FooterColumn key={section.title} title={section.title}>
								<ul className="regular-14 flex flex-col font-bold gap-4 text-pretty text-gray-800">
									{section.links.map((item, index) => (
										<li key={`${section.title}-${index}`}>
											<Link href={item.link}>{item.label}</Link>
										</li>
									))}
								</ul>
							</FooterColumn>
						))}

						<div className="flex flex-col gap-5">
							<FooterColumn title={FOOTER_CONTACT_INFO.title} key={FOOTER_CONTACT_INFO.title}>
								{FOOTER_CONTACT_INFO.links.map((link: LinkItem) => (
									<div key={link.label} className="flex gap-4 md:flex-col font-bold lg:flex-row">
										<p className="text-pretty font-bold text-gray-800 ">{link.label}:</p>
										<p className="text-pretty font-bold text-gray-800 ">{link.value}</p>
									</div>
								))}
							</FooterColumn>
						</div>

						<a
							download
							className="flex items-center gap-1 bg-gray-200 px-5 h-16 rounded-xl text-gray-800 text-base font-bold"
							href="/Оферта IBR Group.pdf">
							<BsFillFileEarmarkPdfFill size={28} className="text-red-700" />
							Оферта IBR Group
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

type FooterColumnProps = {
	title: string;
	children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className="bold-18 whitespace-nowrap font-bold text-pretty text-gray-800 ">{title}</h4>
			{children}
		</div>
	);
};

export default Footer;
