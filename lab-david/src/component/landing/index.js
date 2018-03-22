'use strict';

import './_landing.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='landing'>
        <h1>Welcome to Note Keeper!</h1>
        <p>Note Keeper is a simple and direct way to store notes for later.</p>
        <ul>
          <li>New Notes: Enter new note into space provided and press 'add note'</li>
          <li>Edit Notes: Edit the text in the text box below your note and press 'update'</li>
          <li>Delete Notes: Press the 'X' to the right of the desired note.</li>
        </ul>
      </div>
    )
  }
}

export default Landing;