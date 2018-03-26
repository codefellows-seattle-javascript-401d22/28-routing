'use strict';

import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: '', 
        content: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.handleAddNote(this.state)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>

          <input 
            name='title'
            type='text'
            placeholder='add title'
            value={this.state.title}
            onChange={this.handleChange} />
          
          <input
            name='content'
            type='text'
            placeholder='add content'
            value={this.state.content}
            onChange={this.handleChange} />

          <button type='submit'>add note</button>
          
        </form> 
      )
    }
  }

  export default NoteForm;