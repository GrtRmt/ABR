export interface AbrCoveragePillar {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  coveredItems: {
    title: string;
    description: string;
    icon: string;
  }[];
  practicalExample: string;
}

export interface AbrComparisonItem {
  category: 'materiële_schade' | 'burenhinder' | 'diefstal_werf' | 'algemeen';
  item: string;
  isCovered: boolean;
  explanation: string;
  detailBadge?: string;
}

export interface AbrRealCase {
  id: string;
  title: string;
  projectType: string;
  location: string;
  claimAmount: string;
  scenario: string;
  outcome: string;
  applicableSection: 'Afdeling 1 (Materiële Schade)' | 'Afdeling 2 (Burenhinder)' | 'No-Fault Regeling';
  tag: string;
}

export interface AbrFaq {
  question: string;
  answer: string;
  category: 'basis' | 'dekking' | 'kosten' | 'procedure';
}

export const ABR_HIGHLIGHTS = [
  {
    title: 'All-Risk Dekking',
    subtitle: 'Afdeling 1',
    description: 'Alles is verzekerd tenzij uitdrukkelijk uitgesloten: storm, brand, instorting, wateroverlast en uitvoeringsfouten.',
    icon: 'Shield',
  },
  {
    title: 'Foutloze Burenhinder',
    subtitle: 'Afdeling 2 (Art. 3.101 BW)',
    description: 'Schade aan buren door trillingen of bemaling wordt direct vergoed zonder dat een fout van de aannemer bewezen hoeft te worden.',
    icon: 'Home',
  },
  {
    title: 'No-Fault Principe',
    subtitle: 'Geen werfstilstand',
    description: 'De ABR-verzekering vergoedt de materiële herstellingskosten meteen. Geen maandenlange discussies tussen aannemers en architecten.',
    icon: 'Zap',
  },
  {
    title: 'Eén Centrale Polis',
    subtitle: 'Voor álle partijen',
    description: 'Bouwheer, hoofdaannemer, onderaannemers, architect, ingenieur en helpende vrienden zijn onder dezelfde polis beschermd.',
    icon: 'Users',
  },
];

