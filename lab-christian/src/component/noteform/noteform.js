'use strict';

import React from 'react';
import uuidv1 from 'uuid/v1';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onComplete(e) {
    e.preventDefault();
    this.props.handleNoteCreate({
      title: this.state.title,
      content: this.state.content,
      id: uuidv1(),
      editing: false,
      completed: false,
    });
  }

  render() {
    return (
      <section id="noteform">
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
        </form>
      </section>
    )
  }
}

export default NoteForm;