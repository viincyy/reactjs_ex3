import React, { Component } from "react";

export default class SinhVien extends Component {
  // Thuộc tính hoTen, lop thuộc class SinhVien
  hoTen = "NTS";
  lop = "FE42";
  tenTrungTam = "Cybersoft";

  renderThongTinSV = () => {
    return (
      <ul>
        <li>Ho Ten: {this.hoTen}</li>
        <li>Lop: {this.lop}</li>
        <li>Trung Tam: {this.tenTrungTam}</li>
      </ul>
    );
  };

  render() {
    // // Biến
    // const tenTrungTam = "Cybersoft";
    return <div className="container">{this.renderThongTinSV()}</div>;
  }
}
