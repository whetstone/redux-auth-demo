import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../action-creators';
import LoginFormComponent from '../components/login-form-component';

@connect(state => state)
export default class LoginFormContainer {

    render() {
        const { dispatch } = this.props;

        return (
            <LoginFormComponent {...bindActionCreators(actionCreators, dispatch)} />
        );
    }

}
