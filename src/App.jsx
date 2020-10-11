import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import { setupAction } from './actions/setupAction';

import CourseList from './components/couseList';


function App({ setupAction }) {
  useEffect(() => {
    setupAction();
  }, []);

  return (
    <div className='container'>
      <div className='container__content'>
        <h1 className='App-title'>Alle Kurse</h1>
        <CourseList></CourseList>
      </div>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
  setupAction: () => dispatch(setupAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