export const ABR_SECTIONS: AbrCoveragePillar[] = [
  {
    id: 'afdeling-1',
    badge: 'Afdeling 1 • All-Risk',
    title: 'Materiële Schade aan het Bouwwerk',
    subtitle: 'Bescherming van de constructie, materialen en uitrusting tijdens de volledige bouwperiode',
    description:
      'Afdeling 1 is een "alle risico\'s"-dekking. Dit betekent dat elke materiële beschadiging, vernieling of verlies van het bouwwerk gedekt is, ongeacht de plotse en onvoorziene oorzaak, tenzij het specifiek in de voorwaarden uitgesloten is.',
    keyPoints: [
      'Geldig vanaf de eerste spadesteek tot aan de voorlopige oplevering',
      'Verlenging mogelijk met onderhoudstermijn van 12 of 24 maanden voor verborgen gebreken',
      'Inclusief bereddingskosten, opruimings- en afbraakkosten en erelonen voor herstelplannen',
      'Optioneel: dekking van het bestaande gebouw bij renovatie of uitbreiding',
    ],
    coveredItems: [
      {
        title: 'Natuurkrachten & Storm',
        description: 'Hevige windstoten, rukwinden, blikseminslag, hagel, overstroming of plotse hevige regenval die onafgewerkte gevels of daken beschadigen.',
        icon: 'CloudLightning',
      },
      {
        title: 'Instorting & Zetting',
        description: 'Onverwachte verzakking van de ondergrond, instorten van bekisting, scheuren in verse gewelven of falen van dragende elementen tijdens de opbouw.',
        icon: 'Building2',
      },
      {
        title: 'Uitvoeringsfouten & Naloperij',
        description: 'Vergissingen van een onderaannemer bij het plaatsen van leidingen, foutieve aansluitingen die waterschade veroorzaken, of beschadiging van reeds geplaatst werk.',
        icon: 'Wrench',
      },
      {
        title: 'Diefstal & Vandalisme',
        description: 'Diefstal van reeds ingebouwde of op de werf opgeslagen materialen (bv. warmtepomp, koperen leidingen, sanitair, isolatiepanelen) en moedwillige vernielingen.',
        icon: 'Lock',
      },
      {
        title: 'Brand, Ontploffing & Rook',
        description: 'Brand ontstaan door werkzaamheden met open vlam (bv. roofing branden), kortsluiting in de werfkast of een defect werftoestel.',
        icon: 'Flame',
      },
      {
        title: 'Bestaande Goederen (Renovatie)',
        description: 'Schade toegebracht aan het bestaande huis waarin of waaraan gewerkt wordt (bv. scheuren in bestaande dragende muren door doorbraak).',
        icon: 'Layers',
      },
    ],
    practicalExample:
      'Tijdens de ruwbouwfase trekt een zware najaarsstorm over Ledegem. Het nog niet volledig verankerde dakgebinte waait omver en stort neer op het net gegoten betondek van de eerste verdieping. Schade: €38.500. Dankzij Afdeling 1 wordt het materiaal en de heropbouw direct vergoed.',
  },
  {
    id: 'afdeling-2',
    badge: 'Afdeling 2 • Buitencontractuele Aansprakelijkheid',
    title: 'Schade aan Derden & Burenhinder (Art. 3.101 BW)',
    subtitle: 'Bescherming tegen claims van buren, voorbijgangers en aanpalende eigendommen',
    description:
      'Bouw- en graafwerken veroorzaken onvermijdelijk trillingen, bodemdrukveranderingen en grondwaterverlagingen. Afdeling 2 dekt uw aansprakelijkheid als bouwheer voor schade aan naburige gebouwen, inclusief foutloze burenhinder op basis van het Belgisch Burgerlijk Wetboek.',
    keyPoints: [
      'Dekt foutloze burenhinder (art. 3.101 BW, voorheen art. 544 BW)',
      'Buurman hoeft géén fout of schuld van aannemer te bewijzen om vergoed te worden',
      'Inclusief verdedigingskosten en erelonen van deskundigen bij expertise',
      'Voorkomt burenconflicten en jarenlange juridische procedures',
    ],
    coveredItems: [
      {
        title: 'Scheuren door Trillingen',
        description: 'Trillingen door zwaar werfverkeer, hei- of trilwerkzaamheden, of het inslaan van damwanden die scheuren veroorzaken in aanpalende woningen.',
        icon: 'Activity',
      },
      {
        title: 'Grondwaterbemaling & Droogzuiging',
        description: 'Verlaging van het grondwaterpeil voor het gieten van een kelder kan leiden tot differentiële zettingen en verzakkingen van buurpanden.',
        icon: 'Droplets',
      },
      {
        title: 'Ondergraving & Aansluitingsschade',
        description: 'Schade aan de funderingen of scheidingsmuren van de buren tijdens graafwerken pal tegen de perceelgrens.',
        icon: 'AlertTriangle',
      },
      {
        title: 'Lichamelijke Letsels aan Derden',
        description: 'Een voorbijganger die gewond raakt door vallend puin, een fietser die ten val komt door rondslingerend bouwmateriaal op het voetpad.',
        icon: 'HeartPulse',
      },
      {
        title: 'Stof-, Modder- & Waterschade',
        description: 'Aanzienlijke bevuiling of waterinfiltratie bij de buren ten gevolge van slechte werfafwatering of slijpwerken.',
        icon: 'Sparkles',
      },
      {
        title: 'Gerechts- & Expertisekosten',
        description: 'De kosten voor tegenexpertise, gerechtsdeskundigen en juridische bijstand worden integraal opgevangen.',
        icon: 'Scale',
      },
    ],
    practicalExample:
      'Bij het uitgraven van een kelder voor een nieuwbouw in Ledegem wordt bemaling geplaatst. De aanpalende woning vertoont 3 weken later diagonale scheuren in de voorgevel en living. Zonder discussie of de aannemer of architect een fout beging, vergoedt de ABR-verzekering via Afdeling 2 de herstellingskosten aan de buur (€22.400).',
  },
];

