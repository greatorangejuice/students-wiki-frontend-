import { PageTeachersListType } from './mockType';

export const teacher: PageTeachersListType = {
  id: 1,
  comments: 3,
  name: 'Иванов Василий Васильевич',
  department: 'физики',
  discipline: [
    'Физика полупроводниковых приборов',
    'Квантовая механика и статическая физика',
    'Физика',
  ],
  rating: 5,
};
