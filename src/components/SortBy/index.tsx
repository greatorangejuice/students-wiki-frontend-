import React from 'react';

import AddButton from 'components/AddButton';

import { ReactComponent as Arrow } from 'assets/images/arrow.svg';

import * as S from './styled';

const SortBy = () => {
  return (
    <S.SortWrapper>
      <S.Sort>
        Сортировать по:{' '}
        <span>
          Алфавиту <Arrow />
        </span>
      </S.Sort>
      <AddButton value="добавить преподавателя" />
    </S.SortWrapper>
  );
};

export default SortBy;
