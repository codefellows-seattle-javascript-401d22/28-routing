'use strict';

import './_landing.scss';
import React, { Component } from 'react';
import NavBar from '../navbar';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <NavBar />
        <p>Welcome to the wonderful world of to do lists.</p>
        <p>Use this app to make to do lists or just take notes of any kind! Feel free to then update them as needed or just delete them when they're no longer needed!</p>
      </div>
    );
  }
}