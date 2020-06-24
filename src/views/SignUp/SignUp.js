import React, { Component } from 'react';
import './signup.css';
// import ErrorCatcher from'./errorCatcher';
import { createUser, signInUser } from '../../actions/appActions';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryParams: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errorMessage: '',
      signInView: false,
      loginParams: {
        emailId: '',
        passwordId: ''
      }
    };
    this.createUser = this.createUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signInPage = this.signInPage.bind(this);
    this.signUpPage = this.signUpPage.bind(this);
    this.signIn = this.signIn.bind(this);
  };

  createUser () {
    let queryParams = this.state.queryParams;
    let errorMessage = this.state.errorMessage;
    let name = queryParams.name;
    let email = queryParams.email;
    let password = queryParams.password;
    let confirmPassword = queryParams.confirmPassword;
    if(password !== confirmPassword) {
      errorMessage = 'Password must match'
    }
    let parameters = {};
    parameters.name = name;
    parameters.email = email;
    parameters.password = password;

    this.setState({queryParams, errorMessage}, () => {
      if(errorMessage === '') {
        createUser(parameters).then((response) => {
          console.log(response);
          if(response.error === false) {
            console.log(response.error)
            localStorage.setItem('auth_token', response.data.auth_token);
            this.forceUpdate();
            // this.redirection();
          } else {
            swal(response.message);
            // alert(response.message);
            localStorage.setItem('auth_token', '');
          }
        });
      }
    });
  };

  handleChange = (name, e) => {
    let errorMessage = this.state.errorMessage;
    let value = e.target.value
    let queryParams = this.state.queryParams;
    // if(value !== null && value !== undefined && value.trim() !== '') {
    queryParams[name] = value;
    if(name !== 'email') {
      errorMessage = '';
    }
    this.setState({queryParams, errorMessage});
    // }
  };

  signInPage = () => {
    let signInView = this.state.signInView;
    signInView = true;
    this.setState({signInView});
  };

  signUpPage = () => {
    let signInView = this.state.signInView;
    signInView = false;
    this.setState({signInView});
  };

  signIn = () => {debugger
    let loginParams = this.state.loginParams;
    let parameters = {
      email: loginParams.emailId,
      password: loginParams.passwordId
    }
    signInUser(parameters).then((response) => {
      if(response.error === false) {
        console.log(response.error)
        localStorage.setItem('auth_token', response.data.auth_token);
        this.forceUpdate();
        // this.redirection();
      } else {
        swal(response.message);
        // alert(response.message);
        localStorage.setItem('auth_token', '');
      }
    });
  };

  loginParamChange = (name, e) => {
    let loginParams = this.state.loginParams;
    loginParams[name] = e.target.value;
    this.setState({loginParams});
  };

  render() {
    if(!!localStorage.getItem('auth_token')) {
      return (<Redirect to="/dashboard"/>);
    }
    return (
      this.state.signInView ?
        <div className="App">
          <div className="header">
            Error Logger
          </div>
          <div className="body">
            <input
              value={this.state.loginParams.emailId}
              type="text"
              className="form-control form-input"
              name="username"
              placeholder="Email"
              onChange={(value)=>{this.loginParamChange('emailId', value)}}
            ></input>
            <input
              value={this.state.loginParams.passwordId}
              type="password"
              className="form-control form-input"
              name="password"
              placeholder="Password"
              onChange={(value)=>{this.loginParamChange('passwordId', value)}}
            ></input>
            <button className="btn btn-success" name="signin" onClick={this.signIn}>SignIn</button>
            <button className="btn btn-link signin-button" name="signup" onClick={this.signUpPage}>SignUp</button>
          </div>
        </div>
        :
        <div className="App">
          <div className="header">
            Error Logger
          </div>
          <div className="body">
            <input
              value={this.state.email}
              type="text"
              className="form-control form-input"
              name="name"
              placeholder="Name"
              id="name"
              onChange={(value) => {
                this.handleChange('name', value)
              }}></input>
            <input
              value={this.state.email}
              type="text"
              className="form-control form-input"
              name="email"
              placeholder="Email"
              id="email"
              onChange={(value) => {
                this.handleChange('email', value)
              }}></input>
            <input
              value={this.state.password}
              type="password"
              className="form-control form-input"
              name="password"
              placeholder="Password"
              id="password"
              onChange={(value) => {
                this.handleChange('password', value)
              }}
            ></input>
            <input
              value={this.state.confirmPassword}
              type="password"
              className="form-control form-input"
              name="confirmPassword"
              placeholder="confirm Password"
              id="confirm-password"
              onChange={(value) => {
                this.handleChange('confirmPassword', value)
              }}
            ></input>
            <p className="error">{this.state.errorMessage}</p>
            <button className="btn btn-success signup-button" name="signUp" onClick={this.createUser}>SignUp</button>
            <button className="btn btn-link signin-button" name="signIn" onClick={this.signInPage}>SignIn</button>
          </div>
        </div>
    );
  }
}

export default SignUp;