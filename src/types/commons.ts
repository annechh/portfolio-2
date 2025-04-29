export type MediaType = {
  url: string;
  alt: string;
};

export type ProjectType = {
  id: number;
  media: MediaType;
  title: string;
  description: string;
};
