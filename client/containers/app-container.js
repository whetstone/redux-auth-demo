import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../action-creators';
import { connect } from 'react-redux';

import LoginFormComponent from '../components/login-form-component';

function select(state) {
  return {
    user: state.user,
    loginForm: state.loginForm,
  };
}

class AppContainer {

  constructor(props) {
      const { dispatch } = props;
      dispatch(actionCreators.applicationLoaded());
  }

  render() {
    const { dispatch, user, loginForm, children } = this.props;

    const headerBlock = user.authenticated ?
      <h1>Logged in as: {user.username}</h1> :
      <h1>Not logged in.</h1>;

    const contentBlock = user.authenticated ?
      children :
      <LoginFormComponent loginForm={loginForm} {...bindActionCreators(actionCreators, dispatch)} />;

    return (
      <section>
        <header>
          {headerBlock}
        </header>

        <section>
          {contentBlock}
        </section>
      </section>
    );
  }
}

export default connect(select)(AppContainer);