import React, { Component } from "react";

export default class Product extends Component {
  // Thuộc tính

  // Phương thức
  render() {
    // Nội dung thẻ định nghĩa trong hàm render
    return (
      <div className="card text-white bg-primary">
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    );
  }
}
