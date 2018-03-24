'use strict';

import React from 'react';
import uuid from 'uuid';

import NavBar from '../navbar/index.js';
import NoteForm from '../noteform/index.js';
import NoteList from '../notelist/index.js';

class Dashboard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      notes: [],
      string: 'hi'
    }
    
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
    }
  }

  addNote(title, content) {
    let note = {
      editing: false,
      completed: false,
      title: title,
      content: content,
      id: uuid()
    };

    this.setState({string: 'suppp'});

    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  removeNote(id) {
    this.setState(state => ({
      notes: state.notes.filter(item => {
        return item.id !== id;
      })
    }));
  }

  render() {
    return(
      <section>
        <NavBar />
        <NoteForm addNote={this.addNote} />
        <NoteList notes={this.state.notes} removeNote={this.removeNote}/>
      </section>
    )
  }
}

export default Dashboard;