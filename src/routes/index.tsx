import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Globe2,
  CheckCircle2,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

// Hero Images
import hero1 from "@/assets/Across/Hero images/hero 1.jpg";
import hero2 from "@/assets/Across/Hero images/hero 2.jpg";
import hero3 from "@/assets/Across/Hero images/hero 3.jpg";

// Leisure & Business Travel Solutions
import serviceBusiness from "@/assets/Across/Leisure & Business Travel Solutions/Business Travel.png";
import serviceHoliday from "@/assets/Across/Leisure & Business Travel Solutions/Africa Holiday.jpg";
import serviceTransport from "@/assets/Across/Leisure & Business Travel Solutions/Transport Logistics.jpg";

// Special Packages Images
import pkgMaputo from "@/assets/Across/Special Packages/Maputo City Tour.jpg";
import pkgMafalala from "@/assets/Across/Special Packages/Mafalala Cultural Walking Tour.webp";
import pkgInhaca from "@/assets/Across/Special Packages/Inhaca Island Day Trip.jpg";
import pkgKruger from "@/assets/Across/Special Packages/kruger-national-park-south-africa.jpg";
import pkgPonta from "@/assets/Across/Special Packages/Bilene.jpg";
import pkgEswatini from "@/assets/Across/Special Packages/Eswatini Cultural Day Trip.jpg";

// Facts Image
import factsImg from "@/assets/Across/Mozambique Country Facts/mozambique-location-map-flag-pin.avif";

// Why Choose Us Background
import whyChooseUsImg from "@/assets/Across/Why choose US/why choose us.jpg";

// Visa Section Image
import visaImg from "@/assets/Across/VISA/Image.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: Briefcase,
    title: { en: "Business Travel", pt: "Viagens de Negócios" },
    desc: {
      en: "Comprehensive corporate travel services designed to support companies, groups, business enterprises, and executives.",
      pt: "Serviços abrangentes de viagens corporativas concebidos para apoiar empresas, grupos e executivos.",
    },
    img: serviceBusiness,
  },
  {
    icon: Compass,
    title: { en: "Africa Holiday", pt: "Férias em África" },
    desc: {
      en: "Authentic leisure experiences, designed with deep local knowledge and full flexibility",
      pt: "Experiências de lazer autênticas, desenhadas com profundo conhecimento local e flexibilidade.",
    },
    img: serviceHoliday,
  },
  {
    icon: Car,
    title: { en: "Transport Logistics", pt: "Logística de Transporte" },
    desc: {
      en: "Integrated ground transportation and mobility solutions, ensuring reliability, safety, and operational efficiency.",
      pt: "Soluções integradas de transporte terrestre e mobilidade, garantindo fiabilidade e segurança.",
    },
    img: serviceTransport,
  },
];

