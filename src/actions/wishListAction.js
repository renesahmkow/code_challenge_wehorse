function setWishListState(courseList) {
  return { type: 'TOGGLE_WISHLISTSTATE', payload: courseList };
}

export default function toggleWishListFlag(course) {
  return async function (dispatch, getState) {
    const courseList = getState().courseList;

    const listItem = courseList.find((item) => {
      return item.courseId === course.courseId;
    });

    listItem.wishListFlag = !listItem.wishListFlag;

    dispatch(setWishListState(courseList));
  };
}