export const ABR_WHY_BOUWHEER = [
  {
    metric: '100% Zekerheid',
    title: 'U bent de begunstigde van de uitkering',
    bouwheer: 'De schadevergoeding wordt rechtstreeks aan u uitgekeerd, zodat u de herstellingswerken onmiddellijk kunt financieren.',
    contractor: 'Als de aannemer de polis heeft, keert de verzekeraar uit aan hem. Bij faillissement bent u het geld kwijt.',
    highlight: true,
  },
  {
    metric: 'Alle Partijen Gedekt',
    title: 'Geen hiaten tussen verschillende aannemers',
    bouwheer: 'Hoofdaannemer, elektricien, sanitairman, dakwerker, architect én zelfbouw zijn onder één dak gedekt.',
    contractor: 'Aannemers hebben vaak enkel een basispolis die uitsluitend hun eigen aandeel dekt. Discussies wie wat raakte zijn legio.',
    highlight: false,
  },
  {
    metric: 'No-Fault Afhandeling',
    title: 'Uw werf loopt géén vertraging op',
    bouwheer: 'De ABR-polis herstelt meteen. Discussies over wie aansprakelijk is worden achteraf tussen de verzekeraars uitgevochten.',
    contractor: 'Als aannemers elkaar de schuld geven, blokkeert de werf dikwijls 6 tot 18 maanden in afwachting van een gerechtelijk expert.',
    highlight: true,
  },
  {
    metric: 'Vrijwilligers & Zelfbouw',
    title: 'Hulp van vrienden en familie meeverzekerd',
    bouwheer: 'Helpt een familielid of vriend een handje op de werf? Schade aan het bouwwerk blijft conform gedekt.',
    contractor: 'Polissen van aannemers sluiten particuliere zelfbouwers en vriendendiensten categorisch uit.',
    highlight: false,
  },
  {
    metric: 'Controle over Waarborgen',
    title: 'Geen verrassingen in de kleine lettertjes',
    bouwheer: 'U kiest zelf de vrijstelling, onderhoudstermijn (bv. 24 maanden) en optie bestaande goederen.',
    contractor: 'U weet nooit of de aannemer zijn premie tijdig betaalde of welke strenge uitsluitingen zijn polis bevat.',
    highlight: false,
  },
];

export const ABR_IPID_COMPARISON: AbrComparisonItem[] = [
  {
    category: 'materiële_schade',
    item: 'Plotse en onvoorziene materiële schade door storm, waterinfiltratie of hagel',
    isCovered: true,
    explanation: 'Integraal gedekt in Afdeling 1 vanaf start werken tot voorlopige oplevering.',
    detailBadge: 'Basisdekking Afdeling 1',
  },
  {
    category: 'materiële_schade',
    item: 'Instorting van gewelven, muren, bekisting of steigers tijdens de constructie',
    isCovered: true,
    explanation: 'Gedekt inclusief heropbouw en bereddingskosten.',
    detailBadge: 'Basisdekking Afdeling 1',
  },
  {
    category: 'materiële_schade',
    item: 'Uitvoeringsfouten van aannemers of onderaannemers met schade tot gevolg',
    isCovered: true,
    explanation: 'De gevolgschade aan het bouwwerk is gedekt onder het No-Fault principe.',
    detailBadge: 'All-Risk Waarborg',
  },
  {
    category: 'diefstal_werf',
    item: 'Diefstal van reeds ingebouwde of gemonteerde materialen (bv. warmtepomp, leidingen)',
    isCovered: true,
    explanation: 'Gedekt mits de werf voldaan heeft aan gangbare preventievoorwaarden.',
    detailBadge: 'Diefstalwaarborg',
  },
  {
    category: 'burenhinder',
    item: 'Foutloze burenhinder (Art. 3.101 BW) zoals scheurvorming bij buren door trillingen',
    isCovered: true,
    explanation: 'Gedekt in Afdeling 2. Geen schuld of fout van aannemer vereist!',
    detailBadge: 'Afdeling 2 Burenhinder',
  },
  {
    category: 'burenhinder',
    item: 'Zettingsschade aan aanpalende panden door grondwaterbemaling (droogzuiging)',
    isCovered: true,
    explanation: 'Gedekt mits voorafgaande tegensprekelijke plaatsbeschrijving werd opgemaakt.',
    detailBadge: 'Afdeling 2 Cruciaal',
  },
  {
    category: 'materiële_schade',
    item: 'Schade aan bestaande constructie van de bouwheer bij een verbouwing of aanbouw',
    isCovered: true,
    explanation: 'Gedekt via de optionele uitbreiding "Bestaande goederen van de bouwheer".',
    detailBadge: 'Optionele Uitbreiding',
  },
  {
    category: 'materiële_schade',
    item: 'Onderhoudstermijn na voorlopige oplevering (12 tot 24 maanden)',
    isCovered: true,
    explanation: 'Dekt schade ontstaan tijdens bouwfase die zich pas later manifesteert.',
    detailBadge: 'Garantieperiode',
  },
  {
    category: 'algemeen',
    item: 'Zuiver esthetische gebreken die de stabiliteit of werking niet aantasten (bv. klein krasje op tegel)',
    isCovered: false,
    explanation: 'Enkel materiële schade die herstel of vervanging vereist valt onder de ABR.',
    detailBadge: 'Uitsluiting',
  },
  {
    category: 'algemeen',
    item: 'Normale slijtage, oxidatie of corrosie door blootstelling aan weersomstandigheden',
    isCovered: false,
    explanation: 'Schade moet een plotse, onvoorziene oorzaak hebben.',
    detailBadge: 'Uitsluiting',
  },
  {
    category: 'algemeen',
    item: 'Vertragingsschade, contractuele boetes wegens laattijdige oplevering',
    isCovered: false,
    explanation: 'Contractuele boetes en indirecte economische verliezen zijn wettelijk uitgesloten.',
    detailBadge: 'Uitsluiting',
  },
  {
    category: 'algemeen',
    item: 'Werken uitgevoerd zonder de vereiste omgevingsvergunning (stedenbouwkundige overtreding)',
    isCovered: false,
    explanation: 'Een wettelijke omgevingsvergunning is een basisvoorwaarde voor de geldigheid.',
    detailBadge: 'Uitsluiting',
  },
];

