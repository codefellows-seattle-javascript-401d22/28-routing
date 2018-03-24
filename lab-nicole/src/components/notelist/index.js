'use strict';

import React from 'react';
import NoteItem from '../noteitem/index.js';

class NoteList extends React.Component {
  render() {
    return(
      <section className='note-list'>
        <ul>
          {console.log('props in notelist', this.props.notes)}
          {this.props.notes.map( item => 
            <NoteItem note={item} key={item.id} removeNote={this.props.removeNote}/>
          )}
        </ul>
      </section>
    )
  }
}

export default NoteList;