import React, { ReactType } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import * as S from './styled';

const PublicRoute = ({
  Component,
  path,
  exact,
}: {
  Component: ReactType;
  path: string;
  exact?: boolean;
}) => {
  // WIP add authentication here
  const authentication = true;
  return (
    <Route
      exact={exact}
      render={(props) => {
        if (authentication) {
          return (
            <>
              <S.Main>
                <Component {...props} />
              </S.Main>
              <Footer />
            </>
          );
        }
        return <Redirect to="/login" from={path} />;
      }}
    />
  );
};

export default PublicRoute;
