import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/components/language-provider";
import { AcrossLogo } from "@/components/across-logo";

const NAV = [
  { label: "Home", to: "/", hash: "top" },
  { label: "About Us", to: "/", hash: "about" },
  { label: "Products & Services", to: "/", hash: "services" },
  { label: "Activities", to: "/", hash: "activities" },
  { label: "Special Packages", to: "/packages" },
  { label: "Contact Us", to: "/", hash: "contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "pt-0 bg-background/90 backdrop-blur border-b border-border"
          : "pt-4 bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20 relative">
        <Link to="/" className="flex items-center group z-10">
          <AcrossLogo
            className={`h-14 w-auto transition duration-300 ${
              scrolled ? "text-brand-blue" : "text-white"
            }`}
            idle={false}
            hoverable={false}
            entrance="none"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              {n.label === "Home" ? (lang === "en" ? "Home" : "Início") :
               n.label === "About Us" ? (lang === "en" ? "About Us" : "Sobre Nós") :
               n.label === "Products & Services" ? (lang === "en" ? "Products & Services" : "Produtos & Serviços") :
               n.label === "Activities" ? (lang === "en" ? "Activities" : "Actividades") :
               n.label === "Special Packages" ? (lang === "en" ? "Special Packages" : "Pacotes Especiais") :
               n.label === "Contact Us" ? (lang === "en" ? "Contact Us" : "Contacte-nos") : n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 z-10">
          {/* Language Selector toggles */}
          <div className="flex items-center gap-1.5 border-r border-border/20 pr-4">
            <button
              onClick={() => setLang("en")}
              className={`text-xs font-bold transition px-2 py-1 rounded ${
                lang === "en"
                  ? scrolled
                    ? "bg-accent text-white"
                    : "bg-white text-ink"
                  : scrolled
                    ? "text-ink-soft hover:text-ink"
                    : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`text-xs font-bold transition px-2 py-1 rounded ${
                lang === "pt"
                  ? scrolled
                    ? "bg-accent text-white"
                    : "bg-white text-ink"
                  : scrolled
                    ? "text-ink-soft hover:text-ink"
                    : "text-white/60 hover:text-white"
              }`}
            >
              PT
            </button>
          </div>

          <a
            href="#portal"
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "text-foreground hover:text-accent"
                : "text-white/90 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
            <span>Portal</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 z-10 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <FontAwesomeIcon icon={faXmark} className="w-5 h-5" /> : <FontAwesomeIcon icon={faBars} className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-x py-4 flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground font-medium border-b border-border"
              >
                {n.label === "Home" ? (lang === "en" ? "Home" : "Início") :
                 n.label === "About Us" ? (lang === "en" ? "About Us" : "Sobre Nós") :
                 n.label === "Products & Services" ? (lang === "en" ? "Products & Services" : "Produtos & Serviços") :
                 n.label === "Activities" ? (lang === "en" ? "Activities" : "Actividades") :
                 n.label === "Special Packages" ? (lang === "en" ? "Special Packages" : "Pacotes Especiais") :
                 n.label === "Contact Us" ? (lang === "en" ? "Contact Us" : "Contacte-nos") : n.label}
              </Link>
            ))}
            
            {/* Mobile language switch */}
            <div className="flex items-center gap-3 py-4 border-b border-border">
              <span className="text-xs uppercase tracking-wider font-bold text-ink-soft">Language / Idioma:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => { setLang("en"); setOpen(false); }}
                  className={`text-xs font-bold px-3 py-1.5 rounded border ${
                    lang === "en" ? "bg-accent text-white border-accent" : "border-border text-ink-soft"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLang("pt"); setOpen(false); }}
                  className={`text-xs font-bold px-3 py-1.5 rounded border ${
                    lang === "pt" ? "bg-accent text-white border-accent" : "border-border text-ink-soft"
                  }`}
                >
                  Português
                </button>
              </div>
            </div>

            <a
              href="#portal"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center gap-2 text-foreground px-5 py-3 font-semibold hover:bg-muted transition"
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              Portal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
