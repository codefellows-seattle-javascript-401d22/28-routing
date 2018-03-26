'use strict';

import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
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
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    )
  }
}

export default NoteForm;
       

      