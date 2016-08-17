import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import * as courseActions from '../../actions/courseActions';
import { browserHistory } from 'react-router';

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.redirectToCoursePage = this.redirectToCoursePage.bind(this);
  }

  redirectToCoursePage() {
    browserHistory.push('/course'); 
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
              value="Add Course"
              className="btn btn-primary"
              onClick={this.redirectToCoursePage} />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { courses } = state;
  return { courses };
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);