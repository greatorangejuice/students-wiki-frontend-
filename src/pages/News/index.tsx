import React from 'react';

import Welcome from 'components/Welcome';
import Aside from 'components/Aside';
import AddButton from 'components/AddButton';
import NewsList from 'components/NewsList';

import { MockAsideTeacherList, MockAsideSubjectList } from 'assets/mock';

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
      </S.NewsSection>
    </>
  );
};
export default News;
