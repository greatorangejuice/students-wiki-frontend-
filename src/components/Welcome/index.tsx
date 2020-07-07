import React from 'react';

import * as S from './styled';

// * AFTER HEADER SECTION

interface IBreadCrumbs {
  breadCrumbs: {
    id: number;
    value: string;
    active: string;
  }[];
}

const Welcome: React.FC<IBreadCrumbs> = ({ breadCrumbs }) => {
  const [heading, setHeading] = React.useState('');
  React.useEffect(() => {
    const findLastElm = breadCrumbs[breadCrumbs.length - 1].value;
    setHeading(findLastElm);
  }, [breadCrumbs, heading]);

  return (
    <S.Welcome>
      <S.Container className="container">
        <S.BreadCrumbsList>
          {breadCrumbs.map((item) => (
            <S.BreadCrumbsItem key={item.id} active={`${item.active}`}>
              {item.value}
            </S.BreadCrumbsItem>
          ))}
        </S.BreadCrumbsList>
        <h1>{heading}</h1>
      </S.Container>
    </S.Welcome>
  );
};

export default Welcome;
