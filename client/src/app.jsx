import React, { Component } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import CreatePost from './components/createPost.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  state = {
    title: null,
    content: null,
    author: null,
    isPosted: false
  };
  passData = data => {
    fetch('/api/posts', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      })
    });

    this.setState({ author: '' });
    this.setState({ title: '' });
    this.setState({ content: '' });
    this.setState({ isPosted: true });
  };

  changeDataHandler = event => {
    if (event.target.name == 'Title') {
      this.setState({ title: event.target.value });
    }
    if (event.target.name == 'Content') {
      this.setState({ content: event.target.value });
    }
    if (event.target.name == 'Author') {
      this.setState({ author: event.target.value });
    }
  };
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
            <Route
              path="/createPost"
              render={routeProps => (
                <CreatePost
                  {...routeProps}
                  passData={this.passData}
                  author={this.state.author}
                  title={this.state.title}
                  content={this.state.content}
                  changeDataHandler={this.changeDataHandler}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
