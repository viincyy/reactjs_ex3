import React, { Component } from "react";
import data from "./data.json";

export default class BaitapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data
    };
  }

  renderHTML = () => {
    /**
     * duyet mang
     * tra ve card-bootstrap
     * renderingElment show title, img, des
     */
  };

  render() {
    return (
      <div>
        <h3 className="title">* BaitapList</h3>
      </div>
    );
  }
}
