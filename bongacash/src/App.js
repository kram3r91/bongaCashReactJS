import React , { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from './pages/Index';
import Model from './pages/Model';
import Genders from './pages/Genders';
import Tags from './pages/Tags';
import Navigation from './components/header/nav';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/model" component={Model} />
          <Route path="/genders" component={Genders} />
          <Route path="/tags" component={Tags} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
