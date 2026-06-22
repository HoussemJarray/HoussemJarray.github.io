export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Centre Supérieur de Formation (CSF)',
    role: 'Embedded Systems Developer',
    period: '06/2025 – 10/2025',
    location: 'Ariana, Tunisia',
    description: [
      'Developed embedded systems projects focusing on STM32 microcontrollers, FreeRTOS, and Embedded Linux',
      'Designed and implemented custom device drivers and firmware for various embedded platforms',
      'Worked on Linux kernel configuration, Yocto build system, and Qt application development',
    ],
  },
  {
    id: 2,
    company: 'Xpermedia',
    role: 'Software Engineer',
    period: '07/2023 – 04/2024',
    location: 'Sousse, Tunisia',
    description: [
      'Developed advanced multimedia features in Go with performance optimization using goroutines and concurrent video decoding',
      'Designed video editing and generation solutions using FFmpeg, creating REST/GraphQL APIs',
      'Implemented AWS cloud uploads and automation tools for multimedia processing',
      'Integrated ORM for database management and worked with Docker for containerization',
    ],
  },
  {
    id: 3,
    company: 'ZNet-IT',
    role: 'Final Year Project - Full Stack Developer',
    period: '02/2023 – 06/2023',
    location: 'Sfax, Tunisia',
    description: [
      'Developed an intelligent web and mobile Document Management System (DMS) using Flutter and Node.js',
      'Integrated an AI-based OCR model for automatic extraction and classification of digital documents',
      'Built responsive frontend with React.js and backend with MongoDB',
    ],
  },
  {
    id: 4,
    company: 'Sagemcom',
    role: 'Engineering Intern - Embedded Systems',
    period: '07/2022 – 09/2022',
    location: 'Megrine, Tunisia',
    description: [
      'Developed an automated testing tool to evaluate the functionality of a video player embedded in a digital set-top box',
      'Authored and prepared technical documentation detailing testing procedures and results',
      'Worked with Go, Linux, Embedded Linux, and shell scripting in a professional environment',
    ],
  },
  {
    id: 5,
    company: 'SDI',
    role: 'Introductory Intern - Full Stack Developer',
    period: '07/2021 – 08/2021',
    location: 'Kairouan, Tunisia',
    description: [
      'Designed and developed a user management application based on CRUD operations',
      'Used Angular framework for frontend development and Node.js for backend',
      'Built REST APIs with Express.js and TypeScript',
    ],
  },
];