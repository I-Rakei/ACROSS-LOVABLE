import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

import mafalalaImg from "@/assets/tour-mafalala.jpg";
import eswatiniImg from "@/assets/tour-eswatini.jpg";
import maputoImg from "@/assets/tour-maputo.jpg";
import holidayImg from "@/assets/service-holiday.jpg";
import heroImg from "@/assets/hero-mozambique.jpg";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
});

const packages = [
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
      en: "Discover Mafalala, one of Maputo's oldest and most emblematic neighbourhoods, through an immersive cultural experience guided by local residents. Walk through its historic streets, meet local artisans, and learn about its role in the struggle for independence and cultural heritage.",
      pt: "Descubra a Mafalala, um dos bairros mais antigos e emblemáticos de Maputo, através de uma experiência cultural imersiva guiada por residentes locais. Caminhe pelas suas ruas históricas, conheça artesãos locais e saiba mais sobre o seu papel na luta pela independência e património cultural.",
    },
    img: mafalalaImg,
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
      en: "Depart from Maputo at dawn and enjoy a structured immersion into the cultural heritage of Eswatini. Visit the Mantenga Cultural Village to experience a traditional Swazi beehive village, watch a spectacular Swazi dance performance, and explore the beautiful Mantenga nature reserve.",
      pt: "Parta de Maputo ao amanhecer e desfrute de uma imersão estruturada na herança cultural de Eswatini. Visite a Aldeia Cultural de Mantenga para vivenciar uma aldeia tradicional Swazi, assista a um espectáculo de dança espectacular e explore a bela reserva natural de Mantenga.",
    },
    img: eswatiniImg,
    inclusions: {
      en: ["Round-trip transport from Maputo", "Professional driver/guide", "Mantenga Village entry fee", "Traditional lunch", "Border assistance"],
      pt: ["Transporte de ida e volta a partir de Maputo", "Motorista/guia profissional", "Entrada na Aldeia de Mantenga", "Almoço tradicional", "Assistência na fronteira"],
    },
    price: {
      en: "$145 per person",
      pt: "$145 por pessoa",
    },
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
      en: "Once known as the Acacia City, Maputo is the capital and cultural heart of Mozambique. Our guided city tour explores key architectural and historical highlights, including the Maputo Railway Station, the Iron House, the Natural History Museum, and the vibrant Central Market.",
      pt: "Outrora conhecida como a Cidade das Acácias, Maputo é a capital e o coração cultural de Moçambique. O nosso passeio guiado pela cidade explora os principais destaques arquitectónicos e históricos, incluindo a Estação de Caminhos de Ferro de Maputo, a Casa de Ferro, o Museu de História Natural e o vibrante Mercado Central.",
    },
    img: maputoImg,
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
      en: "Embark on a pristine boat cruise across Maputo Bay to Inhaca Island. Explore beautiful marine life with snorkeling at the Coral Barrier, enjoy a beachside seafood lunch, visit the local lighthouse, and relax on the white sands of Portuguese Island.",
      pt: "Embarque num cruzeiro de barco pela Baía de Maputo até à Ilha da Inhaca. Explore a deslumbrante vida marinha com snorkeling na Barreira de Coral, desfrute de um almoço de marisco à beira-mar, visite o farol local e relaxe nas areias brancas da Ilha dos Portugueses.",
    },
    img: holidayImg,
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
      en: "A remote island getaway featuring local dhow excursions, pristine sandy beaches, and authentic island community life. Walk the ancient coconut groves, sample locally caught seafood prepared in traditional style, and watch the sunset from a traditional sailing dhow.",
      pt: "Um refúgio numa ilha remota com excursões de dhow locais, praias de areia intocadas e vida comunitária autêntica. Caminhe pelos antigos palmeirais, saboreie o marisco pescado localmente preparado ao estilo tradicional e assista ao pôr do sol a partir de um veleiro dhow tradicional.",
    },
    img: heroImg,
    inclusions: {
      en: ["Dhow boat transfers", "1 night accommodation in eco-lodge", "All meals included", "Guided village walk", "Snorkeling & fishing activity"],
      pt: ["Transferes de barco dhow", "1 noite de alojamento em eco-lodge", "Todas as refeições incluídas", "Caminhada guiada pela aldeia", "Actividades de snorkeling e pesca"],
    },
    price: {
      en: "$320 per person",
      pt: "$320 por pessoa",
    },
  },
];

function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const { t, lang } = useLanguage();

  const handleSelectPackage = (pkgTitle: string) => {
    setSelectedPackage(pkgTitle);
    const element = document.getElementById("inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Mini Hero Banner */}
      <div className="relative pt-40 pb-20 bg-ink text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url(${holidayImg})` }}
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
                      <p className="text-base text-ink-soft leading-relaxed line-clamp-3 mb-4">{pkg.desc[lang]}</p>
                      
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
