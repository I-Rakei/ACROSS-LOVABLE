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

import heroImg from "@/assets/hero-mozambique.jpg";
import mafalalaImg from "@/assets/tour-mafalala.jpg";
import eswatiniImg from "@/assets/tour-eswatini.jpg";
import maputoImg from "@/assets/tour-maputo.jpg";
import transferImg from "@/assets/service-transfer.jpg";
import corporateImg from "@/assets/service-corporate.jpg";
import holidayImg from "@/assets/service-holiday.jpg";

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
    img: corporateImg,
  },
  {
    icon: Compass,
    title: { en: "Africa Holiday", pt: "Férias em África" },
    desc: {
      en: "Authentic leisure experiences, designed with deep local knowledge and full flexibility",
      pt: "Experiências de lazer autênticas, desenhadas com profundo conhecimento local e flexibilidade.",
    },
    img: holidayImg,
  },
  {
    icon: Car,
    title: { en: "Transport Logistics", pt: "Logística de Transporte" },
    desc: {
      en: "Integrated ground transportation and mobility solutions, ensuring reliability, safety, and operational efficiency.",
      pt: "Soluções integradas de transporte terrestre e mobilidade, garantindo fiabilidade e segurança.",
    },
    img: transferImg,
  },
];

const tours = [
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
      en: "Discover Mafalala, one of Maputo's oldest and most emblematic neighbourhoods, through an immersive cultural experience guided by local residents.",
      pt: "Descubra a Mafalala, um dos bairros mais antigos e emblemáticos de Maputo, através de uma experiência cultural imersiva guiada por residentes locais.",
    },
    img: mafalalaImg,
    bgColor: "bg-[#F39C12]",
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
      en: "Depart from Maputo at dawn and enjoy a structured immersion into the cultural heritage of Eswatini.",
      pt: "Parta de Maputo ao amanhecer e desfrute de uma imersão estruturada no património cultural de Eswatini.",
    },
    img: eswatiniImg,
    bgColor: "bg-[#E74C3C]",
  },
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
      en: "Once known as the Acacia City, Maputo — formerly Lourenço Marques — is the capital and cultural heart of Mozambique.",
      pt: "Outrora conhecida como a Cidade das Acácias, Maputo — anteriormente Lourenço Marques — é a capital e o coração cultural de Moçambique.",
    },
    img: maputoImg,
    bgColor: "bg-[#F1C40F]",
  },
  {
    title: {
      en: "Inhaca Island Day Trip",
      pt: "Excursão de um Dia à Ilha da Inhaca",
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
      en: "Embark on a pristine boat cruise to Inhaca Island to explore marine life, white sands, and local coral reefs.",
      pt: "Embarque num cruzeiro de barco imaculado para a Ilha da Inhaca para explorar a vida marinha, areias brancas e recifes de coral locais.",
    },
    img: holidayImg,
    bgColor: "bg-[#1ABC9C]",
  },
  {
    title: {
      en: "Chiloane Island Escape",
      pt: "Refúgio na Ilha de Chiloane",
    },
    duration: {
      en: "2 Days",
      pt: "2 Dias",
    },
    location: {
      en: "Sofala, Mozambique",
      pt: "Sofala, Moçambique",
    },
    desc: {
      en: "A remote island getaway featuring local dhow excursions, pristine sandy beaches, and authentic island community life.",
      pt: "Um refúgio numa ilha remota com excursões de dhow locais, praias de areia intocadas e vida comunitária autêntica da ilha.",
    },
    img: heroImg,
    bgColor: "bg-[#9B59B6]",
  },
];

