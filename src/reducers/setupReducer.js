import courseList from '../data/coursList.json';

export default (state = courseList.courseList, action) => {
  switch (action.type) {
    case 'SETUP_ACTION':
      return action.payload;
    case 'TOGGLE_WISHLISTSTATE':
      return action.payload;
    default:
      return state;
  }
};
