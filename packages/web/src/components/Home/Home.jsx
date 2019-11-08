import React from 'react';
import { window } from 'ssr-window';

export default class Home extends React.Component {
  render() {
    // Without importing window from ssr-window you would get window is undefined error
    // Because window isn't available on the node server.
    console.log(window);
    return (
      <>
        <h4>This is the HOME page</h4>
        <p>Your app is now running!</p>
      </>
    );
  }
}
