'use strict';

import React from 'react';
import NoteForm from '';
import NoteItem from '';
import NoteList from '';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  addNote(note) {
    this.setState((prevState) => {
      return {notes: [...prevState.notes, note]};
    });
  }

  render() {
    return (
      <div className="dashboard">
        <p>Dashboard</p>
      </div>
    )
  }
}

export default Dashboard;