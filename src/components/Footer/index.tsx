import React from 'react';

import * as S from './styled';

const Footer = () => {
  return (
    <S.Footer>
      <S.Container className="container">
        <S.Links>
          <S.Link href="/">Лента</S.Link>
          <S.Link href="/teachers">Преподаватели</S.Link>
          <S.Link href="/subjects">Предметы</S.Link>
          <S.Link href="/feedback">Обратная связь</S.Link>
          <S.Link target="_blank" href="/vk">
            Группа в ВК
          </S.Link>
          <S.Link target="_blank" href="/https://discord.gg/fDCXz9">
            Discord
          </S.Link>
          <S.Link
            target="_blank"
            href="https://github.com/greatorangejuice/students-wiki-frontend-"
          >
            GitHub
          </S.Link>
        </S.Links>
        <S.Copyright>
          <S.Paragraph>Политика конфиденциальности</S.Paragraph>
          <S.Paragraph>&copy; Students helper. 2020</S.Paragraph>
        </S.Copyright>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
