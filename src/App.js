import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Pages/components
import About from './components/About';
import Nav from './components/Navigation/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Nav />
          <Route path='/' component={About} exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
