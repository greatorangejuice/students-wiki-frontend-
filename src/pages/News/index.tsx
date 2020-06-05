import React from 'react';

import Welcome from 'components/Welcome';
import Aside from 'components/Aside';

import { TeacherList, SubjectList } from 'assets/mock';

const News = () => {
  return (
    <>
      <Welcome />
      <section style={{ background: 'white' }}>
        <div className="container">
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
        </div>
      </section>
    </>
  );
};

export default News;
