import React, { Component } from 'react';
import './App.css';
import Header from  './imports/Header'
import { Panel, Grid } from 'react-bootstrap';
import Panel1 from './imports/panel-1/panel1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Panel1 />
      </div>
    );
  }
}

export default App;