export const ABR_REAL_CASES: AbrRealCase[] = [
  {
    id: 'case-1',
    title: 'Droogzuiging kelder leidt tot scheuren bij beide buren',
    projectType: 'Nieuwbouw vrijstaande villa met kelder',
    location: 'Sint-Eloois-Winkel (Ledegem)',
    claimAmount: '€31.250 vergoed',
    scenario:
      'Voor de kelderbouw werd het grondwaterpeil gedurende 6 weken verlaagd. Zowel de linker- als rechterbuur stelden vervolgens haarscheuren en klemmende deuren vast.',
    outcome:
      'Doordat vooraf een tegensprekelijke plaatsbeschrijving was opgemaakt, werd via Afdeling 2 van de ABR-polis onmiddellijk een vergoeding voor herstel uitgekeerd zonder gerechtelijke procedures.',
    applicableSection: 'Afdeling 2 (Burenhinder)',
    tag: 'Burenhinder art. 3.101 BW',
  },
  {
    id: 'case-2',
    title: 'Herfststorm tilt onafgewerkte spanten op en breekt geveltop',
    projectType: 'Renovatie & dakverdieping gezinswoning',
    location: 'Ledegem centrum',
    claimAmount: '€27.800 vergoed',
    scenario:
      'Tijdens de ruwbouwfase sloeg een felle storm onder de nog niet beklede kapconstructie. Het houten skelet begaf het en trok de nieuw gemetselde geveltop mee naar beneden.',
    outcome:
      'Afdeling 1 vergoedde integraal de opruiming, nieuwe houten spanten, stabiliteitsherberekening van de architect en het opnieuw opmetselen van de gevel.',
    applicableSection: 'Afdeling 1 (Materiële Schade)',
    tag: 'Storm & Natuurgeweld',
  },
  {
    id: 'case-3',
    title: 'Diefstal van geplaatste warmtepomp en koperbekabeling',
    projectType: 'Nieuwbouw BEN-woning',
    location: 'Moorsele',
    claimAmount: '€14.600 vergoed',
    scenario:
      'In het weekend tussen de plaatsing van de technische installatie en de afwerking forceerden dieven het werfslot en ontvreemdden de splinternieuwe warmtepomp-buitenunit en alle getrokken koperkabels.',
    outcome:
      'De diefstaldekking van de ABR-polis vergoedde het materiaal en de kosten van de installateur om alle bekabeling opnieuw in te trekken.',
    applicableSection: 'Afdeling 1 (Materiële Schade)',
    tag: 'Diefstal & Vandalisme',
  },
  {
    id: 'case-4',
    title: 'Waterschade door defect koppelstuk tijdens chapewerken',
    projectType: 'Verbouwing herenhuis',
    location: 'Kortrijk - Ledegem',
    claimAmount: '€18.900 vergoed',
    scenario:
      'Tijdens de chapewerken sprong een perskoppeling van de sanitaire leiding op het verdiep. Duizenden liters water sijpelden door naar de pas gestuukte plafonds en de authentieke houten balklagen beneden.',
    outcome:
      'Dankzij het No-Fault principe werd niet gediscussieerd of de loodgieter dan wel de chapper het koppelstuk had geraakt. De ABR-polis betaalde de droging en herstelwerken meteen uit.',
    applicableSection: 'No-Fault Regeling',
    tag: 'No-Fault Snelle Vergoeding',
  },
];

