'use strict';

import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../noteform';
import NoteList from '../note-list';

let renderIf = (test, component) => test ? component : undefined;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: true
    }
    
    this.removeNote = this.removeNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    let {app} = this.props;
    app.setState( prevState => ({
      notes: [...prevState.notes, note],
    }));
  }

  updateNote(note) {
    let {app} = this.props;
    app.setState( prevState => ({
      notes: prevState.notes.map(item => {
        return item.id === note.id ? note : item
      })
    }));
  }

  removeNote(note) {
    let {app} = this.props;
    app.setState( prevState => ({
      notes: prevState.notes.filter( item => {
        return item.id !== note.id;
      })
    }));
  }

  

  render() {

    
    let {app} = this.props;
    
    return(
      <section>
        <NoteForm 
          handleSubmit={this.addNote}
          submitTitle='Add Note'
        />

        <NoteList 
          removeNote={this.removeNote}
          updateNote={this.updateNote}
          notes={app.state.notes}
        />

      </section>
    )
  }
}

export default Dashboard;