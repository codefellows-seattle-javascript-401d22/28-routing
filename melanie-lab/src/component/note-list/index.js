// should display an <ul> of <NoteItem /> components

import './_note-list.scss';
import React, { Component } from 'react';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="results">
        {this.props.notes ? 
          <section>
            <ul>
              {console.log(this.props)}
              {this.props.notes.map((note, i) => {
                return (
                  <li key={i}>
                    <p>{note.title}</p>
                  </li>
                );
              }
              )}
            </ul>
          </section>
          :
          undefined
        }
        {/* {this.props.error ?
          <section>
            <h2>Womp womp. Please try searching again.</h2>
          </section>
          :
          undefined
        } */}
      </div>
    );
  }
}