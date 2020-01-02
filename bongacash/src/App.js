import React , { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from './pages/Index';
import Infinite from './pages/Infinite';
import Navigation from './components/header/nav';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/infinite" component={Infinite} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
