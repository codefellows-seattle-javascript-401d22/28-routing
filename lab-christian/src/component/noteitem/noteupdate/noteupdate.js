'use strict';

import React from 'react';
import uuidv1 from 'uuid/v1';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }

    this.cancelNote = this.cancelNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  cancelNote(e) {
    e.preventDefault();
    this.props.handleCancel();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onComplete(e) {
    e.preventDefault();
    this.props.handleNoteUpdate(this.state.title, this.state.content);
    this.props.switchMode('default');
  }

  render() {
    return (
      <section id="noteupdate">
        <form onSubmit={this.onComplete}>
          <input
            name='title'
            type='text'
            value={this.state.title}
            onChange={this.handleChange}
          />

          <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />

          <button type='submit'>Add Note</button>
          <button onClick={this.cancelNote}>Cancel</button>
        </form>
      </section>
    )
  }
}

export default NoteUpdateForm;