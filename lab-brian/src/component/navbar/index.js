'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li><Link to='/'> note keeper </Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;