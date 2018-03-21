'use strict';

import './_note-form.scss';
import React, { Component } from 'react';

export default class NoteForm extends Component {
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
          placeholder='Note title'
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          name='content'
          type='text'
          placeholder='Content here'
          value={this.state.content}
          onChange={this.handleChange} />

        <button type='submit'>Add Note</button>
      </form>
    );
  }
}