import React, { Component} from 'react';
import logo from '../logo.svg';

class LoginPanel extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  _signIn() {
    const { email, password } = this.state;
    this.props.actionSignIn({email, password});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="login-panel">
        <img className="login-panel__brand" src={logo} alt="logo"/>
        <div className="login-panel__form-container">
          <div className="login-panel__form-container--label-title">E-mail address</div>
          <input className="login-panel__form-container--input-form" onChange={this.onEmailChange} type="text" />
          <div className="login-panel__form-container--label-title">Password</div>
          <input className="login-panel__form-container--input-form" onChange={this.onPasswordChange} type="password"/>
          <div className="signin-status">E-mail or password is incorrect</div>
          <button className="login-panel__signin" type="button" onClick={this._signIn.bind(this)}>SIGN IN</button>
          <div className="login-panel__footer">
            <div><a href="#">Forgot password?</a></div>
            <div><a href="#">Create a new account</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPanel;