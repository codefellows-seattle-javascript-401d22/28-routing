'use strict';

import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">about</a></li>
          <li><a href="/dashboard">create note</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;