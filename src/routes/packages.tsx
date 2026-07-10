import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

import pkgMaputo from "@/assets/Across/Special Packages/Maputo City Tour.jpg";
import pkgMafalala from "@/assets/Across/Special Packages/Mafalala Cultural Walking Tour.webp";
import pkgInhaca from "@/assets/Across/Special Packages/Inhaca Island Day Trip.jpg";
import pkgKruger from "@/assets/Across/Special Packages/kruger-national-park-south-africa.jpg";
import pkgPonta from "@/assets/Across/Special Packages/Bilene.jpg";
import pkgEswatini from "@/assets/Across/Special Packages/Eswatini Cultural Day Trip.jpg";
import pkgHero from "@/assets/Across/Hero images/hero 1.jpg";

type PackageSearch = {
  package?: string;
};

export const Route = createFileRoute("/packages")({
  validateSearch: (search: Record<string, unknown>): PackageSearch => {
    return {
      package: (search.package as string) || undefined,
    };
  },
  component: PackagesPage,
});

const packages = [
  {
    title: {
      en: "Maputo City Tour",
      pt: "Passeio pela Cidade de Maputo",
    },
    duration: {
      en: "5 Hours",
      pt: "5 Horas",
    },
    location: {
      en: "Maputo, Mozambique",
      pt: "Maputo, Moçambique",
    },
    desc: {
      en: "Maputo, formerly known as the City of Acacias, is the capital and largest city of Mozambique. With a vibrant cultural scene and striking architecture, this experience provides visitors with a structured insight into the city. Lunch, consisting of piri-piri chicken or seafood, will be served at one of the city's finest coastal restaurants, accompanied by the famous Mozambican 2M beer.",
      pt: "Maputo, anteriormente conhecida como a Cidade das Acácias, é a capital e maior cidade de Moçambique. Com uma cena cultural vibrante e uma arquitectura marcante, esta experiência proporciona aos visitantes uma leitura estruturada da cidade. O almoço, composto por frango piri-piri ou marisco, será servido num dos melhores restaurantes costeiros da cidade, acompanhado pela cerveja moçambicana 2M.",
    },
    img: pkgMaputo,
    inclusions: {
      en: ["Private air-conditioned transport", "English/Portuguese speaking guide", "All entrance fees", "Central market guided walk", "Traditional lunch option"],
      pt: ["Transporte privado com ar condicionado", "Guia fluente em Inglês/Português", "Todas as taxas de entrada", "Caminhada guiada pelo mercado central", "Opção de almoço tradicional"],
    },
    price: {
      en: "$65 per person",
      pt: "$65 por pessoa",
    },
  },
  {
    title: {
      en: "Mafalala Cultural Walking Tour",
      pt: "Caminhada Cultural em Mafalala",
    },
    duration: {
      en: "3 Hours",
      pt: "3 Horas",
    },
    location: {
      en: "Maputo, Mozambique",
      pt: "Maputo, Moçambique",
    },
    desc: {
      en: "The Mafalala tour is a 3-hour visit to one of the oldest, most iconic and historic neighborhoods of Maputo. Led by local guides, this experience tells the story of Maputo's evolution since the colonial period, when the city was still called Lourenço Marques, and contextualizes Mozambique's independence struggle.",
      pt: "O tour Mafalala é uma visita de 3 horas a um dos bairros mais antigos, emblemáticos e históricos da cidade de Maputo. Conduzida por guias locais, esta experiência conta a evolução de Maputo desde o período colonial, quando a cidade ainda se chamava Lourenço Marques, e contextualiza a luta pela independência de Moçambique.",
    },
    img: pkgMafalala,
    inclusions: {
      en: ["Local certified guide", "Mafalala museum entry", "Traditional dance performance", "Bottled water"],
      pt: ["Guia local certificado", "Entrada no museu da Mafalala", "Apresentação de dança tradicional", "Água engarrafada"],
    },
    price: {
      en: "$45 per person",
      pt: "$45 por pessoa",
    },
  },
  {
    title: {
      en: "Santa Maria and Inhaca Island Day Trip",
      pt: "Excursão à Ilha da Inhaca e Santa Maria",
    },
    duration: {
      en: "Full Day",
      pt: "Dia Inteiro",
    },
    location: {
      en: "Inhaca Island, Mozambique",
      pt: "Ilha da Inhaca, Moçambique",
    },
    desc: {
      en: "This full-day excursion takes you to discover two of the most iconic and preserved destinations in the Maputo region, surrounded by the warm waters of the Indian Ocean. Enjoy snorkeling in crystal clear waters, dolphin and whale watching (season dependent), local village visits with traditional crafts, and a beautiful stop at Portuguese Island.",
      pt: "Esta excursão de dia inteiro leva-o a descobrir dois dos destinos mais emblemáticos e preservados da região de Maputo, envoltos pelas águas quentes do Oceano Índico. Desfrute de snorkeling em águas cristalinas, observação de golfinhos e baleias (consoante a época), visitas a aldeias locais com artesanato e paragem na Ilha Portuguesa.",
    },
    img: pkgInhaca,
    inclusions: {
      en: ["Boat cruise transfers", "Marine reserve permits", "Snorkeling equipment rental", "Fresh seafood lunch", "Mineral water & soft drinks"],
      pt: ["Transferes de barco", "Licenças da reserva marinha", "Aluguer de equipamento de snorkeling", "Almoço de marisco fresco", "Água mineral e refrigerantes"],
    },
    price: {
      en: "$180 per person",
      pt: "$180 por pessoa",
    },
  },
  {
    title: {
      en: "Kruger National Park Day Trip",
      pt: "Excursão de um Dia ao Parque Kruger",
    },
    duration: {
      en: "Full Day",
      pt: "Dia Inteiro",
    },
    location: {
      en: "South Africa",
      pt: "África do Sul",
    },
    desc: {
      en: "Known as the home of the Big 5, located just 100 km from Maputo, Kruger National Park is one of the region's most iconic experiences. Our driver will collect you from your Maputo hotel, traveling along the EN1 and through the Ressano Garcia border, where assistance with border formalities is provided. The adventure inside the park lets you observe a diverse ecosystem, flora, fauna, and the Big 5.",
      pt: "Conhecido como o parque dos Big 5, localizado a apenas 100 km da cidade de Maputo, o Parque Nacional Kruger é uma das experiências mais emblemáticas da região. O motorista fará a recolha no hotel em Maputo, seguindo pela EN1 e pela fronteira de Ressano Garcia, onde será prestado apoio em todas as formalidades fronteiriças. A aventura de dia completo dentro do parque permite observar a diversidade do ecossistema.",
    },
    img: pkgKruger,
    inclusions: {
      en: ["Return transport from Maputo", "Professional driver/guide", "Big 5 game drive", "Packed lunch", "Border assistance"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Motorista/guia profissional", "Safári Big 5", "Almoço embalado", "Assistência na fronteira"],
    },
    price: {
      en: "$220 per person",
      pt: "$220 por pessoa",
    },
  },
  {
    title: {
      en: "Ponta D'ouro Day Trip",
      pt: "Excursão de um Dia à Ponta D'ouro",
    },
    duration: {
      en: "Full Day",
      pt: "Dia Inteiro",
    },
    location: {
      en: "Ponta D'ouro, Mozambique",
      pt: "Ponta D'ouro, Moçambique",
    },
    desc: {
      en: "The Ponta Day Trip is designed to offer guests a one-day escape to one of the most sought-after coastal destinations in southern Mozambique. Combining natural landscapes, a relaxed atmosphere, and leisure, this experience offers visitors the chance to enjoy the beauty of Ponta do Ouro, known for its beaches, crystal clear waters, and vibrant atmosphere.",
      pt: "A Ponta Day Trip foi concebida para proporcionar aos hóspedes uma escapada de um dia a um dos destinos costeiros mais procurados da região sul de Moçambique. Combinando paisagens naturais, ambiente descontraído e uma forte componente de lazer, esta experiência oferece aos visitantes a oportunidade de desfrutar da beleza de Ponta do Ouro.",
    },
    img: pkgPonta,
    inclusions: {
      en: ["Return transport from Maputo", "Professional guide", "Beach access & leisure time", "Lunch at local restaurant", "Dolphin spotting opportunity"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Guia profissional", "Acesso à praia e tempo livre", "Almoço em restaurante local", "Oportunidade de avistamento de golfinhos"],
    },
    price: {
      en: "$95 per person",
      pt: "$95 por pessoa",
    },
  },
  {
    title: {
      en: "Eswatini Cultural Day Trip",
      pt: "Excursão Cultural de um Dia a Eswatini",
    },
    duration: {
      en: "Full Day",
      pt: "Dia Inteiro",
    },
    location: {
      en: "Eswatini",
      pt: "Eswatini",
    },
    desc: {
      en: "Explore the best of Eswatini in a full-day cultural tour departing Maputo at dawn and returning in the early evening. The experience starts at Manzini Market and the Mantenga Craft & Lifestyle Centre, ideal for Siswati crafts and jewelry, followed by the Mantenga Cultural Village to discover local history and traditions with a traditional dance performance.",
      pt: "Explore o melhor de eSwatini numa excursão cultural de dia inteiro com saída de Maputo ao amanhecer e regresso ao início da noite. A experiência inicia-se no Manzini Market e no Mantenga Craft & Lifestyle Centre, ideais para contacto com artesanato e joalharia Siswati, seguindo para o Mantenga Cultural Village, onde se descobre a história e tradições locais.",
    },
    img: pkgEswatini,
    inclusions: {
      en: ["Round-trip transport from Maputo", "Professional driver/guide", "Mantenga Village entry fee", "Traditional lunch", "Border assistance"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Motorista/guia profissional", "Entrada na Aldeia de Mantenga", "Almoço tradicional", "Assistência na fronteira"],
    },
    price: {
      en: "$145 per person",
      pt: "$145 por pessoa",
    },
  },
];

interface PackageType {
  title: { en: string; pt: string };
  duration: { en: string; pt: string };
  location: { en: string; pt: string };
  desc: { en: string; pt: string };
  img: string;
  inclusions: { en: string[]; pt: string[] };
  price: { en: string; pt: string };
}

function PackageCard({
  pkg,
  lang,
  handleSelectPackage,
  t,
}: {
  pkg: PackageType;
  lang: "en" | "pt";
  handleSelectPackage: (title: string) => void;
  t: (en: string, pt: string) => string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-card hover-lift h-full flex flex-col rounded-2xl overflow-hidden shadow-sm border border-border/40">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={pkg.img} 
          alt={pkg.title[lang]} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-ink-soft mb-3">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" /> {pkg.location[lang]}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent" /> {pkg.duration[lang]}
            </span>
          </div>
          <h2 className="text-xl font-bold text-ink mb-3 line-clamp-1">{pkg.title[lang]}</h2>
          
          <p className={`text-sm text-ink-soft leading-relaxed mb-1 ${isExpanded ? "" : "line-clamp-5"}`}>
            {pkg.desc[lang]}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-semibold text-accent hover:underline mb-4 inline-block text-left"
          >
            {isExpanded ? t("Read less", "Ler menos") + " ←" : t("Read more", "Ler mais") + " →"}
          </button>
          
          {/* Price displayed in card body */}
          <div className="flex items-baseline gap-2 mb-5 pb-4 border-b border-border/40">
            <span className="text-xs uppercase tracking-wider text-ink-soft font-semibold">{t("Est. Price", "Preço Est.")}</span>
            <span className="text-xl font-bold text-accent">{pkg.price[lang]}</span>
          </div>

          {/* Inclusions summary list */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-ink font-bold block mb-2">
              {t("Includes:", "Inclui:")}
            </span>
            <ul className="space-y-1.5">
              {pkg.inclusions[lang].slice(0, 3).map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-xs text-ink-soft">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="truncate">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button 
          onClick={() => handleSelectPackage(pkg.title[lang])}
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-lg text-base tracking-wider uppercase transition-colors text-center"
        >
          {t("Inquire Now", "Pedir Informações")}
        </button>
      </div>
    </article>
  );
}

function PackagesPage() {
  const { package: packageParam } = Route.useSearch();
  const [selectedPackage, setSelectedPackage] = useState("");
  const { t, lang } = useLanguage();

  const handleSelectPackage = (pkgTitle: string) => {
    setSelectedPackage(pkgTitle);
    const element = document.getElementById("inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (packageParam) {
      const matchedPkg = packages.find(
        (p) => p.title.en === packageParam || p.title.pt === packageParam
      );
      if (matchedPkg) {
        setSelectedPackage(matchedPkg.title[lang]);
        // Scroll to the inquiry form after layout completes
        setTimeout(() => {
          const element = document.getElementById("inquiry");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, [packageParam, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Mini Hero Banner */}
      <div className="relative pt-40 pb-20 bg-ink text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url(${pkgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/30 to-brand-blue/90" />
        <div className="relative container-x">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> {t("Back to Home", "Voltar ao Início")}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {t("Special Packages", "Pacotes Especiais")}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80 leading-relaxed">
            {t("Explore our curated tour packages designed to give you unforgettable travel and cultural experiences in Mozambique and Africa.", "Explore os nossos pacotes turísticos seleccionados para lhe proporcionar experiências de viagem e culturais inesquecíveis em Moçambique e África.")}
          </p>
        </div>
      </div>

      {/* Catalog List - Rendered in a 3-column grid matching PDF profile cards */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.title.en} delay={i * 0.1}>
                <PackageCard
                  pkg={pkg}
                  lang={lang}
                  handleSelectPackage={handleSelectPackage}
                  t={t}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 bg-secondary/35 border-t border-border/40">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="eyebrow mb-4">{t("Bookings & Inquiries", "Reservas & Informações")}</div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                {t("Customize Your Dream Package", "Personalize o Seu Pacote de Sonho")}
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                {t("Select your desired tour package, or tell us your preferences and we'll craft a tailor-made travel itinerary suited to your exact needs.", "Seleccione o pacote pretendido, ou indique as suas preferências e criaremos um itinerário à sua medida.")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={(e) => e.preventDefault()} className="bg-background border border-border/80 p-8 lg:p-10 space-y-5 rounded-2xl shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Full Name", "Nome Completo")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                    placeholder={t("Your name", "O seu nome")}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Email Address", "Endereço de E-mail")}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Phone Number", "Número de Telefone")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                    placeholder="+258..."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Selected Package", "Pacote Seleccionado")}
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  >
                    <option value="">{t("Custom Package (Let us design one)", "Pacote Personalizado (Nós desenhamos)")}</option>
                    {packages.map((pkg) => (
                      <option key={pkg.title.en} value={pkg.title[lang]}>{pkg.title[lang]}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Adults", "Adultos")}
                  </label>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("0–2 years", "0-2 anos")}
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("2–11 years", "2-11 anos")}
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("11+ years", "11+ anos")}
                  </label>
                  <input
                    type="number"
                    defaultValue={0}
                    min={0}
                    className="w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Preferred Departure Date", "Data de Partida Preferida")}
                  </label>
                  <input
                    type="date"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Return Date", "Data de Retorno")}
                  </label>
                  <input
                    type="date"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                  {t("Additional Request Details", "Detalhes Adicionais do Pedido")}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-ink-soft/40 focus:border-accent focus:outline-none transition rounded-lg"
                  placeholder={t("Specify any dietary requirements, physical limitations, or custom itinerary desires...", "Especifique quaisquer requisitos dietéticos, limitações físicas ou desejos de itinerário...")}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-white py-4 font-bold text-base tracking-widest hover:opacity-90 transition rounded-lg"
              >
                {t("SUBMIT INQUIRY", "SUBMETER INFORMAÇÃO")}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
