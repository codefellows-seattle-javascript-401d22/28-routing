'use strict';

import './dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteForm from '../noteform';
import NoteList from '../notelist';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
    this.getApp = this.getApp.bind(this);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  createNote(note){
    note.id = uuid();
    this.setState(state => ({notes: [...state.notes, note]}));
  }

  render(){
    return (
      <section className='dashboard'>
        <NoteForm handleCreateNote={this.createNote} />
        <NoteList app={this.getApp()} />
      </section>
    )
  }
}