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
    company: 'Tier1 Automotive Solutions',
    role: 'Senior Embedded Software Engineer',
    period: '2022 – Present',
    location: 'Stuttgart, Germany',
    description: [
      'Architected and implemented AUTOSAR-compliant firmware for next-gen ADAS ECUs, reducing latency by 25%',
      'Led a team of 5 engineers in migrating legacy C code to modern C++17, improving maintainability and test coverage',
      'Developed hardware abstraction layers (HAL) for NXP S32K and Infineon AURIX microcontrollers',
    ],
  },
  {
    id: 2,
    company: 'IoT Innovations Inc.',
    role: 'Firmware Engineer',
    period: '2019 – 2022',
    location: 'Remote',
    description: [
      'Designed and deployed over-the-air (OTA) update systems for 50k+ connected industrial sensors using MQTT and AWS IoT Core',
      'Optimized FreeRTOS task scheduling and memory allocation, reducing power consumption by 40% in battery-operated devices',
      'Created comprehensive unit and integration tests using Ceedling and hardware-in-the-loop (HIL) setups',
    ],
  },
  {
    id: 3,
    company: 'TechStart Labs',
    role: 'Junior Embedded Developer',
    period: '2017 – 2019',
    location: 'Tunis, Tunisia',
    description: [
      'Developed bootloaders and BSPs for ARM Cortex-M based prototyping boards',
      'Collaborated on an open-source drone autopilot project, focusing on sensor fusion (IMU/GPS) algorithms',
      'Maintained CI/CD pipelines for firmware builds using Jenkins and Docker',
    ],
  },
];