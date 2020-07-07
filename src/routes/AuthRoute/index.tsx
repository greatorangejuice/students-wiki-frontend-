import React, { ReactType } from 'react';
import { Route } from 'react-router-dom';

import * as S from './styled';

const AuthRoute = ({
  Component,
  path,
  exact,
}: {
  Component: ReactType;
  path: string;
  exact?: boolean;
}) => (
  <Route
    exact={exact}
    render={(props) => (
      <S.Main>
        <Component {...props} />;
      </S.Main>
    )}
  />
);

export default AuthRoute;
