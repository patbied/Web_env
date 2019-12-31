import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/forms.scss';
class registerPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="formBox">
          <h1 className="formTitle">Register</h1>
          <form>
            <div class="formGroup">
              <label for="firstName">First Name</label>
              <br></br>
              <input className="formForm" type="text" id="firstName"></input>
            </div>
            <div class="formGroup">
              <label for="lastName">Last Name</label>
              <br></br>
              <input className="formForm" type="text" id="lastName"></input>
            </div>
            <div class="formGroup">
              <label for="username">Username</label>
              <br></br>
              <input className="formForm" type="text" id="username"></input>
            </div>
            <div class="formGroup">
              <label for="password">Password</label>
              <br></br>
              <input className="formForm" type="password" id="password"></input>
            </div>
            <div class="formGroup">
              <span>
                Already have an account?
                <Link to="/login">
                  <span> Log in.</span>
                </Link>
              </span>
            </div>
            <div class="formGroup">
              <button className="formSubmit" type="submit">
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default registerPage;
