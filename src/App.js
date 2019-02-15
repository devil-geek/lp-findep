import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './containers/Home/Home'
import Forms from './containers/Forms/Forms';
import './mq.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>   
             <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/datos' component={Forms} />
               
               </Switch>  
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
