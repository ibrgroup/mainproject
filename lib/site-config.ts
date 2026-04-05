/**
 * Базовый URL сайта для SEO (metadataBase, canonical, sitemap, Open Graph).
 * В production задайте через NEXT_PUBLIC_SITE_URL или оставьте ibrgroup.ru.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ibrgroup.ru";

export const SITE_NAME = "IBR GROUP";
export const SITE_DEFAULT_TITLE = "IBR GROUP | Исламская рассрочка и финансовые услуги";
export const SITE_DEFAULT_DESCRIPTION =
  "Исламская рассрочка без процентов, маркетплейс IBR MARKET, партнёрство и банковские услуги в соответствии с нормами шариата. Честные условия и прозрачные сделки.";
