import React from 'react';

import { ReactComponent as PlusIcon } from 'assets/images/plus.svg';

import * as S from './styled';

type PropsValue = {
  value: string;
};

const AddButton = (props: PropsValue) => {
  return (
    <S.Button>
      <S.PlusIcon>
        <PlusIcon />
      </S.PlusIcon>
      {props.value}
    </S.Button>
  );
};

export default AddButton;
