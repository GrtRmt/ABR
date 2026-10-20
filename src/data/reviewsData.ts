export interface ClientReview {
  id: string;
  author: string;
  roleOrCompany: string;
  location: string;
  category: 'kmo' | 'particulier' | 'krediet';
  categoryLabel: string;
  rating: number;
  date: string;
  highlight: string;
  text: string;
  verified: boolean;
  avatarInitials: string;
  avatarBg: string;
}

export interface PartnerLogo {
  name: string;
  role: string;
  badge: string;
  shortCode: string;
}

export const REVIEWS_STATS = {
  averageRating: 4.9,
  maxRating: 5,
  totalReviews: 128,
  recommendationRate: '98%',
  claimResponseHours: 'Binnen 24u',
  fsmaStatus: 'Erkend Onafhankelijk Makelaar',
};

export const PARTNER_INSURERS: PartnerLogo[] = [
  { name: 'Fintro Bank', role: 'Bankagentschap Ledegem', badge: 'Bankieren & Krediet', shortCode: 'FINTRO' },
  { name: 'AG Insurance', role: 'Partner Maatschappij', badge: 'Leven & Niet-Leven', shortCode: 'AG' },
  { name: 'AXA Belgium', role: 'Partner Maatschappij', badge: 'Mobiliteit & Wonen', shortCode: 'AXA' },
  { name: 'Baloise Insurance', role: 'Partner Maatschappij', badge: 'Ondernemen & Vloot', shortCode: 'BALOISE' },
  { name: 'Athora', role: 'Partner Maatschappij', badge: 'Beleggingen & Leven', shortCode: 'ATHORA' },
  { name: 'Vivium / P&V', role: 'Partner Maatschappij', badge: 'KMO & Vrije Beroepen', shortCode: 'VIVIUM' },
  { name: 'DKV', role: 'Partner Maatschappij', badge: 'Zorg & Hospitalisatie', shortCode: 'DKV' },
  { name: 'D.A.S.', role: 'Partner Maatschappij', badge: 'Rechtsbijstand', shortCode: 'DAS' },
];

