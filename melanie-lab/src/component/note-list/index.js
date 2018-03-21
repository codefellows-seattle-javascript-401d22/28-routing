// should display an <ul> of <NoteItem /> components

import './_note-list.scss';
import React, { Component } from 'react';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='note-list'>
        {this.props.notes.length >= 1 ? 
          <section>
            <ul>
              {console.log(this.props)}
              {this.props.notes.map((note, i) => {
                return (
                  <li key={i}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                  </li>
                );
              }
              )}
            </ul>
          </section>
          :
          <h4>Womp womp. No notes here.</h4>
        }
      </div>
    );
  }
}