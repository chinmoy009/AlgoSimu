import React, { Component } from 'react';
import {HOME_SCREEN_CONTENT} from "../constants/homeScreenConstants";


class HomeScreen extends Component {
  render() {
    return (
      <div class="home-screen-content">
          <p>{HOME_SCREEN_CONTENT}</p>
      </div>
    )
  }
}

export default HomeScreen;
