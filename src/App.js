import React, { Component } from 'react';
import './App.css';

/* import component Mobeye */
import { Header } from './components/header/header';
import Map from './containers/map/map';
import List from './containers/list/list';

export default class App extends Component {
     render() {
          return (
              <div className="App">
                   <Header/>
                   <List/>
                   <Map/>
              </div>
          );
     }
}
