'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './component/landing';
import Dashboard from './component/dashboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
    this.getApp = this.getApp.bind(this);
  }

  render(){
    return (
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