import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My News</h1>
        </header>
        <News />
        <h3>Powered by NewsAPI.org</h3>
      </div>
    );
  }
}

export default App;
