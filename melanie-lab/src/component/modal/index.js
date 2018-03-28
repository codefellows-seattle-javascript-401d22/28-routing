'use strict';

import './_modal.scss';
import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <section className='modal'>
          <div>
            {this.props.children}
            <button className='modal-button' onClick={this.props.onClose}>cancel</button>
          </div>
        </section>
      );
    }
  }
}