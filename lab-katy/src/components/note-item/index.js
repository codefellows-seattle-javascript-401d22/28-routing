'use strict';

import React from 'react';

import NoteForm from '../note-form';
import NoteUpdateForm from '../note-update-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button onClick={() => this.props.removeNote(this.props.note)}>X</button>
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
        <NoteUpdateForm note={this.props.note} app={this.props.app}/>
      </li>
    ) 
  }
}

export default NoteItem;