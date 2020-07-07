import React from 'react';

import Welcome from 'components/Welcome';
import TeachersList from 'components/TeachersList';
import Aside from 'components/Aside';
import CategorySearch from 'components/CategorySearch';
import SortBy from 'components/SortBy';
import AddButton from 'components/AddButton';

import { MockAsideTeacherList, MockAsideSubjectList } from 'assets/mock';

import { CategorySearchContainer } from 'components/CategorySearch/styled';

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
        <CategorySearchContainer className="container">
          <CategorySearch />
          <SortBy value="добавить преподавателя" />
        </CategorySearchContainer>
        <S.Container className="container">
          <S.Article>
            <S.Title>Факультет компьютерного проектирования</S.Title>
            <TeachersList />
            <AddButton value="Показать больше" />
          </S.Article>
          <S.Aside>
            <Aside
              value={MockAsideSubjectList.value}
              linkList={MockAsideSubjectList.linkList}
              add="добавить предмет"
            />

            <Aside
              value={MockAsideTeacherList.value}
              linkList={MockAsideTeacherList.linkList}
              add="добавить преподавателя"
            />
          </S.Aside>
        </S.Container>
      </S.TeachersSection>
    </>
  );
};

export default Teachers;
