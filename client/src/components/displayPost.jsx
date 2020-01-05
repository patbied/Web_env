import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './posting';
import Pagination from './pagination';
import { Container, Row, Col } from 'react-bootstrap';
const DisplayPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let res = await fetch('/api/posts');
      let json = await res.json();
      setPosts(json);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  //Get page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <React.Fragment>
      <Container>
        <div className="postTitles">
          <h1>Newest Posts</h1>
        </div>
        <Posts posts={currentPosts} loading={loading} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Container>
    </React.Fragment>
  );
};
export default DisplayPost;
