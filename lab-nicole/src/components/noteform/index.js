'use strict';

import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addNote(this.state.title, this.state.content);
  }

  render() {
    return(
      <div>
        <form 
          className='note-form' 
          onSubmit={this.handleSubmit}>

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
      </div>
    )
  }
}

export default NoteForm;