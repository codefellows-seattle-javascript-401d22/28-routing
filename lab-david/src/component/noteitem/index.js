'use strict';

import './_noteitem.scss';
import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: this.props.content,
      id: this.props.id,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleUpdateNote(this.state.id, this.state.content);
  }

  handleDelete(e){
    this.props.handleDeleteNote(this.state.id);
  }

  render(){
    return (
      <li key={this.props.n} className='noteitem'>
        <form onSubmit={this.handleSubmit}>
          <p>{this.props.content}</p>
          <input name='content' type='text' value={this.state.content} onChange={this.handleChange} />
          <button type='submit'>Update</button>
          <button onClick={this.handleDelete}>Delete</button>
        </form>
      </li>
    )
  }
}

export default NoteItem;