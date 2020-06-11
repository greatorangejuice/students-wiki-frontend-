import React from 'react';

import * as S from './styled';

export type Props = {
  to: string;
};

const ReturnBack = ({ to }: Props) => {
  return (
    <S.Return href={to}>
      <S.StyledArrow />
      Вернуться назад
    </S.Return>
  );
};

export default ReturnBack;
