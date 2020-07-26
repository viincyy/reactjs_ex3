import React, { Component } from "react";
import Child from "./child";
import Pure from "./pure";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Cybersoft"
    };

    /**
     * constructor chỉ chạy 1 lần duy nhất
     */
    console.log("constructor");
  }

  componentDidMount() {
    /**
     * chỉ chạy 1 lần duy nhất
     * - goi API
     */
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(nextProps, nextState);
  //     if (nextState.username === "Nguyen") {
  //       return false;
  //     }
  //     return true;
  //   }

  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3 className="title">LifeCycle</h3>
        <p>{this.state.username}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              username: "Hao"
            });
          }}
        >
          Click
        </button>
        <Child username={this.state.username} />
        <Pure />
      </div>
    );
  }
}
