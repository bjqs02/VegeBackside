import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './vegeLogo.png';

import "bootstrap/dist/css/bootstrap.min.css";
import adminIndex from './components/adminIndex';
import adminAbout from './components/adminAbout';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <header className='ms-5'>
        <a href='/'><img src={logo} style={{height: '70px', position: 'fixed', top: '30px'}} className='img-fluid' alt='logo'/></a>
      </header>
        <div>
          <Switch>
            <Route path="/" component={adminIndex} exact />
            <Route path="/admin/index" component={adminIndex} exact />
            <Route path="/admin/about" component={adminAbout} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;