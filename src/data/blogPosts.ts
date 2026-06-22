export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Implementing Secure OTA Updates for ESP32 with AWS S3',
    date: 'June 2025',
    excerpt: 'A step-by-step guide on building a robust, signed OTA pipeline for ESP-IDF, ensuring your devices stay secure in the field.',
    link: 'https://medium.com/@houssemjarray/secure-ota-esp32-aws',
    tags: ['ESP32', 'Security', 'AWS'],
  },
  {
    id: 2,
    title: 'Memory Optimization Techniques in C++ for Embedded Systems',
    date: 'April 2025',
    excerpt: 'Exploring placement new, custom allocators, and `constexpr` to drastically reduce RAM footprint in ARM Cortex-M projects.',
    link: 'https://dev.to/houssemjarray/memory-optimization-cpp-embedded',
    tags: ['C++', 'ARM', 'Optimization'],
  },
  {
    id: 3,
    title: 'Introduction to AUTOSAR: Architecture and Use Cases',
    date: 'January 2025',
    excerpt: 'An overview of the AUTOSAR classic platform, its layers, and how it enables software reusability in modern automotive ECUs.',
    link: 'https://houssemjarray.me/blog/autosar-intro',
    tags: ['AUTOSAR', 'Automotive', 'Architecture'],
  },
];