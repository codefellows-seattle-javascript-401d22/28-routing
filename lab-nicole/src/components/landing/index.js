'use strict';

import React from 'react';
import NavBar from '../navbar/index.js';


class Landing extends React.Component {
  render() {
    return (
      <section className='about-section'>
        <NavBar />
        <h2>Welcome to the To Do List Tracker!</h2>
        <h3>This application will help you add, update, and delete notes from your to do list!</h3>
      </section>
    )
  }
}

export default Landing;