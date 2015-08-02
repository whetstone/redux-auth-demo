import React from 'react';

export default class HomeComponent {

  render() {
    const { sessionDeleted } = this.props;

    return (
      <div>
        Welcome, authenticated user!

        <button onClick={sessionDeleted}>Log Out</button>
      </div>
    );
  }

}
