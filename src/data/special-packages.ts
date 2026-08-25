// Special Packages — sourced from Across Tour quotations Q104785 (Anantara Bazaruto),
// Q104787 (Sentidos Beach Retreat), both dated 2026/08/07, and Q104846 (Nampula & Ilha de
// Moçambique), dated 2026/08/21. All priced for 2 pax sharing.

import anantaraHero from "@/assets/Special/Anatara/9.jpg";
import anantara12 from "@/assets/Special/Anatara/12.jpg";
import anantara13 from "@/assets/Special/Anatara/13.jpg";
import anantara14 from "@/assets/Special/Anatara/14.jpg";
import anantara3 from "@/assets/Special/Anatara/3.jpg";

import sentidosHero from "@/assets/Special/Sentidos/9.jpg";
import sentidos6 from "@/assets/Special/Sentidos/6.jpg";
import sentidos8 from "@/assets/Special/Sentidos/8.jpg";
import sentidos10 from "@/assets/Special/Sentidos/10.jpg";

import nampulaIlhaHero from "@/assets/Special/NampulaIlha/17.jpg";
import nampulaIlha1 from "@/assets/Special/NampulaIlha/1.jpg";
import nampulaIlha4 from "@/assets/Special/NampulaIlha/4.jpg";
import nampulaIlha5 from "@/assets/Special/NampulaIlha/5.jpg";
import nampulaIlha18 from "@/assets/Special/NampulaIlha/18.jpg";
const nampulaIlhaGallery = [nampulaIlha1, nampulaIlha4, nampulaIlha5, nampulaIlha18];

export interface SpecialPackageDay {
  day: { en: string; pt: string };
  title: { en: string; pt: string };
  details: { en: string[]; pt: string[] };
}

export interface SpecialPackagePriceLine {
  label: { en: string; pt: string };
  perPerson: string;
  total: string;
}

export interface SpecialPackageType {
  slug: string;
  title: { en: string; pt: string };
  tagline: { en: string; pt: string };
  badge: { en: string; pt: string };
  property: { en: string; pt: string };
  location: { en: string; pt: string };
  duration: { en: string; pt: string };
  validity: { en: string; pt: string };
  mealPlan: { en: string; pt: string };
  pricePerPerson: string;
  priceTotal: string;
  currency: string;
  heroImg: string;
  gallery: string[];
  description: { en: string; pt: string };
  priceBreakdown: SpecialPackagePriceLine[];
  itinerary: SpecialPackageDay[];
  inclusions: { en: string[]; pt: string[] };
  exclusions: { en: string[]; pt: string[] };
  important: { en: string; pt: string };
}

