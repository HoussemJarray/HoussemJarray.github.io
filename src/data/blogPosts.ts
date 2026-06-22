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
    title: 'How to Optimize Boot Time for Embedded Linux',
    date: 'June 2025',
    excerpt: 'Learn the step-by-step approach to reducing boot time in embedded Linux systems. From optimizing applications and services to streamlining the kernel and bootloader, discover how to make your embedded system faster and more efficient.',
    link: 'https://www.linkedin.com/posts/houssemjarray_embeddedlinux-boot-uboot-activity-7369991505190649856-FVdW',
    tags: ['Embedded Linux', 'Boot Optimization', 'U-Boot', 'Kernel', 'Performance'],
  },
  {
    id: 2,
    title: 'Native vs Cross Compilation: Choosing the Right Approach',
    date: 'June 2025',
    excerpt: 'Understanding the key differences between native and cross compilation is essential for embedded systems development. This article explains when to use each approach and breaks down the components of a cross-compilation toolchain.',
    link: 'https://www.linkedin.com/posts/houssemjarray_native-vs-cross-compilation-why-does-activity-7364174438105337856-naja',
    tags: ['Compilation', 'Embedded Linux', 'ARM', 'Toolchain', 'IoT'],
  },
  {
    id: 3,
    title: 'C++ Smart Pointers: Memory Management Made Easy',
    date: 'June 2025',
    excerpt: 'Learn how to prevent memory leaks in C++ using smart pointers. This article covers std::unique_ptr for exclusive ownership, std::shared_ptr for shared ownership with reference counting, and std::weak_ptr for breaking reference cycles.',
    link: 'https://www.linkedin.com/posts/houssemjarray_cpp-smartabrpointers-memoryabrleaks-activity-7205810965878042624-e6Ug',
    tags: ['C++', 'Smart Pointers', 'Memory Management', 'RAII', 'Memory Leaks'],
  },
];