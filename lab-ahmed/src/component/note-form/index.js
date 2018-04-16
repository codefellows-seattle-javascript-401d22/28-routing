'use strict';

import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          onChange={this.handleChange} />

        <input
          name='content'
          type='text'
          onChange={this.handleChange} />

        <button type='submit'>Create Note</button>
      </form>
    );
  }
}

export default NoteForm;