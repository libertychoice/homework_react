import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/Item/Item'
import {degus} from './data/items'

class App extends Component {

    constructor(props){
        super();
        this.state = {
            items: degus,

        }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Item items={this.state.items}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