export const specialPackages: SpecialPackageType[] = [
  {
    slug: "beach-villa-romantic-escape",
    title: {
      en: "Beach Villa Romantic Escape",
      pt: "Estadia Romântica para Dois",
    },
    tagline: {
      en: "Celebrate your honeymoon, wedding anniversary, or a romantic getaway in a private Beach Villa at Anantara Bazaruto Island Resort.",
      pt: "Celebre a sua lua de mel, aniversário de casamento ou uma escapadinha romântica numa Beach Villa privada no Anantara Bazaruto Island Resort.",
    },
    badge: { en: "Couples · 4 Days / 3 Nights", pt: "Casais · 4 Dias / 3 Noites" },
    property: { en: "Anantara Bazaruto Island Resort", pt: "Anantara Bazaruto Island Resort" },
    location: { en: "Ilha do Bazaruto, Inhambane, Mozambique", pt: "Ilha do Bazaruto, Inhambane, Moçambique" },
    duration: { en: "4 Days / 3 Nights", pt: "4 Dias / 3 Noites" },
    validity: { en: "1 September – 20 December 2026", pt: "1 de Setembro – 20 de Dezembro de 2026" },
    mealPlan: { en: "Full Board", pt: "Pensão Completa" },
    pricePerPerson: "99.296,50",
    priceTotal: "198.593,00",
    currency: "MZN",
    heroImg: anantaraHero,
    gallery: [anantara12, anantara13, anantara14, anantara3],
    description: {
      en: "Four days and three nights on Bazaruto Island, staying in a private Double Beach Villa on a full-board basis at Anantara Bazaruto Island Resort. The package bundles return domestic flights and boat/road transfers with a full calendar of romantic touches — a sunset dhow cruise, an in-villa spa treatment, and sparkling wine on arrival — designed for honeymoons, anniversaries, and special-occasion escapes.",
      pt: "Quatro dias e três noites na Ilha do Bazaruto, numa Beach Villa Dupla privada em regime de pensão completa no Anantara Bazaruto Island Resort. O pacote inclui voos domésticos de ida e volta e transfers de barco/estrada, com um calendário de momentos românticos — passeio de dhow ao pôr do sol, tratamento de spa na villa e espumante à chegada — pensado para luas de mel, aniversários e ocasiões especiais.",
    },
    priceBreakdown: [
      { label: { en: "Flights (MPM–VNX–MPM)", pt: "Voos (MPM–VNX–MPM)" }, perPerson: "36.800,00", total: "73.600,00" },
      { label: { en: "Transfers (airport ⇄ lodge)", pt: "Transfers (aeroporto ⇄ lodge)" }, perPerson: "7.425,50", total: "14.851,00" },
      { label: { en: "Accommodation (3 nights, Full Board)", pt: "Alojamento (3 noites, Pensão Completa)" }, perPerson: "55.071,00", total: "110.142,00" },
    ],
    itinerary: [
      {
        day: { en: "Day 1 · Tue 01 Sep 2026", pt: "Dia 1 · Ter 01 Set 2026" },
        title: { en: "Arrival & Check-in", pt: "Chegada e Check-in" },
        details: {
          en: [
            "Domestic flight MPM–VNX–MPM (subject to availability)",
            "20-minute road transfer: Vilanculos Airport – Vilanculos Harbour",
            "60-minute boat transfer to Anantara Bazaruto Lodge",
            "Check-in: Double Beach Villa, Full Board",
          ],
          pt: [
            "Voo doméstico MPM–VNX–MPM (sujeito a disponibilidade)",
            "Transfer rodoviário de 20 minutos: Aeroporto de Vilanculos – Porto de Vilanculos",
            "Transfer de barco de 60 minutos até ao Anantara Bazaruto Lodge",
            "Check-in: Beach Villa Dupla, Pensão Completa",
          ],
        },
      },
      {
        day: { en: "Day 2 · Wed 02 Sep 2026", pt: "Dia 2 · Qua 02 Set 2026" },
        title: { en: "At Leisure", pt: "Dia Livre" },
        details: {
          en: ["Full board at Anantara Bazaruto Lodge", "Sunset dhow cruise & non-motorized water activities"],
          pt: ["Pensão completa no Anantara Bazaruto Lodge", "Passeio de dhow ao pôr do sol e actividades aquáticas não motorizadas"],
        },
      },
      {
        day: { en: "Day 3 · Thu 03 Sep 2026", pt: "Dia 3 · Qui 03 Set 2026" },
        title: { en: "At Leisure", pt: "Dia Livre" },
        details: {
          en: ["Full board at Anantara Bazaruto Lodge", "60-minute spa treatment per person"],
          pt: ["Pensão completa no Anantara Bazaruto Lodge", "Tratamento de spa de 60 minutos por pessoa"],
        },
      },
      {
        day: { en: "Day 4 · Fri 04 Sep 2026", pt: "Dia 4 · Sex 04 Set 2026" },
        title: { en: "Departure", pt: "Partida" },
        details: {
          en: [
            "60-minute boat transfer: Lodge – Vilanculos Harbour",
            "20-minute road transfer: Harbour – Vilanculos Airport",
            "Return domestic flight VNX–MPM",
          ],
          pt: [
            "Transfer de barco de 60 minutos: Lodge – Porto de Vilanculos",
            "Transfer rodoviário de 20 minutos: Porto – Aeroporto de Vilanculos",
            "Voo doméstico de regresso VNX–MPM",
          ],
        },
      },
    ],
    inclusions: {
      en: [
        "Return domestic flights MPM–VNX–MPM",
        "Return boat & road transfers (Vilanculos Airport ⇄ Anantara Bazaruto Lodge)",
        "3 nights in a Double Beach Villa, Full Board (breakfast, lunch & dinner)",
        "Daily selection of house drinks & in-room minibar",
        "Sunset dhow cruise per stay",
        "Non-motorized water activities",
        "60-minute spa treatment per person",
        "Sparkling wine on arrival",
      ],
      pt: [
        "Voos domésticos de ida e volta MPM–VNX–MPM",
        "Transfers de barco e estrada de ida e volta (Aeroporto de Vilanculos ⇄ Anantara Bazaruto Lodge)",
        "3 noites em Beach Villa Dupla, Pensão Completa (pequeno-almoço, almoço e jantar)",
        "Selecção diária de bebidas da casa e minibar no quarto",
        "Passeio de dhow ao pôr do sol por estadia",
        "Actividades aquáticas não motorizadas",
        "Tratamento de spa de 60 minutos por pessoa",
        "Espumante à chegada",
      ],
    },
    exclusions: {
      en: ["Items of a personal nature", "Anything not mentioned above", "Excursions not listed"],
      pt: ["Itens de natureza pessoal", "Tudo o que não esteja mencionado acima", "Passeios não listados"],
    },
    important: {
      en: "Flights are subject to availability on the date of travel and may change without prior notice. Valid for new bookings only, 1 September – 20 December 2026.",
      pt: "Os voos estão sujeitos a disponibilidade na data da viagem e podem sofrer alterações sem aviso prévio. Válido apenas para novas reservas, de 1 de Setembro a 20 de Dezembro de 2026.",
    },
  },
  {
    slug: "sentidos-beach-retreat-special",
    title: {
      en: "Sentidos Beach Retreat Special",
      pt: "Especial Sentidos Beach Retreat",
    },
    tagline: {
      en: "Flights, transfers and a beachfront stay at Sentidos Beach Retreat, bundled into one easy package.",
      pt: "Voos, transfers e alojamento à beira-mar no Sentidos Beach Retreat, tudo num único pacote.",
    },
    badge: { en: "Valid 1 Sep – 1 Nov · 4 Days / 3 Nights", pt: "Válido 1 Set – 1 Nov · 4 Dias / 3 Noites" },
    property: { en: "Sentidos Beach Retreat", pt: "Sentidos Beach Retreat" },
    location: { en: "Inhambane, Mozambique", pt: "Inhambane, Moçambique" },
    duration: { en: "4 Days / 3 Nights", pt: "4 Dias / 3 Noites" },
    validity: { en: "1 September – 1 November 2026", pt: "1 de Setembro – 1 de Novembro de 2026" },
    mealPlan: { en: "Bed & Breakfast", pt: "Pequeno-Almoço Incluído" },
    pricePerPerson: "51.656,00",
    priceTotal: "103.312,00",
    currency: "MZN",
    heroImg: sentidosHero,
    gallery: [sentidos6, sentidos8, sentidos10],
    description: {
      en: "A straightforward four-day, three-night escape to Sentidos Beach Retreat in Inhambane — return flights and airport transfers bundled with a Double Standard Villa on a bed & breakfast basis. A simple, all-in beach break with no separate logistics to arrange.",
      pt: "Uma escapada simples de quatro dias e três noites ao Sentidos Beach Retreat, em Inhambane — voos de ida e volta e transfers de aeroporto incluídos, com Villa Standard Dupla em regime de pequeno-almoço. Uma pausa de praia completa, sem logística separada a organizar.",
    },
    priceBreakdown: [
      { label: { en: "Flights (MPM–INH–MPM)", pt: "Voos (MPM–INH–MPM)" }, perPerson: "32.901,00", total: "65.802,00" },
      { label: { en: "Transfers (airport ⇄ retreat)", pt: "Transfers (aeroporto ⇄ retreat)" }, perPerson: "1.430,00", total: "2.860,00" },
      { label: { en: "Accommodation (3 nights, B&B)", pt: "Alojamento (3 noites, Pequeno-Almoço)" }, perPerson: "17.325,00", total: "34.650,00" },
    ],
    itinerary: [
      {
        day: { en: "Day 1 · Tue 01 Sep 2026", pt: "Dia 1 · Ter 01 Set 2026" },
        title: { en: "Arrival & Check-in", pt: "Chegada e Check-in" },
        details: {
          en: [
            "Flight MPM–INH–MPM (subject to availability, may change without notice)",
            "~45-minute road transfer: Inhambane Airport – Sentidos Beach Retreat",
            "Check-in: Double Standard Villa, Bed & Breakfast",
          ],
          pt: [
            "Voo MPM–INH–MPM (sujeito a disponibilidade, pode sofrer alterações sem aviso)",
            "Transfer rodoviário de ~45 minutos: Aeroporto de Inhambane – Sentidos Beach Retreat",
            "Check-in: Villa Standard Dupla, Pequeno-Almoço",
          ],
        },
      },
      {
        day: { en: "Day 2 · Wed 02 Sep 2026", pt: "Dia 2 · Qua 02 Set 2026" },
        title: { en: "At Leisure", pt: "Dia Livre" },
        details: {
          en: ["Bed & breakfast at Sentidos Beach Retreat"],
          pt: ["Pequeno-almoço no Sentidos Beach Retreat"],
        },
      },
      {
        day: { en: "Day 3 · Thu 03 Sep 2026", pt: "Dia 3 · Qui 03 Set 2026" },
        title: { en: "At Leisure", pt: "Dia Livre" },
        details: {
          en: ["Bed & breakfast at Sentidos Beach Retreat"],
          pt: ["Pequeno-almoço no Sentidos Beach Retreat"],
        },
      },
      {
        day: { en: "Day 4 · Fri 04 Sep 2026", pt: "Dia 4 · Sex 04 Set 2026" },
        title: { en: "Departure", pt: "Partida" },
        details: {
          en: [
            "~45-minute road transfer: Sentidos Beach Retreat – Inhambane Airport",
            "Return flight INH–MPM",
          ],
          pt: [
            "Transfer rodoviário de ~45 minutos: Sentidos Beach Retreat – Aeroporto de Inhambane",
            "Voo de regresso INH–MPM",
          ],
        },
      },
    ],
    inclusions: {
      en: [
        "Return flights MPM–INH–MPM",
        "Return road transfers (Inhambane Airport ⇄ Sentidos Beach Retreat)",
        "3 nights in a Double Standard Villa, Bed & Breakfast",
      ],
      pt: [
        "Voos de ida e volta MPM–INH–MPM",
        "Transfers rodoviários de ida e volta (Aeroporto de Inhambane ⇄ Sentidos Beach Retreat)",
        "3 noites em Villa Standard Dupla, Pequeno-Almoço",
      ],
    },
    exclusions: {
      en: ["Items of a personal nature", "Meals not mentioned", "Excursions"],
      pt: ["Itens de natureza pessoal", "Refeições não mencionadas", "Passeios"],
    },
    important: {
      en: "Flights are subject to seat availability and may change without prior notice.",
      pt: "Os voos estão sujeitos a disponibilidade de lugares e podem sofrer alterações sem aviso prévio.",
    },
  },
  {
    slug: "nampula-ilha-de-mocambique-heritage-escape",
    title: {
      en: "Nampula & Ilha de Moçambique Heritage Escape",
      pt: "Escapadinha Histórica a Nampula e Ilha de Moçambique",
    },
    tagline: {
      en: "Colonial architecture, guided city tours and a sunset dhow cruise across Nampula and the UNESCO World Heritage Ilha de Moçambique.",
      pt: "Arquitectura colonial, visitas guiadas e um passeio de dhow ao pôr do sol entre Nampula e a Ilha de Moçambique, Património Mundial da UNESCO.",
    },
    badge: { en: "Heritage · 5 Days / 4 Nights", pt: "Património · 5 Dias / 4 Noites" },
    property: { en: "Grand Plaza Nampula Hotel & Hotel Omuhipiti", pt: "Grand Plaza Nampula Hotel & Hotel Omuhipiti" },
    location: { en: "Nampula & Ilha de Moçambique, Mozambique", pt: "Nampula e Ilha de Moçambique, Moçambique" },
    duration: { en: "5 Days / 4 Nights", pt: "5 Dias / 4 Noites" },
    validity: { en: "1 September – 18 December 2026", pt: "1 de Setembro – 18 de Dezembro de 2026" },
    mealPlan: { en: "Bed & Breakfast", pt: "Pequeno-Almoço Incluído" },
    pricePerPerson: "38.940,00",
    priceTotal: "77.880,00",
    currency: "ZAR",
    heroImg: nampulaIlhaHero,
    gallery: nampulaIlhaGallery,
    description: {
      en: "Five days and four nights through northern Mozambique, combining return flights and transfers with a guided Nampula city tour, a walking tour of the UNESCO-listed Ilha de Moçambique, and a sunset dhow cruise. Bed & breakfast throughout, staying at the Grand Plaza Nampula Hotel and Hotel Omuhipiti.",
      pt: "Cinco dias e quatro noites pelo norte de Moçambique, combinando voos e transfers de ida e volta com uma visita guiada à cidade de Nampula, um passeio a pé pela Ilha de Moçambique (Património Mundial da UNESCO) e um passeio de dhow ao pôr do sol. Regime de pequeno-almoço durante toda a estadia, com alojamento no Grand Plaza Nampula Hotel e no Hotel Omuhipiti.",
    },
    priceBreakdown: [
      { label: { en: "Flights (JNB–APL–JNB)", pt: "Voos (JNB–APL–JNB)" }, perPerson: "25.800,00", total: "51.600,00" },
      { label: { en: "Transfers", pt: "Transfers" }, perPerson: "6.400,00", total: "12.800,00" },
      { label: { en: "Day tours & excursions", pt: "Excursões e passeios" }, perPerson: "1.990,00", total: "3.980,00" },
      { label: { en: "Accommodation (4 nights, Bed & Breakfast)", pt: "Alojamento (4 noites, Pequeno-Almoço)" }, perPerson: "4.750,00", total: "9.500,00" },
    ],
    itinerary: [
      {
        day: { en: "Day 1 · Tue 01 Sep 2026", pt: "Dia 1 · Ter 01 Set 2026" },
        title: { en: "Arrival & Nampula City Tour", pt: "Chegada e Visita à Cidade de Nampula" },
        details: {
          en: [
            "Flight JNB–APL–JNB (subject to availability)",
            "Road transfer: Nampula Airport – Grand Plaza Nampula Hotel",
            "3-hour Nampula city tour: Rex, Serra Mesa hike, the Cathedral, National Ethnographic Museum, railway station, a traditional Capulana shop and Macua Waresta Central Market",
            "Check-in: Grand Plaza Nampula Hotel, Standard Double room, Bed & Breakfast",
          ],
          pt: [
            "Voo JNB–APL–JNB (sujeito a disponibilidade)",
            "Transfer rodoviário: Aeroporto de Nampula – Grand Plaza Nampula Hotel",
            "Visita de 3 horas à cidade de Nampula: Rex, subida à Serra Mesa, Catedral, Museu Etnográfico Nacional, estação ferroviária, uma loja tradicional de capulanas e o Mercado Central Macua Waresta",
            "Check-in: Grand Plaza Nampula Hotel, Quarto Duplo Standard, Pequeno-Almoço",
          ],
        },
      },
      {
        day: { en: "Day 2 · Wed 02 Sep 2026", pt: "Dia 2 · Qua 02 Set 2026" },
        title: { en: "Transfer to Ilha de Moçambique", pt: "Transfer para a Ilha de Moçambique" },
        details: {
          en: [
            "Road transfer: Grand Plaza Hotel – Hotel Omuhipiti",
            "Walking city tour of Ilha de Moçambique: Nossa Senhora do Baluarte, São Sebastião Fortress, Palácio de São Paulo, Vasco da Gama's house, the Hindu Temple, central market, Memorial Garden and the Hospital",
            "Check-in: Hotel Omuhipiti, Standard Double room, Bed & Breakfast",
          ],
          pt: [
            "Transfer rodoviário: Grand Plaza Hotel – Hotel Omuhipiti",
            "Visita a pé à Ilha de Moçambique: Nossa Senhora do Baluarte, Fortaleza de São Sebastião, Palácio de São Paulo, Casa de Vasco da Gama, Templo Hindu, mercado central, Jardim Memorial e o Hospital",
            "Check-in: Hotel Omuhipiti, Quarto Duplo Standard, Pequeno-Almoço",
          ],
        },
      },
      {
        day: { en: "Day 3 · Thu 03 Sep 2026", pt: "Dia 3 · Qui 03 Set 2026" },
        title: { en: "At Leisure", pt: "Dia Livre" },
        details: {
          en: ["Bed & breakfast at Hotel Omuhipiti", "Sunset dhow cruise with snacks & beverages, near the Fortress or Mangal da Cabeceira Pequena"],
          pt: ["Pequeno-almoço no Hotel Omuhipiti", "Passeio de dhow ao pôr do sol com snacks e bebidas, junto à Fortaleza ou ao Mangal da Cabeceira Pequena"],
        },
      },
      {
        day: { en: "Day 4 · Fri 04 Sep 2026", pt: "Dia 4 · Sex 04 Set 2026" },
        title: { en: "At Leisure", pt: "Dia Livre" },
        details: {
          en: ["Bed & breakfast at Hotel Omuhipiti"],
          pt: ["Pequeno-almoço no Hotel Omuhipiti"],
        },
      },
      {
        day: { en: "Day 5 · Sat 05 Sep 2026", pt: "Dia 5 · Sáb 05 Set 2026" },
        title: { en: "Departure", pt: "Partida" },
        details: {
          en: ["Road transfer: Hotel Omuhipiti – Nampula Airport", "Return flight APL–JNB"],
          pt: ["Transfer rodoviário: Hotel Omuhipiti – Aeroporto de Nampula", "Voo de regresso APL–JNB"],
        },
      },
    ],
    inclusions: {
      en: [
        "Return flights JNB–APL–JNB",
        "Return road transfers (Nampula Airport ⇄ Grand Plaza Hotel ⇄ Hotel Omuhipiti ⇄ Nampula Airport)",
        "1 night at Grand Plaza Nampula Hotel, Standard Double room, Bed & Breakfast",
        "3 nights at Hotel Omuhipiti, Standard Double room, Bed & Breakfast",
        "3-hour guided Nampula city tour",
        "Guided walking tour of Ilha de Moçambique",
        "Sunset dhow cruise with snacks & beverages",
      ],
      pt: [
        "Voos de ida e volta JNB–APL–JNB",
        "Transfers rodoviários de ida e volta (Aeroporto de Nampula ⇄ Grand Plaza Hotel ⇄ Hotel Omuhipiti ⇄ Aeroporto de Nampula)",
        "1 noite no Grand Plaza Nampula Hotel, Quarto Duplo Standard, Pequeno-Almoço",
        "3 noites no Hotel Omuhipiti, Quarto Duplo Standard, Pequeno-Almoço",
        "Visita guiada de 3 horas à cidade de Nampula",
        "Visita guiada a pé pela Ilha de Moçambique",
        "Passeio de dhow ao pôr do sol com snacks e bebidas",
      ],
    },
    exclusions: {
      en: ["Items of a personal nature", "Anything not mentioned above", "Excursions not listed"],
      pt: ["Itens de natureza pessoal", "Tudo o que não esteja mencionado acima", "Passeios não listados"],
    },
    important: {
      en: "Flights are subject to availability on the date of travel and may change without prior notice. Valid for new bookings only, 1 September – 18 December 2026.",
      pt: "Os voos estão sujeitos a disponibilidade na data da viagem e podem sofrer alterações sem aviso prévio. Válido apenas para novas reservas, de 1 de Setembro a 18 de Dezembro de 2026.",
    },
  },
];

export function getSpecialPackageBySlug(slug: string) {
  return specialPackages.find((pkg) => pkg.slug === slug);
}
