import React, { Component } from "react";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  // Thực hiện những tác vụ side effect
  // gọi API, addEventListener, setTimeout,...
  componentDidMount() {
    console.log("componentDidMount");
  }

  // Hàm này chạy sau khi state hoặc props thay đổi
  // Chạy sau khi render lại
  // Thực hiện gọi API, setState, ....
  // Lưu ý khi setState phải có điều kiện dừng
  // Nếu không sẽ bị lặp vô tận
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevState", prevState.count);
    console.log("state", this.state.count);

    // this.setState
  }

  render() {
    console.log("render", this.state.count);
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
