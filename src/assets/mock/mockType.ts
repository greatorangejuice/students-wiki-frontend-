export type LinkItem = {
  id: number;
  link: string;
  value: string;
};

export type PropsType = {
  value: string;
  linkList: LinkItem[];
  add?: string;
};

export type NewsItem = {
  id: number;
  title?: string;
  comments?: number;
  likes?: number;
  favorites?: number;
  text: string;
  published?: string;
};
