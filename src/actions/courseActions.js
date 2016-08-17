// Actions for course
import * as actions from './actionTypes';

// import mock API calls
import courseApi from '../api/mockCoursesApi'; 

export function loadCoursesSuccess(courses) {
  return { 
    type: actions.LOAD_COURSES_SUCCESS, 
    courses
  };
}

export function createCourseSuccess(course) {
  return { 
    type: actions.CREATE_COURSES_SUCCESS, 
    course
  };
}

export function updateCourseSuccess(course) {
  return { 
    type: actions.UPDATE_COURSES_SUCCESS, 
    course
  };
}

// Define thunks for API calls
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw error;
    });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course))
      : dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw error;
    });
  };
}


