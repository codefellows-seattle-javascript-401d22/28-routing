'use strict';

import React from 'react';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <section className='modal'>
          <main>
            {this.props.children}
            <button className='modal-button' onClick={this.props.onClose}>cancel</button>
          </main>
        </section>
      );
    }
  }
}
export default Modal;