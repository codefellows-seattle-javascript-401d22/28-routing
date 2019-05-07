'use strict';

import React from 'react';

import NoteItem from '../noteitem/noteitem';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes() {
    return this.props.notes.map((item, i) => {
      return(
        <NoteItem title={item.title} content={item.content} id={item.id} removeNote={this.props.removeNote} updateNote={this.props.updateNote}/>
      );
    });
  };

  render() {
    return (
      <div className="notelist">
        <ul>
          {this.renderNotes()}
        </ul>
      </div>
    );
  };
};

export default NoteList;