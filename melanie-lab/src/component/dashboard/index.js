'use strict';

import './_dashboard.scss';
import React, { Component } from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-form';
import NoteList from '../note-list';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }
  
  updateNote(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map( item => {
        return item.id === note.id ? note : item;
      }),
    }));
  }

  removeNote(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter( item => {
        return item.id !== note.id;
      }),
    }));
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>create a note.</h2>
        <NoteForm 
          handleNoteCreate={this.addNote}
          submitTitle='add note'
        />

        <h2>notes.</h2>
        <NoteList 
          updateNote={this.updateNote}
          removeNote={this.removeNote}
          notes={this.props.app.state.notes} 
        />
        
      </div>
    );
  }
}