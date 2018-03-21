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

  removeNote(note) {
    console.log(note);
    // should have a bound removeNote(note) method that removes a note from state.notes based on its id
  }

  render() {
    return (
      <div className='dashboard'>
        {console.log(this.state)}
        {console.log(this.props)}
        <NoteForm handleNoteCreate={this.addNote} />
        <NoteList notes={this.props.app.state.notes} />
      </div>
    );
  }
}