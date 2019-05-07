import { BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react';
import Header from './components/Header'
import Routes from './routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
