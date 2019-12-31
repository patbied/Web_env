import React, { Component } from 'react';
import '../css/posts.scss';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Container, Col, Row } from 'react-bootstrap';
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
        {this.state.posts.map(p => (
          <div class=" container">
            <Accordion className="cardWhole">
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  className="cardHeader"
                  eventKey="0"
                >
                  <Container>
                    <Row>
                      <Col sm={8}>
                        <h1>
                          {p.title} - <span>Published {p.postDate}</span>
                        </h1>
                        <h3>By {p.author}</h3>
                        <div class="postTags d-sm-none d-none d-md-none d-lg-block">
                          <h4>Tags:</h4>
                          {p.tags.map(tag => (
                            <span class="cardTag">{tag} &nbsp;</span>
                          ))}
                        </div>
                      </Col>
                      <Col sm={4}>
                        <h1>Rating</h1>
                        <h3>Average rating of {p.rating}/5</h3>
                      </Col>
                    </Row>
                  </Container>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="cardBody">
                    <p>{p.content}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        ))}
        ;
      </React.Fragment>
    );
  }
}

export default posts;
