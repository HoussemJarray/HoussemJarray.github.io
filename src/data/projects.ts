import type { ProjectCardProps } from '../components/ui/ProjectCard';

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    title: 'Smart Irrigation Controller',
    description:
      'ESP32-based system with soil moisture sensors, weather API integration, and a mobile dashboard for remote monitoring and control.',
    tech: ['ESP32', 'C', 'MQTT', 'React Native', 'AWS IoT'],
    image: '/projects/irrigation.jpg',
    githubLink: 'https://github.com/HoussemJarray/smart-irrigation',
    demoLink: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Automotive ECU Diagnostics',
    description:
      'AUTOSAR-compliant diagnostic stack with UDS protocol implementation, DTC management, and OBD-II data logging for electric vehicles.',
    tech: ['C++', 'AUTOSAR', 'CAN', 'Python', 'ISO 14229'],
    image: '/projects/ecu-diag.jpg',
    githubLink: 'https://github.com/HoussemJarray/ecu-diagnostics',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-Time Sensor Fusion',
    description:
      'Kalman filter and sensor fusion algorithm for IMU/GNSS data, deployed on ARM Cortex-M7 for drone navigation and stabilization.',
    tech: ['C', 'ARM', 'Sensor Fusion', 'MATLAB', 'FreeRTOS'],
    image: '/projects/sensor-fusion.jpg',
    githubLink: 'https://github.com/HoussemJarray/sensor-fusion',
  },
  {
    id: 4,
    title: 'BLE Mesh Lighting System',
    description:
      'Commercial lighting control system using Bluetooth mesh networking, with smartphone app control and energy consumption analytics.',
    tech: ['BLE Mesh', 'nRF52', 'Zephyr RTOS', 'Swift', 'Firebase'],
    image: '/projects/ble-lighting.jpg',
    demoLink: 'https://demo.example.com',
  },
  {
    id: 5,
    title: 'Secure OTA Bootloader',
    description:
      'Secure firmware update mechanism for STM32 microcontrollers with cryptographic verification, rollback protection, and fault recovery.',
    tech: ['STM32', 'C', 'Cryptography', 'Embedded Linux', 'Yocto'],
    image: '/projects/ota-bootloader.jpg',
    githubLink: 'https://github.com/HoussemJarray/secure-ota',
  },
  {
    id: 6,
    title: 'Industrial IoT Gateway',
    description:
      'Edge computing gateway for industrial automation, aggregating data from Modbus/Profinet devices and streaming to cloud with real-time analytics.',
    tech: ['Rust', 'Modbus', 'Docker', 'InfluxDB', 'Grafana'],
    image: '/projects/iot-gateway.jpg',
    githubLink: 'https://github.com/HoussemJarray/iot-gateway',
    demoLink: 'https://demo.example.com',
  },
];