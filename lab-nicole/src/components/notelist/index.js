'use strict';

import React from 'react';
import NoteItem from '../noteitem/index.js';

class NoteList extends React.Component {
  render() {
    return(
      <section className='note-list'>
        <ul>
          {this.props.notes.map( item => 
            <NoteItem note={item} key={item.id} updateNote={this.props.updateNote} editNote={this.props.editNote} app={this.props.app} removeNote={this.props.removeNote}/>
          )}
        </ul>
      </section>
    )
  }
}

export default NoteList;