'use strict';

import './_noteitem.scss';
import React from 'react';
import NoteForm from '../noteform';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: this.props.content,
      noteId: this.props.noteId,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(note){
    this.props.handleUpdateNote(note);
  }

  handleDelete(e){
    this.props.handleDeleteNote(this.state.noteId);
  }

  render(){
    return (
      <li key={this.props.n} data={this.props.noteId} className='noteitem'>
        { !this.state.editing ?
          <div onClick={() => this.setState({editing: true})}>
            <p>{this.props.content}</p>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
          :
          <NoteForm 
            note={this.state.content}
            noteId={this.state.noteId}
            handleNote={this.handleSubmit}
            buttonTitle='update note' />
        }
      </li>
    )
  }
}

export default NoteItem;