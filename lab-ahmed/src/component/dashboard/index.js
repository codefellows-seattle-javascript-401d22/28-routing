'use strict';

import React from 'react';
import uuid from 'uuid';

import NoteForm from '../note-form/index.js';
import NoteList from '../note-list/index.js';
import NavBar from '../navbar/index.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.newNote = this.newNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  newNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }
  
  editNote(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map( item => {
        return item.id === note.id ? note : item;
      }),
    }));
  }

  deleteNote(note) {
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter( item => {
        return item.id !== note.id;
      }),
    }));
  }

  render() {
    return (
      <div className='dashboard'>
        <NavBar />
        <h2>create a note.</h2>
        <NoteForm 
          handleNoteCreate={this.newNote}
          submitTitle='add note'
        />

        <h2>notes.</h2>
        <NoteList 
          editNote={this.editNote}
          deleteNote={this.deleteNote}
          notes={this.props.app.state.notes} 
        />
      </div>
    );
  }
}
export default Dashboard;