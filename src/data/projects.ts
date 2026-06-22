import type { ProjectCardProps } from '../components/ui/ProjectCard';

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    title: 'FireStreamer - Embedded Media Player with Yocto & Qt6',
    description:
      'Custom embedded Linux system built with Yocto for Raspberry Pi 4, featuring a Qt6-based media player that streams videos securely while integrating services like YouTube, Netflix, and Spotify. The software stack manages media and enables video sharing within a Docker volume for seamless playback.',
    tech: ['C++', 'Qt6', 'Yocto', 'CMake', 'Raspberry Pi', 'GStreamer', 'FFmpeg', 'Docker'],
    image: '/projects/firestreamer.jpeg',
    githubLink: 'https://github.com/HoussemJarray/firestreamer',
    demoLink: 'https://www.youtube.com/watch?v=fX2gLXgK2Jg',
    featured: true,
  },
  {
    id: 2,
    title: 'Tiny Linux OS on QEMU (ARM vexpress-a9)',
    description:
      'Custom embedded Linux system built from scratch booting successfully under QEMU using U-Boot as the bootloader. Built Linux 6.12.23 kernel for ARM vexpress-a9, compiled BusyBox for a lightweight root filesystem, and created a virtual SD card with boot and rootfs partitions.',
    tech: ['Linux Kernel', 'U-Boot', 'BusyBox', 'QEMU', 'ARM', 'C', 'Shell Scripting'],
    image: '/projects/qemu-linux.png',
    githubLink: 'https://github.com/HoussemJarray/qemu-linux-bringup',
    demoLink: 'https://www.youtube.com/watch?v=VoGbFjUjrkg',
    featured: true,
  },
  {
    id: 3,
    title: 'STM32 GPIO Custom Driver from Scratch',
    description:
      'Bare-metal GPIO driver for STM32F4xx microcontrollers built from scratch without using HAL libraries. Implements complete peripheral control with features like pin configuration, read/write operations, and interrupt handling, demonstrating deep understanding of ARM Cortex-M architecture and memory-mapped I/O.',
    tech: ['C', 'STM32', 'ARM Cortex-M', 'Bare-Metal', 'GPIO', 'Embedded Systems'],
    image: '/projects/stm32-gpio-driver.jpeg',
    githubLink: 'https://github.com/Houssem-Jarray/stm32f4xx_custom_driver',
    demoLink: 'https://github.com/Houssem-Jarray/stm32f4xx_custom_driver',
  },
  {
    id: 4,
    title: 'STM32 Real-Time Data Visualization',
    description:
      'Real-time visualization of data acquired from an STM32 board, displayed on a dynamic web page via Wi‑Fi communication between the web server and the STM32 board.',
    tech: ['STM32', 'C', 'WebSocket', 'WiFi', 'JavaScript', 'FreeRTOS'],
    image: '/projects/stm32-viz.jpg',
    githubLink: 'https://github.com/HoussemJarray/stm32-data-viz',
    demoLink: 'https://demo.example.com',
  },
  {
    id: 5,
    title: 'IoT & AI-Powered DMS System',
    description:
      'Intelligent web and mobile Document Management System (DMS) using Flutter and Node.js, integrating an AI‑based OCR model for automatic extraction and classification of digital documents.',
    tech: ['Flutter', 'Node.js', 'React.js', 'MongoDB', 'Python', 'TensorFlow', 'OCR'],
    image: '/projects/dms-ocr.jpg',
    githubLink: 'https://github.com/HoussemJarray/dms-ocr',
    demoLink: 'https://demo.example.com',
  },
  {
    id: 6,
    title: 'Automated Testing Tool for Embedded Video Player',
    description:
      'Automated testing tool to evaluate the functionality of a video player embedded in a digital set‑top box, with technical documentation detailing testing procedures and results.',
    tech: ['Go', 'Linux', 'Embedded Linux', 'Shell Scripting', 'HLS', 'DASH'],
    image: '/projects/testing-tool.jpg',
    githubLink: 'https://github.com/HoussemJarray/embedded-testing-tool',
  },
  {
    id: 7,
    title: 'Multimedia Processing System with Go & FFmpeg',
    description:
      'Advanced multimedia features in Go with performance optimization using goroutines and concurrent video decoding. Designed video editing solutions using FFmpeg, created REST/GraphQL APIs, and implemented AWS cloud uploads with automation tools.',
    tech: ['Go', 'FFmpeg', 'REST', 'GraphQL', 'AWS', 'Docker', 'Git'],
    image: '/projects/multimedia-go.jpg',
    githubLink: 'https://github.com/HoussemJarray/multimedia-go',
    demoLink: 'https://demo.example.com',
  },
];