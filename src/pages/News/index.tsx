import React from 'react';

import { ReactComponent as SvgComments } from 'assets/comment.svg';
import { ReactComponent as SvgLikes } from 'assets/like.svg';
import { ReactComponent as SvgFavorites } from 'assets/favorite.svg';
import * as S from './styled';

type NewsItem = {
  id: number;
  title?: string;
  comments?: number;
  likes?: number;
  favorites?: number;
  text: string;
  published?: string;
};

const News = () => {
  // TODO: WIP replace on real news in future
  const news: NewsItem[] = [
    {
      id: 0,
      title: 'Заголовок лайфхака',
      comments: 35,
      likes: 65,
      favorites: 13,
      text: `Давно выяснено, что при оценке дизайна и композиции читаемый текст
      мешает сосредоточиться. Lorem Ipsum используют потому, что тот
      обеспечивает более или менее стандартное заполнение шаблона, а
      также реальное распределение букв и пробелов в абзацах, которое не
      получается при простой дубликации "Здесь ваш текст.. Здесь ваш
      текст.. Здесь ваш текст.." Многие программы электронной вёрстки и
      редакторы HTML используют Lorem Ipsum в качестве текста по
      умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу
      показывает, как много веб-страниц всё ещё дожидаются своего
      настоящего рождения. За прошедшие годы текст Lorem Ipsum получил
      много версий. Некоторые версии появились по ошибке, некоторые -
      намеренно (например, юмористические варианты).`,
      published: '12.12.2019',
    },
    {
      id: 1,
      title: 'Второй заголовок лайфхака',
      comments: 10,
      likes: 21,
      favorites: 7,
      text: `Давно выяснено, что при оценке дизайна и композиции читаемый текст
      мешает сосредоточиться. Lorem Ipsum используют потому, что тот
      обеспечивает более или менее стандартное заполнение шаблона, а
      также реальное распределение букв и пробелов в абзацах, которое не
      получается при простой дубликации "Здесь ваш текст.. Здесь ваш
      текст.. Здесь ваш текст.."`,
      published: '11.12.2019',
    },
  ];

  return (
    <S.Ul>
      {news.map((el) => (
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

export default News;
