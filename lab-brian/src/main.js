'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import LandingContainer from './component/landing-container';
// import NavbarContainer from './component/navbar-container';
import DashboardContainer from './component/dashboard-container';
// import NoteFormContainer from './component/noteForm-container';
// import NoteItemContainer from './component/noteItem-container';
// import NoteListContainer from './component/noteList-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCount: 0,
      todos: [],
    };
    this.getApp=this.getApp.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={LandingContainer} />
            <Route exact path='/dashboard' component={() => <DashboardContainer app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
// when you pass a property to a component to render it's a callback