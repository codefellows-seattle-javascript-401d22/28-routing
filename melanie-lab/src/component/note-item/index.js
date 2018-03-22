'use strict';

import './_note-item.scss';
import React, { Component } from 'react';

export default class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    //  onClick the note should be removed from the application state
  }

  render() {
    return (
      <div className='note-item'>
        <div className='note'>
          <h3>- {this.props.title}:</h3><p>{this.props.content}</p>
        </div>
        <button onClick={this.handleClick} type='submit'>delete note</button>
      </div>
    );
  }
}