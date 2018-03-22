'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';
import LandingContainer from './component/landing-container';
import NoteFormContainer from './component/noteForm-container';
import NoteItemContainer from './component/noteItem-container';
import NoteListContainer from './component/noteList-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>

      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));