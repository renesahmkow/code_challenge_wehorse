import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './couseList.scss';

import toggleWishListFlag from '../actions/wishListAction';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function CourseList({ course, toggleWishListFlag }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(course.wishListFlag);
  }, [course.wishListFlag]);

  return (
    <div className='c-courseList__course' key={course.courseId}>
      <div className='c-courseList__course__image'></div>
      <div className='c-courseList__course__wrapper'>
        <div className='c-courseList__course__title'>{course.courseName}</div>
        <div
          className='c-courseList__course__icon'
          onClick={() => {
            toggleWishListFlag(course);
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {
  toggleWishListFlag
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
