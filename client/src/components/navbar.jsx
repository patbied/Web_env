import React, { Component } from 'react';
import '../css/nav.scss';
import { Link, NavLink } from 'react-router-dom';
import 'react-bootstrap';
import $ from 'jquery';

class Navbar extends Component {
  state = {};

  componentDidMount() {
    $(window).scroll(function() {
      var nav = $('#navbarr');
      var top = 100;
      if ($(window).scrollTop() >= top) {
        nav.addClass('down');
      } else {
        nav.removeClass('down');
      }
    });
  }

  render() {
    return (
      <nav id="navbarr" className="navbar sticky-top navbar-expand-sm ">
        <NavLink to="/" class="navbar-brand">
          Web_Env
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Create post
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="nav-link--active"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className="nav-link"
                activeClassName="nav-link--active"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
