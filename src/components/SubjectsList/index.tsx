import React from 'react';

import { MockSubjectsList } from 'assets/mock';

import * as S from './styled';

const SubjectsList = () => {
  return (
    <S.SubjectListWrapper>
      <S.SubjectList>
        {MockSubjectsList.map((subject) => (
          <S.SubjectListItem key={subject.id}>
            <S.TeacherListItemLink href={subject.link}>
              {subject.departmentName}
            </S.TeacherListItemLink>
            <S.TeacherListItemDescription>
              {subject.subjectName}
            </S.TeacherListItemDescription>
          </S.SubjectListItem>
        ))}
      </S.SubjectList>
    </S.SubjectListWrapper>
  );
};

export default SubjectsList;
