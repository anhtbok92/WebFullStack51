import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // initial value for number : Khởi tạo giá trị đầu tiên cho state
    this.state = { number: 1 };
  }

  add() {
      this.setState({
          number: this.state.number + 1
      });
  }

  minus() {
      this.setState({
          number: this.state.number - 1
      });
  }

  render() {
    return (
        <div>
          Tính năng tăng giảm số
          <h3>{this.state.number}</h3>
          <button onClick={() => this.add()}>Tăng</button>
          <button onClick={() => this.minus()}>Giảm</button>
        </div>
    )
  }
}
export default App;
