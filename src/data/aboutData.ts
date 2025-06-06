import image_1 from '../assets/images/Anne1.png';
import image_2 from '../assets/images/Anne2.png';
import { AboutType, IntroType } from '../types/commons';

export const introductionData: IntroType = {
  title: 'Designing, building and always learning',
  intro1: `Hello, I'm Anne`,
  intro2: 'From Figma to functional – bringing interfaces to life.',
  media: {
    url: image_1,
    alt: 'Portrait',
  },
};

export const aboutData: AboutType = {
  title: 'About Me',
  description: `
  Hi! 👋 
  I’m Anne-Cathrine Hauge, a 36-year-old front-end developer from Naustdal, Norway.

  I’m finishing a two-year front-end education at Noroff, working with HTML, CSS, JavaScript, React, and design tools like Figma. I enjoy turning visual ideas into clean, user-friendly websites.

  What excites me most is constant learning and creative problem-solving. My goal is to join a team where I can grow, contribute, and eventually explore backend development to become a full-stack developer.

  When not coding, you’ll find me hiking, snowboarding, paddling, or relaxing indoors with gaming, movies, or series.

  Feel free to reach out to connect or collaborate!`,
  media: {
    url: image_2,
    alt: 'Girl in snowboard clothes with arms spread wide, smiling at the camera behind a balaclava mask and goggles',
  },
  connect: {
    linkedIn: 'https://www.linkedin.com/in/anne-cathrine-hauge-b893bbb3/',
    instagram: 'https://www.instagram.com/skofant/',
  },
};
