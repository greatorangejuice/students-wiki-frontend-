import React from 'react';

import { CommentsListType } from 'assets/mock';

import * as S from './styled';

const CommentList: React.FC<{ comments: CommentsListType[] }> = ({
  comments,
}) => {
  return comments?.length ? (
    <S.Ul>
      {comments?.map((comment) => (
        <S.Li key={comment.id}>
          <S.StyledComment comment={comment} />
          {comment?.replies?.length &&
            comment?.replies?.map((reply) => (
              <S.StyledReply key={comment.id} comment={reply} />
            ))}
        </S.Li>
      ))}
    </S.Ul>
  ) : (
    <></>
  );
};

export default CommentList;
