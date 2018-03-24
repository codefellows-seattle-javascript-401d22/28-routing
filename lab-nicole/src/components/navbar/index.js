'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/dashboard'>Dashboard</Link></div>
      </nav>
    )
  }
}


export default NavBar;