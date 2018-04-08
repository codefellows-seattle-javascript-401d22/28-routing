'use strict';

import React from 'react';
import uuid from 'uuid';
import NoteForm from '../note-form';
import NoteList from '../note-list';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.newNote = this.newNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  newNote(note) {
    note.completed = false;
    note.editing = false;
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  deleteNote(note) {
    this.setState({
      note: this.state.notes.filter( note => {
        note.id !== note.id;
      }),
    });
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>Add a Note</h2>
        <NoteForm handleNoteCreate={this.newNote} />

        <h3>Notes</h3>
        <NoteList notes={this.props.app.state.notes} />
      </div>
    );
  }
}

export default Dashboard;