import React, { Component } from 'react';
import '../css/posts.scss';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Container, Col, Row } from 'react-bootstrap';
import DisplayPost from './displayPost';
class posts extends Component {
  // constructor() {
  //   super();
  // this.state = {
  //    posts: []
  //  };
  // }

  // componentDidMount() {
  //  fetch('/api/posts')
  //    .then(res => res.json())
  //    .then(posts => this.setState({ posts }));
  // }
  render() {
    return (
      <React.Fragment>
        <DisplayPost />
      </React.Fragment>
    );
  }
}

export default posts;
