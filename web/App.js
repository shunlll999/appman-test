import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventDispatcher } from './actions';

import LoginPanel from './components/LoginPanel';


class App extends React.Component {
  _actionSignIn(data) {
    this.props.signIn(data);
  }

  render() {
    return (
      <div className="app">
        <LoginPanel actionSignIn={this._actionSignIn.bind(this)} checkLogin={this.props.member}/>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    signIn: EventDispatcher.signIn,
  }, dispatch);
};

const stateToProps = (state) => {
  return {
    member: state.member
  };
};

export default connect(stateToProps, dispatchToProps)(App);