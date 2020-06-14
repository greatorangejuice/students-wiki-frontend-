import React from 'react';

import Welcome from 'components/Welcome';

import userpic from 'assets/images/userpic.png';

import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Предметы', active: '' },
  { id: 3, value: 'Программер', active: 'active' },
];

const Profile = () => {
  return (
    <>
      <Welcome breadCrumbs={breadCrumbs} />
      <S.ProfileSection>
        <S.Container>
          <S.StyledReturnBack to="/subjects" />
          <S.UserProfile>
            <S.UserImg src={userpic} />
            <S.UserName>Программер</S.UserName>
            <S.UserUniversity>БГУИР</S.UserUniversity>
            <S.UserFaculty>
              Факультет компьютерного проектирования
            </S.UserFaculty>
            <S.UserDescription>
              Я конечно очень сильно люблю ничего не делать, но если вам что-то
              нужно помочь с прогой, то пишите, постараюсь что-нибудь придумать
              :)
            </S.UserDescription>
            <S.StyledAddButton value="Написать сообщение" />
          </S.UserProfile>
        </S.Container>
      </S.ProfileSection>
    </>
  );
};

export default Profile;
