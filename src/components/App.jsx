import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.defaultCounter
    };

    let i = props.defaultCounter;
    setInterval(() => {
      this.setState({
        counter: i++
      });
    }, 1000);
  }

  render() {
    return (
      <div>{this.state.counter}</div>
    )
  }
}
