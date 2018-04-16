'use strict';

import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className='note-item'>
        <div className='note'>
          <h3>- {this.props.title}:</h3><p>{this.props.content}</p>
        </div>
        <button onClick={this.handleClick} type='submit'>X</button>
      </div>
    );
  }
}

export default NoteItem;