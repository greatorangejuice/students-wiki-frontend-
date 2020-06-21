import React from 'react';

import Welcome from 'components/Welcome';
import Aside from 'components/Aside';
import AddButton from 'components/AddButton';
import NewsList from 'components/NewsList';

import { TeacherListType, SubjectListType } from 'assets/mock';

import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Лента', active: 'active' },
];
const News = () => {
  return (
    <>
      <Welcome breadCrumbs={breadCrumbs} />
      <S.NewsSection>
        <S.Container className="container">
          <S.Article>
            <NewsList />
            <AddButton value="Показать больше" />
          </S.Article>
          <S.Aside>
            <Aside
              value={SubjectListType.value}
              linkList={SubjectListType.linkList}
              add="добавить предмет"
            />

            <Aside
              value={TeacherListType.value}
              linkList={TeacherListType.linkList}
              add="добавить преподавателя"
            />
          </S.Aside>
        </S.Container>
      </S.NewsSection>
    </>
  );
};
export default News;
