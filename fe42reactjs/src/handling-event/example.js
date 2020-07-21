import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  isLogin = false;
  username = "Nguyen";

  //   renderHTML = () => {
  //     if (this.isLogin) {
  //       return <p>Hello {this.username}</p>;
  //     } else {
  //       return <button className="btn btn-success">Login</button>;
  //     }
  //   };

  renderHTML = () => {
    // 1===2 ? "Dung" : "Sai"
    return this.isLogin ? (
      <p>Hello {this.username}</p>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  handleLogin = () => {
    this.isLogin = true;
  };

  render() {
    return (
      <div>
        <h3 className="title">* ExampleHandlingEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
