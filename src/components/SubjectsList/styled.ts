import styled from 'styled-components';

export const SubjectListWrapper = styled.div`
  border-bottom: 1px solid rgba(84, 116, 175, 0.35);
  margin-bottom: 60px;
`;
export const SubjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const SubjectListItem = styled.li`
  max-width: 360px;
  margin-bottom: 60px;
  position: relative;
`;
export const TeacherListItemLink = styled.a`
  font-family: 'Roboto', sans-serif;
  color: #5474af;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: normal;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    border-radius: 6px;
    left: -30px;
    width: calc(100% + 60px);
    height: calc(100% + 60px);
    background: #5474af;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    &::after {
      opacity: 0.1;
    }
  }
`;
export const TeacherListItemDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: normal;
`;
