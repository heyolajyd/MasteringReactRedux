// Define reducer function for Course and course related actions.
import * as actions from '../actions/actionTypes';

const authors = [];

const authorReducer = (state = authors, action)  => {
  switch (action.type) {
    case actions.LOAD_AUTHORS_SUCCESS: {
      const { authors } = action;
      return authors; 
    }

    default:
      return state;
  }
};

export default authorReducer;