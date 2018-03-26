'use strict';

import './style/reset.scss';
import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from './component/dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCount: 0,
      todoDone: 0,
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
            {/* <Route exact path='/' component={LandingContainer} /> */}
            <Route exact path='/' component={() => <Dashboard app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
// when you pass a property to a component to render it's a callback