import { createFileRoute, Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { ImageWithSpinner } from "@/components/image-with-spinner";
import { SpecialPackageCard } from "@/components/special-package-card";
import { specialPackages } from "@/data/special-packages";
import pkgHero from "@/assets/Across/Hero images/hero 4 Packages Page.jpg";

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://acrosstour.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Special Packages",
      item: "https://acrosstour.com/special-packages",
    },
  ],
};

const ITEM_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: specialPackages.map((pkg, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://acrosstour.com/special-packages/${pkg.slug}`,
    name: pkg.title.en,
  })),
};

export const Route = createFileRoute("/special-packages/")({
  head: () => ({
    meta: [
      { title: "Special Packages — AcrossTours DMC" },
      {
        name: "description",
        content:
          "Curated honeymoon, anniversary and beach retreat escapes, ready to be tailored to your dates.",
      },
      { property: "og:title", content: "Special Packages — AcrossTours DMC" },
      {
        property: "og:description",
        content:
          "Curated honeymoon, anniversary and beach retreat escapes, ready to be tailored to your dates.",
      },
      { property: "og:url", content: "https://acrosstour.com/special-packages" },
    ],
    links: [{ rel: "canonical", href: "https://acrosstour.com/special-packages" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(BREADCRUMB_JSON_LD) },
      { type: "application/ld+json", children: JSON.stringify(ITEM_LIST_JSON_LD) },
    ],
  }),
  component: SpecialPackagesIndexPage,
});

function SpecialPackagesIndexPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Mini Hero Banner */}
      <div className="relative pt-40 pb-16 bg-background text-white overflow-hidden">
        <ImageWithSpinner
          src={pkgHero}
          alt="Special Packages Hero"
          loading="eager"
          decoding="async"
          containerClassName="absolute inset-0"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="relative container-x">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors mb-6"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />{" "}
            {t("Back to Home", "Voltar ao Início")}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            {t("Special Packages", "Pacotes Especiais")}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white leading-relaxed font-medium">
            {t(
              "Curated honeymoon, anniversary and beach retreat escapes, ready to be tailored to your dates.",
              "Escapadinhas seleccionadas para lua-de-mel, aniversários e retiros de praia, prontas a ser adaptadas às suas datas.",
            )}
          </p>
        </div>
      </div>

      {/* Full Catalog */}
      <section className="py-16 pb-20 bg-background">
        <div className="container-x">
          <Reveal variant="slide">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-10">
              {t("All Special Packages", "Todos os Pacotes Especiais")}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialPackages.map((pkg, i) => (
              <Reveal variant="slide" key={pkg.slug} delay={i * 0.1}>
                <SpecialPackageCard pkg={pkg} lang={lang} t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
