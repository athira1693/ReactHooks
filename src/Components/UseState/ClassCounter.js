import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        Counter : {this.state.counter}
        <br /> <button onClick={this.incrementCounter}> Increment</button>
      </div>
    );
  }
}

export default ClassCounter;
