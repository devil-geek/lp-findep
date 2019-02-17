import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './containers/Home/Home'
import Forms from './containers/Forms/Forms';
import Finish from './containers/Finish/Finish';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/response' component={Finish} />
            <Route exact path='/datos/:online?' component={Forms} />
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
