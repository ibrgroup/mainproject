'use client';

import React, { useState } from 'react';
import { ContributionAmountInput } from './contribution-amount-input';
import { ContributionMonthSelect } from './contribution-month-select';
import { ContributionResultDisplay } from './contribution-result-display';
import { ContributionForm } from './сontribution-form';
import { ParagraphSize } from './paragraph';
import { INVEST_MIN_AMOUNT, INVEST_RATE } from '@/constants/index';

const MONTH_LABELS: Record<number, string> = {
	3: '3 месяца',
	6: '6 месяцев',
	9: '9 месяцев',
	12: '1 год',
	24: '2 года',
	36: '3 года',
};

export const InvestCalculator: React.FC = () => {
	const [count, setCount] = useState<number>(500000);
	const [countInput, setCountInput] = useState<string>('');
	const [month, setMonth] = useState<number>(12);

	const amount = Math.max(count, INVEST_MIN_AMOUNT);
	const profit = Math.round((amount * INVEST_RATE * month) / 12);
	const result = amount + profit;

	return (
		<section className="max-container m-auto px-4 md:px-0">
			<div id="InvestCalculator" className="scroll-mt-10" />
			<div className="w-full h-full mt-10 px-4 lg:px-14 py-5 lg:py-10 rounded-4xl bg-gray-100">
				<ParagraphSize
					className="lg:text-3xl font-sans text-center text-gray-800 md:text-2xl text-xl font-bold py-5"
					text="Рассчитайте ожидаемый доход"
					size="lg"
				/>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 justify-center">
					<div className="bg-white p-5 lg:p-10 rounded-3xl">
						<ContributionAmountInput
							count={count}
							setCount={setCount}
							countInput={countInput}
							setCountInput={setCountInput}
							onChange={setCount}
						/>
						<ContributionMonthSelect month={month} setMonth={setMonth} onChange={setMonth} />
						<p className="text-xs mt-5 text-gray-800">
							Расчёт ориентировочный. Доходность не гарантируется: фактическая прибыль по договору
							мудараба зависит от результатов деятельности компании и распределяется в согласованной
							пропорции.
						</p>
					</div>

					<div>
						<ContributionResultDisplay result={result} profit={profit} rate={INVEST_RATE} />
						<ContributionForm amount={amount} term={MONTH_LABELS[month] ?? `${month} мес.`} />
					</div>
				</div>
			</div>
		</section>
	);
};
