'use strict';

import React from 'react';
import NoteForm from '../noteform/noteform';
import NoteList from '../notelist/notelist';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.setState((prevState) => {
      return {notes: [...prevState.notes, note]};
    });
  }

  removeNote(id) {
    this.setState((prevState) => {
      return {notes: prevState.notes.filter((item) => {
        return item.id !== id;
      })
    }});
  }

  updateNote(id, title, content) {
    this.setState((prevState)=>{
      return {
        notes: prevState.notes.map((item) => {
          if (item.id === id) {
            return {id: id, title: title, content: content};
          } else {
            return item;
          }
        })
      }
    })
  }

  render() {
    console.log('__STATE__: ', this.state)
    return (
      <div className="dashboard">
        <p>Dashboard</p>
        <NoteForm handleNoteCreate={this.addNote}/>
        <NoteList notes={this.state.notes} removeNote={this.removeNote} updateNote={this.updateNote}/>
      </div>
    )
  }
}

export default Dashboard;