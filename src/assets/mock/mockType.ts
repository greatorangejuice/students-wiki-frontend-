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

export type TeachersListType = {
  id: number;
  name: string;
  department: string;
  comments: number;
  discipline?: string[];
  rating?: number;
};

export type CommentsListType = {
  id: number;
  writer: string;
  date: string;
  text: string;
  likes: number;
  replies?: ReplyOnComment[];
};

export type ReplyOnComment = {
  id: number;
  writer: string;
  date: string;
  text: string;
  likes: number;
};
