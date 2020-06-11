export type LinkItem = {
  id: number;
  link: string;
  value: string;
};

export type AsideSubjectListType = {
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

export type PageTeachersListType = {
  id: number;
  name: string;
  department: string;
  comments: number;
};

export type PageSubjectsListType = {
  id: number;
  link: string;
  departmentName: string;
  subjectName: string;
};
