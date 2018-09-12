import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    /* jshint ignore:start */ // JSX is not supported
    return (
    <div className="App">
        Weather App (REACT)!
        <WeatherLocation></WeatherLocation>
      </div>
    );
    /* jshint ignore:end */
  }
}

export default App;
