import React, { Component } from 'react';
import {
  NavigationBar,
  LandingPageHeader,
  LandingPageBody
} from './components';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <NavigationBar />
        <LandingPageHeader />
        <LandingPageBody />
      </div>
    );
  }
}

export default App;
