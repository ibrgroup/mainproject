import Link from "next/link";
import { ROUTES } from "@/constants";
import MainLayout from "@/components/shared/main-layout";

export const metadata = {
  title: "Оформление заказа",
  description:
    "Оформление заказа в IBR MARKET. Выгодные покупки в рассрочку без процентов.",
};

export default function CheckoutPage() {
  return (
    <MainLayout>
      <div className="max-container m-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Оформление заказа
        </h1>
        <p className="text-gray-600 mb-8">
          Раздел в разработке. Пока вы можете выбрать товары в маркетплейсе.
        </p>
        <Link
          href={ROUTES.ibrmarket}
          className="rounded-2xl bg-tiffany px-8 py-4 text-sm font-bold text-white hover:bg-[#57cfcbef]"
        >
          Перейти в маркетплейс
        </Link>
      </div>
    </MainLayout>
  );
}
