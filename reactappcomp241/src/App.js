import React from 'react';
import './App.scss';
import Home from './Components/Home';
import Main from './Components/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {Main}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/main" component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;
