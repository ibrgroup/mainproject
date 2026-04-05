import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IBR MARKET | Маркетплейс",
  description:
    "Покупайте электронику, бытовую технику и товары в рассрочку без процентов. Широкий ассортимент, быстрая доставка, соответствие нормам шариата. IBR MARKET — выгодные покупки онлайн.",
  openGraph: {
    title: "IBR MARKET | Маркетплейс — покупки в рассрочку без процентов",
    description:
      "Электроника, техника, товары по выгодным ценам. Исламская рассрочка, доставка по республике.",
    url: "/ibrmarket",
    type: "website",
  },
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
