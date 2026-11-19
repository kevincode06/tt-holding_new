import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import pageHeroImg from "../assets/page-hero.jpg";
import quoteImg from "../assets/quote.jpg";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";

export const company = {
  name: "TT Holding",
  slogan: "Unveil the beauty of Africa",
  founded: 2016,
  address: "51 Haut Congo, Gombe Commune, Kinshasa, RDC",
  phones: ["+243 832 345 896", "+243 851 954 898"],
  email: "info@ttholding.net",
};

export const images = {
  hero: heroImg,
  about: aboutImg,
  pageHero: pageHeroImg,
  quote: quoteImg,
  project1: project1Img,
  project2: project2Img,
};

export const vision =
  "Devenir une entreprise de construction professionnelle reconnue et un prestataire de services clé en main en Afrique, en proposant des solutions d'ingénierie de pointe.";

export const about = [
  "TT Holding est un cabinet de conseil et de construction offrant des services de consultance en ingénierie civile, structurelle, électrique et mécanique.",
  "Fondée en 2016, l'entreprise est moderne et dynamique, forte de plus de 67 années d'expérience cumulée en ingénierie.",
  "Nos chefs de division sont qualifiés et inscrits professionnellement. Nous collaborons avec des chercheurs et des experts, et poursuivons une croissance constante avec l'ambition de devenir un leader du secteur.",
];

export const disciplines = [
  {
    title: "Ingénierie civile",
    text: "Conception et suivi d'ouvrages durables.",
  },
  {
    title: "Ingénierie structurelle",
    text: "Des structures solides et optimisées.",
  },
  {
    title: "Ingénierie électrique",
    text: "Des installations fiables et sécurisées.",
  },
  {
    title: "Ingénierie mécanique",
    text: "Des solutions techniques performantes.",
  },
];

export const stats = [
  { value: "67+", label: "Années d'expérience cumulée" },
  { value: "2016", label: "Année de fondation" },
  { value: "100", suffix: "km", label: "d'infrastructures de transport" },
  { value: "105", label: "Écoles rénovées" },
];

export const values = [
  {
    title: "Travail d'équipe",
    text: "Réussir ensemble, avec nos clients et nos partenaires.",
  },
  {
    title: "Qualité",
    text: "Des ouvrages durables, conformes aux meilleures normes.",
  },
  {
    title: "Intégrité",
    text: "Transparence et honnêteté dans chacun de nos engagements.",
  },
  {
    title: "Innovation",
    text: "Des solutions modernes adaptées aux réalités africaines.",
  },
  { title: "Passion", text: "L'amour du métier au service de chaque projet." },
  {
    title: "Respect",
    text: "Des personnes, des délais et de l'environnement.",
  },
];

export const servicesIntro =
  "TT Holding est un cabinet de conseil et de construction proposant des services de consultance en ingénierie civile, structurelle, électrique et mécanique.";

export const services = [
  { title: "Eau et assainissement" },
  { title: "Routes et eaux pluviales" },
  {
    title: "Planification et ingénierie des transports et de la circulation",
  },
  { title: "Ingénierie des structures" },
  { title: "Ingénierie des ponts et maritime" },
  { title: "Ingénierie électrique" },
  { title: "Ingénierie mécanique" },
  { title: "Gestion de projets" },
];

export const projects = [
  {
    image: images.project1,
    client: "Gouvernement de Kinshasa (RDC)",
    title: "Système de transport intégré",
    text: "Réalisation d'un système de transport intégré, incluant des gares de bus en acier dans le centre des affaires, sur environ 100 km.",
    figure: "≈ 100 km",
  },
  {
    image: images.project2,
    client: "Ministère de l'Éducation de Kolwezi",
    title: "Rénovation de 105 écoles",
    text: "Rénovation de 105 écoles grâce à la technologie de construction en acier léger.",
    figure: "105 écoles",
  },
];

export const founder = {
  name: "TUNDA Timothé",
  role: "Directeur Général (CEO)",
  quote: "Construire l'avenir, c'est aussi révéler l'âme d'un continent",
};
