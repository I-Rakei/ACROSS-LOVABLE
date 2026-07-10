import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const NAV = [
  { label: "Home", to: "/", hash: "top" },
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Activities", to: "/", hash: "activities" },
  { label: "Packages", to: "/packages" },
  { label: "Contact", to: "/", hash: "contact" },
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
          <img
            src="/logos/across-tour.svg"
            alt="Across Tour DMC"
            className={`h-14 w-auto transition ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className={`px-4 py-2 text-base font-medium transition ${
                scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              {n.label === "Home" ? (lang === "en" ? "Home" : "Início") :
               n.label === "About" ? (lang === "en" ? "About" : "Sobre Nós") :
               n.label === "Services" ? (lang === "en" ? "Services" : "Serviços") :
               n.label === "Activities" ? (lang === "en" ? "Activities" : "Actividades") :
               n.label === "Packages" ? (lang === "en" ? "Packages" : "Pacotes") :
               n.label === "Contact" ? (lang === "en" ? "Contact" : "Contacto") : n.label}
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
            className={`inline-flex items-center gap-2 px-4 py-2 text-base font-semibold transition-all duration-300 ${
              scrolled
                ? "text-foreground hover:text-accent"
                : "text-white/90 hover:text-white"
            }`}
          >
            <User className="w-4 h-4" />
            <span>Portal</span>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 z-10 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
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
                 n.label === "About" ? (lang === "en" ? "About" : "Sobre Nós") :
                 n.label === "Services" ? (lang === "en" ? "Services" : "Serviços") :
                 n.label === "Activities" ? (lang === "en" ? "Activities" : "Actividades") :
                 n.label === "Packages" ? (lang === "en" ? "Packages" : "Pacotes") :
                 n.label === "Contact" ? (lang === "en" ? "Contact" : "Contacto") : n.label}
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
              <User className="w-4 h-4" />
              Portal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
