'use strict';

import React from 'react';
import NoteForm from '../note-form';

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: '', 
        content: ''
      }

      this.noteUpdate = this.noteUpdate.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    noteUpdate(e) {
      e.preventDefault();
      let note = {...this.state};
      note.id = this.props.note.id;
      this.props.app.setState( prevState => ({
        notes : prevState.notes.map((item) => {
          return item.id === note.id ? note : item;
        })
      }));
    }

    render() {
      return (
        <form onSubmit={this.noteUpdate}>

          <input 
            name='title'
            type='text'
            placeholder={this.props.note.title}
            value={this.state.title}
            onChange={this.handleChange} />
          
          <input
            name='content'
            type='text'
            placeholder={this.props.note.content}
            value={this.state.content}
            onChange={this.handleChange} />

          <button type='submit'>update note</button>
          <button onClick={() => this.props.note.editing === false}>cancel</button>
          
        </form> 
      )
    }
  }

export default NoteUpdateForm;