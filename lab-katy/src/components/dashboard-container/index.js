'use strict';

import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../note-form';
import NoteList from '../note-list-container';


class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    this.props.app.setState( state => ({
      notes: [...state.notes, note]
    }));
  }

  removeNote(note) {
    let {app} = this.props;
    app.setState( prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      })
    }));
  }

  render() {
    console.log(this.props.app);
    return (
      <div className='dashboard-container'>
        <NoteForm handleAddNote={this.addNote} />
        <NoteList fuckMe={this.props.app.state.notes} removeNote={this.removeNote} app={this.props.app}/>
      </div>
    )
  }
}

export default DashboardContainer;