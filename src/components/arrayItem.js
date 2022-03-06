import React, { Component } from 'react';
import  '../styles/arrayStyle.css';

class ArrayItem extends Component {
  constructor(props) {
      super(props);
  }

  static getDerivedStateFromProps(props, state) {
      return {
          content: props.content
      }
  }
  render() {
    return (
      <div class="array-item">{this.state.content}</div>
    )
  }
}

export default ArrayItem;
