'use strict';

import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../noteform';
import NoteList from '../notelist';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  createNote(note){
    note.noteId = uuid();
    let {app} = this.props;
    console.log('createNoteId:', note.noteId);
    app.setState(state => ({
      notes: state.notes.concat([note])}));
  }

  render(){
    return (
      <section className='dashboard'>
        <h1>note keeper</h1>
        <h2>create a note.</h2>
        <NoteForm handleNote={this.createNote} buttonTitle='add note'/>
        <NoteList app={this.props.app} />
      </section>
    )
  }
}

export default Dashboard;