'use strict';

import React from 'react';

class NoteItem extends React.Component{
  render() {
    return(
      <div className='note-item'>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default NoteItem;