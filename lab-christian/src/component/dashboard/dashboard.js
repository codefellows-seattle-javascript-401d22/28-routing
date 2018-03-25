'use strict';

import React from 'react';
import NoteForm from '../noteform/noteform';
// import NoteItem from '';
// import NoteList from '';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote(note) {
    this.setState((prevState) => {
      return {notes: [...prevState.notes, note]};
    });
  }

  render() {
    console.log('__STATE__: ', this.state)
    return (
      <div className="dashboard">
        <p>Dashboard</p>
        <NoteForm handleNoteCreate={this.addNote}/>
      </div>
    )
  }
}

export default Dashboard;