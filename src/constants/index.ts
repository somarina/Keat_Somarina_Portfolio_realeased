import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
  TTestimonial,
} from '../types';

import {
  backend,
  camExplore,
  camExploreApp,
  ecommerceApp,
  figma,
  fitnessApp,
  flowerShop,
  herd,
  mobile,
  ruppStudyClub,
  todoList,
  web,
} from '../assets';

const devicon = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`;

const simpleIcon = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;

const dashboardIcon = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/${icon}.svg`;

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Work Experience',
  },
  {
    id: 'project',
    title: "Mana's Project",
  },
];

const services: TService[] = [
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UX/UI Designer',
    icon: figma,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'Flutter',
    icon: devicon('flutter/flutter-original.svg'),
  },
  {
    name: 'HTML5',
    icon: devicon('html5/html5-original.svg'),
  },
  {
    name: 'CSS3',
    icon: devicon('css3/css3-original.svg'),
  },
  {
    name: 'JavaScript',
    icon: devicon('javascript/javascript-original.svg'),
  },
  {
    name: 'React',
    icon: devicon('react/react-original.svg'),
  },
  {
    name: 'TypeScript',
    icon: devicon('typescript/typescript-original.svg'),
  },
  {
    name: 'React Native',
    icon: devicon('react/react-original.svg'),
  },
  {
    name: 'Node.js',
    icon: devicon('nodejs/nodejs-original-wordmark.svg'),
  },
  {
    name: 'Java',
    icon: devicon('java/java-original.svg'),
  },
  {
    name: 'Spring Boot',
    icon: devicon('spring/spring-original.svg'),
  },
  {
    name: 'FastAPI',
    icon: devicon('fastapi/fastapi-original.svg'),
  },
  {
    name: 'MongoDB',
    icon: devicon('mongodb/mongodb-original.svg'),
  },
  {
    name: 'MongoDB Atlas',
    icon: simpleIcon('mongodb', '47A248'),
  },
  {
    name: 'Git',
    icon: devicon('git/git-original.svg'),
  },
  {
    name: 'GitHub',
    icon: simpleIcon('github', 'ffffff'),
  },
  {
    name: 'Docker',
    icon: devicon('docker/docker-original.svg'),
  },
  {
    name: 'Figma',
    icon: devicon('figma/figma-original.svg'),
  },
  {
    name: 'Laravel',
    icon: simpleIcon('laravel', 'FF2D20'),
  },
  {
    name: 'Laravel Herd',
    icon: herd,
  },
  {
    name: 'C#',
    icon: devicon('csharp/csharp-original.svg'),
  },
  {
    name: 'CapCut',
    icon: dashboardIcon('cap-cut-dark'),
  },
  {
    name: 'Dart',
    icon: devicon('dart/dart-original.svg'),
  },
];

const experiences: TExperience[] = [
  {
    title: 'C/C++ Teacher',
    companyName: 'RUPP Study Club',
    icon: ruppStudyClub,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Instructed university students on fundamental programming concepts, data structures, and algorithms using C and C++.',
      'Guided students through hands-on exercises focusing on memory management, pointers, and object-oriented programming (OOP) principles.',
      'Designed coding challenges, quizzes, and structured lesson plans to foster logical thinking and problem-solving skills.',
      'Mentored students in debugging techniques and best coding practices, helping them build a strong foundation in computer science.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a cross-platform mobile app as fast and beautiful as native, but Keat proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a mobile developer who truly understands both seamless frontend UI and scalable backend architectures like Keat does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'After Keat launched our new mobile application, user engagement and retention increased by 50%. Incredible work!',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'តោះទិញទំនិញ',
    description:
      'A Flutter-based e-commerce app built for Cambodian shoppers to browse, search, and purchase products locally. Features cart management, order history, and smooth checkout powered by SQLite and SharedPreferences.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'sqlite',
        color: 'green-text-gradient',
      },
      {
        name: 'shared-prefs',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerceApp,
    sourceCodeLink: '',
  },
  {
    name: 'ToDo-List',
    description:
      'A productivity app built with Flutter and GetX state management, allowing users to manage daily tasks with priorities, due dates, and persistent local storage via GetStorage. Backend powered by FastAPI.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'getx',
        color: 'green-text-gradient',
      },
      {
        name: 'fastapi',
        color: 'pink-text-gradient',
      },
    ],
    image: todoList,
    sourceCodeLink: '',
  },
  {
    name: 'CamExplore',
    description:
      'Explore the beauty of Cambodia — from ancient Angkor temples and royal palaces to vibrant street markets and coastal getaways. A Flutter travel app showcasing Cambodian culture, tourism spots, and local experiences with offline support via SQLite and SharedPreferences.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'sqlite',
        color: 'green-text-gradient',
      },
      {
        name: 'shared-prefs',
        color: 'pink-text-gradient',
      },
    ],
    image: camExplore,
    sourceCodeLink: 'https://www.facebook.com/share/v/1Dbgdexqhz/',
  },
  {
    name: 'FSMS - Flower Shop Management System',
    description:
      'A console-based Flower Shop Management System (FSMS) designed in C++ using Object-Oriented Programming (OOP) and the ANT Hinsy OOP Library. Features a beautifully colored command-line interface with custom ASCII art, robust inventory management, real-time sales tracking, and dynamic billing generation.',
    tags: [
      {
        name: 'cpp',
        color: 'blue-text-gradient',
      },
      {
        name: 'oop',
        color: 'green-text-gradient',
      },
      {
        name: 'ant-hinsy-oop',
        color: 'pink-text-gradient',
      },
    ],
    image: flowerShop,
    sourceCodeLink: 'https://somarina.github.io/Hosting2-FSMS/project.html',
  },
  {
    name: 'Case Study Fitness App',
    description:
      'A comprehensive UX/UI case study for a fitness tracking application designed in Figma, showcasing workout progress visualization, daily activity summaries, and user engagement strategies.',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'case study',
        color: 'green-text-gradient',
      },
      {
        name: 'ux/ui',
        color: 'pink-text-gradient',
      },
    ],
    image: fitnessApp,
    sourceCodeLink:
      'https://www.figma.com/design/e5H8OnvnZvAUCUDvJkIp4o/Case-Study-Fitness-App?node-id=0-1&t=jDOYdtap50G8UhjH-1',
  },
  {
    name: 'CamExplore App - UI Design',
    description:
      'UI/UX design for the CamExplore travel discovery app created in Figma, featuring destination browsing, immersive imagery, and intuitive navigation for exploring Cambodian tourism spots.',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'travel',
        color: 'green-text-gradient',
      },
      {
        name: 'mobile-ui',
        color: 'pink-text-gradient',
      },
    ],
    image: camExploreApp,
    sourceCodeLink:
      'https://www.figma.com/design/39umzDwAKUonfmU7eXMK0G/CamExplore-App?node-id=1-2&t=6KPnI3MlKV7NYKQ6-1',
  },
];

export { experiences, projects, services, technologies, testimonials };
