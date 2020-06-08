import React from 'react';

import Welcome from 'components/Welcome';
import Aside from 'components/Aside';

import { TeacherList, SubjectList, newsList } from 'assets/mock';

import { ReactComponent as SvgComments } from 'assets/images/comment.svg';
import { ReactComponent as SvgLikes } from 'assets/images/like.svg';
import { ReactComponent as SvgFavorites } from 'assets/images/favorite.svg';

import * as S from './styled';

const News = () => {
  // TODO: WIP replace on real news in future

  return (
    <>
      <Welcome />
      <section className="section" style={{ background: 'white' }}>
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
      </section>
      <S.Ul>
        {newsList.map((el) => (
          <S.Li key={el.id}>
            <S.NewsItem>
              <S.NewsHeader>
                <S.NewsTitle>{el.title}</S.NewsTitle>
                <S.NewsRating>
                  <S.Comments>
                    <SvgComments /> {el.comments}
                  </S.Comments>
                  <S.Likes>
                    <SvgLikes /> {el.likes}
                  </S.Likes>
                  <S.Favorites>
                    <SvgFavorites /> {el.favorites}
                  </S.Favorites>
                </S.NewsRating>
              </S.NewsHeader>
              <S.NewsText>{el.text}</S.NewsText>
              <S.ReadMore>Читать дальше</S.ReadMore>
              {el?.published && (
                <S.Published>Опубликовано {el.published}</S.Published>
              )}
            </S.NewsItem>
          </S.Li>
        ))}
      </S.Ul>
    </>
  );
};
export default News;
