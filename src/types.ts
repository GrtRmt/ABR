export interface BusinessData {
  name: string;
  type: string;
  tagline: string;
  city: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappLink: string;
  email: string;
  claimsEmail: string;
  mapsUrl: string;
  description: string;
  openingHours: {
    morning: string;
    afternoon: string;
    appointmentNotice: string;
  };
  usps: {
    title: string;
    description: string;
  }[];
  services: {
    id: string;
    title: string;
    badge: string;
    shortDesc: string;
    features: string[];
    iconName: string;
  }[];
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredTiming: string;
  notes: string;
}

export interface DamageClaimFormData {
  policyNumberOrAddress: string;
  damageDate: string;
  damageType: string;
  description: string;
  emergencyMeasuresTaken: boolean;
  policeInvolved: boolean;
  policePvNumber?: string;
  thirdPartyOrNeighborInfo?: string;
  claimantName: string;
  claimantPhone: string;
  claimantEmail: string;
  claimantRole: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  imageUrl: string;
  imageCaption?: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole?: string;
  readTime: string;
  published: boolean;
  featured?: boolean;
}