export const ABR_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Voorstudie & Plaatsbeschrijving',
    subtitle: 'Vóór de eerste spadesteek',
    description:
      'Remaut Verzekeringen adviseert u over de nodige waarborgen op basis van uw bouwplannen en meetstaat. Wij wijzen u op het belang van een tegensprekelijke plaatsbeschrijving van de aanpalende buren vóór de start van grond- of afbraakwerken.',
    tips: 'Laat een deskundige een omstandige plaatsbeschrijving met foto’s opmaken. Dit sluit latere betwistingen over bestaande scheurtjes bij buren uit.',
  },
  {
    step: '02',
    title: 'Opmaken & Onderschatting Vermijden',
    subtitle: 'Polis op maat van uw project',
    description:
      'We bepalen samen de juiste verzekerde bouwwaarde (reële kostprijs van materialen en werkuren, exclusief btw en grondwaarde). We stemmen de duurtijd af op uw werfplanning met marge voor eventuele vertragingen.',
    tips: 'Verzeker bij renovatie ook de "Bestaande goederen" mee om uw huidig pand optimaal te beveiligen.',
  },
  {
    step: '03',
    title: 'Bescherming Tijdens de Werken',
    subtitle: 'Van ruwbouw tot technieken',
    description:
      'Vanaf dag één zijn alle betrokken aannemers, onderaannemers, de architect en helpende familieleden beschermd onder één centrale polis. U heeft één aanspreekpunt voor al uw vragen.',
    tips: 'Lopen de werken vertraging op? Eén telefoontje naar Remaut volstaat om de termijn van de polis soepel te verlengen.',
  },
  {
    step: '04',
    title: 'Schade? No-Fault Direct Herstel',
    subtitle: 'Persoonlijke bijstand in Ledegem',
    description:
      'Bij storm, diefstal of een melding van de buren contacteert u direct Remaut Verzekeringen. Wij schakelen indien nodig direct een expert in en de schade wordt vergoed zonder dat de werf stilvalt.',
    tips: 'Maak onmiddellijk duidelijke foto’s van de schade en neem bewarende maatregelen om erger te voorkomen.',
  },
  {
    step: '05',
    title: 'Oplevering & Onderhoudswaarborg',
    subtitle: '12 tot 24 maanden nazorg',
    description:
      'Bij de voorlopige oplevering schakelen we naadloos over naar uw definitieve brandverzekering. De ABR onderhoudswaarborg blijft echter nog 12 of 24 maanden actief voor verborgen gebreken die tijdens de bouw zijn ontstaan.',
    tips: 'Hierdoor geniet u van een waterdichte overgang tussen de bouwfase en het bewonen van uw droomwoning.',
  },
];

