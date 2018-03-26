'use strict';

import './_noteform.scss';
import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);

    let content = props.note ? props.note : '';
    let noteId = props.noteId ? props.noteId : '';

    this.state = { content, noteId }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value}, () => console.log('handleChange', this.state));

  }

  handleSubmit(e){
    e.preventDefault();
    console.log('handleSubmit', this.state);
    this.props.handleNote(this.state);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonTitle}</button>
      </form>
    )
  }
}

export default NoteCreateForm;