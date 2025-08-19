import HOLIDAZE_LOGO from '../assets/svgs/Holidaze.svg';
import LS_LOGO from '../assets/svgs/LazySales.svg';
import BM_LOGO from '../assets/svgs/BidMe.svg';
import SA_LOGO from '../assets/svgs/ShirasAdventure.svg';
import SSM_LOGO from '../assets/svgs/SSM.svg';
import SE_LOGO from '../assets/svgs/SquareEyes.svg';

import HOLIDAZE from '../assets/images/holidaze.png';
import LS from '../assets/images/LS.png';
import BM from '../assets/images/BM.png';
import SA from '../assets/images/SA.png';
import SSM from '../assets/images/SSM.png';
import SE from '../assets/images/SE.png';

import BG_IMG from '../assets/images/ramsdalsnipa2.jpg';
import { SiCss3, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';
import { DiHtml5, DiJsBadge, DiReact } from 'react-icons/di';
import { ProjectType } from '../types/commons';

export const backgroundData = {
  url: BG_IMG,
  alt: 'Ramsdalsnipa mountain',
};

export const projectData: ProjectType[] = [
  {
    id: 'Holidaze',
    media: {
      url: HOLIDAZE,
      alt: 'Screenshot of Holidaze website',
    },
    logo: {
      url: HOLIDAZE_LOGO,
      alt: 'Screenshot of Holidaze website',
    },
    title: 'Holidaze',
    assignment: 'Second year Project Exam',
    description: `
    Holidaze is a second year project exam, developed as a group collaboration. It’s a fictional accommodation booking site where users can browse, book, and manage venues based on their role: visitor, customer, or venue manager. The project focused on role-based functionality and delivering a clean user experience.

    Key Features:
    - View and search for venues
    - Register and log in (customer or venue manager)
    - Book venues with calendar availability
    - View upcoming bookings on profile
    - Update avatar, bio, and banner

    Venue managers can:
    - Create, edit, and delete venues
    - View bookings for their venues

    This project provided valuable experience working collaboratively as a team, managing shared code, and building a React app with API data.

    Built with React, TypeScript, Tailwind CSS, and Vite.
    `,
    shortDescription:
      'Holidaze lets users browse, book, and manage venues with role-based access in a clean, user-friendly booking platform.',
    githubLink: 'https://github.com/H-A-L-code/project-exam-2',
    liveDemoLink: 'https://hal-holidaze.netlify.app/',
    tech: [
      { id: 'tailwindCSS', icon: <SiTailwindcss /> },
      { id: 'react', icon: <DiReact /> },
      { id: 'typescript', icon: <SiTypescript /> },
      { id: 'vite', icon: <SiVite /> },
    ],
  },

  {
    id: 'lazySales',
    media: {
      url: LS,
      alt: 'Screenshot of Lazy Sales website',
    },
    logo: {
      url: LS_LOGO,
      alt: 'Screenshot of Lazy Sales website',
    },
    title: 'Lazy Sales',
    assignment: 'JS Frameworks course assignment',
    description: `
    Lazy Sales is a JS Frameworks course assignment developed as a group collaboration. It’s a fictional eCommerce platform designed to offer a smooth and efficient shopping experience. Users can browse products, search for items, and complete purchases with minimal effort. The focus was on creating a clean interface and frictionless user flow.

    Key Features:
    - Product listing with search
    - Basic product details and add-to-cart
    - Simple checkout form
    - Order confirmation message
    - Contact form with validation

    This project provided valuable experience working collaboratively as a team, managing shared code, and building a React app with API data.

    Built with React, Tailwind CSS, and Vite.
    `,
    shortDescription:
      'Lazy Sales offers a simple, no-fuss shopping experience with easy browsing, quick checkout, and order confirmation.',
    githubLink: 'https://github.com/annechh/ca-js-frameworks',
    liveDemoLink: 'https://lazysales.netlify.app/',
    tech: [
      { id: 'tailwindCSS', icon: <SiTailwindcss /> },
      { id: 'react', icon: <DiReact /> },
      { id: 'vite', icon: <SiVite /> },
    ],
  },

  {
    id: 'bidMe',
    media: {
      url: BM,
      alt: 'Screenshot of Bid Me website',
    },
    logo: {
      url: BM_LOGO,
      alt: 'Screenshot of Bid Me website',
    },
    title: 'Bid Me',
    assignment: 'Second year Semester Project',
    description: `
    BidMe is a second year semester project focused on building an online auction house where users can browse and search listings, register and log in with a Noroff email, and participate in auctions. Registered users can place bids on listings, view bids made, and delete their own listings. Guests can search listings without registering.

    Key Features:
    - User registration with @noroff.no or @stud.noroff.no email
    - Login and logout functionality
    - Create, view, and delete auction listings
    - Place bids and view bids on listings
    - Update user profile and avatar
    - Search auction listings as a guest

    Built with JavaScript, Tailwind CSS, and Vite.`,
    shortDescription:
      'BidMe is an online auction platform where users can register, bid, create listings, and browse auctions with ease.',
    githubLink: 'https://github.com/annechh/BidMe-SP-2',
    liveDemoLink: 'https://bidme-sp2.netlify.app/',
    tech: [
      { id: 'tailwindCSS', icon: <SiTailwindcss /> },
      { id: 'javaScript', icon: <DiJsBadge /> },
      { id: 'vite', icon: <SiVite /> },
    ],
  },

  {
    id: 'shirasAdventure',
    media: {
      url: SA,
      alt: 'Screenshot of Shira´s Adventure website',
    },
    logo: {
      url: SA_LOGO,
      alt: 'Screenshot of Shira´s Adventure website',
    },
    title: 'Shira´s Adventure',
    assignment: 'First year Project Exam',
    description: `
    Shira’s Adventure is a first year Project Exam to build a responsive blog page using an API, focusing on CRUD operations (CREATE, GET, EDIT, PUT, DELETE). I created a fictional client, my dog Shira, and used personal photos to bring the project to life. The app allows viewing dynamic blog posts and includes admin pages to manage content.

    Built with: HTML, CSS, JavaScript
    `,
    shortDescription:
      'Shira’s Adventure is a responsive blog project featuring CRUD functionality and dynamic posts, inspired by my dog Shira.',
    githubLink: 'https://github.com/annechh/FED1-Project-Exam-1',
    liveDemoLink: 'https://annechh.github.io/FED1-Project-Exam-1/',
    tech: [
      { id: 'HTML', icon: <DiHtml5 className="text-4xl" /> },
      { id: 'CSS', icon: <SiCss3 /> },
      { id: 'javaScript', icon: <DiJsBadge /> },
    ],
  },

  {
    id: 'sunnfjordScienceMuseum',
    media: {
      url: SSM,
      alt: 'Screenshot of Sunnfjord Science Museum website',
    },
    logo: {
      url: SSM_LOGO,
      alt: 'Screenshot of Sunnfjord Science Museum website',
    },
    title: 'Sunnfjord Science Museum',
    assignment: 'First year semester project',
    description: `
    Sunnfjord Science Museum is a first-year semester project focused on designing and building an accessible and responsive website. The site aims to engage a younger audience without being overly childish, encouraging visitors to explore the museum through appealing visuals and clear content.

    Built with HTML and CSS
    `,
    shortDescription:
      'A responsive website project designed to engage younger visitors with clear content and appealing visuals.',
    githubLink: 'https://github.com/annechh/Semester-Project-1',
    liveDemoLink: 'https://annechh.github.io/Semester-Project-1/',
    tech: [
      { id: 'HTML', icon: <DiHtml5 className="text-4xl" /> },
      { id: 'CSS', icon: <SiCss3 /> },
    ],
  },

  {
    id: 'squareEyes',
    media: {
      url: SE,
      alt: 'Screenshot of Square Eyes website',
    },
    logo: {
      url: SE_LOGO,
      alt: 'Screenshot of Square Eyes website',
    },
    title: 'Square Eyes',
    assignment: 'Html and CSS course assignment',
    description: `
    SquareEyes was my first assignment to put into practice what I’ve learned about HTML and CSS by bringing my design to life. It’s a fictional video streaming website where users can purchase high-quality videos directly from the creators for online viewing.

    Built with HTML and CSS
    `,
    shortDescription:
      'A fictional video streaming site project where users can buy videos directly from creators for online viewing.',
    githubLink: 'https://github.com/annechh/SquareEyes',
    liveDemoLink: 'https://annechh.github.io/SquareEyes/',
    tech: [
      { id: 'HTML', icon: <DiHtml5 className="text-4xl" /> },
      { id: 'CSS', icon: <SiCss3 /> },
    ],
  },
];
