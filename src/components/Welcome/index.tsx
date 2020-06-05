import React from 'react';

import * as S from './styled';

// * AFTER HEADER SECTION

const Welcome = () => {
  return (
    <S.Welcome>
      <S.Container className="container">
        <S.BreadCrumbsList>
          <S.BreadCrumbsItem>Главная</S.BreadCrumbsItem>
          <S.BreadCrumbsItem active="active">Лента</S.BreadCrumbsItem>
        </S.BreadCrumbsList>
        <h1>Лента</h1>
      </S.Container>
    </S.Welcome>
  );
};

export default Welcome;
