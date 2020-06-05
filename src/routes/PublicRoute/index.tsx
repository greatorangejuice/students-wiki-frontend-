import React, { ReactType } from 'react';
import { Route } from 'react-router-dom';

import Footer from 'components/Footer';
import * as S from './styled';

const PublicRoute = ({
  Component,
  path,
  exact,
}: {
  Component: ReactType;
  path?: string;
  exact?: boolean;
}) => (
  <Route
    exact={exact}
    render={(props) => (
      <>
        <S.Main>
          <S.Container>
            <Component {...props} />
          </S.Container>
        </S.Main>
        <Footer />
      </>
    )}
  />
);

export default PublicRoute;
