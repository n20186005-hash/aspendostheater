import type { Locale } from '../i18n';

export interface Card {
  title: string;
  body: string;
}

export interface LabelledCard extends Card {
  label: string;
}

export interface SourceItem {
  name: string;
  href: string;
  note: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SiteContent {
  /** <title> ve Open Graph metinleri */
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    history: string;
    visit: string;
    transport: string;
    route: string;
    sources: string;
    faq: string;
  };
  hero: {
    badges: { period: string; heritage: string; rating: string };
    titleLead: string;
    titleAccent: string;
    tagline: string;
    lead: string;
    ctaMap: string;
    ctaPlan: string;
    imageAlt: string;
  };
  facts: LabelledCard[];
  crumbs: string[];
  story: {
    eyebrow: string;
    titlePrefix: string;
    titleAccent: string;
    paragraphs: string[];
    stats: LabelledCard[];
    figureCaption: string;
    interiorAlt: string;
  };
  architecture: {
    eyebrow: string;
    titlePlain: string;
    titleAccent: string;
    body: string;
    noteLabel: string;
    noteBody: string;
    stageAlt: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    cards: LabelledCard[];
    noteLabel: string;
    noteBody: string;
  };
  route: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: Card[];
  };
  photos: {
    eyebrow: string;
    title: string;
    cards: Card[];
    detailAlt: string;
  };
  transport: {
    eyebrow: string;
    title: string;
    modes: Card[];
    addressLabel: string;
    plusCodeLabel: string;
    ctaMap: string;
    mapTitle: string;
  };
  practical: {
    parking: LabelledCard;
    bestTime: LabelledCard;
  };
  surroundings: {
    eyebrow: string;
    title: string;
    cards: LabelledCard[];
    aqueductCaption: string;
    aqueductAlt: string;
  };
  foodStay: {
    food: { eyebrow: string; title: string; items: Card[] };
    stay: { eyebrow: string; title: string; items: Card[] };
  };
  sources: {
    eyebrow: string;
    title: string;
    items: SourceItem[];
    freshnessLabel: string;
    freshnessBody: string;
    creditLabel: string;
    creditBody: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  footer: {
    disclaimer: string;
    locationLabel: string;
    directions: string;
    links: { map: string; museum: string; unesco: string };
    photoCredit: string;
  };
  labels: {
    rating: string;
    duration: string;
    price: string;
    hours: string;
  };
}

export type SiteContentMap = Record<Locale, SiteContent>;
