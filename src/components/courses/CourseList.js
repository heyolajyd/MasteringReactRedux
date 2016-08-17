import React, { Component, PropTypes } from 'react';
import CourseRow from './CourseRow';

const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>&nbsp;</td>
          <td>Title</td>
          <td>Author</td>
          <td>Category</td>
          <td>Length</td> 
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => 
          <CourseRow key={index} course={course} />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;