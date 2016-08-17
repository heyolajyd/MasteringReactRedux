// Actions for course
import * as actions from './actionTypes';

// import mock API calls
import authorApi from '../api/mockAuthorApi'; 

export function loadAuthorsSuccess(authors) {
  return { 
    type: actions.LOAD_AUTHORS_SUCCESS, 
    authors
  };
}

// Define thunks for API calls
export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch(error => {
      throw error;
    });
  };
}
