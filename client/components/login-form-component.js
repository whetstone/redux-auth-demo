import React, { PropTypes } from 'react';

export default class LoginFormComponent {

    static propTypes = {
        loginSubmitted: PropTypes.func.isRequired,
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { loginSubmitted } = this.props;

        loginSubmitted({
            username: this.refs.username.value,
            password: this.refs.password.value,
        })
    }

    render() {
        const { loginForm: { username, isLoading } } = this.props;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='username' id='username' defaultValue={username} ref='username' />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' ref='password' />

                <input type='submit' style={{textAlign: 'right',}} disabled={isLoading} />

                { isLoading ? <span>Loading...</span> : null }
            </form>
        );
    }

}
