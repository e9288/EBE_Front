import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './component/MenuBar/MenuBar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Intro from 'component/Content/Intro';
import Home from 'component/Content/Home';
import Chat from 'component/Content/Chat';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
