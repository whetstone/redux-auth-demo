import React from 'react';

export default class HomeComponent {

  render() {
    const { tokenDeleted } = this.props;

    return (
      <div>
        Welcome, authenticated user!

        <button onClick={tokenDeleted}>Log Out</button>
      </div>
    );
  }

}
