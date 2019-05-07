'use strict';

import React from 'react';
import NoteUpdateForm from './noteupdate/noteupdate';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }

    this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleNoteUpdate(title, content) {
    this.props.updateNote(this.props.id, title, content);
  }

  handleCancel() {
    this.switchMode('default');
  }

  switchMode(mode) {
    this.setState({
      mode: mode
    });
  }

  onClick(e) {
    e.preventDefault();
    this.props.removeNote(this.props.id);
  }

  render() {
    if(this.state.mode === 'default') {
      return(
        <li>
          <div>Title: {this.props.title}</div>
          <div onClick={()=>{this.switchMode('edit')}}>Content: {this.props.content}</div>
          <button onClick={this.onClick}>Delete</button>
        </li>
      )
    } else if(this.state.mode === 'edit') {
      return(
        <li>
          <NoteUpdateForm handleCancel={this.handleCancel} handleNoteUpdate={this.handleNoteUpdate} switchMode={this.switchMode}/>
        </li>
      )
    }
  }
}

export default NoteItem;