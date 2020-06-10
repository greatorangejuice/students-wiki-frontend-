import React from 'react';

import { NavLink } from 'react-router-dom';

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
            <S.Li>
              <NavLink to="/">Лента</NavLink>
            </S.Li>
            <S.Li>
              <NavLink to="/teachers">Преподаватели</NavLink>
            </S.Li>
            <S.Li>
              <NavLink to="/subjects">Предметы</NavLink>
            </S.Li>
            <S.Li>
              <NavLink to="/feedback">Обратная связь</NavLink>
            </S.Li>
          </S.Ul>
        </S.Navbar>
        <S.UserPanel>
          <Loupe />
          <S.SignUp>
            <NavLink to="/sign-up">Регистрация</NavLink>
          </S.SignUp>
          <S.SignIn>
            <NavLink to="/sign-in">
              <span>Вход</span>
              <LogIn />
            </NavLink>
          </S.SignIn>
        </S.UserPanel>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
