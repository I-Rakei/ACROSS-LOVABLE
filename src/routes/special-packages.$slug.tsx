import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarDays,
  faCircleCheck,
  faCircleXmark,
  faHotel,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { ImageWithSpinner } from "@/components/image-with-spinner";
import { PackageInquiryForm } from "@/components/package-inquiry-form";
import { getSpecialPackageBySlug } from "@/data/special-packages";

export const Route = createFileRoute("/special-packages/$slug")({
  loader: ({ params }) => {
    const pkg = getSpecialPackageBySlug(params.slug);
    if (!pkg) throw notFound();
    return pkg;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title.en} — AcrossTours DMC`;
    const canonicalUrl = `https://acrosstour.com/special-packages/${params.slug}`;

    const tripJsonLd = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: loaderData.title.en,
      description: loaderData.description.en,
      image: [loaderData.heroImg, ...loaderData.gallery],
      touristType: "Couples",
      provider: {
        "@type": "TravelAgency",
        name: "AcrossTours DMC",
        url: "https://acrosstour.com",
      },
      itinerary: {
        "@type": "ItemList",
        itemListElement: loaderData.itinerary.map((day, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: day.title.en,
        })),
      },
      offers: {
        "@type": "Offer",
        url: canonicalUrl,
        priceCurrency: loaderData.currency,
        price: loaderData.pricePerPerson.replace(/\./g, "").replace(",", "."),
        availability: "https://schema.org/InStock",
        validFrom: "2026-08-07",
      },
    };

    const breadcrumbJsonLd = {
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
        { "@type": "ListItem", position: 3, name: loaderData.title.en, item: canonicalUrl },
      ],
    };

    return {
      meta: [
        { title },
        { name: "description", content: loaderData.tagline.en },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.tagline.en },
        { property: "og:image", content: loaderData.heroImg },
        { property: "og:url", content: canonicalUrl },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(tripJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
      ],
    };
  },
  component: SpecialPackageProfile,
});

function SpecialPackageProfile() {
  const pkg = Route.useLoaderData();
  const { t, lang } = useLanguage();
  const heroSlides = [pkg.heroImg, ...pkg.gallery];
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    setSlideIdx(0);
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pkg.slug]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <div className="relative pt-40 pb-16 bg-background text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIdx}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithSpinner
              src={heroSlides[slideIdx]}
              alt={pkg.title[lang]}
              loading="eager"
              decoding="async"
              containerClassName="absolute inset-0"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative container-x">
          <Link
            to="/special-packages"
            className="flex w-fit items-center gap-2 text-sm text-white hover:text-white/80 transition-colors mb-6"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            {t("Back to Special Packages", "Voltar aos Pacotes Especiais")}
          </Link>
          <span className="inline-block bg-white/95 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            {pkg.badge[lang]}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-3xl">
            {pkg.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white leading-relaxed font-medium">
            {pkg.tagline[lang]}
          </p>
        </div>
      </div>

      {/* Gallery thumbnails — click to preview in the hero above */}
      <section className="py-10 bg-background">
        <div className="container-x">
          <Reveal variant="slide">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide + i}
                  onClick={() => setSlideIdx(i)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
                    i === slideIdx
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`${t("View photo", "Ver foto")} ${i + 1}`}
                  aria-current={i === slideIdx}
                >
                  <ImageWithSpinner
                    src={slide}
                    alt={`${pkg.title[lang]} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <Reveal variant="slide">
              <h2 className="text-2xl font-bold text-ink mb-4">{t("Overview", "Visão Geral")}</h2>
              <p className="text-base text-ink-soft leading-relaxed">{pkg.description[lang]}</p>
            </Reveal>

            <Reveal variant="slide" delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-ink mb-3">{t("Includes", "Inclui")}</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions[lang].map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm text-ink-soft">
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-3">{t("Excludes", "Exclui")}</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions[lang].map((exc) => (
                      <li key={exc} className="flex items-start gap-2 text-sm text-ink-soft">
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          className="w-4 h-4 text-ink-soft/60 mt-0.5 flex-shrink-0"
                        />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="slide" delay={0.2}>
              <div className="bg-secondary/20 border border-border/60 rounded-xl p-5">
                <p className="text-xs text-ink-soft leading-relaxed">
                  <strong className="text-ink">{t("Important:", "Importante:")}</strong>{" "}
                  {pkg.important[lang]}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Reveal variant="slide" delay={0.1}>
              <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 lg:sticky lg:top-28">
                <div className="space-y-4 mb-6 pb-6 border-b border-border/60">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faHotel}
                      className="w-4 h-4 text-accent mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="text-sm font-bold text-ink">{pkg.property[lang]}</div>
                      <div className="text-xs text-ink-soft">{pkg.location[lang]}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="w-4 h-4 text-accent mt-1 flex-shrink-0"
                    />
                    <div>
                      <div className="text-sm font-bold text-ink">{pkg.duration[lang]}</div>
                      <div className="text-xs text-ink-soft">
                        {t("Valid", "Válido")}: {pkg.validity[lang]}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faUtensils}
                      className="w-4 h-4 text-accent mt-1 flex-shrink-0"
                    />
                    <div className="text-sm font-bold text-ink">{pkg.mealPlan[lang]}</div>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-border/60">
                  <div className="text-[10px] uppercase tracking-wider text-ink-soft font-bold mb-1">
                    {t("From, per person sharing", "Desde, por pessoa em partilha")}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold text-accent">{pkg.pricePerPerson}</span>
                    <span className="text-base font-semibold text-accent">{pkg.currency}</span>
                  </div>
                  <div className="text-xs text-ink-soft mt-1">
                    {pkg.duration[lang]} ·{" "}
                    {t("Flights subject to availability", "Voos sujeitos a disponibilidade")}
                  </div>
                </div>

                <a
                  href="#inquire"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-lg text-sm tracking-wider uppercase transition-colors text-center block"
                >
                  {t("Inquire Now", "Pedir Informações")}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Package-specific inquiry form */}
      <section id="inquire" className="py-10 bg-background">
        <div className="container-x max-w-3xl">
          <Reveal variant="slide">
            <div className="mb-8">
              <div className="eyebrow mb-4">
                {t("Bookings & Inquiries", "Reservas & Informações")}
              </div>
              <h2 className="text-3xl font-semibold mb-3">
                {t("Inquire About This Package", "Pedir Informações Sobre Este Pacote")}
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                {t(
                  `Tell us your dates and details and we'll get back to you about the ${pkg.title.en}.`,
                  `Indique-nos as datas e detalhes e entraremos em contacto sobre o ${pkg.title.pt}.`,
                )}
              </p>
            </div>
          </Reveal>
          <Reveal variant="slide" delay={0.1}>
            <PackageInquiryForm packageName={pkg.title.en} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
