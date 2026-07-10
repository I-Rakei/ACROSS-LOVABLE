import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, pt: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with "en" so SSR and first client render match.
  const [lang, setLangState] = useState<Language>("en");

  // After hydration, read the user's saved preference from localStorage.
  useEffect(() => {
    const saved = localStorage.getItem("across_lang");
    if (saved === "pt") {
      setLangState("pt");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("across_lang", newLang);
  };

  const t = (en: string, pt: string) => {
    return lang === "en" ? en : pt;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
