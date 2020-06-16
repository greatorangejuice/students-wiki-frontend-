import React, { useState } from 'react';

import Welcome from 'components/Welcome';

import AccountPage from './AccountPage';
import ProfilePage from './ProfilePage';
import SocialNetworksPage from './SocialNetworks';

import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Профиль', active: 'active' },
];

type State = {
  activePage: string;
};

const MyProfile = () => {
  const [state, setState] = useState<State>({
    activePage: 'editProfile',
  });

  return (
    <>
      <Welcome breadCrumbs={breadCrumbs} />
      <S.MyProfileSection>
        <S.Container>
          <S.StyledReturnBack to="/" />
          <S.Profile>
            <S.Sidebar>
              <S.ProfileEditing
                active={state.activePage === 'editProfile'}
                onClick={() => {
                  setState({ ...state, activePage: 'editProfile' });
                }}
              >
                Редактирование профиля
              </S.ProfileEditing>
              <S.ChangeAccount
                active={state.activePage === 'editAccount'}
                onClick={() => {
                  setState({ ...state, activePage: 'editAccount' });
                }}
              >
                Изменить учётную запись
              </S.ChangeAccount>
              <S.SocialNetworks
                active={state.activePage === 'socialNetworks'}
                onClick={() => {
                  setState({ ...state, activePage: 'socialNetworks' });
                }}
              >
                Социальные сети
              </S.SocialNetworks>
            </S.Sidebar>
            {state.activePage === 'editProfile' ? (
              <ProfilePage />
            ) : state.activePage === 'editAccount' ? (
              <AccountPage />
            ) : (
              <SocialNetworksPage />
            )}
          </S.Profile>
        </S.Container>
      </S.MyProfileSection>
    </>
  );
};

export default MyProfile;
