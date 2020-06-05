import React from 'react';

import git from 'assets/git-logo.svg';
import vk from 'assets/vk-logo.svg';
import google from 'assets/google-logo.svg';

import * as S from '../Styles';

const SignUp = () => (
  <S.Container>
    <S.FormWrapper>
      <S.Heading>Регистрация</S.Heading>
      <S.OAuthWrapper>
        <S.OAuth>
          <a href="/">
            <img src={git} alt="git" />
          </a>
        </S.OAuth>
        <S.OAuth>
          <a href="/">
            <img src={vk} alt="vk" />
          </a>
        </S.OAuth>
        <S.OAuth>
          <a href="/">
            <img src={google} alt="google" />
          </a>
        </S.OAuth>
      </S.OAuthWrapper>
      <S.Form>
        <S.InputWrapper>
          <S.InputTopHelper>Логин</S.InputTopHelper>
          <S.Input type="text" placeholder="Введите логин" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTopHelper>Пароль</S.InputTopHelper>
          <S.Input type="password" placeholder="Введите пароль" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTopHelper>Подтверждение пароля</S.InputTopHelper>
          <S.Input type="password" placeholder="Введите пароль еще раз" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTopHelper>Email</S.InputTopHelper>
          <S.Input type="password" placeholder="Введите свой email" />
        </S.InputWrapper>
        <S.SubmitAndRedirect>
          <S.Submit type="submit">Войти</S.Submit>
          <S.Link to="/sign-in">
            У вас есть аккаунт? <S.LinkSpan>Войдите в аккаунт</S.LinkSpan>
          </S.Link>
        </S.SubmitAndRedirect>
      </S.Form>
    </S.FormWrapper>
  </S.Container>
);

export default SignUp;
