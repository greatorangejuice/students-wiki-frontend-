import React from 'react';

import * as S from './styled';

const AccountPage = () => {
  return (
    <S.AccountPage>
      <S.Title>Изменить учётную запись</S.Title>
      <S.FieldLabel>Электронная почта</S.FieldLabel>
      <S.InputField placeholder="blabla@gmail.com" />
      <S.FieldLabel>Пароль</S.FieldLabel>
      <S.InputField placeholder="Введите текущий пароль" />
      <S.InputField placeholder="Введите новый пароль" />
      <S.InputField placeholder="Введите новый пароль ещё раз" />
      <S.StyledButton>Сохранить</S.StyledButton>
    </S.AccountPage>
  );
};

export default AccountPage;
