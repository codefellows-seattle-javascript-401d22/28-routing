'use strict';

import './_landing.scss';
import React, { Component } from 'react';

// should display a general welcome message and a brief description of your todo list application

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <p>Welcome to the wonderful world of to do lists.</p>
      </div>
    );
  }
}