import styled from 'styled-components';

import AddButton from 'components/AddButton';
import Comment from 'components/Comment';
import ReturnBack from 'components/ReturnBack';
import Welcome from 'components/Welcome';

export const StyledWelcome = styled(Welcome)``;

export const TeacherSection = styled.section`
  background: white;
`;

export const Container = styled.div``;

export const StyledReturnBack = styled(ReturnBack)`
  margin-top: 55px;
`;

export const TeacherColumn = styled.div`
  display: flex;
  flex-wrap: wrap;

  ::before,
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgba(84, 116, 175, 0.35);
    margin: 55px 0;
  }
`;

export const TeacherImageWrapper = styled.div``;

export const TeacherImg = styled.img`
  border-radius: 50%;
  max-width: 220px;
  width: 100%;
  max-height: 220px;
  height: 100%;
  object-fit: cover;
`;

export const Rating = styled.div`
  text-align: center;
`;

export const RatingNumber = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  color: #5474af;
`;

export const StyledAddButton = styled(AddButton)`
  margin-top: 15px;
`;

export const TeacherInfo = styled.div`
  margin-left: 50px;
`;

export const TeacherName = styled.h2`
  font-family: 'Marmelad', sans-serif;
  font-size: 36px;
  color: #282828;
  margin-bottom: 0;
`;

export const TeacherDepartment = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #5474af;
  margin-top: 15px;
`;

export const TeacherDisciplines = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #5474af;
  margin-top: 40px;
`;

export const DisciplineUl = styled.ul``;

export const DisciplineLi = styled.li`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #282828;
  margin-top: 10px;
`;

export const CommentsContainer = styled.div``;

export const CommentsHeader = styled.div``;

export const CommentsTitle = styled.div``;

export const CommentsAmount = styled.div``;

export const StyledComment = styled(Comment)``;
