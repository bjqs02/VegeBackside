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
import adminActivity from './components/adminActivity';
import activityNew from './components/adminActivityNew';
import activityEdit from './components/adminActivityEdit';
import activityDelete from './components/adminActivityDelete';

import adminOrder from './components/adminOrder';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <header className='ms-5'>
        <a href='/'><img src={logo} style={{height: '70px', position: 'fixed', top: '30px', zIndex: '2'}} className='img-fluid' alt='logo'/></a>
      </header>
        <div>
          <Switch>
            {/* 首頁 */}
            <Route path="/" component={adminIndex} exact />
            <Route path="/admin/index" component={adminIndex} exact />
            {/* 關於我們 相關路徑 */}
            <Route path="/admin/about" component={adminAbout} exact />
            <Route path="/admin/farmer/new" component={farmerNew} exact />
            <Route path="/admin/farmer/edit/:id" component={farmerEdit} exact />
            <Route path="/admin/farmer/delete/:id" component={farmerDelete} exact />
            <Route path="/admin/sgs/new" component={sgsNew} exact />
            <Route path="/admin/sgs/delete/:id" component={sgsDelete} exact />
            {/* 最新活動 相關路徑 */}
            <Route path="/admin/activity" component={adminActivity} exact />
            <Route path="/admin/activity/new" component={activityNew} exact />
            <Route path="/admin/activity/edit/:id" component={activityEdit} exact />
            <Route path="/admin/activity/delete/:id" component={activityDelete} exact />


            {/* 訂單管理 相關路徑 */}
            <Route path="/admin/order" component={adminOrder} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;