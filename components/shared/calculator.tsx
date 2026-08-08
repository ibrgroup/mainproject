'use client';

import React, { useState, useEffect } from 'react';

import { CreditAmountInput } from './credit-amount-Input';
import { MonthSelect } from './month-select';
import { TariffSelect } from './tariff-select';
import { ResultDisplay } from './result-display';
import CreditForm from './credit-form';

interface CalculatorProps {
	className?: string;
	title: string;
}

export const Calculator: React.FC<CalculatorProps> = ({ title }) => {
	const [count, setCount] = useState<number>(10000);
	const [month, setMonth] = useState<number>(3);
	const [firstPayment, setFirstPayment] = useState<number>(0);
	const [monthPayment, setMonthPayment] = useState<number>(0);
	const [markUp, setMarkUp] = useState<number>(0);
	const [result, setResult] = useState<number>(0);
	const [discount, setDiscount] = useState<number>(0.028);
	const [countInput, setCountInput] = useState<number>(count);

	const calculateAll = (newCount: number, newMonth: number, newDiscount: number) => {
		let first = Math.round(newCount * 0.3);
		first = Math.ceil(first / 100) * 100;

		const markUpPayment = Math.round(newDiscount * newMonth * newCount);
		let totalPayment = Math.ceil((newCount + markUpPayment) / 100) * 100;

		const sumLeft = totalPayment - first;
		const paymentPerMonth = Math.ceil(sumLeft / newMonth / 100) * 100;

		totalPayment = paymentPerMonth * newMonth + first;
		const markUpPaymentCorrected = totalPayment - newCount;

		setFirstPayment(first);
		setMarkUp(markUpPaymentCorrected);
		setResult(totalPayment);
		setMonthPayment(paymentPerMonth);
	};

	useEffect(() => {
		calculateAll(count, month, discount);
	}, [count, month, discount]);

	return (
		<section className="max-container m-auto">
			<div className="w-full h-full mt-10 px-4 lg:px-14 lg:py-10 rounded-4xl bg-gray-100">
				<h1 className="lg:text-3xl font-sans text-center text-gray-800 md:text-2xl text-xl font-bold py-5 ">
					{title}
				</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap lg:gap-10 justify-center">
					<div className="bg-white p-5 lg:p-10 rounded-3xl">
						<CreditAmountInput
							count={count}
							setCount={setCount}
							countInput={countInput}
							setCountInput={setCountInput}
							onChange={(value) => calculateAll(value, month, discount)}
						/>
						<MonthSelect
							month={month}
							setMonth={setMonth}
							onChange={(value) => calculateAll(count, value, discount)}
						/>
						<TariffSelect
							discount={discount}
							setDiscount={setDiscount}
							onChange={(value) => calculateAll(count, month, value)}
						/>

						<p className="text-xs mt-5 text-gray-800">
							Наценка за рассрочку рассчитывается индивидуально, исходя из суммы покупки, выбранного
							тарифа и срока рассрочки
						</p>
					</div>

					<div>
						<ResultDisplay
							result={result}
							monthPayment={monthPayment}
							firstPayment={firstPayment}
							markUp={markUp}
							discount={discount}
						/>
						<CreditForm />
					</div>
				</div>
			</div>
		</section>
	);
};
