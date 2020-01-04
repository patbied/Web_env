import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/pagination.scss';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <span className="pagination">
        {pageNumbers.map(number => (
          <span key={number}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className="page-link paginationButtons"
            >
              {number}
            </a>
          </span>
        ))}
      </span>
    </Nav>
  );
};

export default Pagination;
