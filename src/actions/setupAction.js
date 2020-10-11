import courseList from '../data/coursList.json';

export function setupAction() {
  return async function (dispatch) {
    dispatch({
      type: 'SETUP_ACTION',
      payload: courseList.courseList
    });
  };
}
