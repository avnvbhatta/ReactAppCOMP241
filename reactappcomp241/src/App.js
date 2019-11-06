import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './Components/Home';

function onBtnClick(){
  <Link to="/insert/your/path/here" className="btn btn-primary">hello</Link>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App For COMP241
        </p>
        <Route path="/insert/your/path/here" component={YourComponent} /> 
        <button className="startButton" onClick={onBtnClick}>Click To Get Started</button>
      </header>
    </div>
  );
}

export default App;
