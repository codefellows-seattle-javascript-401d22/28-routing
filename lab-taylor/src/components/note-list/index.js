'use strict';

import React from 'react';
import NoteForm from '../noteform';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <section className='note-list'>
        <ul>
          {this.props.notes.map(item => 
            
            <li key={item.id}>
              <NoteItem
                content={item.content}
              />
            <button onClick={() => this.props.removeNote(item)}>X</button>
              

            <NoteForm 
            note={item}
            submitTitle='Update Note'
            handleSubmit={(note) => {
              note.id = item.id;
              this.props.updateNote(note);
            }} />
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default NoteList;
        