'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing/index.js';
import Dashboard from './components/dashboard/index.js';

class App extends React.Component {
  render() {
    return(
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));