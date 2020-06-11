import React from 'react';

import { CommentsListType } from 'assets/mock';

import userpic from 'assets/images/userpic.png';

import * as S from './styled';

const Comment = (comment: CommentsListType) => {
  return (
    <S.CommentWrapper>
      <S.CommentHeader>
        <S.CommentatorImg src={userpic} />
        <S.CommentInfo>
          <S.CommentatorName>{comment.writer}</S.CommentatorName>
          <S.CommentDate>Опубликовано {comment.date}</S.CommentDate>
        </S.CommentInfo>
      </S.CommentHeader>
      <S.CommentText>{comment.text}</S.CommentText>
      <S.CommentFooter>
        <S.ReplyToComment>Ответить на комментарий</S.ReplyToComment>
        <S.CommentLikes>{comment.likes}</S.CommentLikes>
      </S.CommentFooter>
    </S.CommentWrapper>
  );
};

export default Comment;
