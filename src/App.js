import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TodoIndex from './components/TodoIndex';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={TodoIndex} exact />
            <Route path="/todo/list" component={TodoIndex} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;