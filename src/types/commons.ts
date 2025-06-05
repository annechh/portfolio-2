import { ReactElement } from 'react';

export type MediaType = {
  url: string;
  alt: string;
};

export type IconType = {
  id: string;
  icon: ReactElement;
};

export type InfoType = {
  media: MediaType;
  title: string;
  intro: string;
  link?: string;
};

export type ProjectType = {
  id: string;
  media: MediaType;
  logo: MediaType;
  title: string;
  assignment: string;
  description: string;
  shortDescription: string;
  githubLink: string;
  liveDemoLink: string;
  tech?: IconType[];
  fixes?: string;
};
