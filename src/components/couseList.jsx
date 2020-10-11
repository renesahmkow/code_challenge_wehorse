import React from 'react';
import { connect } from 'react-redux';

import './couseList.scss';

import Course from './course';

function CourseList({ courseList }) {
  return (
    <div className='c-courseList'>
      {courseList &&
        courseList.map((course) => {
          return <Course course={course} key={course.courseId} />;
        })}
    </div>
  );
}

const mapStateToProps = ({ courseList }) => ({
  courseList
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
