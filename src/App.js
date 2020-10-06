import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Pages/components
import About from './components/About';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Navigation/Nav';
import SideDrawer from './components/Navigation/SideDrawer';
import Backdrop from './components/Navigation/Backdrop';

function App() {

  //sets state  of the sidedrawer
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const sideDrawerCloseHandler = () => {
    setSideDrawerOpen(false);
  };


  return (
    <BrowserRouter>
      <Switch >
        <div className="App">
          <div className='Nav_space'>
            <Nav drawerClickHandler={drawerToggleClickHandler} />
          </div>
          <SideDrawer sidedrawerClickHandler={sideDrawerCloseHandler} show={sideDrawerOpen} />
          {sideDrawerOpen && (<Backdrop click={sideDrawerCloseHandler} />)}
          <div className='App_space'>

            <Route path='/' component={About} exact />
            <Route path='/Projects' component={Projects} />
            <Route path='/Contact' component={Contact} />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
