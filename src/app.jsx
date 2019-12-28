import React, { Component } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
