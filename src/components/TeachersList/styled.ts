import styled from 'styled-components';

export const TeacherListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

export const TeacherList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(84, 116, 175, 0.35);
`;
export const TeacherListItem = styled.li`
  display: flex;
  margin-bottom: 80px;

  &:nth-child(odd) {
    margin-right: 150px;
  }
`;
export const TeacherListItemAvatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const TeacherListItemContent = styled.div``;
export const TeacherListItemHeading = styled.h4`
  font-family: 'Marmelad', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #282828;
  max-width: 180px;
  margin-bottom: 20px;
`;

export const TeacherListItemDescription = styled.p`
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 16px;
  max-width: 144px;
  color: #282828;
`;

export const TeacherListItemComments = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  display: flex;
  color: #a6a6d2;

  svg {
    margin-right: 3px;
  }
`;
