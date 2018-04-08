'use strict';

import React from 'react';
import NavBar from '../navbar/index.js'

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <NavBar/>
        <p>Can create to do list.</p>
      </div>
    );
  }
}

export default Landing;