import React from 'react';

export default class LoginForm {

    handleFormSubmit(e) {
        e.preventDefault();
        console.log('submitted');
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
