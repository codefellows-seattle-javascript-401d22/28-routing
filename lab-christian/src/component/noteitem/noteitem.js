'use strict';

import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.removeNote(this.props.id);
  }

  render() {
    return (
      <li>
        <div>Title: {this.props.title}</div>
        <div>Content: {this.props.content}</div>
        <button onClick={this.onClick}>Delete</button>
      </li>
    )
  }
}

export default NoteItem;