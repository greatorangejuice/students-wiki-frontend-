import React from 'react';

import * as S from './styled';

const Feedback = () => {
  return (
    <S.FeedbackSection>
      <S.Container>
        <S.Title>
          Этот форум был разрабон студентами для студентов. Если у вас есть
          какие-то пожелания или предложения, то заполните пожалуйста форму
          обратной связи. Спасибо!
        </S.Title>
        <S.Label htmlFor="feedbackTextarea">Ваше предложение</S.Label>
        <S.Textarea
          id="feedbackTextarea"
          name="feedbackTextarea"
          rows={20}
          cols={90}
          placeholder="Введите предложение"
        />

        <S.StyledButton>Отправить</S.StyledButton>
      </S.Container>
    </S.FeedbackSection>
  );
};

export default Feedback;
