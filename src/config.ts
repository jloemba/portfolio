export const siteConfig = {
  name: "Joris Loemba",
  title: "Ingénieur logiciel",
  description: "Portfolio website of Joris Loemba",
  accentColor: "#2b5442e2",
  social: {
    email: "joris.loemba.pro@gmail.com",
    linkedin: "https://www.linkedin.com/in/joris-l-822162100/",
    github: "https://github.com/jloemba",
  },
  aboutMe: `
Ingénieur logiciel avec plus de 4 ans d’expérience dans le développement et la maintenance d’applications en production.
Je souhaite acquérir une expérience concrète dans <strong>les technologies blockchain</strong>, tout en appliquant de solides pratiques de <strong>qualité logicielle</strong> et de tests, issues de mon parcours en ingénierie logicielle.
<strong>Mon objectif est de contribuer à des systèmes fiables, sécurisés et bien testés, en combinant des fondamentaux d’ingénierie éprouvés avec des technologies décentralisées émergentes.</strong>
`,

  skills: [
    {
      category: "Langages de programmation",
      items: ["TypeScript", "JavaScript", "Python", "Solidity"],
    },
    {
      category: "Frameworks & librairies - Frontend",
      items: ["React", "Angular"],
    },
    {
      category: "Frameworks & librairies - Backend",
      items: ["Node.js", "Spring Boot", "Express"],
    },
    {
      category: "Blockchain",
      items: ["Ethereum", "Solidity", "Web3.js"],
    },
    {
      category: "Cloud & DevOps",
      items: ["Microsoft Azure", "Docker", "CI/CD"],
    },
       {
      category: "Base de données",
      items: ["PostgreSQL","MySQL","SQLite",],
    },
    {
      category: "IA & Productivité Développeur",
      items: [
        "GitHub Copilot (assistance à l’écriture et à la revue de code)",
        "Cursor (IDE augmenté par l’IA pour la compréhension et le refactoring de code)",
        "Génération et Amélioration de tests",
        "Documentation technique",
        "Prototypage UI/UX",
      ],
    },
    {
      category: "UI / UX & Design to Code",
      items: [
        "Figma (conception de maquettes UI)",
        "Figma Dev Mode (inspection, tokens, handoff développeur)",
      ],
    },
    {
      category: "Qualité & Méthodologie",
      items: [
        "CI/CD (tests, automatisation, déploiement)",
        "Méthodologies Agile",
      ],
    },
  ],
  projects: [
    {
      name: "Chrome Extension – Détection d’offres d’emploi frauduleuses",
      description:
        "Une extension Chrome qui aide à identifier les offres d’emploi frauduleuses avant de postuler, en analysant les contenus et en alertant l’utilisateur sur les signaux de risque potentiels.",
      link: "",
      skills: ["HTML", "CSS", "Vanilla JS"],
    },
    {
      name: "Registre de chansons sur la blockchain",
      description:
        "Une application décentralisée (dApp) qui permet aux utilisateurs d'enregistrer leurs chansons sur la blockchain Ethereum, garantissant ainsi la preuve de propriété et l'authenticité.",
      link: "",
      skills: ["React", "Node.js", "Solidity"],
    },
    {
      name: "Orchestrateur liturgique",
      description:
        "Un orchestrateur liturgique qui simplifie la planification de la liturgie, structure les flux de service et simplifie la gestion des hymnes pour les églises.",
      link: "",
      skills: ["React", "Node.js"],
    },
    {
      name: "Application de vote basée sur la blockchain",
      description:
        "Une application de vote sécurisée et transparente construite sur la technologie blockchain, permettant aux utilisateurs de voter et de vérifier les votes de manière fiable.",
      link: "",
      skills: ["React", "FastAPI", "Solidity"],
    },
  ],
  experience: [
    {
      company: "Freelance",
      title: "Ingénieur Logiciel",
      dateRange: "Octobre 2025 - Janvier 2026",
      bullets: [
        "Livraison de fonctionnalités stratégiques dans des environnements variés, avec un focus sur la performance et la qualité logicielle.",
        "Structuration d’architectures applicatives favorisant la scalabilité et la maintenabilité.",
        "Pilotage technique et accompagnement des décisions d’implémentation.",
      ],
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "Ruby on Rails",
      ],
    },
    {
      company: "TotalEnergies",
      title: "Ingénieur Logiciel",
      dateRange: "Novembre 2020 - Juillet 2025",
      bullets: [
        "Développement de produits destinés aux opérateurs d’extraction pétrolière afin de surveiller et analyser les données de production en fonction de leurs objectifs opérationnels.",
        "Mise en œuvre de stratégies de test côté backend et frontend afin de garantir la qualité, la fiabilité et la maintenabilité des applications.",
        "Pilotage technique et accompagnement des décisions d’implémentation.",
      ],
      skills: [
        "Angular",
        "React",
        "FastAPI",
        "Spring Boot",
        "Azure",
        "Docker",
        "CI/CD",
        "Agile",
      ],
    },
    {
      company: "Natixis TradexSolutions",
      title: "Développeur Fullstack",
      dateRange: "Septembre 2017 - Juillet 2020",
      bullets: [
        "Développement d’un carnet d’ordres en temps réel pour des activités de trading à haute fréquence.",
        "Développement d’un dashboard pour surveiller les activités de trading.",
      ],
      skills: [
        "TypeScript",
        "React",
        "Node.js",
        "Azure",
        "Docker",
        "CI/CD",
        "Agile",
      ],
    },
  ],
  education: [
    {
      school: "Online Platform - Microsoft",
      degree: "AZ-240: Azure Developer Associate",
      dateRange: "2025",
    },
    {
      school: "Online Platform - Microsoft",
      degree: "AZ-900: Microsoft Azure Fundamentals",
      dateRange: "2023",
    },
    {
      school: "ESGI",
      degree: "Master en Ingénierie du web",
      dateRange: "2018 - 2020",
    },
    {
      school: "ESGI",
      degree: "Bachelor en Ingénierie du web",
      dateRange: "2017 - 2018",
    },
  ],
};
