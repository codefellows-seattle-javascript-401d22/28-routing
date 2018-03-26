'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from './components/dashboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }

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

    return( 
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/dashboard' component= {() => <Dashboard app={this.getApp()} />} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
            
  
}

ReactDOM.render(<App />, document.getElementById('root'));