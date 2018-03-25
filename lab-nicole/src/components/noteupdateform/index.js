'use strict';

import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      title: null,
      content: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({[name]: value}, () =>{
      console.log('note update state', this.state)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let note = this.props.note;
    note.title = this.state.title;
    note.content = this.state.content;
    note.editing = false;

    this.setState({note});
    console.log('note state in note update form', note);
    this.props.updateNote(note);
    this.props.editModeOff();
  }


  render() {
    return(
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

        <button type='submit'>Update Note</button>
      </form>
    )
  }
}

export default NoteUpdateForm;