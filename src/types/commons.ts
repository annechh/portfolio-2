import { ReactElement } from 'react';

export type MediaType = {
  url: string;
  alt: string;
};

export type IconType = {
  id: string;
  icon: ReactElement;
};

export type ConnectType = {
  linkedIn: string;
  instagram: string;
};

export type AboutType = {
  title: string;
  description: string;
  media: MediaType;
  connect: ConnectType;
};

export type IntroType = {
  title: string;
  intro1: string;
  intro2: string;
  media: MediaType;
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
  feedback?: string;
  fix?: string;
};
