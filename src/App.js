import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './vegeLogo.png';

import "bootstrap/dist/css/bootstrap.min.css";
import adminIndex from './components/adminIndex';
import adminAbout from './components/adminAbout';
import farmerNew from './components/adminAboutFarmerNew';
import farmerEdit from './components/adminAboutFarmerEdit';
import farmerDelete from './components/adminAboutFarmerDelete';
import sgsNew from './components/adminAboutSgsNew';
import sgsDelete from './components/adminAboutSgsDelete';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <header className='ms-5'>
        <a href='/'><img src={logo} style={{height: '70px', position: 'fixed', top: '30px', zIndex: '2'}} className='img-fluid' alt='logo'/></a>
      </header>
        <div>
          <Switch>
            <Route path="/" component={adminIndex} exact />
            <Route path="/admin/index" component={adminIndex} exact />
            <Route path="/admin/about" component={adminAbout} exact />
            <Route path="/admin/farmer/new" component={farmerNew} exact />
            <Route path="/admin/farmer/edit/:id" component={farmerEdit} exact />
            <Route path="/admin/farmer/delete/:id" component={farmerDelete} exact />
            <Route path="/admin/sgs/new" component={sgsNew} exact />
            <Route path="/admin/sgs/delete/:id" component={sgsDelete} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;