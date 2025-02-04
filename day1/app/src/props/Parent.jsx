import React, { Component } from 'react';
import Child from './child';

class Parent extends Component {
  // Define the fun1 function as a class method
  fun1 = () => {
    window.alert("after clicking the button");
  };

  render() {
    return (
      <div>
        {/* Passing fun1 function as a prop named 'fun' to the Child component */}
        <Child fun={this.fun1} />
      </div>
    );
  }
}

export default Parent;
