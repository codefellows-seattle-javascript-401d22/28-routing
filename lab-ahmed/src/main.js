'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './component/landing/index.js';
import Dashboard from './component/dashboard/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/dashboard' component={() => 
              <Dashboard app={this.getApp()} />
            } />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));