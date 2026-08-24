import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/components/language-provider";
import { AcrossLogo } from "@/components/across-logo";

type NavLink = {
  label: { en: string; pt: string };
  to: string;
  hash?: string;
};

type NavItem = NavLink & { children?: NavLink[] };

const NAV: NavItem[] = [
  { label: { en: "Home", pt: "Início" }, to: "/", hash: "top" },
  { label: { en: "About Us", pt: "Sobre Nós" }, to: "/", hash: "about" },
  { label: { en: "Products & Services", pt: "Produtos & Serviços" }, to: "/", hash: "services" },
  { label: { en: "Activities", pt: "Actividades" }, to: "/", hash: "activities" },
  { label: { en: "Special Packages", pt: "Pacotes Especiais" }, to: "/special-packages" },
  { label: { en: "Contact Us", pt: "Contacte-nos" }, to: "/", hash: "contact" },
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
          {NAV.map((n) =>
            n.children ? (
              <div key={n.label.en} className="relative group">
                <Link
                  to={n.to}
                  hash={n.hash}
                  className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition inline-flex items-center gap-1.5 ${
                    scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
                  }`}
                >
                  {n.label[lang]}
                  <FontAwesomeIcon icon={faChevronDown} className="w-2.5 h-2.5" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-45">
                    {n.children.map((c) => (
                      <Link
                        key={c.label.en}
                        to={c.to}
                        hash={c.hash}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition whitespace-nowrap"
                      >
                        {c.label[lang]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.label.en}
                to={n.to}
                hash={n.hash}
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                  scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
                }`}
              >
                {n.label[lang]}
              </Link>
            )
          )}
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
            {NAV.map((n) =>
              n.children ? (
                <div key={n.label.en} className="border-b border-border">
                  <span className="block py-3 text-foreground font-medium">{n.label[lang]}</span>
                  <div className="flex flex-col pb-2 pl-4">
                    {n.children.map((c) => (
                      <Link
                        key={c.label.en}
                        to={c.to}
                        hash={c.hash}
                        onClick={() => setOpen(false)}
                        className="py-2.5 text-ink-soft font-medium"
                      >
                        {c.label[lang]}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={n.label.en}
                  to={n.to}
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="py-3 text-foreground font-medium border-b border-border"
                >
                  {n.label[lang]}
                </Link>
              )
            )}
            
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
