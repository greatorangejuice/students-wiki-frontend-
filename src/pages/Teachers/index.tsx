import React from 'react';

import Welcome from 'components/Welcome';
import TeachersList from 'components/TeachersList';
import Aside from 'components/Aside';
import CategorySearch from 'components/CategorySearch';
import SortBy from 'components/SortBy';
import AddButton from 'components/AddButton';

import { TeacherList, SubjectList } from 'assets/mock';

import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Преподаватели', active: 'active' },
];

const Teachers = () => {
  return (
    <>
      <Welcome breadCrumbs={breadCrumbs} />
      <S.TeachersSection>
        <S.CategorySearchContainer className="container">
          <CategorySearch />
          <SortBy />
        </S.CategorySearchContainer>
        <S.Container className="container">
          <S.Article>
            <h2>Факультет компьютерного проектирования</h2>
            <TeachersList />
            <AddButton value="Показать больше" />
          </S.Article>
          <S.Aside>
            <Aside
              value={SubjectList.value}
              linkList={SubjectList.linkList}
              add="добавить предмет"
            />

            <Aside
              value={TeacherList.value}
              linkList={TeacherList.linkList}
              add="добавить преподавателя"
            />
          </S.Aside>
        </S.Container>
      </S.TeachersSection>
    </>
  );
};

export default Teachers;
