'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import LandingContainer from './components/landing-container';
import DashboardContainer from './components/dashboard-container';
import Navbar from './components/navbar-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      //anything else go here?
    }

    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    console.log(this.state);
    return(
      <main>
        <Navbar />
        <BrowserRouter>
          <section>
            <Route exact path='/' component={LandingContainer} />
            <Route exact path='/dashboard' component={() => <DashboardContainer app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
    ) 
  }
}

ReactDom.render(<App />, document.getElementById('root'));
