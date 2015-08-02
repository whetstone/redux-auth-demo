import React from 'react';

export default class HomeComponent {

  render() {
    const { tokenDeleted, tokenUpdated } = this.props;

    return (
      <div>
        Welcome, authenticated user!

        <button onClick={tokenDeleted}>Log Out</button>
        <button onClick={tokenUpdated}>Update token</button>
      </div>
    );
  }

}
