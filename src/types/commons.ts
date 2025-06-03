export type MediaType = {
  url: string;
  alt: string;
};

export type LinkType = {
  link: string;
};

export type ProjectType = {
  id: string;
  media: MediaType;
  title: string;
  description: string;
  shortDescription: string;
  icons: MediaType;
  githubMedia: MediaType;
  githubLink: LinkType;
  liveDemo: LinkType;
};

export type InfoType = {
  media: MediaType;
  title: string;
  intro: string;
  link?: LinkType;
};
