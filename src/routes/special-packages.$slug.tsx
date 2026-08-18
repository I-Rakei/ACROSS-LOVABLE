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
import { getSpecialPackageBySlug } from "@/data/special-packages";

export const Route = createFileRoute("/special-packages/$slug")({
  loader: ({ params }) => {
    const pkg = getSpecialPackageBySlug(params.slug);
    if (!pkg) throw notFound();
    return pkg;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const title = `${loaderData.title.en} — Across Tour DMC`;
    const canonicalUrl = `https://acrosstour.com/special-packages/${params.slug}`;
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
          <p className="mt-4 max-w-2xl text-lg text-white leading-relaxed font-medium">{pkg.tagline[lang]}</p>

          <div className="flex gap-2 mt-8">
            {heroSlides.map((slide, i) => (
              <button
                key={slide + i}
                onClick={() => setSlideIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === slideIdx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

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
                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
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
                        <FontAwesomeIcon icon={faCircleXmark} className="w-4 h-4 text-ink-soft/60 mt-0.5 flex-shrink-0" />
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
                  <strong className="text-ink">{t("Important:", "Importante:")}</strong> {pkg.important[lang]}
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
                    <FontAwesomeIcon icon={faHotel} className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-ink">{pkg.property[lang]}</div>
                      <div className="text-xs text-ink-soft">{pkg.location[lang]}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-ink">{pkg.duration[lang]}</div>
                      <div className="text-xs text-ink-soft">
                        {t("Valid", "Válido")}: {pkg.validity[lang]}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faUtensils} className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div className="text-sm font-bold text-ink">{pkg.mealPlan[lang]}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] uppercase tracking-wider text-ink-soft font-bold mb-1">
                    {t("From, per person sharing", "Desde, por pessoa em partilha")}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold text-accent">{pkg.pricePerPerson}</span>
                    <span className="text-base font-semibold text-accent">{pkg.currency}</span>
                  </div>
                  <div className="text-xs text-ink-soft mt-1">
                    {t("Total for 2", "Total para 2")}: {pkg.priceTotal} {pkg.currency}
                  </div>
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b border-border/60">
                  {pkg.priceBreakdown.map((line) => (
                    <div key={line.label.en} className="flex items-center justify-between text-xs text-ink-soft">
                      <span>{line.label[lang]}</span>
                      <span className="font-semibold text-ink">
                        {line.total} {pkg.currency}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/"
                  hash="contact"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-lg text-sm tracking-wider uppercase transition-colors text-center block"
                >
                  {t("Inquire Now", "Pedir Informações")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
