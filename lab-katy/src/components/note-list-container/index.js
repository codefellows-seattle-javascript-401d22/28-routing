'use strict';

import React from 'react';

import NoteItem from '../note-item';
import NoteUpdateForm from '../note-update-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='notes-list'>
        <h1>notes.</h1>
        <ul> 
          {this.props.fuckMe.map((note, i) => //li key impt for diffing algorithm on the dom obj. INTERVIEW QUESTION
                <NoteItem note={note} removeNote={this.props.removeNote} key={i} app={this.props.app}/>
            )
          }
        </ul>
    </section>
    )
  }
}

export default NoteList;
