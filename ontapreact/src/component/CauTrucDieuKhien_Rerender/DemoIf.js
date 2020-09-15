import React, { Component } from "react";

export default class DemoIf extends Component {
  constructor(props) {
    super(props);

    // this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thay đổi bởi một sự kiện nào đó
    // của Component
    this.state = {
      isLogin: false,
      userName: "",
    };
  }
  // Thuộc tính
  // isLogin = false;
  // userName = "";

  login = () => {
    // Là phương thức kế thừa từ class Component, thay đổi giá trị state và gọi hàm render => render lại giao diện
    // Là phương thức bất đồng bộ
    this.setState(
      {
        isLogin: true,
        userName: "Sửu",
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state);
  };
  logout = () => {
    // Là phương thức kế thừa từ class Component, thay đổi giá trị state và gọi hàm render => render lại giao diện
    // Là phương thức bất đồng bộ
    this.setState(
      {
        isLogin: false,
        userName: "",
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state);
  };
  // Phương thức
  render() {
    this.userName = "Sửu";
    return (
      <div className="container">
        {this.state.isLogin ? (
          <div>
            Hello {this.userName}
            <button className="btn btn-danger" onClick={this.logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-primary" onClick={this.login}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}
