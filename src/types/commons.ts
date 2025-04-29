export type MediaType = {
  url: string;
  alt: string;
};

export type LinkType = {
  link: string;
};

export type ProjectType = {
  id: number;
  media: MediaType;
  title: string;
  description: string;
  icons: MediaType;
  githubMedia: MediaType;
  githubLink: LinkType;
  liveDemo: LinkType;
};
