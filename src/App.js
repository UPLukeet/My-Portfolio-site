import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

//Pages/components
import About from './components/About'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route path='/' component={About} exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
