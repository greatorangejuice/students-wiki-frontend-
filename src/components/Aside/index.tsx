import React from 'react';

import AddButton from 'components/AddButton';

import { AsideSubjectListType } from 'assets/mock';

import * as S from './styled';

const Aside: React.FC<AsideSubjectListType> = ({ value, linkList, add }) => {
  return (
    <S.AsideItem>
      <S.Heading>{value}</S.Heading>
      <S.LinksWrapperScroll>
        <S.LinksWrapper>
          {linkList.map((item) => (
            <S.LinksItem key={item.id}>
              <S.Link href={item.link}>{item.value}</S.Link>
            </S.LinksItem>
          ))}
        </S.LinksWrapper>
      </S.LinksWrapperScroll>
      <AddButton value={`${add}`} />
    </S.AsideItem>
  );
};

export default Aside;
