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
    this.setState({
      note: this.state.notes.filter( note => {
        note.id !== note.id;
      }),
    });
    // should have a bound removeNote(note) method that removes a note from state.notes based on its id
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>create a note.</h2>
        <NoteForm handleNoteCreate={this.addNote} />

        <h2>notes.</h2>
        <NoteList notes={this.props.app.state.notes} />
      </div>
    );
  }
}