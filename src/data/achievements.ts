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
  {
    id: 1,
    title: 'Linux Embarqué & IoT - Kernel Space',
    organization: 'Centre Supérieur de Formation (CSF)',
    year: '2025',
    description: 'Configuration et compilation du noyau Linux, développement de pilotes, gestion GPIO/I²C sur Raspberry Pi, intégration Python et IoT avec MQTT.',
    icon: '🐧',
    image: '/certificates/Houssem_Jarray-kernelspace.jpg',
  },
  {
    id: 2,
    title: 'Programmation POSIX',
    organization: 'Centre Supérieur de Formation (CSF)',
    year: '2025',
    description: 'Multithreading, Mutex, synchronisation, gestion des processus, et création d\'un terminal POSIX.',
    icon: '⚙️',
    image: '/certificates/Houssem_Jarray-posix.jpg',
  },
  {
    id: 3,
    title: 'Linux Embarqué - Espace Utilisateur',
    organization: 'Centre Supérieur de Formation (CSF)',
    year: '2025',
    description: 'Architecture Linux, programmation Shell, compilation croisée, simulation QEMU.',
    icon: '🐧',
    image: '/certificates/Houssem_Jarray-embeddedlinux.jpg',
  },
  {
    id: 4,
    title: 'C++ & Qt pour Systèmes Embarqués',
    organization: 'Centre Supérieur de Formation (CSF)',
    year: '2025',
    description: 'Programmation orientée objet en C++, conception d\'IHM Qt communicant avec du matériel embarqué.',
    icon: '🚀',
    image: '/certificates/Houssem_Jarray-oop.jpg',
  },
  {
    id: 5,
    title: 'Architecture et Programmation STM32',
    organization: 'Centre Supérieur de Formation (CSF)',
    year: '2025',
    description: 'Exploration de l\'architecture STM32F4xx, périphériques, firmware, travaux pratiques sur cartes Discovery/Nucleo.',
    icon: '💡',
    image: '/certificates/certificat_houssem_jarray_arch-mcu.jpg',
  },
  {
    id: 6,
    title: 'Langage C pour Systèmes Embarqués',
    organization: 'Centre Supérieur de Formation (CSF)',
    year: '2025',
    description: 'Fondamentaux du C, conception structurée, normes MISRA, développement de pilotes, débogage sur STM32F4.',
    icon: '📘',
    image: '/certificates/certificat-Houssem_Jarray-c.jpg',
  },
  {
    id: 7,
    title: 'Certified Embedded Systems Specialist',
    organization: 'IEEE',
    year: '2023',
    description: 'Passed the rigorous CES certification covering RTOS, embedded Linux, and safety-critical systems (ISO 26262).',
    icon: '🏅',
  },
  {
    id: 8,
    title: 'Best Innovation Award – TechCrunch Disrupt',
    organization: 'TechCrunch',
    year: '2022',
    description: 'Winner for developing a low-cost, AI-powered vibration analysis tool for predictive maintenance using an ESP32 and Edge Impulse.',
    icon: '🏆',
  },
  {
    id: 9,
    title: 'AWS Certified IoT Specialty',
    organization: 'Amazon Web Services',
    year: '2021',
    description: 'Validated expertise in designing and securing IoT solutions on AWS, including device gateways, rules engines, and shadow services.',
    icon: '☁️',
  },
  {
    id: 10,
    title: 'Speaker – Embedded World Conference',
    organization: 'Embedded World',
    year: '2023',
    description: 'Presented a talk on "Secure Boot and Trusted Execution Environments for Resource-Constrained Devices" to an audience of 500+ engineers.',
    icon: '🎤',
  },
];