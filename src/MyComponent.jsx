import React, { Component } from 'react';
import Typed from 'typed.js';

class MyComponent extends Component {
  componentDidMount() {
    const options = {
      strings: ['passionate', 'curious to learn', 'creative'],
      typeSpeed: 100,
    };

    // Initialize Typed.js
    const typed = new Typed(this.el, options);
  }

  render() {
    return (
      <div>
        <span
          ref={(el) => {
            this.el = el; // Create a reference to the DOM element where you want to display the typed text
          }}
        ></span>
      </div>
    );
  }
}

export default MyComponent;
