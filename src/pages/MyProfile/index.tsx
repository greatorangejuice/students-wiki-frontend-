import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Welcome from 'components/Welcome';

import AccountPage from './AccountPage';
import ProfilePage from './ProfilePage';
import SocialNetworksPage from './SocialNetworks';

import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Профиль', active: 'active' },
];

const MyProfile = () => {

  return (
    <>
      <Welcome breadCrumbs={breadCrumbs} />
      <S.MyProfileSection>
        <S.Container>
          <S.StyledReturnBack to="/" />
          <S.Profile>
            <S.Sidebar>
              <S.ProfileEditing
                to="/my-profile/edit-profile"
              >
                Редактирование профиля
              </S.ProfileEditing>
              <S.ChangeAccount
                to="/my-profile/edit-account"
              >
                Изменить учётную запись
              </S.ChangeAccount>
              <S.SocialNetworks
                to="/my-profile/social"
              >
                Социальные сети
              </S.SocialNetworks>
            </S.Sidebar>

            <Switch>
              <Route path="/my-profile/edit-profile">
                <ProfilePage />
              </Route>
              <Route path="/my-profile/edit-account">
                <AccountPage />
              </Route>
              <Route path="/my-profile/social">
                <SocialNetworksPage />
              </Route>
              <Route>
                <ProfilePage />
              </Route>
            </Switch>
          </S.Profile>
        </S.Container>
      </S.MyProfileSection>
    </>
  );
};

export default MyProfile;
