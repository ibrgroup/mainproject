/**
 * Маршрутизация через next/navigation (App Router).
 *
 * — useRouter(): programmatic navigation (push, replace, back, forward).
 * — useParams(): параметры динамического сегмента, например [id], [slug].
 *
 * Пример в клиентском компоненте на странице app/ibrmarket/[id]/page.tsx:
 *
 *   "use client";
 *   import { useParams, useRouter } from "next/navigation";
 *
 *   export default function ProductPage() {
 *     const params = useParams();
 *     const router = useRouter();
 *     const id = params.id as string;
 *
 *     const goBack = () => router.back();
 *     const goToMarket = () => router.push("/ibrmarket");
 *     return <div>Product {id}</div>;
 *   }
 */

export { useParams, useRouter, usePathname } from "next/navigation";
