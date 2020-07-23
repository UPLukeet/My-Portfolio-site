import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Pages/components
import About from './components/About';
import Webapps from './components/webApps'
import Game from './components/Game'
import Adobe from './components/Adobe'
import Nav from './components/Navigation/Nav';
import SideDrawer from './components/Navigation/SideDrawer';
import Backdrop from './components/Navigation/Backdrop';

function App() {

  //sets state  of the sidedrawer
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const sideDrawerCloseHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className='Nav_space'>
          <Nav drawerClickHandler={drawerToggleClickHandler} />
        </div>
        <SideDrawer sidedrawerClickHandler={sideDrawerCloseHandler} show={sideDrawerOpen} />
        {sideDrawerOpen && (<Backdrop click={sideDrawerCloseHandler} />)}
        <div className='App_margin' />
        <div className='App_space'>
          <Switch >
            <Route path='/' component={About} exact />
            <Route path='/web-apps' component={Webapps} />
            <Route path='/game' component={Game} />
            <Route path='/adobe' component={Adobe} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
