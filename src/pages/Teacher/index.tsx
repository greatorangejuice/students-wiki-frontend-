import React from 'react';

import { teacher } from 'assets/mock/Teacher';
import { commentsList, CommentsListType } from 'assets/mock';

import userpic from 'assets/images/userpic.png';
import { ReactComponent as SvgUnicorn } from 'assets/images/unicorn.svg';

import * as S from './styled';

const breadCrumbs = [
  { id: 1, value: 'Главная', active: '' },
  { id: 2, value: 'Преподаватели', active: '' },
  { id: 3, value: 'Иванов В. В.', active: 'active' },
];

const Teacher = () => {
  return (
    <>
      <S.StyledWelcome breadCrumbs={breadCrumbs} />
      <S.TeacherSection>
        <S.Container>
          <S.StyledReturnBack to="/teachers" />
          <S.TeacherColumn>
            <S.TeacherImageWrapper>
              <S.TeacherImg src={userpic} />
              <S.Rating>
                Рейтинг:
                <SvgUnicorn />
                <S.RatingNumber>{teacher.rating || 0}</S.RatingNumber>
              </S.Rating>
              <S.StyledAddButton value="Оценить Преподавателя" />
            </S.TeacherImageWrapper>
            <S.TeacherInfo>
              <S.TeacherName>{teacher.name}</S.TeacherName>
              <S.TeacherDepartment>
                Кафедра {teacher.department}
              </S.TeacherDepartment>
              <S.TeacherDisciplines>Дисциплины</S.TeacherDisciplines>
              {teacher?.discipline?.length && (
                <S.DisciplineUl>
                  {teacher.discipline.map((el) => (
                    <S.DisciplineLi key={el}>{el}</S.DisciplineLi>
                  ))}
                </S.DisciplineUl>
              )}
            </S.TeacherInfo>
          </S.TeacherColumn>
          <S.CommentsContainer>
            <S.CommentsHeader>
              <S.CommentsTitle>
                Комментарии <S.CommentsAmount>35</S.CommentsAmount>
              </S.CommentsTitle>
              <S.StyledAddButton value="Добавить комментарий" />
            </S.CommentsHeader>
            {commentsList?.length && (
              <ul>
                {commentsList?.map((comment: CommentsListType) => (
                  <li key={comment.id}>
                    <S.StyledComment comment={comment} />
                  </li>
                ))}
              </ul>
            )}
          </S.CommentsContainer>
        </S.Container>
      </S.TeacherSection>
    </>
  );
};

export default Teacher;
