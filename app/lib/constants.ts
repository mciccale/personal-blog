import { Metadata } from 'next';

import { PostCategory } from './types';

export const POST_CATEGORIES: PostCategory[] = [
  'web',
  'machine learning',
  'technology',
  'library',
  'framework',
  'javascript',
  'typescript',
  'cloud',
  'history',
  'tutorial',
  'frontend',
  'backend',
  'nodejs',
  'nextjs',
  'reactjs',
  'database',
  'programming languages',
];

export const metadataContent: Metadata = {
  metadataBase: new URL('https://mciccale.live'),
  title: {
    default: 'My Coding Corner | Programming & Technical Blog by Marco Ciccale',
    template:
      '%s - My Coding Corner | Programming & Technical Blog by Marco Ciccale',
  },
  description:
    "Explore the dynamic world of programming and technology on Marco Ciccale's Blog: My Coding Corner. Immerse yourself in insightful articles, tutorials, and in-depth guides that cover a spectrum of coding languages, software development, and emerging tech trends. As a seasoned developer, Marco Ciccale showcases a diverse portfolio that reflects expertise in creating innovative solutions. Stay ahead in the rapidly evolving tech landscape with our carefully curated content, designed to inspire both beginners and experienced developers alike. Dive into a wealth of knowledge, fuel your passion, and discover the endless possibilities that programming and technology offer. Elevate your skills and explore Marco Ciccale's portfolio to witness firsthand the transformative power of code. Join our community and embark on a journey of continuous learning and growth. Your gateway to tech excellence starts here.",
  twitter: {
    card: 'summary_large_image',
  },
  creator: 'Marco Ciccale Baztan',
  publisher: 'Marco Ciccale Baztan',
  robots: 'index, follow',
  keywords: [
    'blog',
    'programming',
    'programming blog',
    'technology',
    'technology trends',
    'software',
    'software development',
    'coding',
    'web',
    'web development',
    'marco',
    'marco ciccale',
    'marco ciccale baztan',
    'portfolio',
  ],
};
