import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/createPost.scss';
import { PromiseProvider } from 'mongoose';
const createPost = props => {
  return (
    <Container className="createPostBox">
      <h1 className="createPostTitle">Title</h1>
      <input
        className="createPostInput"
        type="text"
        name="Title"
        value={props.title}
        onChange={props.changeDataHandler}
      ></input>
      <h1 className="createPostTitle">Content</h1>
      <textarea
        rows="5"
        cols="25"
        className="createPostInput"
        type="text"
        name="Content"
        value={props.content}
        onChange={props.changeDataHandler}
      ></textarea>
      <h1 className="createPostTitle">Author</h1>
      <input
        className="createPostInput"
        type="text"
        name="Author"
        value={props.author}
        onChange={props.changeDataHandler}
      ></input>
      <br></br>
      <button
        className="createPostButton"
        onClick={props.passData}
        type="submit"
      >
        <span>Post</span>
      </button>
    </Container>
  );
};

export default createPost;
