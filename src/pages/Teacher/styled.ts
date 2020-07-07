import styled from 'styled-components';

import { ReactComponent as Unicorn } from 'assets/images/unicorn.svg';

import AddButton from 'components/AddButton';
import CommentList from 'components/CommentList';
import ReturnBack from 'components/ReturnBack';
import Welcome from 'components/Welcome';

export const StyledWelcome = styled(Welcome)``;

export const TeacherSection = styled.section`
  background: white;
  padding-top: 56px;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Article = styled.article`
  margin-bottom: 180px;
`;

export const StyledReturnBack = styled(ReturnBack)``;

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
  margin-top: 25px;
`;

export const SvgUnicorn = styled(Unicorn)`
  margin: 0 2px 0 5px;
`;

export const RatingNumber = styled.span`
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
  font-size: 18px;
  color: #5474af;
  margin-top: 15px;
`;

export const TeacherDisciplines = styled.p`
  font-size: 18px;
  color: #5474af;
  margin-top: 40px;
`;

export const DisciplineUl = styled.ul``;

export const DisciplineLi = styled.li`
  font-size: 18px;
  color: #282828;
  margin-top: 10px;
`;

export const CommentsContainer = styled.div`
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgba(84, 116, 175, 0.35);
    margin: 55px 0;
  }
`;

export const CommentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCommentList = styled(CommentList)``;

export const CommentsTitle = styled.div`
  font-family: 'Marmelad', sans-serif;
  font-size: 36px;
  color: #282828;
  position: relative;
`;

export const CommentsAmount = styled.span`
  font-family: 'Marmelad', sans-serif;
  font-size: 24px;
  color: #5474af;
  position: absolute;
  margin-left: 10px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;