const tours = [
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
    price: { en: "$65 per person", pt: "$65 por pessoa" },
    inclusions: {
      en: ["Private air-conditioned transport", "English/Portuguese speaking guide", "All entrance fees", "Traditional lunch option"],
      pt: ["Transporte privado com ar condicionado", "Guia fluente em Inglês/Português", "Todas as taxas de entrada", "Opção de almoço tradicional"],
    },
  },
  {
    title: {
      en: "Mafalala Walking Tour",
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
    price: { en: "$45 per person", pt: "$45 por pessoa" },
    inclusions: {
      en: ["Local certified guide", "Mafalala museum entry", "Traditional dance performance", "Bottled water"],
      pt: ["Guia local certificado", "Entrada no museu da Mafalala", "Apresentação de dança tradicional", "Água engarrafada"],
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
    price: { en: "$180 per person", pt: "$180 por pessoa" },
    inclusions: {
      en: ["Boat cruise transfers", "Marine reserve permits", "Snorkeling equipment rental", "Fresh seafood lunch"],
      pt: ["Transferes de barco", "Licenças da reserva marinha", "Aluguer de equipamento de snorkeling", "Almoço de marisco fresco"],
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
    price: { en: "$220 per person", pt: "$220 por pessoa" },
    inclusions: {
      en: ["Return transport from Maputo", "Professional driver/guide", "Big 5 game drive", "Packed lunch"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Motorista/guia profissional", "Safári Big 5", "Almoço embalado"],
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
    price: { en: "$95 per person", pt: "$95 por pessoa" },
    inclusions: {
      en: ["Return transport from Maputo", "Professional guide", "Beach access & leisure time", "Lunch at local restaurant"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Guia profissional", "Acesso à praia e tempo livre", "Almoço em restaurante local"],
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
    price: { en: "$145 per person", pt: "$145 por pessoa" },
    inclusions: {
      en: ["Round-trip transport from Maputo", "Professional driver/guide", "Mantenga Village entry fee", "Traditional lunch"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Motorista/guia profissional", "Entrada na Aldeia de Mantenga", "Almoço tradicional"],
    },
  },
];

const SLIDES = [
  {
    image: hero1,
    titleEn: (
      <>
        Business and Leisure<br />
        Travel Solutions
      </>
    ),
    titlePt: (
      <>
        Soluções de Viagem<br />
        de Negócios e Lazer
      </>
    ),
    descEn: "Design, management, and execution of integrated travel and logistics solutions in Mozambique, Africa, and worldwide.",
    descPt: "Desenho, gestão e execução de soluções integradas de viagens e logística em Moçambique, África e em todo o mundo.",
  },
  {
    image: hero2,
    titleEn: (
      <>
        Explore Authentic<br />
        African Destinations
      </>
    ),
    titlePt: (
      <>
        Explore Destinos<br />
        Africanos Autênticos
      </>
    ),
    descEn: "Experience tailor-made packages, guided cultural tours, and beautiful African landscapes with expert local guides.",
    descPt: "Experimente pacotes personalizados, visitas culturais guiadas e belas paisagens africanas com guias locais experientes.",
  },
  {
    image: hero3,
    titleEn: (
      <>
        Tailor-Made<br />
        Holiday Packages
      </>
    ),
    titlePt: (
      <>
        Pacotes de Férias<br />
        Personalizados
      </>
    ),
    descEn: "From pristine beaches to safari adventures, we design unique lifetime experiences suited to your exact desires.",
    descPt: "Desde praias imaculadas a aventuras de safari, desenhamos experiências únicas de vida adaptadas aos seus desejos exatos.",
  },
];

interface TourType {
  title: { en: string; pt: string };
  duration: { en: string; pt: string };
  location: { en: string; pt: string };
  desc: { en: string; pt: string };
  img: string;
  price: { en: string; pt: string };
  inclusions: { en: string[]; pt: string[] };
}

function FeaturedTourCard({
  tour,
  lang,
  t,
}: {
  tour: TourType;
  lang: "en" | "pt";
  t: (en: string, pt: string) => string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-card hover-lift h-full flex flex-col rounded-2xl overflow-hidden shadow-sm border border-border/40">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={tour.img}
          alt={tour.title[lang]}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-ink-soft mb-3">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" /> {tour.location[lang]}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent" /> {tour.duration[lang]}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-ink mb-3 line-clamp-1">{tour.title[lang]}</h3>

          {/* Description — 5-line clamp + Read more toggle in place */}
          <p className={`text-sm text-ink-soft leading-relaxed mb-1 ${isExpanded ? "" : "line-clamp-5"}`}>
            {tour.desc[lang]}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-semibold text-accent hover:underline mb-4 inline-block text-left"
          >
            {isExpanded ? t("Read less", "Ler menos") + " ←" : t("Read more", "Ler mais") + " →"}
          </button>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-border/40">
            <span className="text-xs uppercase tracking-wider text-ink-soft font-semibold">{t("Est. Price", "Preço Est.")}</span>
            <span className="text-xl font-bold text-accent">{tour.price[lang]}</span>
          </div>

          {/* Top 3 inclusions */}
          <div className="mb-5">
            <span className="text-xs uppercase tracking-wider text-ink font-bold block mb-2">
              {t("Includes:", "Inclui:")}
            </span>
            <ul className="space-y-1.5">
              {tour.inclusions[lang].slice(0, 3).map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-xs text-ink-soft">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="truncate">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/packages"
          search={{ package: tour.title.en }}
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-lg text-sm tracking-wider uppercase transition-colors text-center block"
        >
          {t("Inquire Now", "Pedir Informações")}
        </Link>
      </div>
    </article>
  );
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tourIndex, setTourIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll for packages/tours carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setTourIndex((prev) => {
        const maxIdx = tours.length - visibleCards;
        return prev >= maxIdx ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [visibleCards]);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxTourIndex = tours.length - visibleCards;
  const nextTour = () => {
    setTourIndex((prev) => (prev >= maxTourIndex ? 0 : prev + 1));
  };
  const prevTour = () => {
    setTourIndex((prev) => (prev === 0 ? maxTourIndex : prev - 1));
  };

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Slides backgrounds */}
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt="Across Tour Background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-ink/55 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-blue/95 via-brand-blue/30 to-transparent z-10" />

        <div className="relative container-x pb-32 pt-40 text-white w-full z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
                {lang === "en" ? SLIDES[currentSlide].titleEn : SLIDES[currentSlide].titlePt}
              </h1>
              <p className="mt-8 max-w-xl text-base sm:text-lg text-white leading-relaxed">
                {lang === "en" ? SLIDES[currentSlide].descEn : SLIDES[currentSlide].descPt}
              </p>
              <div className="mt-8">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center bg-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-sm sm:text-base tracking-widest hover:bg-accent/95 transition rounded-lg"
                >
                  {t("GET IN TOUCH", "ENTRAR EM CONTACTO")}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center gap-6 mt-12">
            {/* Dots */}
            <div className="flex gap-2.5">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-9 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="h-4 w-px bg-white/20" />

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-4">{t("About Us", "Sobre Nós")}</div>
            <h2 className="text-4xl lg:text-5xl leading-tight">
              {t("Travel & Destination Management", "Gestão de Viagens & Destino")}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7 space-y-6 text-base text-ink-soft leading-relaxed">
            <p>
              <strong>AcrossTours</strong> {t("is a travel and destination management company. We are specialized in both Inbound and Outbound travel solutions.", "é uma empresa de gestão de destinos e viagens. Somos especializados em soluções de viagens receptivas (Inbound) e emissivas (Outbound).")}
            </p>
            <p>
              {t("Our main services outline include providing full ground handling services from accommodation bookings, car rental, chauffeur drive, airport transfers, conferencing, tours, among others, as well as flights when required for both leisure and business travel including private air charters. We are currently based in Mozambique and Angola.", "A nossa gama de serviços inclui assistência em terra completa desde reservas de alojamento, aluguer de viaturas, motoristas particulares, transfers de aeroporto, conferências, excursões, entre outros, bem como voos para lazer e negócios, incluindo voos privados. Operamos actualmente em Moçambique e Angola.")}
            </p>
          </Reveal>
        </div>

        {/* Mission / Vision / Value */}
        <div className="container-x mt-20">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: Award,
                label: t("Value Added", "Valor Acrescentado"),
                text: t("Relationship based on competitiveness, expressing to the customer the satisfaction and the most attainable value for money.", "Relação baseada na competitividade, oferecendo ao cliente a máxima satisfação e a melhor relação custo-benefício."),
              },
              {
                icon: Globe2,
                label: t("Mission", "Missão"),
                text: t("To provide lifetime leisure and business travel solutions for travel into and out of Africa and Contribute to the continuous development of the Industry.", "Proporcionar soluções de viagens de lazer e negócios em África e contribuir para o desenvolvimento contínuo da indústria."),
              },
              {
                icon: ShieldCheck,
                label: t("Vision", "Visão"),
                text: t("To be a respected Destination Management Company in Africa by providing quality service, reliability and customized solutions.", "Ser uma Empresa de Gestão de Destinos de referência em África, oferecendo serviços de qualidade, fiabilidade e soluções personalizadas."),
              },
            ].map((item, idx) => (
              <Reveal key={item.label} delay={idx * 0.1} className="bg-background p-8 flex flex-col h-full">
                <item.icon className="w-8 h-8 text-accent mb-6" />
                <h3 className="text-xl mb-3">{item.label}</h3>
                <p className="text-base text-ink-soft leading-relaxed flex-1">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES UNITS */}
      <section id="services" className="py-20 bg-background">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <Reveal>
              <div className="eyebrow mb-4">{t("Leisure & Business Travel Solutions", "Soluções de Viagem Corporativa e de Lazer")}</div>
              <h2 className="text-4xl lg:text-5xl max-w-2xl">
                {t("Our services are delivered through 3 business units", "Os nossos serviços dividem-se em 3 unidades de negócios")}
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title.en} delay={i * 0.1}>
                <article className="group relative overflow-hidden bg-ocean-deep hover-lift h-full rounded-2xl">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <s.icon className="w-8 h-8 text-white mb-4" />
                    <h3 className="text-2xl mb-2 text-white">{s.title[lang]}</h3>
                    <p className="text-white text-base leading-relaxed">{s.desc[lang]}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS & SERVICES DETAILS */}
      <section id="services-details" className="py-8 sm:py-12 bg-background overflow-hidden">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow mb-2 sm:mb-3 text-xs sm:text-sm">{t("Our Products & Services", "Os Nossos Produtos & Serviços")}</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-8 text-ink tracking-tight">
              {t("Comprehensive Ground Handling", "Gestão Global em Terra")}
            </h2>
          </Reveal>

          {/* Two columns layout */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
            {/* Corporate Card */}
            <Reveal>
              <div className="bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-ink tracking-tight">{t("Corporate", "Corporativo")}</h3>
                </div>
                <div className="h-px bg-border/60 w-full mb-3 sm:mb-4" />
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    t("We customise accommodation solutions for your corporate travellers;", "Personalizamos soluções de alojamento para os seus viajantes corporativos;"),
                    t("We are specialists at managing group travel bookings;", "Somos especialistas na gestão de reservas de viagens de grupo;"),
                    t("We provide countrywide vehicle rental from reliable outlets;", "Oferecemos aluguer de viaturas a nível nacional através de fornecedores fiáveis;"),
                    t("Enjoy our cost-effective transfers point to point;", "Desfrute dos nossos transfers de ponto a ponto com boa relação custo-benefício;"),
                    t("We provide countrywide chauffeur drive from reliable outlets;", "Oferecemos serviço de motorista a nível nacional através de fornecedores fiáveis;"),
                    t("AcrossTours organises small business dinners to large conferences;", "A AcrossTours organiza desde pequenos jantares de negócios a grandes conferências;")
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-ink-soft text-xs sm:text-sm">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent" />
                      </div>
                      <span className="flex-1 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Leisure Card */}
            <Reveal delay={0.15}>
              <div className="bg-card border border-border/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-md transition-all duration-300">
                <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-ink tracking-tight">{t("Leisure", "Lazer")}</h3>
                </div>
                <div className="h-px bg-border/60 w-full mb-3 sm:mb-4" />
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    t("Enjoy the best guided tours in Mozambique;", "Desfrute das melhores visitas guiadas em Moçambique;"),
                    t("Book your flights with us;", "Reserve os seus voos connosco;"),
                    t("Our tailor made packages will provide you a unique lifetime experience.", "Os nossos pacotes personalizados proporcionar-lhe-ão uma experiência única para a vida.")
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-ink-soft text-xs sm:text-sm">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent" />
                      </div>
                      <span className="flex-1 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section id="packages" className="py-20 bg-background">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <Reveal>
              <div className="eyebrow mb-4">{t("Featured Tours", "Visitas em Destaque")}</div>
              <h2 className="text-4xl lg:text-5xl max-w-2xl">
                {t("Handpicked experiences across Mozambique", "Experiências seleccionadas em Moçambique")}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex items-center gap-4">
              <Link to="/packages" className="text-sm font-semibold text-accent inline-flex items-center gap-2 hover:gap-3 transition-all mr-2 sm:mr-4">
                {t("View all packages", "Ver todos os pacotes")} <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={prevTour}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink hover:bg-secondary/40 transition-colors"
                  aria-label="Previous tour"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTour}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink hover:bg-secondary/40 transition-colors"
                  aria-label="Next tour"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Sliding Carousel Track Container */}
          <div className="overflow-hidden w-full relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out -mx-3"
              style={{ transform: `translateX(-${tourIndex * (100 / visibleCards)}%)` }}
            >
              {tours.map((tour) => (
                <div 
                  key={tour.title.en} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <FeaturedTourCard
                    tour={tour}
                    lang={lang}
                    t={t}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators at the bottom center */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxTourIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTourIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === tourIndex ? "bg-accent" : "bg-ink/15 hover:bg-ink/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY VISIT MOZAMBIQUE */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Image and Overlay Badge */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative">
                  <img 
                    src={factsImg} 
                    alt="Mozambique location map" 
                    loading="lazy" 
                    className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
                  />
                  {/* Floating brand accent badge */}
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 max-w-xs rounded-2xl shadow-xl flex flex-col justify-center min-w-[200px]">
                    <div className="text-5xl font-black leading-none tracking-tight">200K</div>
                    <div className="mt-3 text-xs font-bold tracking-widest uppercase leading-snug">
                      {t("People Discovering", "Pessoas a Descobrir")}<br />Mozambique
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right side: Typography & Facts Grid */}
            <div className="lg:col-span-6 space-y-8">
              <Reveal>
                <h2 className="text-4xl lg:text-5xl text-ink leading-tight mb-6">
                  {t("Mozambique Country Facts", "Factos Sobre Moçambique")}
                </h2>
                <p className="text-base text-ink-soft leading-relaxed mb-8">
                  {t(
                    "Mozambique is divided into three regions, namely South, Centre and North, with a number of 11 provinces. It has an area of about 800 thousand km², 3 thousand km of coastline and a population of about 30 million inhabitants, of which 23 local languages are spoken, and Portuguese is the official language. The country has a tropical climate and a mild winter, with the rainy season running from November to February.",
                    "Moçambique está dividido em três regiões (Sul, Centro e Norte), num total de 11 províncias. Possui uma área de cerca de 800 mil km², 3 mil km de costa e uma população de cerca de 30 milhões de habitantes, onde se falam 23 línguas locais, sendo o Português a língua oficial. O país tem um clima tropical com um inverno ameno e época de chuvas de Novembro a Fevereiro."
                  )}
                </p>
                
                {/* Facts Table-like Grid */}
                <div className="grid grid-cols-2 border-t border-border/60">
                  {[
                    { label: t("AREA", "ÁREA"), value: "≈ 800,000 km²" },
                    { label: t("COASTLINE", "LINHA DE COSTA"), value: "3,000+ km" },
                    { label: t("POPULATION", "POPULAÇÃO"), value: t("≈ 33 million", "≈ 33 milhões") },
                    { label: t("OFFICIAL LANGUAGE", "LÍNGUA OFICIAL"), value: t("Portuguese", "Português") },
                    { label: t("LOCAL LANGUAGES", "LÍNGUAS LOCAIS"), value: "23" },
                    { label: t("CURRENCY", "MOEDA"), value: t("Metical (MZN)", "Metical (MZN)") }
                  ].map((item, idx) => {
                    const isLeft = idx % 2 === 0;
                    const isLastRow = idx >= 4;
                    return (
                      <div 
                        key={item.label} 
                        className={`py-5 ${isLeft ? 'pr-8 border-r border-border/60' : 'pl-8'} ${!isLastRow ? 'border-b border-border/60' : ''}`}
                      >
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-ink-soft block mb-1">
                          {item.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-ink">
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PASSPORT & TRAVEL REQUIREMENTS */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <Reveal>
            <div className="bg-card border border-border/60 rounded-2xl shadow-sm overflow-hidden grid md:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="eyebrow mb-4">
                  {t("Travel Preparation", "Preparação de Viagem")}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-5">
                  {t("Passport & Travel Requirements", "Passaporte e Requisitos de Viagem")}
                </h2>
                <p className="text-base text-ink-soft leading-relaxed mb-6">
                  {t(
                    "At Across Tour, we believe that seamless travel starts with proper preparation. Keeping your passport and travel documentation current is essential to ensuring a smooth and stress-free journey. As your trusted DMC, we provide expert guidance on visa requirements, entry regulations, and essential travel documentation, allowing you to focus on the experience ahead while we help you navigate the details with confidence.",
                    "Na Across Tour, acreditamos que uma viagem tranquila começa com uma preparação adequada. Manter o seu passaporte e documentação de viagem actualizados é essencial para garantir uma viagem sem problemas. Como seu DMC de confiança, fornecemos orientação especializada sobre requisitos de visto, regulamentos de entrada e documentação de viagem essencial."
                  )}
                </p>
                <a
                  href="https://www.visahq.com/mozambique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition whitespace-nowrap self-start"
                >
                  {t("Visa Requirements", "Requisitos de Visto")} →
                </a>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] order-1 md:order-2">
                <img
                  src={visaImg}
                  alt="Passport and travel documents"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image covering 100% — anchored to top */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${whyChooseUsImg})` }}
          aria-hidden="true"
        />
        {/* Blue gradient overlay matching the footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/70 via-brand-blue/90 to-ink/95" aria-hidden="true" />

        <div className="relative container-x max-w-4xl text-center z-10">
          <Reveal>
            <div className="eyebrow !text-white mb-4">{t("Why Choose Us", "Porquê Escolher-nos")}</div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-white">{t("Exceptional Service & Custom Solutions", "Serviço Excepcional & Soluções À Medida")}</h2>
            <p className="text-base text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t(
                "We pride ourselves in that we make arrangements aimed at delivering successful itineraries and experiences, based on the most attainable value for money. We tailor all our packages to suit your exact needs. At AcrossTours we pride ourselves on great service and attention to detail in order for you to enjoy.",
                "Orgulhamo-nos de fazer arranjos orientados para a entrega de itinerários e experiências de sucesso, com base na melhor relação custo-benefício. Personalizamos todos os nossos pacotes para satisfazer as suas necessidades exactas. Na AcrossTours orgulhamo-nos do excelente serviço e atenção aos detalhes para que possa desfrutar."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="py-20 bg-background text-foreground">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="eyebrow mb-4">{t("Contact", "Contacto")}</div>
            <h2 className="text-4xl lg:text-5xl leading-tight mb-6">
              {t("Tell Us About Your Trip", "Conte-nos Sobre a Sua Viagem")}
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mb-10">
              {t(
                "Tell us about your trip so we can prepare the best quotation for you.",
                "Conte-nos sobre a sua viagem para que possamos preparar o melhor orçamento para si."
              )}
            </p>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ink">{t("Address", "Endereço")}</div>
                  <div className="text-ink-soft">Av. Tomás Nduda, Nº 942, 1º andar, Maputo - Mozambique</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ink">{t("Phone & WhatsApp", "Telefone & WhatsApp")}</div>
                  <div className="text-ink-soft">
                    {t("Office", "Escritório")}: +258 21 487 399<br />
                    {t("Mobile", "Telemóvel")}: +258 82 940 7360<br />
                    {t("Emergency", "Emergência")}: +258 87 402 6625
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-ink">Email</div>
                  <div className="text-ink-soft">
                    <a href="mailto:reservations@acrosstour.com" className="hover:text-accent transition">
                      reservations@acrosstour.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={(e) => e.preventDefault()} className="bg-secondary/35 border border-border/85 p-8 lg:p-10 space-y-5 rounded-2xl shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={t("Full Name", "Nome Completo")} />
                <Field label={t("Email", "E-mail")} type="email" />
                <Field label={t("Phone", "Telemóvel")} />
                <div>
                  <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                    {t("Destination", "Destino")}
                  </label>
                  <select
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                  >
                    <option value="">{t("Select Destination", "Seleccione o Destino")}</option>
                    <option value="Maputo City">{t("Maputo City", "Cidade de Maputo")}</option>
                    <option value="Maputo Province">{t("Maputo Province", "Província de Maputo")}</option>
                    <option value="Gaza">Gaza</option>
                    <option value="Inhambane">Inhambane</option>
                    <option value="Sofala">Sofala</option>
                    <option value="Manica">Manica</option>
                    <option value="Tete">Tete</option>
                    <option value="Zambezia">{t("Zambezia", "Zambézia")}</option>
                    <option value="Nampula">Nampula</option>
                    <option value="Niassa">Niassa</option>
                    <option value="Cabo Delgado">Cabo Delgado</option>
                    <option value="Other / International">{t("Other / International", "Outro / Internacional")}</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Field label={t("Adults", "Adultos")} type="number" small />
                <Field label={t("0–2 years", "0-2 anos")} type="number" small />
                <Field label={t("2–11 years", "2-11 anos")} type="number" small />
                <Field label={t("11+ years", "11+ anos")} type="number" small />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={t("Departure Date", "Data de Partida")} type="date" />
                <Field label={t("Return Date", "Data de Regresso")} type="date" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                  {t("Reason for Contact", "Motivo do Contacto")}
                </label>
                <select
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
                >
                  <option value="">{t("Select a reason", "Seleccione um motivo")}</option>
                  <option value="Corporate">{t("Business Travel / Corporate", "Viagens de Negócios / Corporativo")}</option>
                  <option value="Leisure">{t("Holiday Package / Leisure", "Pacote de Férias / Lazer")}</option>
                  <option value="Transport">{t("Transport & Logistics", "Transporte & Logística")}</option>
                  <option value="Rental/Tour">{t("Car Rental & Guided Tours", "Aluguer de Carros & Visitas Guiadas")}</option>
                  <option value="General">{t("General Inquiry", "Informações Gerais")}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
                  {t("Trip Details", "Detalhes da Viagem")}
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-ink-soft/40 focus:border-accent focus:outline-none transition rounded-lg"
                  placeholder={t("Tell us more about your dream trip...", "Fale-nos mais sobre a sua viagem de sonho...")}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white py-4 font-bold text-base tracking-widest hover:opacity-90 transition rounded-lg"
              >
                {t("SEND MESSAGE", "ENVIAR MENSAGEM")}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <div id="contact" />
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  type = "text",
  small = false,
}: {
  label: string;
  type?: string;
  small?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
        {label}
      </label>
      <input
        type={type}
        className={`w-full bg-background border border-border px-4 ${
          small ? "py-2.5 text-sm" : "py-3 text-sm"
        } text-foreground placeholder:text-ink-soft/40 focus:border-accent focus:outline-none transition rounded-lg`}
      />
    </div>
  );
}
