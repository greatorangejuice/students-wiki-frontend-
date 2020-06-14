import React from 'react';

import * as S from './styled';

export type Props = {
  to: string;
  className?: string;
  rest?: object;
};

const ReturnBack = ({ to, className, ...rest }: Props) => {
  return (
    <S.Return href={to} {...rest} className={className}>
      <S.StyledArrow />
      Вернуться назад
    </S.Return>
  );
};

export default ReturnBack;
