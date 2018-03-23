'use strict';

import './_noteform.scss';
import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);

    let content = props.note ? props.note.content : '';

    this.state = { content }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log('formState', this.state);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleCreateNote(this.state);
    console.log('submitState', this.state);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>create a note.</h2>
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>add note</button>
      </form>
    )
  }
}

export default NoteCreateForm;