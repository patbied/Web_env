import React, { Component } from 'react';
import Data from './dataa';
import '../css/posts.scss';

const DataPost = Data.Posts;

class posts extends Component {
  state = {};
  render() {
    return DataPost.map(d => (
      <div class=" container">
        <div className="displayPost">
          <h1 className="postTitle">
            {d.title} - <span className="postDate">Published {d.postDate}</span>
          </h1>
          <h3 className="postAuthor">By {d.author}</h3>
          <div class="postTags">
            <h4>Tags:</h4>
            {d.tags.map(tag => (
              <span>{tag} &nbsp;</span>
            ))}
          </div>
        </div>
        ß
      </div>
    ));
  }
}

export default posts;
