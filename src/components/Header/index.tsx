import React from 'react';

import { ReactComponent as LogIn } from 'assets/images/log-in.svg';
import { ReactComponent as Loupe } from 'assets/images/loupe.svg';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.Nav className="container">
        <S.Title>
          Students helper&nbsp;
          <S.SpanBsuir>BSUIR</S.SpanBsuir>
        </S.Title>
        <S.Navbar>
          <S.Ul>
            <S.Li>Лента</S.Li>
            <S.Li>Преподаватели</S.Li>
            <S.Li>Предметы</S.Li>
            <S.Li>Обратная связь</S.Li>
          </S.Ul>
        </S.Navbar>
        <S.UserPanel>
          <Loupe />
          <S.SignUp>Регистрация</S.SignUp>
          <S.SignIn>
            <span>Вход</span>
            <LogIn />
          </S.SignIn>
        </S.UserPanel>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
