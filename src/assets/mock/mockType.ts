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
