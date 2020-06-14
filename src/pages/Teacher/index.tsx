import React from 'react';

import Aside from 'components/Aside';

import { teacher } from 'assets/mock/Teacher';
import { commentsList, TeacherList, SubjectList } from 'assets/mock';

import userpic from 'assets/images/userpic.png';

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
          <S.Article>
            <S.StyledReturnBack to="/teachers" />
            <S.TeacherColumn>
              <S.TeacherImageWrapper>
                <S.TeacherImg src={userpic} />
                <S.Rating>
                  Рейтинг:
                  <S.SvgUnicorn />
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
              <S.StyledCommentList comments={commentsList} />
            </S.CommentsContainer>
            <S.StyledAddButton value="Показать больше" />
          </S.Article>
          <S.Aside>
            <Aside
              value={SubjectList.value}
              linkList={SubjectList.linkList}
              add="добавить предмет"
            />

            <Aside
              value={TeacherList.value}
              linkList={TeacherList.linkList}
              add="добавить преподавателя"
            />
          </S.Aside>
        </S.Container>
      </S.TeacherSection>
    </>
  );
};

export default Teacher;
