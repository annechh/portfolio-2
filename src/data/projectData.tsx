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

export const backgroundData = {
  url: BG_IMG,
  alt: 'Ramsdalsnipa mountain',
};

export const projectData = [
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
    description: `Second year Project Exam. 
    This project is the result of two years of front-end development training, focused on planning, designing, and building a responsive booking platform for Holidaze, a fictional accommodation service. The goal was to create a modern front-end that communicates with an external API to manage venues and bookings.`,
    shortDescription: 'Second year Project Exam - Holidaze short description',
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
    description: `JS Frameworks course assignment. 
    Built a responsive eCommerce web app using React and React Router. Integrated product data from an external API to create dynamic pages including a homepage with live search, individual product pages, cart, checkout, and contact form with validation. Implemented global cart state and discount logic. Styled using CSS Modules and deployed to Netlify. `,
    shortDescription: 'JS Frameworks course assignment - Lazy Sales short description',
    githubLink: 'https://github.com/annechh/ca-js-frameworks',
    liveDemoLink: 'https://lazysales.netlify.app/',
    tech: [
      { id: 'tailwindCSS', icon: <SiTailwindcss /> },
      { id: 'react', icon: <DiReact /> },
      { id: 'vite', icon: <SiVite /> },
    ],
    fixes:
      'From feedback on this project I have fixed labels missing htmlFor, added ids to input fields and removed unnecessary use of fragments ',
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
    description: `Second year Semester Project. 
    In this project the goal was to create a website for a fictional client. The client was a company that wanted to create a website where people could bid on items.
    The website was to be a simple auction site where people could bid on items.`,
    shortDescription: 'Semester Project 2 - Bid Me short description',
    githubLink: 'https://github.com/annechh/BidMe-SP-2',
    liveDemoLink: 'https://bidme-sp2.netlify.app/',
    tech: [
      { id: 'tailwindCSS', icon: <SiTailwindcss /> },
      { id: 'javaScript', icon: <DiJsBadge /> },
      { id: 'vite', icon: <SiVite /> },
    ],
    fixes: 'From feedback on this project I have fixed the alert I missed',
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
    description: `First year Project Exam. 
    In this project the goal was to create a blog page using Api. The methods to use in this project were CREATE, GET, EDIT, PUT and DELETE. 
    We could create our own fictional client, so I chose my dog Shira to be my client. I had a lot of fun with this project since I used Shira as my client, and could provide my own photos.`,
    shortDescription: 'First year Project Exam - Shira´s Adventure short description',
    githubLink: 'https://github.com/annechh/FED1-Project-Exam-1',
    liveDemoLink: 'https://annechh.github.io/FED1-Project-Exam-1/',
    tech: [
      { id: 'HTML', icon: <DiHtml5 /> },
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
    description: `First year semester project.
    Design and build a modern, accessible and responsive web presence for the client using the provided image and text content.
    The site should appeal to youngsters without pandering; while aiming at a younger audience it should not patronize them with overtly childish themes. The core purpose of the site is to excite and entice people to visit the museum.`,
    shortDescription: 'First year Semester Project - Sunnfjord Science Museum short description',
    githubLink: 'https://github.com/annechh/Semester-Project-1',
    liveDemoLink: 'https://annechh.github.io/Semester-Project-1/',
    tech: [
      { id: 'HTML', icon: <DiHtml5 /> },
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
    description: `SquareEyes was my first assignment to put into practice what I’ve learned about HTML and CSS over this course by bringing my design alive.
    SquareEyes is a video streaming website where you can purchase high-quality videos directly from the people who make them.`,
    shortDescription:
      'SquareEyes was my first assignment to put into practice what I’ve learned about HTML and CSS over this course by bringing my design alive.',
    githubLink: 'https://github.com/annechh/SquareEyes',
    liveDemoLink: 'https://annechh.github.io/SquareEyes/',
    tech: [
      { id: 'HTML', icon: <DiHtml5 /> },
      { id: 'CSS', icon: <SiCss3 /> },
    ],
  },
];
