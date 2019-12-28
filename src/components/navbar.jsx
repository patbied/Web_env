import React, { Component } from 'react';
import '../css/nav.scss';
import { Link, NavLink } from 'react-router-dom';
import 'react-bootstrap';

class Navbar extends Component {
  state = {
    isTop: true
  };
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <nav
        className={this.state.isTop ? 'down' : 'up'}
        className="navbar sticky-top navbar-expand-lg "
      >
        <NavLink
          to="/"
          class="navbar-brand"
          activeClassName="navbar-brand--active"
        >
          Web_Env
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
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
