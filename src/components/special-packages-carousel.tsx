import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import { ImageWithSpinner } from "@/components/image-with-spinner";
import { specialPackages } from "@/data/special-packages";

export function SpecialPackagesCarousel({
  lang,
  t,
}: {
  lang: "en" | "pt";
  t: (en: string, pt: string) => string;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % specialPackages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = specialPackages[idx];

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <ImageWithSpinner
            src={active.heroImg}
            alt={active.title[lang]}
            loading="eager"
            decoding="async"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center px-5 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="max-w-sm bg-brand-blue/90 backdrop-blur-sm rounded-xl p-6 sm:p-7 text-white"
          >
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-2">
              {active.badge[lang]}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-2">{active.title[lang]}</h2>
            <p className="text-sm text-white/85 leading-relaxed mb-5 line-clamp-2">{active.tagline[lang]}</p>
            <Link
              to="/special-packages/$slug"
              params={{ slug: active.slug }}
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-white/90 transition"
            >
              {t("See More", "Ver Mais")}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {specialPackages.map((pkg, i) => (
          <button
            key={pkg.slug}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
