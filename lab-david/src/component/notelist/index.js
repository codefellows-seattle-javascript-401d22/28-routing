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
        id={note.id}/>
    })
  }

  deleteNote(id){
    if(this.props.app.state.notes.length > 1){
      let newNotes = this.props.app.state.notes.filter(note => note.id !== id);
      this.props.app.setState(state => ({notes: newNotes}));
    } else {
      this.props.app.setState(state => ({notes: []}));
    }
  }

  updateNote(id, content){
    this.props.app.setState(state => {
      state.notes.forEach(note => {
        if(note.id === id){
          note.content = content;
        }
      });
      return state;
    })
  }
  
  render(){
    const displayList = this.displayNoteList();
    return (
      <div className='notelist'>
        <ul>{displayList}</ul>
      </div>
    )
  }
}

export default NoteList;