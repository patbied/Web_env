import React, { Component } from 'react';
import Posts from './posts';
class homepage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Posts />
      </React.Fragment>
    );
  }
}

export default homepage;
