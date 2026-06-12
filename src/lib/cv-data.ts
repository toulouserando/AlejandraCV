export type Experience = {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  category: 'pedagogy' | 'childhood' | 'commerce';
  description: string[];
  qualities?: string[];
};

export type Education = {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
};

export const QUALITIES = [
  "Accueillante", "Altruïste", "Appliquée", "Attentive", "Autonome", "Avenante", "Aventureuse", 
  "Bibliophile", "Calme", "Combative", "Communicative", "Compréhensive", "Concentrée", 
  "Conciliante", "Confiante", "Consciencieuse", "Coopérative", "Cultivée", "Curieuse", 
  "Décidée", "Déterminée", "Disciplinée", "Disponible", "Dynamique", "Éclairée", "Éduquée", 
  "Endurante", "Enthousiaste", "Épanouie", "Érudite", "Fidèle", "Flexible", "Généreuse", 
  "Impliquée", "Intuitive", "Joueuse", "Méfiante", "Motivée", "Observatrice", "Organisée", 
  "Ouverte", "Passionnée", "Patiente", "Polyvalente", "Ponctuelle", "Précise", "Qualifiée", 
  "Rapide", "Réactive", "Réfléchie", "Régulière", "Responsable", "Sage", "Sociable", 
  "Stable", "Studieuse", "Travailleuse", "Vaillante", "Vigilante", "Volontaire"
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Intervenante pédagogique niveaux A1-C2',
    organization: 'BILINGUE 31',
    location: 'Toulouse, France',
    period: '04/2023 - Aujourd\'hui',
    category: 'pedagogy',
    description: ['Cours d\'espagnol langue vivante pour élèves de la 5ème à la Terminale et adultes.'],
    qualities: ['Pédagogue', 'Organisée', 'Communicative']
  },
  {
    id: 'exp2',
    title: 'Accompagnante éducative petite enfance (AEPE)',
    organization: 'CRÈCHE MUNICIPALE EMPALOT',
    location: 'Toulouse, France',
    period: '04/2023 - 08/2023',
    category: 'childhood',
    description: ['Assurer le bien-être, la sécurité et l\'éveil des enfants.'],
    qualities: ['Attentive', 'Bienveillante', 'Vigilante']
  },
  {
    id: 'exp3',
    title: 'Accompagnante éducative petite enfance (AEPE)',
    organization: 'KANGOUROU KIDS',
    location: 'Toulouse, France',
    period: '09/2018 - 03/2023',
    category: 'childhood',
    description: ['Accompagner les enfants dans leur développement moteur, cognitif et du langage.'],
    qualities: ['Patiente', 'Éveillée', 'Douce']
  },
  /*
  {
    id: 'exp4',
    title: 'Conseillère de vente / Vendeuse',
    organization: 'Boutiques Diverses',
    location: 'États-Unis',
    period: '2015 - 2018',
    category: 'commerce',
    description: [
      'Accueil et conseil d\'une clientèle diversifiée.',
      'Gestion de la caisse et encaissement.',
      'Mise en valeur des produits et gestion des stocks.'
    ],
    qualities: ['Réactive', 'Souriante', 'Persuasive']
  },
  */
  {
    id: 'exp5',
    title: 'Enseignante d\'espagnol (L1)',
    organization: 'LICEO CAMPESTRE THOMAS DE IRIARTE',
    location: 'Subachoque, Colombie',
    period: '02/2016 - 11/2016',
    category: 'pedagogy',
    description: ['Cours d\'espagnol axés sur la pensée critique et les médias.'],
    qualities: ['Réfléchie', 'Instructive']
  },
  {
    id: 'exp6',
    title: 'Enseignante d\'espagnol (L1) et FLE',
    organization: 'COLEGIO SAN BONIFACIO',
    location: 'Bogotá, Colombie',
    period: '09/2012 - 11/2014',
    category: 'pedagogy',
    description: ['Cours d\'espagnol et français axés sur la lecture et l\'écriture.'],
    qualities: ['Passionnée', 'Studieuse']
  },
  {
    id: 'exp_kenzo', // <-- NOUVELLE EXPÉRIENCE KENZO JEANS
    title: 'Vendeuse, conseillère clientèle & visuelle',
    organization: 'KENZO JEANS',
    location: 'Colombie', 
    period: '2006 - 2011',
    category: 'commerce',
    description: [
      'Création visuelle des vitrines pour les nouvelles collections de vêtements et d’accessoires.',
      'Responsable de l’organisation globale du magasin, pliage rigoureux et mise en valeur de la marque.',
      'Gestion des stocks, réalisation des inventaires et classement en réserve comme en magasin.',
      'Accueil chaleureux, conseil client personnalisé et fidélisation de la clientèle.'
    ],
    qualities: ['Organisée', 'Stable', 'Polyvalente', 'Dynamique']
  },
  {
    id: 'exp_sabana', // <-- NOUVELLE EXPÉRIENCE TRAIN DE LA SABANA
    title: 'Animatrice du Train de la Sabana',
    organization: 'TRAIN DE LA SABANA',
    location: 'Bogotá, Colombie',
    period: '2005 - 2006',
    category: 'childhood', // Idéal ici car orienté animation, encadrement et éveil des enfants
    description: [
      'Responsable de l’encadrement des enfants et des adolescents voyageant à bord du train.',
      'Conception et animation d’activités ludiques : jeux, chansons et spectacles de marionnettes.',
      'Médiation culturelle : présentation guidée et explication des lieux et paysages tout au long du parcours.'
    ],
    qualities: ['Joueuse', 'Communicative', 'Enthousiaste']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    title: 'Master 2 Français Langues Étrangères (E2F)',
    institution: 'Université Toulouse Jean Jaurès',
    location: 'Toulouse, France',
    period: '2024 - 2025'
  },
  {
    id: 'edu2',
    title: 'DU Didactique du FLE',
    institution: 'Université Toulouse Jean Jaurès',
    location: 'Toulouse, France',
    period: '2020 - 2021'
  },
  {
    id: 'edu3',
    title: 'CAP Accompagnant Éducatif Petite Enfance',
    institution: 'Kiwi Institute - Académie de Toulouse',
    location: 'Toulouse, France',
    period: '2019 - 2021'
  },
  {
    id: 'edu4',
    title: 'Licence en Éducation (Langues)',
    institution: 'Universidad Libre',
    location: 'Bogotá, Colombie',
    period: '2010 - 2014'
  }
];

export const MATRIX_DATA = [
  {
    flaw: 'Impatience',
    asset: 'Dynamisme & Réactivité',
    description: 'Se traduit par une grande énergie sur le terrain et une capacité à réagir instantanément aux imprévus.'
  },
  {
    flaw: 'Trop critique',
    asset: 'Esprit d\'analyse & Rigueur',
    description: 'Permet une évaluation constante des méthodes pédagogiques pour tendre vers l\'amélioration continue.'
  },
  {
    flaw: 'Sensible',
    asset: 'Empathie & Écoute',
    description: 'Atout majeur pour capter les besoins non-verbaux des enfants et instaurer un climat de confiance.'
  },
  {
    flaw: 'Exigeante',
    asset: 'Excellence & Qualité',
    description: 'Garantit une attention particulière aux détails, que ce soit pour la sécurité ou les objectifs d\'apprentissage.'
  },
  {
    flaw: 'Peur de l\'échec',
    asset: 'Détermination & Persévérance',
    description: 'Se transforme en une motivation sans faille pour réussir les projets entrepris et surmonter les obstacles.'
  }
];