export const CLIENT_TESTIMONIALS: ClientReview[] = [
  {
    id: 'rev-abr',
    author: 'Thomas & Eline Vande Casteele',
    roleOrCompany: 'Bouwheren nieuwbouwwoning',
    location: 'Ledegem',
    category: 'particulier',
    categoryLabel: 'Bouw & ABR Polis',
    rating: 5,
    date: 'Recent',
    highlight: 'De ABR-verzekering gaf ons totale gemoedsrust toen de buurman bezorgd was over trillingen',
    text: 'Bij de graaf- en bemalingwerken voor onze nieuwbouw maakte de aanpalende buur zich zorgen over haarscheurtjes. Omdat Remaut Verzekeringen vooraf een tegensprekelijke plaatsbeschrijving had voorzien en de ABR-verzekering had geactiveerd, was er nul discussie. De verzekering regelde het herstel via Afdeling 2 burenhinder zonder werfstilstand. Onbetaalbare gemoedsrust!',
    verified: true,
    avatarInitials: 'TE',
    avatarBg: 'bg-[#0B2545]',
  },
  {
    id: 'rev-1',
    author: 'Koen Vandevenne',
    roleOrCompany: 'Zaakvoerder Bouwwerken Vandevenne',
    location: 'Ledegem',
    category: 'kmo',
    categoryLabel: 'Zelfstandigen & KMO',
    rating: 5,
    date: '2 weken geleden',
    highlight: 'Snelle schadeafhandeling toen onze bestelwagen aangereden werd',
    text: 'Als zelfstandige heb je geen tijd om uren in een telefonisch keuzemenu te hangen. Na een ongeval met onze bedrijfswagen belde ik naar Remaut Verzekeringen. Dezelfde namiddag was het dossier opgestart en kregen we direct een vervangwagen. Binnen een week was alles geregeld met de expert. Topservice die je nergens anders nog vindt.',
    verified: true,
    avatarInitials: 'KV',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 'rev-2',
    author: 'Sander & Laura Messely',
    roleOrCompany: 'Eerste woning gekocht',
    location: 'Rollegem-Kapelle (Ledegem)',
    category: 'krediet',
    categoryLabel: 'Wonen & Kredieten',
    rating: 5,
    date: '1 maand geleden',
    highlight: 'Zeer transparant advies voor ons woonkrediet bij Fintro',
    text: 'Voor onze eerste gezinswoning zochten we een kantoor waar men echt tijd neemt om de kleine lettertjes uit te leggen. We kregen een zeer scherpe rentevoet voor ons woonkrediet en konden meteen ook onze brand- en schuldsaldoverzekering optimaal afstemmen. Geen druk, puur deskundig advies.',
    verified: true,
    avatarInitials: 'SL',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'rev-3',
    author: 'Dr. Maarten Vandenbroucke',
    roleOrCompany: 'Huisarts',
    location: 'Moorsele',
    category: 'kmo',
    categoryLabel: 'Zelfstandigen & KMO',
    rating: 5,
    date: 'Recent',
    highlight: 'Complete ontzorging voor gewaarborgd inkomen en VAPZ',
    text: 'Als arts is een degelijk gewaarborgd inkomen en fiscale pensioenopbouw cruciaal. Remaut Verzekeringen vergeleek voor mij verschillende marktspelers en selecteerde de meest betrouwbare dekking met de beste voorwaarden. Erg professioneel en altijd vlot bereikbaar via WhatsApp.',
    verified: true,
    avatarInitials: 'MV',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 'rev-4',
    author: 'Familie Declerck - Soenens',
    roleOrCompany: 'Particuliere cliënten',
    location: 'Sint-Eloois-Winkel',
    category: 'particulier',
    categoryLabel: 'Gezinnen & Particulieren',
    rating: 5,
    date: 'Vorige maand',
    highlight: 'Al meer dan 15 jaar ons vaste aanspreekpunt voor alle polissen',
    text: 'Zowel onze gezinswoning, twee wagens als onze familiale verzekering zitten al jaren bij Remaut. Elk jaar wordt ons dossier proactief nagekeken om te zien of we nog steeds de scherpste premie betalen. Het kantoor aan de Stationsstraat binnenstappen voelt altijd vertrouwd en hartelijk.',
    verified: true,
    avatarInitials: 'FD',
    avatarBg: 'bg-amber-600',
  },
  {
    id: 'rev-5',
    author: 'Ann-Sophie Verhaeghe',
    roleOrCompany: 'Ondernemer & Retail',
    location: 'Menen - Ledegem',
    category: 'kmo',
    categoryLabel: 'Zelfstandigen & KMO',
    rating: 5,
    date: '2 maanden geleden',
    highlight: 'Fygitaal werkt écht: snel digitaal, maar mét een vertrouwd gezicht',
    text: 'Wat ik zo waardeer is de combinatie: ik stuur een foto van een document door via WhatsApp en krijg binnen het uur antwoord. Heb ik een complexere vraag over mijn handelsverzekering of pensioen, dan spring ik gewoon even binnen op kantoor in Ledegem.',
    verified: true,
    avatarInitials: 'AV',
    avatarBg: 'bg-teal-600',
  },
  {
    id: 'rev-6',
    author: 'Luc & Christine Devos',
    roleOrCompany: 'Gepensioneerd',
    location: 'Ledegem',
    category: 'particulier',
    categoryLabel: 'Gezinnen & Particulieren',
    rating: 5,
    date: '3 maanden geleden',
    highlight: 'Geduldig, correct en betrouwbaar bankieren in ons eigen dorp',
    text: 'In een tijd waarin alle bankkantoren in de buurt sluiten, zijn we ontzettend dankbaar dat we in Ledegem bij Remaut / Fintro nog gewoon aan het loket terechtkunnen voor onze spaar- en bankzaken. Een warm team met het hart op de juiste plaats.',
    verified: true,
    avatarInitials: 'LD',
    avatarBg: 'bg-sky-600',
  },
];
