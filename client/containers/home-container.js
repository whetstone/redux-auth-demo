import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action-creators';
import Home from '../components/home-component';

function select(state) {
  return {
    user: state.user,
  };
}

class HomeContainer {

  render() {
    const { dispatch, user } = this.props;

    return (
      <Home user={user} {...bindActionCreators(actionCreators, dispatch)} />
    );
  }

}

export default connect(select)(HomeContainer);