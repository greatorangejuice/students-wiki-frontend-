import React from 'react';

import UserPic from 'assets/images/userpic.png';
import { ReactComponent as Comments } from 'assets/images/comment.svg';

import { MockTeachersList } from 'assets/mock';

import * as S from './styled';

const TeachersList = () => {
  return (
    <S.TeacherListWrapper>
      <S.TeacherList>
        {MockTeachersList.map((teacher) => (
          <S.TeacherListItem key={teacher.id}>
            <S.TeacherListItemAvatar src={UserPic} />
            <S.TeacherListItemContent>
              <S.TeacherListItemHeading>
                {teacher.name}
              </S.TeacherListItemHeading>
              <S.TeacherListItemDescription>
                {teacher.department}
              </S.TeacherListItemDescription>
              <S.TeacherListItemComments>
                <Comments />
                {teacher.comments}
              </S.TeacherListItemComments>
            </S.TeacherListItemContent>
          </S.TeacherListItem>
        ))}
      </S.TeacherList>
    </S.TeacherListWrapper>
  );
};

export default TeachersList;
