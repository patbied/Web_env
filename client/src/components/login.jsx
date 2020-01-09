import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/forms.scss';
class loginPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="formBox">
          <h1 className="formTitle">Login</h1>
          <form>
            <div class="formGroup">
              <label for="username">Email</label>
              <br></br>
              <input className="formForm" type="text" id="email"></input>
            </div>
            <div class="formGroup">
              <label for="password">Password</label>
              <br></br>
              <input className="formForm" type="password" id="password"></input>
            </div>
            <div class="formGroup">
              <p>Forgot your password?</p>
              <span>
                Don't have an account?
                <Link to="/register">
                  <span> Sign up.</span>
                </Link>
              </span>
            </div>
            <div class="formGroup">
              <button className="formSubmit" type="submit">
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default loginPage;
