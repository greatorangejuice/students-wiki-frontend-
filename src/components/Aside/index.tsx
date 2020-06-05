import React from 'react';

import AddButton from 'components/AddButton';

import { PropsType, LinkItem } from 'assets/mock';

import * as S from './styled';

const Aside = ({ value, linkList, add }: PropsType) => {
  return (
    <S.Aside>
      <S.Heading>{value}</S.Heading>
      <S.LinksWrapperScroll>
        <S.LinksWrapper>
          {linkList.map((item: LinkItem) => (
            <S.LinksItem key={item.id}>
              <S.Link href={item.link}>{item.value}</S.Link>
            </S.LinksItem>
          ))}
        </S.LinksWrapper>
      </S.LinksWrapperScroll>
      <AddButton value={`${add}`} />
    </S.Aside>
  );
};

export default Aside;
