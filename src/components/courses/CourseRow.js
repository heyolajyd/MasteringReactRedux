import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const CourseRow = ({course}) => {
  const { id, title, watchHref, authorId, category, length } = course;
  return (
    <tr>
      <td><a href={watchHref} target="_blank">Watch</a></td>
      <td><Link to={`/course/${id}`}>{title}</Link></td>
      <td>{authorId}</td>
      <td>{category}</td>
      <td>{length}</td>
    </tr>
  );
};

CourseRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseRow;