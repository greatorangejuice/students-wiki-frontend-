import React from 'react';

import { MockSubjectsList } from 'assets/mock';

import * as S from './styled';

const SubjectsList = () => {
  return (
    <S.SubjectListWrapper>
      <S.SubjectList>
        {MockSubjectsList.map(({ id, link, departmentName, subjectName }) => (
          <S.SubjectListItem key={id}>
            <S.TeacherListItemLink href={link}>
              {departmentName}
            </S.TeacherListItemLink>
            <S.TeacherListItemDescription>
              {subjectName}
            </S.TeacherListItemDescription>
          </S.SubjectListItem>
        ))}
      </S.SubjectList>
    </S.SubjectListWrapper>
  );
};

export default SubjectsList;
