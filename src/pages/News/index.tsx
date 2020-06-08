import React from 'react';

import Welcome from 'components/Welcome';
import Aside from 'components/Aside';
import AddButton from 'components/AddButton';
import NewsList from 'components/NewsList';

import { TeacherList, SubjectList } from 'assets/mock';

import * as S from './styled';

const News = () => {
  return (
    <>
      <Welcome />
      <S.NewsSection>
        <S.Container className="container">
          <S.Article>
            <NewsList />
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
      </S.NewsSection>
    </>
  );
};
export default News;
