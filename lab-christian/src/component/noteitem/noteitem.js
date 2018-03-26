'use strict';

import React from 'react';
import NoteUpdateForm from './noteupdate/noteupdate';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.onClick = this.onClick.bind(this);
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
          <div onClick={()=>{this.switchMode('edit');}}>Content: {this.props.content}</div>
          <button onClick={this.onClick}>Delete</button>
        </li>
      )
    } else if(this.state.mode === 'edit') {
      return(
        <li>
          <NoteUpdateForm handleCancel={this.handleCancel}/>
        </li>
      )
    }
  }
}

export default NoteItem;