import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IBR | Инвестиции",
  description:
    "IBR Invest — халяльные инвестиции по договору мудараба. Ожидаемая доходность до 16% годовых, сумма от 100 000 ₽, срок от 3 месяцев. Без процентов, в соответствии с нормами шариата.",
  openGraph: {
    title: "IBR | Инвестиции — партнёрство в прибыли по нормам шариата",
    description:
      "Договор мудараба, ожидаемая доходность до 16% годовых, от 100 000 ₽.",
    url: "/ibr-invest",
    type: "website",
  },
};

export default function IbrInvestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
