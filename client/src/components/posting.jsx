import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Accordion, Card, Container, Col, Row } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading..</h2>;
  }

  return (
    <div>
      {posts.map(p => (
        <div class=" container">
          <Accordion className="cardWhole">
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                className="cardHeader"
                eventKey="0"
                id="cardHead"
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
    </div>
  );
};
export default Posts;
