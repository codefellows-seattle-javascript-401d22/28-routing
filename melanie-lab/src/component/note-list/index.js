'use strict';

import './_note-list.scss';
import React, { Component } from 'react';
import NoteItem from '../note-item';

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
          <h4>No notes found! You must be really productive.</h4>
        }
      </div>
    );
  }
}