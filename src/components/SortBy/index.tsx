import React from 'react';

import AddButton from 'components/AddButton';

import { ReactComponent as Arrow } from 'assets/images/arrow.svg';

import * as S from './styled';

interface ISortBy {
  value: string;
}

const SortBy: React.FC<ISortBy> = ({ value }) => {
  return (
    <S.SortWrapper>
      <S.Sort>
        Сортировать по:{' '}
        <span>
          Алфавиту <Arrow />
        </span>
      </S.Sort>
      <AddButton value={value} />
    </S.SortWrapper>
  );
};

export default SortBy;
