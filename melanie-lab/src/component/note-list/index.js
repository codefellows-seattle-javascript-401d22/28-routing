'use strict';

import './_note-list.scss';
import React, { Component } from 'react';
import NoteItem from '../note-item';
import NoteUpdateForm from '../note-update-form';
import Modal from '../modal';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  // got a lot of modal help from: https://daveceddia.com/open-modal-in-react/
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className='note-list'>
        {this.props.notes.length >= 1 ? 
          <section>
            <ul>
              {this.props.notes.map((note) => {
                return (
                  <li key={note.id}>
                    <NoteItem 
                      title={note.title}
                      content={note.content} 
                    />
                    <button onClick={this.toggleModal}>update</button>
                    <button className='remove-button' onClick={() => this.props.removeNote(note)}>X</button>
                      
                    <Modal show={this.state.showModal} onClose={this.toggleModal}>
                      <NoteUpdateForm
                        content={note}
                        submitTitle='update note'
                        handleSubmit={updatedNote => {
                          updatedNote.id = note.id;
                          this.props.updateNote(updatedNote);
                        }}
                      />
                    </Modal>
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