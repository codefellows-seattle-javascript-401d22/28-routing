'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <h1>note keeper</h1>
        <nav>
          <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/landing'>About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default NavBar;