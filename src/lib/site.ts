export const site = {
  name: "Ameri-Climate",
  legalName: "Ameri-Climate Heating Ventilation & Air Conditioning",
  tagline: "Commercial HVAC Built for Demanding Projects",
  description:
    "Ameri-Climate grew from a local Yucaipa HVAC business into a commercial contractor serving projects across Southern California, from hospitality to public-sector work.",
  phoneDisplay: "(909) 730-8523",
  phoneHref: "tel:+19097308523",
  email: "info@ameri-climate.com",
  emailHref: "mailto:info@ameri-climate.com",
  addressLine: "34428 Yucaipa Blvd. #E106",
  cityLine: "Yucaipa, CA 92399",
  hours: "Monday–Friday, 7:00am–4:00pm",
  owner: "Joe DeMarco",
  since: "2011",
  cslb: "958444",
  cslbUrl:
    "https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=958444",
  originalUrl: "https://www.ameri-climate.com/",
  contactUrl: "https://www.ameri-climate.com/contact",
} as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export type Project = {
  location: string;
  title: string;
  year: string | null;
  body: string;
  image: string | null;
  imageAlt: string | null;
};

export const projects: Project[] = [
  {
    location: "Anaheim",
    title: "Staybridge Suites",
    year: "2017",
    body: "First-party site: all HVAC work for this hotel, located near the Disneyland Resort.",
    image: null,
    imageAlt: null,
  },
  {
    location: "Loma Linda",
    title: "Holiday Inn Express",
    year: null,
    body: "First-party site: completed during the hotel’s construction period, near Interstate 10.",
    image: "/assets/first-party/gallery-2C5A1626.jpg",
    imageAlt:
      "Holiday Inn Express & Suites exterior from Ameri-Climate’s project gallery",
  },
  {
    location: "Mission Viejo",
    title: "Hampton Inn & Suites",
    year: null,
    body: "First-party site: heating and air conditioning for this hospitality project.",
    image: null,
    imageAlt: null,
  },
  {
    location: "Palmdale",
    title: "Home2Suites",
    year: null,
    body: "First-party site: hotel HVAC serving individual guest rooms.",
    image: null,
    imageAlt: null,
  },
  {
    location: "Vandenberg",
    title: "Air Force Base",
    year: null,
    body: "First-party site: civilian-partner HVAC work that required special certifications and background clearances to enter and work on the base.",
    image: null,
    imageAlt: null,
  },
  {
    location: "Morongo Basin",
    title: "Residential treatment center",
    year: null,
    body: "First-party site: air-conditioning systems for individual rooms at a residential treatment center.",
    image: null,
    imageAlt: null,
  },
];
