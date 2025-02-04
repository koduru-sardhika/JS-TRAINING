import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        {/* Button that calls the fun function passed as a prop */}
        <button onClick={() => this.props.fun()}>Click Here</button>
      </div>
    );
  }
}

export default Child;
