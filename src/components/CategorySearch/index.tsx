import React from 'react';

import Button from 'components/Button';

import { ReactComponent as Controller } from 'assets/images/filter.svg';
import * as S from './styled';

const CategorySearch = () => {
  return (
    <S.CategorySearchWrapper>
      <S.InputWrapper>
        <S.Input type="text" placeholder="Введите факультет" />
        <button type="button">
          <Controller />
        </button>
      </S.InputWrapper>
      <Button className="primary">Найти</Button>
    </S.CategorySearchWrapper>
  );
};

export default CategorySearch;
