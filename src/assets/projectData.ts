import BM from '../assets/images/BM.png';
import SA from '../assets/images/SA.png';
import SSM from '../assets/images/SSM.png';
import SE from '../assets/images/SE.png';

import BM_Icon from '../assets/images/BM-icon.png';
import SA_Icon from '../assets/images/SA-icon.png';
import SSM_Icon from '../assets/images/SSM-icon.png';
import SE_Icon from '../assets/images/SE-icon.png';

import BG_IMG from '../assets/images/ramsdalsnipa2.jpg';

export const backgroundData = {
  url: BG_IMG,
  alt: 'Ramsdalsnipa mountain',
};

export const projectData = [
  {
    id: 4,
    media: {
      url: BM,
      alt: 'Screenshot of Bid Me website',
    },
    title: 'Bid Me',
    description: `Second year semester project. 
    In this project the goal was to create a website for a fictional client. The client was a company that wanted to create a website where people could bid on items.
    The website was to be a simple auction site where people could bid on items.`,
    icons: {
      url: BM_Icon,
      alt: 'Bid Me icon',
    },
    githubMedia: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      alt: 'GitHub icon',
    },
    githubLink: {
      link: 'https://github.com/annechh/BidMe-SP-2',
    },
    liveDemo: {
      link: 'https://bidme-sp2.netlify.app/',
    },
  },

  {
    id: 3,
    media: {
      url: SA,
      alt: 'Screenshot of Shira´s Adventure website',
    },
    title: 'Shira´s Adventure',
    description: `First year Exam Project. 
    In this project the goal was to create a blog page using Api. The methods to use in this project were CREATE, GET, EDIT, PUT and DELETE. 
    We could create our own fictional client, so I chose my dog Shira to be my client. I had a lot of fun with this project since I used Shira as my client, and could provide my own photos.`,
    icons: {
      url: SA_Icon,
      alt: 'Shiras Adventure icon',
    },
    githubMedia: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      alt: 'GitHub icon',
    },
    githubLink: {
      link: 'https://github.com/annechh/FED1-Project-Exam-1',
    },
    liveDemo: {
      link: 'https://annechh.github.io/FED1-Project-Exam-1/',
    },
  },

  {
    id: 2,
    media: {
      url: SSM,
      alt: 'Screenshot of Sunnfjord Science Museum website',
    },
    title: 'Sunnfjord Science Museum',
    description: `First year semester project.
    Design and build a modern, accessible and responsive web presence for the client using the provided image and text content.
    The site should appeal to youngsters without pandering; while aiming at a younger audience it should not patronize them with overtly childish themes. The core purpose of the site is to excite and entice people to visit the museum.`,
    icons: {
      url: SSM_Icon,
      alt: 'Sunnfjord Science Museum icon',
    },
    githubMedia: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      alt: 'GitHub icon',
    },
    githubLink: {
      link: 'https://github.com/annechh/Semester-Project-1',
    },
    liveDemo: {
      link: 'https://annechh.github.io/Semester-Project-1/',
    },
  },

  {
    id: 1,
    media: {
      url: SE,
      alt: 'Screenshot of Square Eyes website',
    },
    title: 'Square Eyes',
    description: `SquareEyes was my first assignment to put into practice what I’ve learned about HTML and CSS over this course by bringing my design alive.
    SquareEyes is a video streaming website where you can purchase high-quality videos directly from the people who make them.`,
    icons: {
      url: SE_Icon,
      alt: 'Square Eyes icon',
    },
    githubMedia: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      alt: 'GitHub icon',
    },
    githubLink: {
      link: 'https://github.com/annechh/SquareEyes',
    },
    liveDemo: {
      link: 'https://annechh.github.io/SquareEyes/',
    },
  },
];
