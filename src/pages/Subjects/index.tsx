import React from 'react';

import Welcome from 'components/Welcome';
import CategorySearch from 'components/CategorySearch';
import SortBy from 'components/SortBy';
import SubjectsList from 'components/SubjectsList';
import AddButton from 'components/AddButton';
import Aside from 'components/Aside';

import { TeacherList, SubjectList } from 'assets/mock';

import { CategorySearchContainer } from 'components/CategorySearch/styled';
import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Предметы', active: 'active' },
];

const Subjects = () => {
  return (
    <>
      <Welcome breadCrumbs={breadCrumbs} />
      <S.HomeSection>
        <CategorySearchContainer className="container">
          <CategorySearch />
          <SortBy value="добавить предмет" />
        </CategorySearchContainer>
        <S.Container className="container">
          <S.Article>
            <h2>Факультет компьютерных систем и сетей</h2>
            <SubjectsList />
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
      </S.HomeSection>
    </>
  );
};

export default Subjects;
