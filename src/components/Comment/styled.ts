import styled from 'styled-components';

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
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #5474af;
`;

export const CommentDate = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #c9cae4;
  margin-top: 5px;
`;

export const CommentText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 25px;
  color: #282828;
  margin-top: 25px;
`;

export const CommentFooter = styled.div`
  margin-top: 25px;
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

export const ReplyToComment = styled.button`
  color: #5474af;
`;

export const CommentLikes = styled.div``;
