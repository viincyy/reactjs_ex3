import React, { Component } from "react";

export default class DemoIf extends Component {
  // Thuộc tính
  isLogin = true;
  userName = "";

  renderContent = () => {
    if (this.isLogin) {
      this.userName = "Sửu";
      return (
        <div>
          Hello {this.userName}
          <button className="btn btn-danger">Logout</button>
        </div>
      );
    }
    return (
      <div>
        <button className="btn btn-primary">Login</button>
      </div>
    );
  };
  // Phương thức
  render() {
    this.userName = "Sửu";
    return (
      <div className="container">
        {this.isLogin ? (
          <div>
            Hello {this.userName}
            <button className="btn btn-danger">Logout</button>
          </div>
        ) : (
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        )}
      </div>
    );
  }
}
