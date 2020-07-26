import React, { Component } from "react";

export default class Child extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  render() {
    console.log("render - child");
    return (
      <div>
        <h3 className="title">Child</h3>
      </div>
    );
  }
}
