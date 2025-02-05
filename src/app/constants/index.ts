export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
]

export const clientReviews = [
  {
    id: 1,
    name: 'Sophia Reynolds',
    position: 'Creative Director at Lumino Media',
    img: 'assets/review1.png',
    review:
      'Collaborating with Jacob was seamless. His ability to understand our vision and turn it into a dynamic website was truly remarkable. The final product was beyond what we imagined! (This is placeholder filler information and does not represent real feedback.)',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    position: 'Owner of Apex Outdoors',
    img: 'assets/review2.png',
    review:
      'Jacob completely revamped our online presence, and the feedback from our customers has been phenomenal. His professionalism and innovative ideas made all the difference. (This is placeholder filler information and does not represent real feedback.)',
  },
  {
    id: 3,
    name: 'Jeff Michaels',
    position: 'Operations Manager at FutureVision',
    img: 'assets/review3.png',
    review:
      'Jacob delivered a flawless website under a tight deadline. His technical expertise and collaborative approach made the process so easy. Highly recommend his services! (This is placeholder filler information and does not represent real feedback.)',
  },
  {
    id: 4,
    name: 'Ryan Patel',
    position: 'Co-Founder of Summit Ventures',
    img: 'assets/review4.png',
    review:
      'From start to finish, Jacob impressed us with his creativity and technical skills. The website not only looks stunning but performs exceptionally well. We couldn’t be happier! (This is placeholder filler information and does not represent real feedback.)',
  },
]

export const myProjects = [
  {
    title: 'Chess Fein - Advanced Chess Training Platform',
    desc: 'Chess Fein offers an advanced chess training experience, featuring player vs. AI matches with adjustable Stockfish Elo levels from 1320 to 3190, a comprehensive library of 20,000 unique puzzles spanning 50+ themes, and 12 structured learning modules designed to guide beginners through fundamental concepts and strategies.',
    subdesc:
      'Developed with Next.js, Tailwind CSS, and TypeScript, Chess Fein provides a seamless and responsive user experience for chess enthusiasts aiming to elevate their game.',
    href: 'https://chess-fein.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/chess-fein.png',
    logoStyle: {
      backgroundColor: '#581c87',
      border: '0.2px solid black',
      boxShadow: '0px 0px 60px 0px black',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  // {
  //   title: 'LiveDoc - Real-Time Google Docs Clone',
  //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
  //   subdesc:
  //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
  //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
  //   texture: '/textures/project/project2.mp4',
  //   logo: '/assets/project-logo2.png',
  //   logoStyle: {
  //     backgroundColor: '#13202F',
  //     border: '0.2px solid #17293E',
  //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
  //   },
  //   spotlight: '/assets/spotlight2.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //   ],
  // },
]

export const workExperiences = [
  {
    id: 1,
    name: 'Technical Support - IRS FATCA IDES',
    pos: 'Technical Support Specialist',
    duration: '2024 - Present',
    title:
      'Provided expert-level support for secure data exchanges, troubleshooting XML submissions, digital certificates, and regulatory compliance issues. Developed strong problem-solving skills and technical communication expertise.',
    icon: '/assets/irs.svg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Personal Projects',
    pos: 'Front-End Developer',
    duration: '2023 - Present',
    title:
      'Designed and developed various web applications using modern technologies like React, Next.js, TypeScript, Tailwind CSS, and Three.js. Focused on building interactive UIs, optimizing performance, and ensuring responsive design across devices.',
    icon: '/assets/figma.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Amazon Store Owner',
    pos: 'Entrepreneur & E-Commerce Developer',
    duration: '2021 - 2023',
    title:
      'Managed an online storefront, generating over $40,000 in revenue. Designed and optimized product listings, showcasing an understanding of UX/UI principles and digital marketing strategies.',
    icon: '/assets/amazon.svg',
    animation: 'salute',
  },
]
