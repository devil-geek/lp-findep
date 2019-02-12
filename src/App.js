import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './containers/Home/Home'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>          
          <Route exact path='/' component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
