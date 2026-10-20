import { BusinessData } from '../types';

export const BUSINESS_INFO: BusinessData = {
  name: 'REMAUT VERZEKERINGEN',
  type: 'ONAFHANKELIJK VERZEKERINGSMAKELAAR',
  tagline: 'Leef, werk, handel, onderneem in alle zekerheid',
  city: 'Ledegem',
  address: 'Stationsstraat 111, 8880 Ledegem',
  phone: '056/50.96.03',
  phoneRaw: '+3256509603',
  whatsapp: '056/50.96.03',
  whatsappRaw: '+3256509603',
  whatsappLink: 'https://wa.me/3256509603?text=Beste%20Remaut%20Verzekeringen%2C%20ik%20wens%20graag%20een%20afspraak%20te%20maken.',
  email: 'info@remaut.eu',
  claimsEmail: 'schade@remaut.eu',
  mapsUrl: 'https://maps.app.goo.gl/UHhrPkNmsWg7CYDy8',
  description: 'ONAFHANKELIJK VERZEKERINGSMAKELAAR & FINTRO BANKIER',
  openingHours: {
    morning: '08:30 - 12:00',
    afternoon: '13:30 - 17:30',
    appointmentNotice: 'Maandag t/m vrijdag open tijdens kantooruren. Buiten kantooruren steeds mogelijk op afspraak.',
  },
  usps: [
    {
      title: 'ONAFHANKELIJK',
      description: 'Als onafhankelijk makelaar zijn we niet gebonden aan één specifieke maatschappij. We vergelijken de markt en kiezen objectief de oplossing die optimaal aansluit bij uw situatie.',
    },
    {
      title: 'OPLOSSINGSGERICHT',
      description: 'Geen standaardantwoorden, maar helder en doelgericht advies op maat. Van preventief risicobeheer tot snelle en doortastende begeleiding bij schade.',
    },
    {
      title: 'FYGITAAL',
      description: 'Het beste van twee werelden: een warm en persoonlijk onthaal in ons fysieke kantoor in de Stationsstraat te Ledegem, gecombineerd met vlotte digitale bereikbaarheid via WhatsApp, telefoon en mail.',
    },
  ],
  services: [
    {
      id: 'verzekeren',
      title: 'VERZEKEREN',
      badge: 'Zekerheid op maat',
      shortDesc: 'Doordachte bescherming voor particulieren, gezinnen, zelfstandigen en kmo\'s. Zorgeloos leven en ondernemen met de juiste dekking.',
      features: [
        'Woning, brand en inboedel',
        'Voertuigen (auto, motor, bestelwagen, fiets)',
        'Familiale & burgerlijke aansprakelijkheid',
        'Hospitalisatie en persoonsverzekeringen',
        'Beroeps- en bedrijfsaansprakelijkheid',
      ],
      iconName: 'ShieldCheck',
    },
    {
      id: 'sparen-beleggen',
      title: 'SPAREN EN BELEGGEN',
      badge: 'Toekomst & Vermogen',
      shortDesc: 'Transparant advies voor vermogensopbouw, pensioenvoorziening en doordacht sparen met oog op uw persoonlijke doelen.',
      features: [
        'Fiscaal voordelig pensioensparen',
        'Lange termijn sparen',
        'Beleggingsfondsen & spaarplannen',
        'Vermogensstructurering & overdracht',
        'Gepersonaliseerd risicoprofiel',
      ],
      iconName: 'TrendingUp',
    },
    {
      id: 'lenen',
      title: 'LENEN',
      badge: 'Financiering op maat',
      shortDesc: 'Heldere kredietoplossingen voor uw woonproject, verbouwing, wagen of zakelijke investeringen met duidelijke voorwaarden.',
      features: [
        'Hypothecair woonkrediet',
        'Renovatielening & energielening',
        'Autolening & mobiliteitskrediet',
        'Lening op afbetaling',
        'Investeringskrediet voor zelfstandigen',
      ],
      iconName: 'Home',
    },
    {
      id: 'lokaal-bankieren',
      title: 'LOKAAL BANKIEREN',
      badge: 'Fintro Bankier Ledegem',
      shortDesc: 'Als officieel Fintro bankier bieden we betrouwbare en toegankelijke bankdiensten met een vertrouwd gezicht in uw eigen gemeente.',
      features: [
        'Zicht- en spaarrekeningen',
        'Veilig digitaal & mobiel bankieren',
        'Vaste adviseurs die uw situatie kennen',
        'Persoonlijke service aan het loket of op afspraak',
        'Ondersteuning voor particulieren en ondernemers',
      ],
      iconName: 'Building2',
    },
  ],
};

export const FAQ_ITEMS = [
  {
    question: 'Wat is het concrete voordeel van een onafhankelijk verzekeringsmakelaar?',
    answer: 'Een bankverzekeraar of directe maatschappij mag uitsluitend zijn eigen producten aanbieden. Als onafhankelijk makelaar vergelijkt Remaut Verzekeringen verschillende verzekeraars op de markt. Wij behartigen exclusief úw belangen en zoeken naar de beste verhouding tussen dekking, franchise en premie.',
  },
  {
    question: 'Wat houdt jullie "fygitale" werkwijze in?',
    answer: '"Fygitaal" combineert het beste van een fysiek kantoor met digitale efficiëntie. U bent altijd welkom in ons kantoor aan de Stationsstraat 111 in Ledegem voor een persoonlijk gesprek aan tafel. Tezelfdertijd regelt u dringende vragen of documenten eenvoudig via WhatsApp, telefoon of e-mail.',
  },
  {
    question: 'Kan ik bij jullie terecht voor zowel mijn bankzaken als verzekeringen?',
    answer: 'Jazeker. Als onafhankelijk verzekeringsmakelaar én Fintro bankier bieden we u één centraal, vertrouwd aanspreekpunt voor uw verzekeringen, kredieten, beleggingen en dagelijkse bankverrichtingen.',
  },
  {
    question: 'Zijn afspraken mogelijk buiten de standaard openingsuren?',
    answer: 'Ja. Onze vaste openingsuren zijn van 08:30 tot 12:00 en van 13:30 tot 17:30 (maandag t/m vrijdag). Mocht dit voor uw werk of agenda moeilijk passen, dan maken we met plezier een afspraak op een ander tijdstip.',
  },
];