const SLIDES = [
  {
    image: heroImg,
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
    image: maputoImg,
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
    image: holidayImg,
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
              <p className="mt-8 max-w-xl text-lg text-white leading-relaxed">
                {lang === "en" ? SLIDES[currentSlide].descEn : SLIDES[currentSlide].descPt}
              </p>
              <div className="mt-8">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 font-bold text-base tracking-widest hover:bg-accent/95 transition rounded-lg"
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
                    <s.icon className="w-8 h-8 text-accent mb-4" />
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
      <section id="services-details" className="relative py-20 text-white overflow-hidden">
        {/* Background Image covering 100% */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${holidayImg})` }}
          aria-hidden="true"
        />
        {/* Linear gradient shadow overlay — transparent on top, fading to brand blue/ink at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/90 to-ink/95 z-0" aria-hidden="true" />

        <div className="relative container-x z-10">
          <Reveal>
            <div className="eyebrow !text-white mb-4">{t("Our Products & Services", "Os Nossos Produtos & Serviços")}</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-white tracking-tight">
              {t("Comprehensive Ground Handling", "Gestão Global em Terra")}
            </h2>
          </Reveal>

          {/* Two columns layout with space between */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Corporate Card */}
            <Reveal>
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/[0.06] transition-all duration-300">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">{t("Corporate", "Corporativo")}</h3>
                </div>
                <div className="h-px bg-white/10 w-full mb-6" />
                <ul className="space-y-5">
                  {[
                    t("We customise accommodation solutions for your corporate travellers;", "Personalizamos soluções de alojamento para os seus viajantes corporativos;"),
                    t("We are specialists at managing group travel bookings;", "Somos especialistas na gestão de reservas de viagens de grupo;"),
                    t("We provide countrywide vehicle rental from reliable outlets;", "Oferecemos aluguer de viaturas a nível nacional através de fornecedores fiáveis;"),
                    t("Enjoy our cost-effective transfers point to point;", "Desfrute dos nossos transfers de ponto a ponto com boa relação custo-benefício;"),
                    t("We provide countrywide chauffeur drive from reliable outlets;", "Oferecemos serviço de motorista a nível nacional através de fornecedores fiáveis;"),
                    t("AcrossTours organises small business dinners to large conferences;", "A AcrossTours organiza desde pequenos jantares de negócios a grandes conferências;")
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-white/90 text-base">
                      <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <span className="flex-1 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Leisure Card */}
            <Reveal delay={0.15}>
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/[0.06] transition-all duration-300">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">{t("Leisure", "Lazer")}</h3>
                </div>
                <div className="h-px bg-white/10 w-full mb-6" />
                <ul className="space-y-5">
                  {[
                    t("Enjoy the best guided tours in Mozambique;", "Desfrute das melhores visitas guiadas em Moçambique;"),
                    t("Book your flights with us;", "Reserve os seus voos connosco;"),
                    t("Our tailor made packages will provide you a unique lifetime experience.", "Os nossos pacotes personalizados proporcionar-lhe-ão uma experiência única para a vida.")
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-white/90 text-base">
                      <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
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
                  <article className="bg-card hover-lift h-full flex flex-col rounded-2xl overflow-hidden shadow-sm border border-border/40">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={tour.img}
                        alt={tour.title[lang]}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-ink-soft mb-3">
                        <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> {tour.location[lang]}</span>
                        <span>·</span>
                        <span>{tour.duration[lang]}</span>
                      </div>
                      <h3 className="text-xl mb-3">{tour.title[lang]}</h3>
                      <p className="text-base text-ink-soft leading-relaxed flex-1">{tour.desc[lang]}</p>
                      <Link
                        to="/packages"
                        className="mt-6 inline-flex items-center gap-2 text-base font-bold text-accent border-b border-accent pb-1 w-fit"
                      >
                        {t("SEE MORE", "VER MAIS")}
                      </Link>
                    </div>
                  </article>
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
                    src={maputoImg} 
                    alt="Maputo Mozambique sunset view" 
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

      {/* WHY CHOOSE US */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image covering 100% */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-ink/70 z-0" aria-hidden="true" />

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
              {t("Get in Touch With Us", "Entre em Contacto Connosco")}
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mb-10">
              {t(
                "Feel free to send us a message if you have any questions about our services or would like someone from our office to contact you.",
                "Não hesite em enviar-nos uma mensagem se tiver alguma dúvida sobre os nossos serviços ou se pretender que o nosso escritório entre em contacto consigo."
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
