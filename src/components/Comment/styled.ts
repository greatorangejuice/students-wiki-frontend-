import styled from 'styled-components';

import { ReactComponent as Like } from 'assets/images/like.svg';

export const CommentWrapper = styled.div``;

export const CommentHeader = styled.div`
  display: flex;
`;

export const CommentatorImg = styled.img`
  border-radius: 50%;
  max-width: 46px;
  width: 100%;
  max-height: 46px;
  height: 100%;
  object-fit: cover;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const CommentatorName = styled.p`
  font-size: 18px;
  color: #5474af;
`;

export const CommentDate = styled.p`
  color: #c9cae4;
  margin-top: 5px;
`;

export const CommentText = styled.p`
  line-height: 25px;
  color: #282828;
  margin-top: 25px;
`;

export const CommentFooter = styled.div`
  margin-top: 25px;
`;

export const ReplyToComment = styled.button`
  display: inline-block;
  color: #5474af;
`;

export const SvgLike = styled(Like)`
  vertical-align: middle;
  margin: 0 5px 0 25px;
`;

export const CommentLikes = styled.div`
  font-size: 14px;
  display: inline-block;
  color: #a6a6d2;
`;
