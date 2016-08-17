// Define reducer function for Course and course related actions.
import * as actions from '../actions/actionTypes';

const courses = [];

const courseReducer = (state = courses, action)  => {
  switch (action.type) {

    case actions.LOAD_COURSES_SUCCESS: {
      return action.courses; 
    }

    case actions.CREATE_COURSES_SUCCESS: {
      return [ 
        ...state,
        Object.assign({}, action.course)
      ];
    }

    case actions.UPDATE_COURSES_SUCCESS: {
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    }
    
    default:
      return state;
  }
};

export default courseReducer;