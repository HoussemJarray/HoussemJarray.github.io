export interface Achievement {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon?: string;
  image?: string;
}

export const achievements: Achievement[] = [
  // ===== CSF Certifications =====
  {
    id: 1,
    title: "Linux Embarqué & IoT - Kernel Space",
    organization: "Centre Supérieur de Formation (CSF)",
    year: "2025",
    description:
      "Configuration et compilation du noyau Linux, développement de pilotes, gestion GPIO/I²C sur Raspberry Pi, intégration Python et IoT avec MQTT.",
    icon: "🐧",
    image: "/certificates/Houssem_Jarray-kernelspace.jpg",
  },
  {
    id: 2,
    title: "Programmation POSIX",
    organization: "Centre Supérieur de Formation (CSF)",
    year: "2025",
    description:
      "Multithreading, Mutex, synchronisation, gestion des processus, et création d'un terminal POSIX.",
    icon: "⚙️",
    image: "/certificates/Houssem_Jarray-posix.jpg",
  },
  {
    id: 3,
    title: "Linux Embarqué - Espace Utilisateur",
    organization: "Centre Supérieur de Formation (CSF)",
    year: "2025",
    description:
      "Architecture Linux, programmation Shell, compilation croisée, simulation QEMU.",
    icon: "🐧",
    image: "/certificates/Houssem_Jarray-embeddedlinux.jpg",
  },
  {
    id: 4,
    title: "C++ & Qt pour Systèmes Embarqués",
    organization: "Centre Supérieur de Formation (CSF)",
    year: "2025",
    description:
      "Programmation orientée objet en C++, conception d'IHM Qt communicant avec du matériel embarqué.",
    icon: "🚀",
    image: "/certificates/Houssem_Jarray-oop.jpg",
  },
  {
    id: 5,
    title: "Architecture et Programmation STM32",
    organization: "Centre Supérieur de Formation (CSF)",
    year: "2025",
    description:
      "Exploration de l'architecture STM32F4xx, périphériques, firmware, travaux pratiques sur cartes Discovery/Nucleo.",
    icon: "💡",
    image: "/certificates/certificat_houssem_jarray_arch-mcu.jpg",
  },
  {
    id: 6,
    title: "Langage C pour Systèmes Embarqués",
    organization: "Centre Supérieur de Formation (CSF)",
    year: "2025",
    description:
      "Fondamentaux du C, conception structurée, normes MISRA, développement de pilotes, débogage sur STM32F4.",
    icon: "📘",
    image: "/certificates/certificat-Houssem_Jarray-c.jpg",
  },

  // ===== New Certifications =====
  {
    id: 7,
    title: "CS107: C++ Programming",
    organization: "Saylor University",
    year: "2025",
    description:
      "Comprehensive C++ programming certification covering object-oriented programming, memory management, templates, and standard library usage.",
    icon: "📚",
    image: "/certificates/ccppcertif.jpg",
  },
  {
    id: 8,
    title: "Kubernetes Certification",
    organization: "KodeKloud",
    year: "2025",
    description:
      "Mastered Kubernetes architecture, core concepts (clusters, nodes, deployments, ReplicaSets, pods), networking, and microservices deployment across GCP, AWS, and Azure.",
    icon: "☸️",
    image: "/certificates/k8s-certif.jpg",
  },
  {
    id: 9,
    title: "Git & Version Control",
    organization: "KodeKloud",
    year: "2025",
    description:
      "Comprehensive Git training covering collaboration workflows, branching strategies, merging, rebasing, and undoing changes for effective team development.",
    icon: "🔀",
    image: "/certificates/git-certif.jpg",
  },
  {
    id: 10,
    title: "Docker Certification",
    organization: "KodeKloud",
    year: "2025",
    description:
      "Containerization expertise including Docker images, containers, Docker Compose, networking, registries, and Docker Swarm for orchestrating container clusters.",
    icon: "🐳",
    image: "/certificates/docker-certif.jpg",
  },
];
