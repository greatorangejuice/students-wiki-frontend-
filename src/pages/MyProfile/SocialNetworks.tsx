import React from 'react';

import * as S from './styled';

const SocialNetworks = () => {
  return (
    <S.SocialNetworksPage>
      <S.Title>Социальные сети</S.Title>
      <S.FieldLabel>Вконтакте</S.FieldLabel>
      <S.InputField placeholder="https://vk.com/blabla" />
      <S.FieldLabel>GitHub</S.FieldLabel>
      <S.InputField placeholder="Добавьте ссылку" />
      <S.FieldLabel>Google</S.FieldLabel>
      <S.InputField placeholder="Добавьте ссылку" />
      <S.FieldLabel>Telegram</S.FieldLabel>
      <S.InputField placeholder="Добавьте ссылку" />
      <S.StyledButton>Сохранить</S.StyledButton>
    </S.SocialNetworksPage>
  );
};

export default SocialNetworks;
