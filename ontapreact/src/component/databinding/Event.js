import React, { Component } from "react";

export default class Event extends Component {
  // Handle Show Messege
  handleShowMSG = (msg) => {
    alert(msg);
  };

  render() {
    let msg = "Hello Suu";
    return (
      <div className="container">
        {/* <button
          className="btn btn-success"
          onClick={this.handleShowMSG.bind(this, msg)}
        >
          Show Messege
        </button> */}
        <button
          className="btn btn-success"
          onClick={() => {
            this.handleShowMSG(msg);
          }}
        >
          Show Messege
        </button>
      </div>
    );
  }
}
