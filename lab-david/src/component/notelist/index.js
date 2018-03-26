'use strict';

import './_notelist.scss';
import React from 'react';

import NoteItem from '../noteitem';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.displayNoteList = this.displayNoteList.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  displayNoteList(){
    return this.props.app.state.notes.map((note, n) => {
      return <NoteItem 
        handleDeleteNote={this.deleteNote} 
        handleUpdateNote={this.updateNote}
        key={n}
        content={note.content} 
        noteId={note.noteId}/>
    })
  }

  deleteNote(id){
    if(this.props.app.state.notes.length > 1){
      let newNotes = this.props.app.state.notes.filter(note => note.noteId !== id);
      this.props.app.setState(state => ({notes: newNotes}));
    } else {
      this.props.app.setState(state => ({notes: []}));
    }
  }

  updateNote(noteUpdate){
    this.props.app.setState(prevState => {
      let newState = {
        notes: [],
      }
      console.log('noteUpdate', noteUpdate);
      prevState.notes.map(note => {
        if(note.noteId === noteUpdate.noteId){
          note.content = noteUpdate.content;
        }
        newState.notes.push(note);
      });
      console.log('newState', newState);
      return newState;
    })
  }
  
  render(){
    const displayList = this.displayNoteList();
    return (
      <div className='notelist'>
        <h2>notes.</h2>
        <ul>{displayList}</ul>
      </div>
    )
  }
}

export default NoteList;