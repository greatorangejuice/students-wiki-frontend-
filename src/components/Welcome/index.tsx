import React from 'react';

import * as S from './styled';

// * AFTER HEADER SECTION

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Лента', active: 'active' },
];

const Welcome = () => {
  return (
    <S.Welcome>
      <S.Container className="container">
        <S.BreadCrumbsList>
          {breadCrumbs.map((item) => (
            <S.BreadCrumbsItem key={item.id} active={`${item.active}`}>
              {item.value}
            </S.BreadCrumbsItem>
          ))}
        </S.BreadCrumbsList>
        <h1>Лента</h1>
      </S.Container>
    </S.Welcome>
  );
};

export default Welcome;
