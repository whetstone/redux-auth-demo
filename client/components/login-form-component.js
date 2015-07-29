import React, { PropTypes } from 'react';

export default class LoginFormComponent {

    static propTypes = {
        loginSubmitted: PropTypes.func.isRequired,
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { loginSubmitted } = this.props;

        loginSubmitted({
            username: 'test',
            password: 'test',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor='username'>Username</label>
                <input id='username' />

                <label htmlFor='password'>Password</label>
                <input id='password' />

                <input type='submit' />
            </form>
        );
    }

}
