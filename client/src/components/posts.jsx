import React, { Component } from 'react';
import '../css/posts.scss';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
class posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }
  render() {
    return (
      <React.Fragment>
        <div class="container">
          {this.state.posts.map(p => (
            <div class=" container">
              <div className="displayPost">
                <h1 className="postTitle">
                  {p.title} -{' '}
                  <span className="postDate">Published {p.postDate}</span>
                </h1>
                <h3 className="postAuthor">By {p.author}</h3>
                <div class="postTags d-sm-none d-none d-md-none d-lg-block">
                  <h4>Tags:</h4>
                  {p.tags.map(tag => (
                    <span class="postTagsTag">{tag} &nbsp;</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </React.Fragment>
    );
  }
}

export default posts;
