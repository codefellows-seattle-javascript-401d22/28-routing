'use strict';

import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    
    let content = props.note ? props.note.content : '';
    this.state = { content };
    
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
      <form className='note-update-form' onSubmit={this.handleSubmit}>
        <input
          name='content'
          type='text'
          placeholder='Content'
          value={this.state.content}
          onChange={this.handleChange} />

        <button className='update-button' type='submit'>{this.props.submitTitle}</button>
      </form>
    );
  }
}
export default NoteUpdateForm;