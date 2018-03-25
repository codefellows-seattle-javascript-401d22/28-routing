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
    this.updateNote = this.updateNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
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

  editNote(id) {
    this.setState(state => {
      notes: state.notes.map(note => {
        return note.id === id ? note.editing = true : note.editing = false;
      })
    }, () => {
      console.log(this.state.notes);
    })
  }

  updateNote(_note) {
    this.setState(state => ({
      notes: state.notes.map(note => {
        console.log('note.id', note.id);
        console.log('_note.id', _note.id);
        return note.id === _note.id ? note : _note;
      })
    }));
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
        <NoteList notes={this.state.notes} app={this.getApp} editNote={this.editNote} updateNote={this.updateNote} removeNote={this.removeNote}/>
      </section>
    )
  }
}

export default Dashboard;