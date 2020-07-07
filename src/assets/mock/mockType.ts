export type LinkItemType = {
  id: number;
  link: string;
  value: string;
};

export type AsideSubjectListType = {
  value: string;
  linkList: LinkItemType[];
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

export type PageTeachersListType = {
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

export type PageSubjectsListType = {
  id: number;
  link: string;
  departmentName: string;
  subjectName: string;
};
