import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action-creators';
import LoginFormComponent from '../components/login-form-component';

@connect(state => ({
    loginForm: state.loginForm,
}))
export default class LoginFormContainer {

    render() {
        const { dispatch, loginForm } = this.props;

        return (
            <LoginFormComponent loginForm={loginForm} {...bindActionCreators(actionCreators, dispatch)} />
        );
    }

}
