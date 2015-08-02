import React from 'react';

export default class HomeComponent {

  render() {
    const { sessionDeleted, sessionUpdated } = this.props;

    return (
      <div>
        Welcome, authenticated user!

        <button onClick={sessionDeleted}>Log Out</button>
        <button onClick={sessionUpdated}>Update Session</button>
      </div>
    );
  }

}
