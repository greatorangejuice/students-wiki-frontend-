import React, { ReactType } from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as S from './styled';

const AuthRoute = ({
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
          return <Redirect to="/login" from={path} />;
        }
        return (
          <S.Main>
            <Component {...props} />;
          </S.Main>
        );
      }}
    />
  );
};

export default AuthRoute;
