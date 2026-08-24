import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article layout="position" className="bg-card hover-lift h-full flex flex-col rounded-2xl overflow-hidden shadow-sm">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithSpinner
          src={pkg.heroImg}
          alt={pkg.title[lang]}
          loading="lazy"
          decoding="async"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-ink-soft mb-3">
            <span className="inline-flex items-center gap-1">
              <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-accent" /> {pkg.location[lang]}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5 text-accent" /> {pkg.duration[lang]}
            </span>
          </div>

          {/* Title */}
          <Link to="/special-packages/$slug" params={{ slug: pkg.slug }}>
            <h3 className="text-xl font-bold text-ink mb-3 line-clamp-1 hover:text-accent transition-colors">{pkg.title[lang]}</h3>
          </Link>

          {/* Description — 5-line clamp + Read more toggle in place */}
          <motion.div layout="size" transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className={`text-sm text-ink-soft leading-relaxed mb-1 ${isExpanded ? "" : "line-clamp-5"}`}>
              {pkg.description[lang]}
            </p>
          </motion.div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-semibold text-accent hover:underline mb-4 inline-block text-left"
          >
            {isExpanded ? t("Read less", "Ler menos") + " ←" : t("Read more", "Ler mais") + " →"}
          </button>

          {/* Price */}
          <div className="flex flex-wrap items-baseline gap-1.5 mb-4 pb-4 border-b border-border/40">
            <span className="text-[10px] uppercase tracking-wider text-ink-soft font-bold">
              {lang === "en" ? "From" : "Desde"}
            </span>
            <span className="text-lg font-bold text-accent">{pkg.pricePerPerson}</span>
            <span className="text-sm font-semibold text-accent">{pkg.currency}</span>
            <span className="text-xs text-ink-soft ml-0.5">
              {t("/ person sharing", "/ pessoa em partilha")}
            </span>
          </div>

          {/* Inclusions summary list */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden mb-5"
              >
                <span className="text-xs uppercase tracking-wider text-ink font-bold block mb-2">
                  {t("Includes:", "Inclui:")}
                </span>
                <ul className="space-y-1.5">
                  {pkg.inclusions[lang].map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-xs text-ink-soft">
                      <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="truncate">{inc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <Link
          to="/special-packages/$slug"
          params={{ slug: pkg.slug }}
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-lg text-sm tracking-wider uppercase transition-colors text-center block"
        >
          {t("View Package", "Ver Pacote")}
        </Link>
      </div>
    </motion.article>
  );
}
