import React from 'react';

export default class HomeComponent {

  render() {
    const { tokenDeleted, user: { username } } = this.props;

    return (
      <div>
        Welcome, authenticated user: {username}!

        <button onClick={tokenDeleted}>Log Out</button>
      </div>
    );
  }

}
