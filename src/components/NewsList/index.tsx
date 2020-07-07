import React from 'react';

import { NewsListType } from 'assets/mock';

import { ReactComponent as SvgComments } from 'assets/images/comment.svg';
import { ReactComponent as SvgLikes } from 'assets/images/like.svg';
import { ReactComponent as SvgFavorites } from 'assets/images/favorite.svg';

import * as S from './styled';

const NewsList = () => {
  return (
    <S.Ul>
      {NewsListType.map((el) => (
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
  );
};

export default NewsList;
