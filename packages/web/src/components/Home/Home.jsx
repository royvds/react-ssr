import React from 'react';
import { window } from 'ssr-window';

export default class Home extends React.Component {
  render() {
    console.log('Home Page!');
    console.log(window);
    return (
      <>
        <h4>This is the HOME page</h4>
        <p>Your app is now running!</p>
      </>
    );
  }
}
