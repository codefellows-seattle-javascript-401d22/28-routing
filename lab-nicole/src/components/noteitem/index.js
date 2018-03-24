'use strict';

import React from 'react';

class NoteItem extends React.Component {
  render() {
    return(
      <div>
        <li>{this.props.note.title}</li>
        {console.log('note id from note item', this.props.note.id)}
        <button onClick={() => {this.props.removeNote(this.props.note.id)}}>X</button>
      </div>
    )
  }
}

export default NoteItem;