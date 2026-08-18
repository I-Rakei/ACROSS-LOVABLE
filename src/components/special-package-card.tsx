import { Link } from "@tanstack/react-router";

import { ImageWithSpinner } from "@/components/image-with-spinner";
import type { SpecialPackageType } from "@/data/special-packages";

export function SpecialPackageCard({
  pkg,
  lang,
  t,
}: {
  pkg: SpecialPackageType;
  lang: "en" | "pt";
  t: (en: string, pt: string) => string;
}) {
  return (
    <article className="bg-card hover-lift h-full flex flex-col rounded-2xl overflow-hidden">
      <Link to="/special-packages/$slug" params={{ slug: pkg.slug }} className="block aspect-[16/10] overflow-hidden relative group">
        <ImageWithSpinner
          src={pkg.heroImg}
          alt={pkg.title[lang]}
          loading="lazy"
          decoding="async"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/95 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
          {pkg.badge[lang]}
        </span>
      </Link>
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <Link to="/special-packages/$slug" params={{ slug: pkg.slug }}>
          <h3 className="text-2xl font-bold text-ink mb-2 hover:text-accent transition-colors">{pkg.title[lang]}</h3>
        </Link>
        <p className="text-sm text-ink-soft leading-relaxed mb-5 line-clamp-2">{pkg.tagline[lang]}</p>

        <div className="flex flex-wrap items-baseline gap-1.5 mb-6 flex-1">
          <span className="text-[10px] uppercase tracking-wider text-ink-soft font-bold">
            {lang === "en" ? "From" : "Desde"}
          </span>
          <span className="text-xl font-bold text-accent">{pkg.pricePerPerson}</span>
          <span className="text-sm font-semibold text-accent">{pkg.currency}</span>
          <span className="text-xs text-ink-soft">{t("/ person sharing", "/ pessoa em partilha")}</span>
        </div>

        <Link
          to="/special-packages/$slug"
          params={{ slug: pkg.slug }}
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-lg text-sm tracking-wider uppercase transition-colors text-center"
        >
          {t("View Package", "Ver Pacote")}
        </Link>
      </div>
    </article>
  );
}
