import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import adminIndex from './components/adminIndex';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={adminIndex} exact />
            <Route path="/admin/index" component={adminIndex} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;