'use strict';

import React from 'react';
import NoteUpdateForm from '../noteupdateform';

class NoteItem extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editing: false
    }

    this.editModeOn = this.editModeOn.bind(this);
    this.editModeOff = this.editModeOff.bind(this);
  }

  editModeOn() {
    this.setState({editing: true});
    this.props.editNote(this.props.note.id);
  }

  editModeOff() {
    this.setState({editing: false});
  }

  render() {
    return(
      <div onClick={this.editModeOn}>
        {this.state.editing ? 
          <NoteUpdateForm updateNote={this.props.updateNote} note={this.props.note} editModeOff={this.editModeOff} /> 
          :
          <div>
            <li><h3>{this.props.note.title}</h3>
            <p>{this.props.note.content}</p></li>
            <button onClick={() => {this.props.removeNote(this.props.note.id)}}>X</button>  
          </div>
        }
        
      </div>
    )
  }
}

export default NoteItem;