export const ABR_FAQS: AbrFaq[] = [
  {
    category: 'basis',
    question: 'Is een ABR-verzekering wettelijk verplicht in België?',
    answer:
      'Nee, een ABR-verzekering is voor een particuliere bouwheer in België wettelijk niet verplicht, maar wordt unaniem aangeraden door architecten, banken en notarissen. Zonder ABR bent u bij materiële schade of zettingsschade bij de buren aangewezen op lange gerechtelijke procedures. De wet verplicht sinds 2018 wel de 10-jarige aansprakelijkheidsverzekering voor aannemers en architecten (stabiliteit), maar die dekt géén werfschade, storm of diefstal tijdens de bouw.',
  },
  {
    category: 'dekking',
    question: 'Waarom volstaat de burgerlijke aansprakelijkheidsverzekering (BA) van mijn aannemer niet?',
    answer:
      'De BA-verzekering van een aannemer keert enkel uit als er een onweerlegbare fout en aansprakelijkheid van díé specifieke aannemer bewezen wordt. Als meerdere aannemers op de werf naar elkaar wijzen (bv. de elektricien naar de chapper, of de grondwerker naar de stabiliteitsingenieur), keert niemand uit en kan uw werf maandenlang stilliggen. De ABR-verzekering werkt volgens het No-Fault principe: de schade aan uw werf wordt meteen vergoed, ongeacht wie de fout beging.',
  },
  {
    category: 'dekking',
    question: 'Wat is het verschil tussen Afdeling 1 en Afdeling 2 van de ABR-polis?',
    answer:
      'Afdeling 1 dekt de materiële schade aan uw eigen bouwwerk, de gebruikte bouwmaterialen, uitrusting en constructie (door storm, brand, diefstal van verwerkte goederen, instorting, uitvoeringsfouten). Afdeling 2 dekt uw buitencontractuele aansprakelijkheid en foutloze burenhinder (Art. 3.101 BW) voor schade aan buren of derden (zoals scheuren in de gevel van de aanpalende woning door trillingen of bemaling).',
  },
  {
    category: 'kosten',
    question: 'Wat kost een ABR-verzekering gemiddeld?',
    answer:
      'De premie van een ABR-verzekering is een éénmalige premie die geldt voor de gehele duur van de bouwwerken (bv. 12 tot 24 maanden). Gemiddeld bedraagt de premie tussen 0,25% en 0,50% van de totale bouwwaarde (excl. btw en grond). Voor een nieuwbouwwoning met een bouwwaarde van €350.000 ligt de éénmalige premie doorgaans tussen de €950 en €1.500, afhankelijk van het type werken, grondwaterbemaling en de nabijheid van buren.',
  },
  {
    category: 'procedure',
    question: 'Is een voorafgaande plaatsbeschrijving bij de buren verplicht?',
    answer:
      'Voor de dekking van foutloze burenhinder (Afdeling 2) bij aanpalende woningen of percelen binnen een invloedszone (bv. 10 tot 25 meter bij zware graafwerken of bemaling) eisen verzekeraars doorgaans een voorafgaande tegensprekelijke plaatsbeschrijving. Hiermee wordt de staat van het buurpand vóór de start van de werken objectief vastgelegd met foto’s. Zo kunnen buren achteraf geen reeds bestaande oude barsten op uw werf verhalen, en worden nieuwe scheuren vlot vergoed.',
  },
  {
    category: 'dekking',
    question: 'Zijn vriendendiensten en familieleden die komen helpen meeverzekerd?',
    answer:
      'Ja! Wanneer u als bouwheer zelf de ABR-polis onderschrijft, is de schade aan het bouwwerk gedekt ongeacht wie de handeling stelde. Als een vriend of familielid tijdens het helpen per ongeluk een leiding doorboort of een zware poutrel laat vallen waardoor schade ontstaat, dekt Afdeling 1 de materiële herstellingskosten.',
  },
  {
    category: 'procedure',
    question: 'Wat gebeurt er als de bouwwerken vertraging oplopen en de termijn verstrijkt?',
    answer:
      'Geen probleem. Zolang u ons vóór de voorziene einddatum van de polis verwittigt, kan Remaut Verzekeringen een verlenging van de bouwtermijn aanvragen tegen een beperkte bijpremie per bijkomende maand of kwartaal. Zo blijft uw werf ononderbroken verzekerd tot aan de effectieve voorlopige oplevering.',
  },
  {
    category: 'basis',
    question: 'Waarom sluit ik de ABR-verzekering best af via Remaut Verzekeringen in Ledegem?',
    answer:
      'Als onafhankelijk makelaar behartigen wij uitsluitend úw belangen. Wij zorgen dat de juiste clausules (zoals bestaande goederen bij renovatie, diefstaldekking en 24 maanden onderhoudswaarborg) correct zijn opgenomen. Bij een schadegeval of discussie met een buurman hoeft u niet met een anoniem callcenter te bellen: Remaut Verzekeringen komt persoonlijk ter plaatse in Ledegem en omstreken, overlegt met de schade-expert en zorgt voor een snelle uitbetaling.',
  },
];
