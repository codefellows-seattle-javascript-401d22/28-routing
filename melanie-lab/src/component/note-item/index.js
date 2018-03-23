'use strict';

import './_note-item.scss';
import React, { Component } from 'react';

export default class NoteItem extends Component {
  render() {
    return (
      <div className='note-item'>
        <h3>- {this.props.content}</h3>
      </div>
    );
  }
}