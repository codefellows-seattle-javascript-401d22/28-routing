'use strict';

import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='note-list'>
        {this.props.notes.length >= 1 ? 
          <section>
            <ul>
              {this.props.notes.map((note, i) => {
                return (
                  <li key={i}>
                    <NoteItem title={note.title} content={note.content} id={note.id}/>
                  </li>
                );
              }
              )}
            </ul>
          </section>
          :
          <h4> There are no notes! </h4>
        }
      </div>
    );
  }
}
export default NoteList;