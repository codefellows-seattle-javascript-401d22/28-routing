'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '../src/component/landing/landing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Landing} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
export default App;