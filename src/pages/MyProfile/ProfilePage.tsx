import React from 'react';

import userpic from 'assets/images/userpic.png';

import * as S from './styled';

const ProfilePage = () => {
  return (
    <S.ProfilePages>
      <S.EditPage>
        <S.Title>Редактирование профиля</S.Title>
        <S.ImageSection>
          <S.ImageLabel>Фото</S.ImageLabel>
          <S.UserImage src={userpic} />
          <S.EditImg>
            <S.ChangeImg>Изменить</S.ChangeImg>
            <S.DeleteImg>Удалить</S.DeleteImg>
          </S.EditImg>
        </S.ImageSection>

        <S.FieldLabel>Никнейм</S.FieldLabel>
        <S.InputField placeholder="Программер" />
        <S.FieldLabel>Университет</S.FieldLabel>
        <S.InputField placeholder="БГУИР" />
        <S.FieldLabel>Факультет</S.FieldLabel>
        <S.InputField placeholder="Факультет компьютерного проектирования" />
        <S.FieldLabel>
          О себе (<S.Span>до 150 символов</S.Span>)
        </S.FieldLabel>
        <S.TextareaField placeholder="Я конечно очень сильно люблю ничего не делать, но если вам что-то нужно помочь с прогой, то пишите, постараюсь что-нибудь придумать :)" />
        <S.StyledButton>Сохранить</S.StyledButton>
      </S.EditPage>
    </S.ProfilePages>
  );
};

export default ProfilePage;
