import { SITE_URL, SITE_NAME } from "@/lib/site-config";

/**
 * JSON-LD разметка Organization для поисковиков (Google, Yandex).
 * Подставляйте реальные данные при публикации.
 */
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.webp`,
    description:
      "Исламская рассрочка без процентов, маркетплейс, партнёрство и финансовые услуги в соответствии с нормами шариата.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-993-171-29-90",
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: "Russian",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * JSON-LD WebSite для главной страницы (поисковая выдача, sitelinks).
 */
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "IBR-GROUP — исламская рассрочка, маркетплейс IBR-MARKET и финансовые услуги по нормам шариата.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/ibrmarket?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
