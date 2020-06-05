import React from 'react';

import * as S from './styled';

const SignIn = () => (
  <S.Container>
    <S.FormWrapper>
      <S.Heading>Авторизация</S.Heading>
      <S.InputWrapper>
        <S.InputTopHelper>Логин</S.InputTopHelper>
        <S.Input type="text" placeholder="Введите логин" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputTopHelper>Пароль</S.InputTopHelper>
        <S.Input type="password" placeholder="Введите пароль" />
        <S.InputBottomHelper>Забыли пароль?</S.InputBottomHelper>
      </S.InputWrapper>
      <S.SubmitAndRedirect>
        <S.Submit type="submit">Войти</S.Submit>
        <S.Link to="/sign-up">
          Нет аккаунта? <S.LinkSpan>Создайте аккаунт</S.LinkSpan>
        </S.Link>
      </S.SubmitAndRedirect>
    </S.FormWrapper>
  </S.Container>
);

export default SignIn;
